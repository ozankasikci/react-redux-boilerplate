import fastActions from 'redux-fast-actions';

const actionsConfig = {
  question: {
    create: { payload: ['content'] },
    type: { payload: ['text'] }
  },

  user: {
    login: { payload: ['username', 'password'] },
  },
};

const fasActions = fastActions(actionsConfig);
export const types = fasActions.types;
export const actions = fasActions.actions;