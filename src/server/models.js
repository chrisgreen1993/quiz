import mongoose, { Schema } from 'mongoose';

const AnswerSchema = new Schema({
  questionId: { type: Schema.Types.ObjectId, ref: 'Question' },
  questionChoiceId: { type: Schema.ObjectId },
});

const ResponseSchema = new Schema({
  name: String,
  total: Number,
  answers: [AnswerSchema],
});

ResponseSchema.set('toJSON', { versionKey: false });

const ChoiceSchema = new Schema({
  text: String,
  points: Number,
});

const QuestionSchema = new Schema({
  text: String,
  choices: [ChoiceSchema],
});

QuestionSchema.set('toJSON', { versionKey: false });

const Response = mongoose.model('Response', ResponseSchema);
const Question = mongoose.model('Question', QuestionSchema);

export { Response, Question };
