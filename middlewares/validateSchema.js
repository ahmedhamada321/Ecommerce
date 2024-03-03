export const validtionSchema = (schema, type) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync({ ...req.body }, { abortEarly: false });

      return next();
    } catch (err) {
      res.status(400).json(err.details);
    }
  };
};
