import { CounterAction, ActionTypes } from '../actions';
export interface Counter {
  value: number;
}

const initialState: Counter = { value: 0 };

export const counterReducer = (
  state: Counter = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case ActionTypes.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default: {
      return state;
    }
  }
};
