import { config } from 'process';

export const validation = (values = {}, config = {}) => {
  const errors = {};

  Object.keys(config).forEach((field) => {
    let fieldError;

    // @ts-ignore
    config[field].some((rule) => {
      // @ts-ignore
      fieldError = rule(values[field], values);

      return !!fieldError;
    });

    if (fieldError) {
      // @ts-ignore
      errors[field] = fieldError;
    }
  });

  return errors;
};

export const validationArr = (values = {}, config = {}) => {
  const errors = {};
  // @ts-ignore
  let configObj;

  // @ts-ignore
  let configArr;

  // @ts-ignore
  let newField;

  // @ts-ignore
  let fieldError;

  Object.keys(values).forEach((arr) => {
    // @ts-ignore
    configArr = config[arr];

    // @ts-ignore
    configObj = configArr[0];

    // @ts-ignore
    values[arr].forEach((obj) => {
      // @ts-ignore
      Object.keys(obj).forEach((field) => {
        // @ts-ignore
        newField = field;

        // @ts-ignore
        configObj[field].some((rule) => {
          // @ts-ignore
          fieldError = rule(obj[newField], obj);

          // @ts-ignore
          return !!fieldError;
        });

        // @ts-ignore
        if (fieldError) {
          // @ts-ignore
          errors[newField] = fieldError;
        }
      });
    });
  });

  return errors;
};
