import * as CryptoJS from 'crypto-js';
import {AUTH_PHRASE_PASS} from '../../config';

export const CAPTCHA_KEY = '@recaptcha';

export const validateEmail = (emailAddress: string): boolean => {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAddress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
};

export const getPhrasePassword = (password: string): string => {
  return CryptoJS.AES.encrypt(password, AUTH_PHRASE_PASS).toString();
};
