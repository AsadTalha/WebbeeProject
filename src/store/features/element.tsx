import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export type TypeElementField = {
    type: string,
    value: string | Date | boolean,
    lable: string
}

export type TypeElement = {
    fields: TypeElementField[],
    elementId: string,
    categoryId: string
}


const initialState: TypeElement[] = [];

const elementSlice = createSlice({
    name: 'element',
    initialState,
    reducers: {
        addEmpty: (state, action: PayloadAction<TypeElement>) => {
            state.push({ ...action.payload, elementId: nanoid() })
        },
        remove: (state, action: PayloadAction<string>) => {
            const current = state;
            const newArr = current.filter((ele: TypeElement) => ele.elementId !== action.payload)
            return newArr;
        },
        update: (state, action: PayloadAction<TypeElement>) => {
            const current = state;
            const index = state.map(e => e.elementId).indexOf(action.payload.elementId);
            current[index] = action.payload;
            return current;
            //state.push(action.payload)
        },
    }
})

export const { addEmpty, remove, update } = elementSlice.actions
export default elementSlice.reducer;