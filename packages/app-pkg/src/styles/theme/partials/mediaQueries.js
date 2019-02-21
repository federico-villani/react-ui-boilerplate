import MQ from '../../../utils/mediaQueries';

const { sizes } = MQ;

const mediaQueries = {
  phone: `@media (max-width: ${sizes.tablet1 - 1}px)`,
  tablet: `@media (min-width: ${sizes.tablet1}px) and (max-width: ${sizes.desktop1 - 1}px)`,
  desktop: `@media (min-width: ${sizes.desktop1}px)`,
  internetExplorer: '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)'
};

export default mediaQueries;
