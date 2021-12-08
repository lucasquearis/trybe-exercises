module.exports = (_req, res) => {
  try {
    res.status(200).json({ message: 'Pong!' });
  } catch (error) {
    next(error);
  }
};
