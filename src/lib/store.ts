import { configureStore } from '@reduxjs/toolkit';
import StyleEventSlice from './features/getEventStyles/getEventStyles';

export const store = () => {
    return configureStore({
        reducer: {
            style: StyleEventSlice,
        },
    });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];