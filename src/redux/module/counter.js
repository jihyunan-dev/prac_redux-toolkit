import { createSlice } from "@reduxjs/toolkit";

// action type, actionCreator 다 별도로 만들 필요 없음
const counterSlice = createSlice({
  // 각각의 액션타입이 (name)/(reducers의 method)로 자동 지정됨!!
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
    decrementByAmount(state, action) {
      state.count -= action.payload;
    },
  },
});

// action creator 들은 만든 slice.actions로 export 해주면 된다.
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;
// reducer도 slice.reducer로 뽑아내서 export 해준다.
export const selectCounter = (state) => state.counter.count;
export default counterSlice.reducer;
