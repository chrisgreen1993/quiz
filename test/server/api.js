import request from 'supertest';
import { expect } from 'chai';
import mongoose from 'mongoose';
import { Question, Response } from '../../src/server/models';
import { start } from '../../src/server';

describe('api', () => {
  let server;
  before(() => {
    server = start('test');
  });
  beforeEach(done => {
    const choices = [
      { text: 'choice 1', points: 15 },
      { text: 'choice 2', points: 10 },
    ];
    const questions = [
      { text: 'question text here', choices },
      { text: 'question text here', choices },
    ];
    Question.create(questions).then(() => done()).catch(done);
  });
  afterEach(done => {
    mongoose.connection.db.dropDatabase().then(() => done());
  });
  after(done => {
    mongoose.connection.close(() => {
      server.close(done);
    });
  });
  it('GET /questions should return all questions', (done) => {
    request(server)
      .get('/api/questions')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.exist;
        expect(res.body).to.have.length(2);
        res.body.map(question => {
          expect(question).to.have.all.keys('_id', 'text', 'choices');
          expect(question.choices).to.have.length(2);
          question.choices.map(choice => expect(choice).to.have.all.keys('_id', 'text', 'points'));
        });
        done();
      });
  });
});
