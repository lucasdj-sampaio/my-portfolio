import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAboutDataType } from 'shared/types/IAboutDataType';
//@ts-ignore
import AboutMeImage from '../../images/meaboutme.jpg';
//@ts-ignore
import CertificationImage from '../../images/certification_aboutme.jpeg';

interface AboutProp {
  aboutData: IAboutDataType[];
}

const initialENState: AboutProp = {
  aboutData: [
    { Id: 1, Image: AboutMeImage, Title: '', Text: '' },
    {
      Id: 2,
      Image: CertificationImage,
      Title: '',
      Text: '',
    },
  ],
};

const initialPTState: AboutProp = {
  aboutData: [
    { Id: 1, Image: AboutMeImage, Title: '', Text: '' },
    {
      Id: 2,
      Image: CertificationImage,
      Title: '',
      Text: '',
    },
  ],
};

export const aboutSlice = createSlice({
  name: 'aboutData',
  initialState: initialENState,
  reducers: {
    changeSectionLanguage(
      state,
      action: PayloadAction<{ toggleState: boolean }>
    ) {
      state.aboutData = action.payload.toggleState
        ? initialENState.aboutData
        : initialPTState.aboutData;
    },
  },
});

export const { changeSectionLanguage } = aboutSlice.actions;
export default aboutSlice.reducer;
