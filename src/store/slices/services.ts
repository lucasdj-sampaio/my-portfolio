import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import { ServiceCardProp } from 'shared/types/ServiceCardProp';

interface arrayProps {
  services: ServiceCardProp[];
}

const initialENState: arrayProps = {
  services: [
    {
      Image: '',
      Title: 'VPNConnectAutomation',
      Description: `I was create a software used to connect at 
        FortClient and Cisco VPN automatic, Click to see more about it!`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio/VPNConnectAutomation',
      },
    },
    {
      Image: '',
      Title: 'CreateRandomPasswords',
      Description: `You know that taking care of security is important, right? 
        but we know how tedious it is to have to change your passwords often. 
        To solve this I created an automation to create passwords with alexa commands`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio/CreateRandomPasswords',
      },
    },
    {
      Image: '',
      Title: 'BuyIngressRpa',
      Description: `This is a solution to buy online ticket using json parameters`,
      SeeMore: { Private: false, Link: '' },
    },
  ],
};

const initialPtState: arrayProps = {
  services: [
    {
      Image: '',
      Title: 'VPNConnectAutomation',
      Description: `Eu criei um software usado para se conectar automaticamente ao FortClient e ao Cisco VPN. 
        Clique para saber mais sobre isso!`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio/VPNConnectAutomation',
      },
    },
    {
      Image: '',
      Title: 'CreateRandomPasswords',
      Description: `Você sabe que cuidar da segurança é importante, não é? Mas sabemos 
      o quão tedioso é ter que trocar suas senhas com frequência. Para resolver isso,
       criei uma automação para gerar senhas usando comandos da Alexa.`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio/CreateRandomPasswords',
      },
    },
    {
      Image: '',
      Title: 'BuyIngressRpa',
      Description: `Esta é uma solução para comprar ingressos online usando parâmetros JSON.`,
      SeeMore: { Private: false, Link: '' },
    },
  ],
};

export const serviceSlice = createSlice({
  name: 'services',
  initialState: initialENState,
  reducers: {
    changeLanguage(state, action: PayloadAction<{ toggleState: boolean }>) {
      state.services = action.payload.toggleState
        ? initialENState.services
        : initialPtState.services;
    },
  },
});

export const { changeLanguage } = serviceSlice.actions;
export default serviceSlice.reducer;
