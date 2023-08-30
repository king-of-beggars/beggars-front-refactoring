import CryptoJS from "crypto-js";

export const cryptoKey = process.env.REACT_APP_CRYPTO_KEY;

export const encrypt = (data, key) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
};

export const decrypt = (text, key) => {
  const bytes = CryptoJS.AES.decrypt(text, key);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
