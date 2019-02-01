//eslint-disable-next-line
let innerWidth = window.innerWidth;

const sizes = {
  phone1: 330,
  phone2: 414,
  tablet1: 768,
  tablet2: 812,
  tablet3: 992,
  desktop1: 1020,
  desktop2: 1280,
  desktop3: 1408,
  desktop4: 1440
};

const MQ = {
  small_phone: (width = innerWidth) => width <= sizes.phone1,
  big_phone: (width = innerWidth) => width <= sizes.phone2,
  phone: (width = innerWidth) => width < sizes.tablet1,
  phone_tablet: (width = innerWidth) => width < sizes.desktop1,
  tablet: (width = innerWidth) => width >= sizes.tablet1 && width < sizes.desktop1,
  tablet_up: (width = innerWidth) => width >= sizes.tablet1,
  tablet_big_up: (width = innerWidth) => width >= sizes.tablet3,
  tablet_big_down: (width = innerWidth) => width < sizes.desktop1,
  small_desktop: (width = innerWidth) => width >= sizes.desktop1 && width <= sizes.desktop2,
  small_desktop_tablet: (width = innerWidth) => width >= sizes.tablet3 && width <= sizes.desktop2,
  small_desktop_down: (width = innerWidth) => width <= sizes.desktop2,
  small_desktop_up: (width = innerWidth) => width > sizes.desktop2,
  desktop: (width = innerWidth) => width >= sizes.desktop1,
  big_desktop: (width = innerWidth) => width >= sizes.desktop3,
  range_small_big_desktop: (width = innerWidth) => width >= sizes.desktop2 && width <= sizes.desktop4
};

const checkMediaQuery = (mediaQuery) => {
  //eslint-disable-next-line
  innerWidth = window.innerWidth;
  return mediaQuery(innerWidth);
};

MQ.sizes = sizes;
MQ.checkMediaQuery = checkMediaQuery;

export default MQ;
