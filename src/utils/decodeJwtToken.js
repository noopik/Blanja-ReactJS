import jwtDecode from 'jwt-decode';

export const decodeJwtToken = (token) => {
  return new Promise((resolve, reject) => {
    try {
      const decode = jwtDecode(token);
      const response = {
        isExists: true,
        decode,
      };
      resolve(response);
    } catch (error) {
      const errorMessage = error.message;
      const errorDecode = {
        isExists: false,
        errorMessage,
      };
      reject(errorDecode);
    }
  });
};
