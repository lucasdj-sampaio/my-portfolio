import { createSlice } from '@reduxjs/toolkit';
import { ISkillProperty } from 'shared/types/ISkillProperty';

interface arrayProp {
  skills: ISkillProperty[];
}

const initialState: arrayProp = {
  skills: [
    { Title: 'C#', Porcent: 98, SpanText: 'Sr' },
    { Title: 'Selenium', Porcent: 95, SpanText: 'Sr' },
    { Title: 'JavaScript', Porcent: 92, SpanText: 'Sr' },
    { Title: 'React', Porcent: 89, SpanText: 'Sr' },
    { Title: 'TypeScript', Porcent: 88, SpanText: 'Sr' },
    { Title: 'Python', Porcent: 67, SpanText: 'Pl' },
  ],
};

export const skillSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
});

export default skillSlice.reducer;
