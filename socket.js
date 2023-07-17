let ioObject;

const setIO = (io) => {
  ioObject = io;
};

const getIO = () => {
  return ioObject;
};

module.exports = { setIO, getIO };
