import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAboutDataType } from 'shared/types/IAboutDataType';
//@ts-ignore
import AboutMeImage from '../../images/meaboutme.jpg';
//@ts-ignore
import CertificationImage from '../../images/certification_aboutme.jpeg';
//@ts-ignore
import CvPt from '../../images/cv_pt.png';
//@ts-ignore
import CvEn from '../../images/cv_en.png';

interface AboutProp {
  aboutData: IAboutDataType[];
  currentId: number;
}

const initialENState: AboutProp = {
  aboutData: [
    { Id: 1, Image: AboutMeImage, Title: '123', Text: 'zdadasdasdasd' },
    {
      Id: 2,
      Image: CertificationImage,
      Title: '321',
      Text: 'czczxczxczxczcxzc',
    },
    { Id: 3, Image: CvEn, Title: 'CV', Text: 'dasddas' },
  ],
  currentId: 1,
};

const initialPTState: AboutProp = {
  aboutData: [
    { Id: 1, Image: AboutMeImage, Title: '123', Text: 'dadasdasdasdada' },
    {
      Id: 2,
      Image: CertificationImage,
      Title: '321',
      Text: 'dsadadsa',
    },
    { Id: 3, Image: CvPt, Title: 'CV', Text: 'dasddas' },
  ],
  currentId: 1,
};

export const aboutSlice = createSlice({
  name: 'aboutData',
  initialState: initialENState,
  reducers: {
    changeAboutLanguage(
      state,
      action: PayloadAction<{ toggleState: boolean }>
    ) {
      state.aboutData = action.payload.toggleState
        ? initialENState.aboutData
        : initialPTState.aboutData;
    },
    changeCurrentSlideId(state, action: PayloadAction<{ id: number }>) {
      state.currentId = action.payload.id;
    },
  },
});

export const { changeAboutLanguage, changeCurrentSlideId } = aboutSlice.actions;
export default aboutSlice.reducer;
