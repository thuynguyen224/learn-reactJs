const { createSlice } = require("@reduxjs/toolkit");

const couterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
  },
});

const { actions, reducer } = couterSlice;
export const { increase, decrease } = actions; // export name
export default reducer;
