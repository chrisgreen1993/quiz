import mongoose, { Schema } from 'mongoose';

const ChoiceSchema = new Schema({
  text: String,
  points: Number,
});

const QuestionSchema = new Schema({
  text: String,
  choices: [ChoiceSchema],
});

QuestionSchema.set('toJSON', { versionKey: false });

const AnswerSchema = new Schema({
  question: QuestionSchema,
  choice: ChoiceSchema,
});

const ResponseSchema = new Schema({
  name: String,
  answers: [AnswerSchema],
});

ResponseSchema.set('toJSON', { versionKey: false });

const Response = mongoose.model('Response', ResponseSchema);
const Question = mongoose.model('Question', QuestionSchema);

export { Response, Question };
