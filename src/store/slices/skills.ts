import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISkillProperty } from 'shared/interfaces/skillProperty';

interface arrayProp {
  skills: ISkillProperty[];
}

const initialENState: arrayProp = {
  skills: [
    { Title: 'React', Porcent: 96, Level: 'Sr.' },
    { Title: 'JavaScript', Porcent: 92, Level: 'Sr.' },
    { Title: 'TypeScript', Porcent: 87, Level: 'Sr.' },
    { Title: 'C#', Porcent: 90, Level: 'Sr.' },
    { Title: 'SQL', Porcent: 88, Level: 'Sr.' },
    { Title: 'No SQL', Porcent: 72, Level: 'Mid' },
    { Title: 'Python', Porcent: 68, Level: 'Mid' },
    { Title: 'AWS', Porcent: 42, Level: 'Jr.' },
    { Title: 'Node', Porcent: 33, Level: 'Jr.' },
  ],
};

const initialPTState: arrayProp = {
  skills: [
    { Title: 'React', Porcent: 96, Level: 'Sr' },
    { Title: 'JavaScript', Porcent: 92, Level: 'Sr' },
    { Title: 'TypeScript', Porcent: 87, Level: 'Sr' },
    { Title: 'C#', Porcent: 90, Level: 'Sr' },
    { Title: 'SQL', Porcent: 88, Level: 'Sr' },
    { Title: 'No SQL', Porcent: 72, Level: 'Pl' },
    { Title: 'Python', Porcent: 68, Level: 'Pl' },
    { Title: 'AWS', Porcent: 42, Level: 'Jr' },
    { Title: 'Node', Porcent: 33, Level: 'Jr' },
  ],
};

export const skillSlice = createSlice({
  name: 'skills',
  initialState: initialENState,
  reducers: {
    updateSkills(state, action: PayloadAction<{ toggleState: boolean }>) {
      state.skills = action.payload.toggleState
        ? initialENState.skills
        : initialPTState.skills;
    },
  },
});

export const { updateSkills } = skillSlice.actions;
export default skillSlice.reducer;
