import MQ from '../../../utils/mediaQueries';

const { sizes } = MQ;

const mediaQueries = {
  small_phone: `@media (max-width: ${sizes.phone1}px)`,
  big_phone: `@media (max-width: ${sizes.phone2}px)`,
  phone: `@media (max-width: ${sizes.tablet1 - 1}px)`,
  phone_landscape: `@media (max-width: ${sizes.tablet1}px) and (orientation: landscape)`,
  big_phone_landscape: `@media (max-width: ${sizes.tablet2}px) and (orientation: landscape)`,
  //phone_tablet: `@media (max-width: 1024px)`,
  phone_tablet: `@media (max-width: ${sizes.desktop1 - 1}px)`,
  //tablet: `@media (min-width: 768px) and (max-width: 1024px)`,
  tablet: `@media (min-width: ${sizes.tablet1}px) and (max-width: ${sizes.desktop1 - 1}px)`,
  //tablet_landscape: `@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)`,
  tablet_landscape: `@media (min-width: ${sizes.tablet1}px) and (max-width: ${sizes.desktop1 - 1}px) and (orientation: landscape)`,
  tablet_up: `@media (min-width: ${sizes.tablet1}px)`,
  tablet_big_up: `@media (min-width: ${sizes.tablet3}px)`,
  tablet_big_down: `@media (max-width: ${sizes.desktop1 - 1}px)`,
  //small_desktop: `@media (min-width: 1025px) and (max-width: 1280px)`,
  small_desktop: `@media (min-width: ${sizes.desktop1}px) and (max-width: ${sizes.desktop2}px)`,
  small_desktop_tablet: `@media (min-width: ${sizes.tablet3}px) and (max-width: ${sizes.desktop2}px)`,
  small_desktop_down: `@media (max-width: ${sizes.desktop2}px)`,
  small_desktop_up: `@media (min-width: ${sizes.desktop1}px)`,
  //desktop: `@media (min-width: 1025px)`,
  desktop: `@media (min-width: ${sizes.desktop2}px)`,
  big_desktop: `@media (min-width: ${sizes.desktop3}px)`,
  range_small_big_desktop: `@media (min-width: ${sizes.desktop2}px) and (max-width: ${sizes.desktop4}px)`,
  internetExplorer: '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)'
};

export default mediaQueries;
