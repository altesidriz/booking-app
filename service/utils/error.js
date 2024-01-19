export const createError = (statusNumber, errorMessage) => {
    const err = new Error();
    err.status = statusNumber;
    err.message = errorMessage;
    return err;
  };