import request from 'superagent';

export const SET_NAME = 'SET_NAME';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const SAVE_ALL_ANSWERS = 'SAVE_ALL_ANSWERS';
export const SAVE_ALL_ANSWERS_SUCCESS = 'SAVE_ALL_ANSWERS_SUCCESS';
export const SAVE_ALL_ANSWERS_FAIL = 'SAVE_ALL_ANSWERS_FAIL';

export function setName(name) {
  return { type: SET_NAME, name };
}

export function saveAnswer(questionId, questionChoiceId, points) {
  return { type: SAVE_ANSWER, answer: { questionId, questionChoiceId }, points };
}

export function saveAllAnswers() {
  return (dispatch, getState) => {
    const { answers } = getState();
    dispatch({ type: SAVE_ALL_ANSWERS });
    return request.post('/api/responses')
      .send({ answers })
      .end((err, res) => {
        if (err) return dispatch({ type: SAVE_ALL_ANSWERS_FAIL, error: err.response.body });
        return dispatch({ type: SAVE_ALL_ANSWERS_SUCCESS, questions: res.body });
      });
  };
}
