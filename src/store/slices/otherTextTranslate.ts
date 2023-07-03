import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TextProp {
  skillText: string;
  careerText: string;
}

const initialENState: TextProp = {
  skillText: 'SKILLS',
  careerText: `I work since 2019 with software Developer at Atento, 
    my focus at the company is Developement RPA solutions using .net 
    core languages. Now a days, I migrate to G&P company, Developement 
    mvp projects with react js and .net core API`,
};

const initialPTState: TextProp = {
  skillText: 'COMPETÊNCIAS',
  careerText: `Trabalho desde 2019 com desenvolvedor de software na Atento,
    meu foco na empresa é Desenvolvimento de soluções RPA usando .net
    idiomas centrais. Hoje em dia, migro para a empresa G&P, Development
    projetos mvp com react js e API .net core`,
};

export const pageTextSlice = createSlice({
  name: 'pageText',
  initialState: initialENState,
  reducers: {
    changePageTextLanguage(
      state,
      action: PayloadAction<{ toggleState: boolean }>
    ) {
      state.skillText = action.payload.toggleState
        ? initialENState.skillText
        : initialPTState.skillText;

      state.careerText = action.payload.toggleState
        ? initialENState.careerText
        : initialPTState.careerText;
    },
  },
});

export const { changePageTextLanguage } = pageTextSlice.actions;
export default pageTextSlice.reducer;
