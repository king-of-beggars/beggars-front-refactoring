import CryptoJS from "crypto-js";

export const cryptoKey = process.env.REACT_APP_CRYPTO_KEY;

export const encrypt = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), cryptoKey).toString();
};

export const decrypt = (text) => {
  const bytes = CryptoJS.AES.decrypt(text, cryptoKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
