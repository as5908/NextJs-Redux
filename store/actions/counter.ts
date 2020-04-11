import { ActionTypes } from './ActionTypes';

export interface IncrementAction {
  type: ActionTypes.INCREMENT;
}
export const incrementAction = (): IncrementAction => {
  return {
    type: ActionTypes.INCREMENT,
  };
};

export interface DecrementAction {
  type: ActionTypes.DECREMENT;
}
export const decrementAction = (): DecrementAction => {
  return {
    type: ActionTypes.DECREMENT,
  };
};

export type CounterAction = IncrementAction | DecrementAction;
