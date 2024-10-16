import {colors} from './colors';
export const fontFamily = 'Helvetica Neue';

export const fonts = {
  DESKTOP: {
    H1: {
      fontFamily,
      fontWeight: '200', 
      fontSize: '32px',
      color: colors.PRIMARY.BLACK,
    },
    H2: {
      fontFamily,
      fontWeight: '200',
      fontSize: '30px',
      color: colors.PRIMARY.BLACK,
    },
    H3: {
      fontFamily,
      fontWeight: '400',
      fontSize: '40px',
      color: colors.PRIMARY.BLACK,
    },
    bodyText: {
      fontFamily,
      fontWeight: '200',
      fontSize: '24px',
      color: colors.PRIMARY.BLACK,
    },
    button: {
      fontFamily,
      fontWeight: '200', 
      fontSize: '16px',
      color: '#FFFFFF',
      backgroundColor: colors.PRIMARY.BLACK,
    },
    inputText: {
      fontFamily,
      fontWeight: '200', 
      fontSize: '16px',
      color: colors.PRIMARY.BLACK,
    },
    labelText: {
      fontFamily,
      fontWeight: '200', 
      fontSize: '16px',
      color: colors.PRIMARY.GRAY,
    },
  },
  MOBILE: {
    H1: {
      fontFamily,
      fontWeight: '200', 
      fontSize: '24px',
      color: colors.PRIMARY.BLACK,
    },
    H2: {
      fontFamily,
      fontWeight: '200', 
      fontSize: '16px',
      color: colors.PRIMARY.BLACK,
    },
    H3: {
      fontFamily,
      fontWeight: '400', 
      fontSize: '18px',
      color: colors.PRIMARY.BLACK,
    },
    bodyText: {
      fontFamily,
      fontWeight: '200', 
      fontSize: '16px',
      color: colors.PRIMARY.BLACK,
    },
    button: {
      fontFamily,
      fontWeight: '200', 
      fontSize: '16px',
      color: '#FFFFFF',
      backgroundColor: colors.PRIMARY.BLACK,
    },
    inputText: {
      fontFamily,
      fontWeight: '200', 
      fontSize: '16px',
      color: colors.PRIMARY.BLACK,
    },
    labelText: {
      fontFamily,
      fontWeight: '200', 
      fontSize: '14px',
      color: colors.PRIMARY.GRAY,
    },
  },
};
