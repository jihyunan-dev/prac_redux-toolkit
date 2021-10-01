import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

export const incrementByAmount = createAction(INCREMENT, (num) => ({ num }));
export const decrementByAmount = createAction(DECREMENT, (num) => ({ num }));

const initialState = {
  count: 0,
};

const counter = handleActions(
  {
    [INCREMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.count += action.payload.num;
      }),
    [DECREMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.count -= action.payload.num;
      }),
  },
  initialState
);

export default counter;
