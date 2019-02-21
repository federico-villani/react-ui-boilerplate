//eslint-disable-next-line
let innerWidth = window.innerWidth;

const sizes = {
  tablet1: 768,
  desktop1: 1024
};

const MQ = {
  phone: (width = innerWidth) => width < sizes.tablet1,
  phone_tablet: (width = innerWidth) => width < sizes.desktop1,
  tablet: (width = innerWidth) => width >= sizes.tablet1 && width < sizes.desktop1,
  tablet_big_down: (width = innerWidth) => width < sizes.desktop1,
  desktop: (width = innerWidth) => width >= sizes.desktop1
};

const checkMediaQuery = (mediaQuery) => {
  //eslint-disable-next-line
  innerWidth = window.innerWidth;
  return mediaQuery(innerWidth);
};

MQ.sizes = sizes;
MQ.checkMediaQuery = checkMediaQuery;

export default MQ;
