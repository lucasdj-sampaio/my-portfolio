import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SectionProp {
  sections: string[];
}

const initialENState: SectionProp = {
  sections: ['CAREER', 'SERVICES', 'ABOUT-ME'],
};

const initialPTState: SectionProp = {
  sections: ['CARREIRA', 'PROJETOS', 'SOBRE MIM'],
};

export const sectionSlice = createSlice({
  name: 'sections',
  initialState: initialENState,
  reducers: {
    changeSectionLanguage(
      state,
      action: PayloadAction<{ toggleState: boolean }>
    ) {
      state.sections = action.payload.toggleState
        ? initialENState.sections
        : initialPTState.sections;
    },
  },
});

export const { changeSectionLanguage } = sectionSlice.actions;
export default sectionSlice.reducer;
