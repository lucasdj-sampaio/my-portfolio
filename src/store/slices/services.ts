import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IServiceCardProp } from 'shared/types/IServiceCardProp';
//@ts-ignore
import P4f from '../../images/p4f.jpeg';
//@ts-ignore
import Iza from '../../images/iza.jpeg';
//@ts-ignore
import VpnImage from '../../images/vpn_service.png';
//@ts-ignore
import PassImage from '../../images/pass_service.png';
//@ts-ignore
import IngressImage from '../../images/ingress_service.jpg';
//@ts-ignore
import PdfToImage from '../../images/pdftoimage_service.jpg';
//@ts-ignore
import GitProjects from '../../images/seeAll_services.jpg';

interface arrayProps {
  services: IServiceCardProp[];
}

const initialENState: arrayProps = {
  services: [
    {
      Image: P4f,
      Title: 'Pay4fun Website',
      Description: `The goal of this project was to replace a legacy WordPress platform with a 
        modern tech stack using React, Redux, Next.js, and Strapi. Using TypeScript, 
        I created strongly-typed data models to fetch content from Strapi and built 
        the site in a modular, block-based structure. This allows the marketing team 
        to update the website instantly and manage multilingual content without developer involvement.`,
      SeeMore: {
        Private: true,
        Link: 'https://p4f.com/',
      },
    },
    {
      Image: Iza,
      Title: 'IZA - School Communication Platform',
      Description: `IZA is an easy-to-use platform that connects schools and guardians 
        with secure and effective communication. It helps manage student attendance and 
        meal distribution, reduces dropout rates, improves safety, and optimizes 
        resources. It also integrates with state databases to support data-driven 
        decisions and save costs.`,
      SeeMore: {
        Private: true,
        Link: 'https://www.gpnet.com.br/iza/',
      },
    },
    {
      Image: VpnImage,
      Title: 'VPN Connect Automation',
      Description: `I was create a software used to connect at 
        FortClient and Cisco VPN automatic, Click to see more about it!`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio/VPNConnectAutomation',
      },
    },
    {
      Image: IngressImage,
      Title: 'Buy Ticket RPA',
      Description: `With the aim of expediting ticket purchases on a platform, I have developed 
        an automation for ticket acquisition that can be configured without the need 
        for coding. This way, I can attend to other tasks while the bot handles the purchases for me!`,
      SeeMore: { Private: false, Link: '' },
    },
    {
      Image: PdfToImage,
      Title: 'Convert Pdf to Image',
      Description: `Would you like to convert each page of a PDF into an image format? It's fine to manually open 
        and capture the screen 3 or 4 times, but what if you have a 20 page document? In some cases, you may also 
        need to use OCR (Optical Character Recognition) on multiple documents. This solution can assist you in converting 
        your PDF files into image documents!`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio/ConvertPdfToImg',
      },
    },
    {
      Image: PassImage,
      Title: 'Create Random Passwords',
      Description: `You know that taking care of security is important, right? 
        but we know how tedious it is to have to change your passwords often. 
        To solve this I created an automation to create passwords with alexa commands`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio/CreateRandomPasswords',
      },
    },
    {
      Image: GitProjects,
      Title: 'This is not everything!',
      Description: `<Thanks for reaching out! If you would like to explore the rest of the projects I have worked on, 
        please access the following link. There, you will find this web profile, templates, and much more! />`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio?tab=repositories',
      },
    },
  ],
};

const initialPTState: arrayProps = {
  services: [
    {
      Image: P4f,
      Title: 'Site Pay4fun',
      Description: `O objetivo deste projeto foi substituir uma plataforma WordPress legada por 
        uma stack tecnológica moderna usando React, Redux, Next.js e Strapi. Utilizando TypeScript, 
        criei modelos de dados fortemente tipados para buscar conteúdo do Strapi e construí 
        o site em uma estrutura modular baseada em blocos. Isso permite que a equipe de marketing 
        atualize o site instantaneamente e gerencie conteúdo multilíngue sem a necessidade de 
        envolvimento de desenvolvedores.`,
      SeeMore: {
        Private: true,
        Link: 'https://p4f.com/',
      },
    },
    {
      Image: Iza,
      Title: 'IZA - Plataforma de Comunicação Escolar',
      Description: `IZA é uma plataforma fácil de usar que conecta escolas e 
        responsáveis com comunicação segura e eficaz. Ajuda a gerenciar a frequência dos 
        alunos e a distribuição de refeições, reduz a evasão escolar, melhora a 
        segurança e otimiza recursos. Também se integra a bancos de dados estaduais 
        para apoiar decisões baseadas em dados e gerar economia de custos.`,
      SeeMore: {
        Private: true,
        Link: 'https://www.gpnet.com.br/iza/',
      },
    },
    {
      Image: VpnImage,
      Title: 'Conexão de VPN Automatizada',
      Description: `Eu criei um software usado para se conectar automaticamente ao FortClient e ao Cisco VPN. 
        Clique para saber mais sobre isso!`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio/VPNConnectAutomation',
      },
    },
    {
      Image: IngressImage,
      Title: 'Compra de Ingresso RPA',
      Description: `Com o objetivo de agilizar a compra de ingressos em uma plataforma, desenvolvi 
        uma automação para a aquisição de tickets, que pode ser configurada sem a necessidade de 
        codificação. Dessa forma, consigo fazer outras tarefas enquanto o bot realiza as compras para mim!`,
      SeeMore: { Private: false, Link: '' },
    },
    {
      Image: PdfToImage,
      Title: 'Conversor de PDF para Imagem',
      Description: `Você gostaria de converter cada página de um PDF em um formato de imagem? Não há problema em 
        abrir e capturar manualmente a tela 3 ou 4 vezes, mas e se você tiver um documento de 20 páginas? Em alguns 
        casos, você também pode precisar usar OCR (reconhecimento óptico de caracteres) em vários documentos. 
        Esta solução pode ajudá-lo a converter seus arquivos PDF em documentos de imagem!`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio/ConvertPdfToImg',
      },
    },
    {
      Image: PassImage,
      Title: 'Criação de Senha Aleatória',
      Description: `Você sabe que cuidar da segurança é importante, não é? Mas sabemos 
      o quão tedioso é ter que trocar suas senhas com frequência. Para resolver isso,
       criei uma automação para gerar senhas usando comandos da Alexa.`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio/CreateRandomPasswords',
      },
    },
    {
      Image: GitProjects,
      Title: 'Isso não é tudo!',
      Description: `<Obrigado por chegar até aqui, se quiser ver os demais dos projetos que desenvolvi, acesse o link a seguir, 
        você vai encontrar este portifólio, templates e muito mais! />`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio?tab=repositories',
      },
    },
  ],
};

export const serviceSlice = createSlice({
  name: 'services',
  initialState: initialENState,
  reducers: {
    changeServiceLanguage(
      state,
      action: PayloadAction<{ toggleState: boolean }>
    ) {
      state.services = action.payload.toggleState
        ? initialENState.services
        : initialPTState.services;
    },
  },
});

export const { changeServiceLanguage } = serviceSlice.actions;
export default serviceSlice.reducer;
