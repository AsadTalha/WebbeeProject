import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type Field = {
    type: string,
    lable: string,
}

export type Category = {
    name: string,
    customeTitle: string,
    fields: Field[],
    categoryId?: string
}


const initialState: Category[] = [];

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addEmpty: (state, action: PayloadAction<Category>) => {
            state.push({ ...action.payload, categoryId: nanoid() })
        },
        remove: (state, action: PayloadAction<string>) => {
            const current = state;
            const newArr = current.filter((ele: Category) => ele.categoryId !== action.payload)
            return newArr;
        },
        update: (state, action: PayloadAction<Category>) => {
            const current = state;
            const index = state.map(e => e.categoryId).indexOf(action.payload.categoryId);
            current[index] = action.payload;
            return current;
            //state.push(action.payload)
        },
    }
})

export const { addEmpty, remove, update } = categorySlice.actions
export default categorySlice.reducer;