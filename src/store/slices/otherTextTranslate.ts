import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TextProp {
  skillText: string;
  careerText: string;
}

const initialENState: TextProp = {
  skillText: 'SKILLS',
  careerText: `I began my professional journey in 2019, shortly after completing my technical education 
    at Etec, during which I developed a strong interest and affinity for programming, particularly with 
    the C# language. 
    My initial responsibilities involved supporting the development team and maintaining previously 
    implemented automation processes. 
    Approximately one year later, I was invited to participate in a project focused on building an 
    automation pipeline for Santander Bank. 
    This project marked a significant milestone in my career, as it led to my integration into the core 
    development team. 
    After nearly three years, I completed my degree in Systems Analysis and Development at FIAP and 
    accepted a position as a Senior Developer at G&P, where I focused on front-end solution development. 
    Most recently, I worked at Pay4Fun, where I was responsible for designing and implementing front-end  
    architectures with an emphasis on Server-Side Rendering (SSR) and state management using Redux. 
    Notable projects included an internet banking application, the company’s institutional website, 
    and internal back-office systems. 
    I am currently seeking international opportunities as a software engineer, aiming to contribute 
    to innovative and challenging environments.`,
};

const initialPTState: TextProp = {
  skillText: 'COMPETÊNCIAS',
  careerText: `Iniciei minha trajetória profissional em 2019, logo após concluir o curso técnico na 
    Etec, período em que desenvolvi interesse e afinidade pela programação, especialmente com a 
    linguagem C#. 
    Minhas primeiras responsabilidades consistiam em oferecer suporte à equipe de 
    desenvolvimento e realizar manutenções em automações previamente implementadas. 
    Cerca de um ano depois, fui convidado a integrar um projeto voltado à criação de um a esteira 
    de automação para o Banco Santander. Esse projeto representou um marco importante na minha carreira,  
    proporcionando meu ingresso na equipe principal de desenvolvimento. 
    Após aproximadamente três anos, conclui minha graduação em Análise e Desenvolvimento de Sistemas 
    pela FIAP e assumi o cargo de Desenvolvedor Sênior na G&P, com foco na implementação de soluções 
    front-end. 
    Mais recentemente, atuei na Pay4Fun, onde fui responsável pelo design e pela implementação de 
    arquiteturas front-end com foco em Server-Side Rendering (SSR) e gerenciamento de estado utilizando 
    Redux. 
    Entre os principais projetos, destacam-se um aplicativo de internet banking, o site institucional 
    da empresa e sistemas internos de backoffice. 
    Atualmente, estou em busca de novas oportunidades internacionais como engenheiro de software, 
    com foco em ambientes desafiadores e inovadores.`,
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
