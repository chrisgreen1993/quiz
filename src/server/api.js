import { Router } from 'express';
// import createError from 'http-errors';
import { Response, Question } from './models';

const api = Router();


api.post('/responses', (req, res, next) => {
  const { name, answers } = req.body;
  const questionIds = answers.map(answer => answer.questionId);
  Question.find({ _id: { $in: questionIds } })
    .then(questions => {
      return questions.map((question, i) => {
        const choice = question.choices.id(answers[i].questionChoiceId);
        return { question, choice };
      });
    })
    .then(fullAnswers => Response.create({ name, answers: fullAnswers }))
    .then(response => res.json(response))
    .catch(err => next(err));
});

api.get('/responses/high-scores', (req, res, next) => {
  const aggregation = [
    { $project: { _id: 1, name: 1, answers: 1, total: { $sum: '$answers.choice.points' } } },
    { $sort: { total: -1 } },
  ];
  Response.aggregate(aggregation).exec()
    .then(responses => res.json(responses))
    .catch(err => next(err));
});

api.get('/questions', (req, res, next) => {
  Question.find({})
    .then(questions => res.json(questions))
    .catch(err => next(err));
});

export default api;
