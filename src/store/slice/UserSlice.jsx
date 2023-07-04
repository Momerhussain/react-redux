import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      return [];
      //   return (state = []);
    },
  },
  extraReducers(builder) {
    builder.addCase(userSlice.actions.deleteUsers, () => {
      return [];
    });
  },
});
console.log(userSlice);
export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;

//IF action is supposed to be handle by one reducer,use reducers.
//id action is supposed to be handlke by multiple rdeucers , user extraReducers
