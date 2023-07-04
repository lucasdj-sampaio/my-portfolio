import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TextProp {
  skillText: string;
  careerText: string;
}

const initialENState: TextProp = {
  skillText: 'SKILLS',
  careerText: `I began my professional journey in 2019, shortly after completing 
    my technical course at Etec. It was during this time that I started programming 
    and developed a greater affinity for C#. Initially, my responsibilities involved 
    assisting the developers and maintaining the automations we had previously created.
    About a year later, an opportunity arose to develop an automation platform for 
    Santander Bank. It was in this project that I excelled and had the chance to join 
    the development team. After approximately three years, I completed my graduation at 
    FIAP and decided to accept the opportunity to become a Senior Developer, focusing on 
    front-end solutions for G&P. This became my most recent professional experience.
    Currently, I am running my own business as a legal entity (CNPJ) with a focus on 
    opportunities as a software engineer abroad.`,
};

const initialPTState: TextProp = {
  skillText: 'COMPETÊNCIAS',
  careerText: `Iniciei minha trajetória profissional em 2019, logo 
    após concluir meu curso técnico na Etec. Foi nesse período que comecei a 
    programar e desenvolver uma afinidade maior com C#. No início, minhas 
    responsabilidades consistiam em auxiliar os desenvolvedores e realizar 
    manutenção nas automações que havíamos criado anteriormente.
    Cerca de um ano depois, surgiu uma oportunidade para desenvolver uma 
    esteira de automação para o banco Santander. Foi nesse projeto que me destaquei 
    e tive a chance de integrar a equipe de desenvolvimento. Após aproximadamente 
    três anos, completei minha graduação na FIAP e decidi aceitar a oportunidade de 
    me tornar um Desenvolvedor Sênior, focando em soluções front-end para a G&P. 
    Sendo essa a minha última experiência profissional.
    Atualmente, estou empreendendo como pessoa jurídica (CNPJ) com foco em
    oportunidades como engenheiro de software no exterior.`,
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
