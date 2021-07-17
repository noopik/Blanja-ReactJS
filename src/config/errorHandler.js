export default function errorHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      if (error.response.status === 500)
        message = 'Something went terribly wrong';
      else message = error.response.message;

      if (typeof message === 'string') {
        console.log(message);
      }

      return Promise.reject(error);
    }
  }
}
