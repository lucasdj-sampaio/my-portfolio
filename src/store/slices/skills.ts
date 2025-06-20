import { createSlice } from '@reduxjs/toolkit';
import { ISkillProperty } from 'shared/types/ISkillProperty';

interface arrayProp {
  skills: ISkillProperty[];
}

const initialState: arrayProp = {
  skills: [
    { Title: 'React', Porcent: 96, SpanText: 'Sr' },
    { Title: 'JavaScript', Porcent: 92, SpanText: 'Sr' },
    { Title: 'TypeScript', Porcent: 87, SpanText: 'Sr' },
    { Title: 'C#', Porcent: 90, SpanText: 'Sr' },
    { Title: 'Sql Server', Porcent: 88, SpanText: 'Sr' },
    { Title: 'Selenium', Porcent: 90, SpanText: 'Sr' },
  ],
};

export const skillSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
});

export default skillSlice.reducer;
