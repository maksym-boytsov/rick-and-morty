import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from 'components/layout/layout-slice';
import characterListReducer from 'pages/character/pages/character-list/character-list-slice';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    characterList: characterListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
