import { createSlice } from '@reduxjs/toolkit';

interface StyleState {
    style: string;
}

const initialState: StyleState = {
    style: ""
}

const StyleEventSlice = createSlice({
    name: 'getStyle',
    initialState,
    reducers: {
        setStyle(state, action) {
            state.style = action.payload
        },
    },
})

export const { setStyle } = StyleEventSlice.actions
export default StyleEventSlice.reducer