import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IServiceCardProp } from 'shared/types/IServiceCardProp';
//@ts-ignore
import VpnImage from '../../images/vpn_service.png';
//@ts-ignore
import PassImage from '../../images/pass_service.png';
//@ts-ignore
import IngressImage from '../../images/ingress_service.jpg';
//@ts-ignore
import DeleteFileImage from '../../images/deletefile_service.jpg';
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
      Image: IngressImage,
      Title: 'Buy Ticket RPA',
      Description: `With the aim of expediting ticket purchases on a platform, I have developed 
        an automation for ticket acquisition that can be configured without the need 
        for coding. This way, I can attend to other tasks while the bot handles the purchases for me!`,
      SeeMore: { Private: false, Link: '' },
    },
    {
      Image: DeleteFileImage,
      Title: 'Delete Files Scrypt',
      Description: `Have you ever needed to delete multiple files from a folder and encountered 
        a situation where, when you select everything and try to delete them all at once, your 
        computer freezes or becomes unusable while performing this action? Or even in cases where 
        you need to regularly purge files? With that in mind, I've developed a simple script in which 
        you specify the desired path, and it does all the work without compromising your machine's processor.`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio/DeleteFilesScrypt',
      },
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
      Image: IngressImage,
      Title: 'Compra de Ingresso RPA',
      Description: `Com o objetivo de agilizar a compra de ingressos em uma plataforma, desenvolvi 
        uma automação para a aquisição de tickets, que pode ser configurada sem a necessidade de 
        codificação. Dessa forma, consigo fazer outras tarefas enquanto o bot realiza as compras para mim!`,
      SeeMore: { Private: false, Link: '' },
    },
    {
      Image: DeleteFileImage,
      Title: 'Script para Deletar Arquivos',
      Description: `Você já se deparou com a situação de precisar excluir vários arquivos de uma pasta e, 
        ao selecionar tudo e tentar deletá-los de uma vez só, seu computador trava ou você não consegue usá-lo 
        durante essa ação? Ou talvez você precise eliminar arquivos de forma rotineira? Pensando nisso, 
        criei um script simples em que você informa o caminho desejado e ele faz todo o trabalho sem comprometer o 
        processamento da sua máquina.`,
      SeeMore: {
        Private: true,
        Link: 'https://github.com/lucasdj-sampaio/DeleteFilesScrypt',
      },
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
