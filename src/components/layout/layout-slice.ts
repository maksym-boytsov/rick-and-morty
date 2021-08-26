import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

interface LayoutSlice {
  isSidebarOpened: boolean;
}

// Define the initial state using that type
const initialState: LayoutSlice = {
  isSidebarOpened: false,
};

export const layoutSlice = createSlice({
  name: 'layout-slice',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpened = !state.isSidebarOpened;
    },
  },
});

export const { toggleSidebar } = layoutSlice.actions;

export const selectSidebarState = (state: RootState) => state.layout.isSidebarOpened;

export default layoutSlice.reducer;
