import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface CharacterListSlice {
  currentPage: number;
  nameValue?: string;
  status?: string;
  gender?: string;
}

// Define the initial state using that type
const initialState: CharacterListSlice = {
  currentPage: 1,
  nameValue: undefined,
  status: undefined,
  gender: undefined,
};

export const characterListSlice = createSlice({
  name: 'layout-slice',
  initialState,
  reducers: {
    changeCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    changeStatus: (state, action: PayloadAction<string | undefined>) => {
      state.status = action.payload;
    },
    changeGender: (state, action: PayloadAction<string | undefined>) => {
      state.gender = action.payload;
    },
    changeNameValue: (state, action: PayloadAction<string | undefined>) => {
      state.nameValue = action.payload;
    },
  },
});

export const { changeCurrentPage, changeGender, changeNameValue, changeStatus } = characterListSlice.actions;

export const selectCharacterListData = (state: RootState) => state.characterList;

export default characterListSlice.reducer;
