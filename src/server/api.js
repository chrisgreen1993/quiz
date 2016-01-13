import { Router } from 'express';
import createError from 'http-errors';
import { Response, Question } from './models';

const api = Router();


api.post('/responses', (req, res, next) => {
  res.status(200).send();
});

api.get('/responses/high-scores', (res, req, next) => {
  res.status(200).send();
});

api.get('/questions', (req, res, next) => {
  Question.find({})
    .then(questions => res.json(questions))
    .catch(err => next(err));
});

export default api;
