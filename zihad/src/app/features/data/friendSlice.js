import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friend: [
    {
      id: 1,
      age: 20,
      name: "Zihad",
      home: "Saidpur",
      university: "DU",
    },
    {
      id: 2,
      age: 23,
      name: "Thafujul",
      home: "Dhaka",
      university: "JNU",
    },
    {
      id: 3,
      age: 24,
      name: "Tamim",
      home: "Rangpur",
      university: "JU",
    },
    {
      id: 4,
      age: 19,
      name: "Tonmoy",
      home: "Rajshahi",
      university: "RU",
    },
  ],
};

export const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {
    deleteItem: (state, action) => {
      console.log(action.payload);
      state.friend = state.friend.filter((x) => x.id !== action.payload.id);
    },
    addIterm: (state, action) => {
      let data = action.payload.data;
      let id = action.payload.id;
      // console.log(`data : ${data} & id : ${id}`);
      console.log(id);
      console.log(data);
      data.id = id;
      console.log(data);
      // result = console.log(result);
      state.friend.push(data);
    },
    editItem: (state, action) => {
      let data = action.payload.data;
      let id = action.payload.id;

      console.log(data);
      console.log(id);

      let findIndex = state.friend.findIndex((item) => item.id === id);
      console.log("find Index", findIndex);
      state.friend[findIndex] = data;
    },
  },
});

export const { deleteItem, editItem, addIterm } = friendSlice.actions;

export default friendSlice.reducer;
