import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// 통신 성공 시 보내게 될 데이터의 타입
export interface Inputs {
  data:{
    category: String;
    title: String;
    content?: String;
    voteRule: String;
    topicVoteItems: Object[];
    closedAt: String;
  }
}

const initialState: Inputs = {
  data:{
    category: '',
    title: '',
    content: '',
    voteRule: '',
    topicVoteItems: [],
    closedAt: '',
  }
}

export const createVoteSlice = createSlice({
  name: 'createVote',
  initialState,
  reducers: {
    createData: (state, action: PayloadAction<any>) => {
      state.data = action.payload.data
      // state.category = action.payload.category;
      // state.title = action.payload.title;
      // state.content = action.payload.content;
      // state.voteRule = action.payload.voteRule;
      // state.topicVoteItems = action.payload.topicVoteItems;
      // state.closedAt = action.payload.closedAt;
      console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createData } = createVoteSlice.actions;

export default createVoteSlice.reducer;