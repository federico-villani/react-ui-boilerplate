import { css } from 'styled-components';
import colors from './colors';
import fontset from './fonts';
import MQ from './mediaQueries';

const settings = {}; // to insert a custom mixin function, push default settings before the function

const isWindows = window.navigator.userAgent.toUpperCase().indexOf('WINDOWS') > -1;

const windowsDesktopResizing = (size, offset = 2) => {
  if (isWindows) return Number(size) - offset;
  return size;
};

const getParams = (obj, settingsDefault) => {
  let params = {};
  obj && obj !== {} ? params = { ...settings[settingsDefault], ...obj } : params = settings[settingsDefault];
  return params;
};

settings.bigTitle = {
  size: 100,
  weight: 900,
  lineHeight: 'normal',
  color: colors.blue,
  fontFamily: fontset.graphik,
  align: 'left'
};
const bigTitle = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'bigTitle');
  return `font-family: ${params.fontFamily};
  font-size: ${params.size}px;
  font-weight: ${params.weight};
  line-height: ${params.lineHeight};
  color: ${params.color};
  text-align: ${params.align};
  `;
};

settings.mainTitlePage = {
  size: 36,
  weight: 'bold',
  lineHeight: 0.89,
  color: colors.blue,
  fontFamily: fontset.graphik,
  align: 'left'
};
const mainTitlePage = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'mainTitlePage');
  return `font-family: ${params.fontFamily};
  font-size: ${params.size}px;
  font-weight: ${params.weight};
  line-height: ${params.lineHeight};
  color: ${params.color};
  text-align: ${params.align};
  ${params.upperCase ? 'text-transform: uppercase' : null};
  `;
};

settings.subMainTitlePage = {
  size: 26,
  weight: 'bold',
  lineHeight: 1.15,
  color: colors.blue,
  fontFamily: fontset.graphik,
  align: 'right'
};
const subMainTitlePage = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'subMainTitlePage');
  return `font-family: ${params.fontFamily};
  font-size: ${params.size}px;
  font-weight: ${params.weight};
  line-height: ${params.lineHeight};
  color: ${params.color};
  text-align: ${params.align};
  ${params.upperCase ? 'text-transform: uppercase' : null};
  `;
};

settings.subSecondaryTitlePage = {
  size: 26,
  weight: 'bold',
  lineHeight: 1.15,
  color: colors.azure,
  fontFamily: fontset.graphik,
  align: 'left'
};
const subSecondaryTitlePage = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'subSecondaryTitlePage');
  return `font-family: ${params.fontFamily};
  font-size: ${params.size}px;
  font-weight: ${params.weight};
  line-height: ${params.lineHeight};
  color: ${params.color};
  text-align: ${params.align};
  ${params.upperCase ? 'text-transform: uppercase' : null};
  `;
};

settings.mainParagraphPage = {
  size: 18,
  weight: 'normal',
  lineHeight: 1.44,
  color: colors.grey,
  fontFamily: fontset.arial
};
const mainParagraphPage = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'mainParagraphPage');
  return `font-family: ${params.fontFamily};
  font-size: ${params.size}px;
  font-weight: ${params.weight};
  line-height: ${params.lineHeight};
  color: ${params.color};
  ${params.upperCase ? 'text-transform: uppercase' : null};
  `;
};

const cardBox = () => `
  background: ${colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  // flex: 0;
  // flex-basis: calc(33.333333333% - 30px);
  width: calc(33.333333333% - 30px);
  box-sizing: border-box;
  margin: 20px 15px;
  padding: 40px;
  position: relative;
  `;

const cardWrapperDesign = (shadowEffect = true) => `
  background: ${colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  ${shadowEffect && css`
    transition: box-shadow 200ms ease-in-out;
    &:hover {
      box-shadow: none;
    }
  `}
  `;

const buttonV1 = () => `
  background: transparent;
  border: 2px solid ${colors.violet};
  display: inline-block;
  padding: 0;
  font-size: 20px;
  font-weight: 900;
  line-height: 1.0;
  text-transform: uppercase;
  margin-top: 30px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  a {
    display: block;
    padding: 20px 30px;
    font-family: ${fontset.graphik};
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    color: ${colors.violet};
  }
  &:hover {
    background: ${colors.violet};
    a {
      color: #fff;
    }
  }
`;

const buttonV1Icon = src => `
position: relative;
a {
  position: relative;
  display: inline-block;
  border: 2px solid ${colors.violet};
  line-height: 1.25;
  font-size: 16px;
  font-weight: 600;
  font-family: ${fontset.graphik};
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.violet};
  padding: 3px 30px;
  max-width: 340px;
  &:hover {
    background: ${colors.violet};
    color: ${colors.white};
  }
  ${MQ.tablet_big_down} {
    padding: 3px 20px;
  }

  & > span {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 70px;
    margin-top: 4px;
    margin-bottom: 4px;
    background-color: transparent;
    background-image: url(${src});
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-position: left 50%;
    background-size: contain;

    ${props => props.theme.MQ.tablet_big_down} {
      padding-left: 40px;
    }
  }
`;

settings.bulletsPoint = {
  size: 18,
  sizeChildren: 16,
  weight: 'normal',
  lineHeight: 1.63,
  color: colors.grey,
  fontFamily: fontset.arial
};

const bulletsPoint = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'bulletsPoint');
  return ` ul {
      text-align: left;
      margin-top: 10px;
      margin-left: 30px;
      color: ${params.color};
      li {
        list-style-type: disc;
        font-size: ${params.size}px;
        font-family ${params.fontFamily};
        margin-bottom: 5px;
        & > ul {
          margin-left: 2em;
          margin-top: 15px;
          ${MQ.phone} {
            margin-left: 1em;
          }
          & > li {
            list-style-type: circle;
            font-size: ${params.sizeChildren}px;
            padding-left: 0;
            line-height: ${params.lineHeight};
            margin-bottom: 0;
            &:not(:first-child) {
              margin-top: 5px;
            }
            p {
              font-size: ${params.sizeChildren}px;
            }
          }
        }
      }
    }`;
};

settings.bulletsChildren = {
  lineHeight: 1.63,
  size: 16
};

const bulletsChildren = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'bulletsChildren');
  return `
    & > ul {
      margin-left: 2em;
      margin-top: 15px;
      ${MQ.phone} {
        margin-left: 1em;
      }
      & > li {
        list-style-type: circle;
        font-size: ${params.size}px;
        padding-left: 0;
        line-height: ${params.lineHeight};
        &:not(:first-child) {
          margin-top: 5px;
          margin-bottom: 0;
        }
        p {
          font-size: ${params.size}px;
        }
      }
    }`;
};

settings.radioInput = {
  baseColor: colors.grey,
  disabledColor: colors.greyMedium,
  primaryColor: colors.violet,
  fontFamily: fontset.graphik
};

const radioInput = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'radioInput');
  return `
    &:checked, &:not(:checked) {
      position: absolute;
      left: -9999px;
    }
    &:checked + label, &:not(:checked) + label {
      position: relative;
      padding-left: 28px;
      cursor: pointer;
      line-height: 20px;
      display: inline-block;
      color: ${params.baseColor};
    }
    &:checked + label:before, &:not(:checked) + label:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      border: 1px solid ${params.baseColor};
      border-radius: 100%;
      ${MQ.tablet_big_down} {
        width: 22px;
        height: 22px;
      }
    }
    &:checked + label:before {
      border: 1px solid ${params.primaryColor};
    }
    &:checked + label:after, &:not(:checked) + label:after {
      content: '';
      width: 8px;
      height: 8px;
      background: ${params.primaryColor};
      position: absolute;
      color: ${params.primaryColor};
      top: 50%;
      left: 4px;
      margin-top: -4px;
      border-radius: 100%;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
      ${MQ.tablet_big_down} {
        margin-top: -7px;
        width: 14px;
        height: 14px;
      }
    }
    &:not(:checked) + label:after {
      opacity: 0;
      transform: scale(0);
    }
    &:checked + label:after {
      opacity: 1;
      transform: scale(1);
    }
    & + label {
      font-family: ${params.fontFamily};
      font-size: 16px;
      font-weight: normal;
      line-height: 1.22;
    }
    &:checked + label {
      color: ${params.primaryColor};
      font-weight: 600;
    }
    &:disabled + label:after {
      background: ${params.disabledColor};
    }
    &:disabled + label:before {
      border: 1px solid ${params.disabledColor};
    }
    &:disabled + label {
      color: ${params.disabledColor};
    }`;
};

settings.subtitleLabel = {
  color: colors.grey,
  fontSize: '18px',
  margin: '40px 0 10px'
};

const subtitleLabel = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'subtitleLabel');
  return `
    color: ${params.color};
    font-size: ${params.fontSize};
    font-style: normal;
    font-weight: 600;
    letter-spacing: normal;
    line-height: 1;
    margin: ${params.margin};
    text-transform: uppercase;
  `;
};

settings.smallVwText = {
  font: 14,
  maxFont: 14,
  phoneFont: 18,
  tabletFont: 16
};
const smallVwText = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'smallVwText');
  return `
    font-size: ${windowsDesktopResizing(params.font)}px;
  ${MQ.big_desktop} {
    font-size: ${params.maxFont}px;
  }
  ${MQ.tablet_big_down} {
    font-size: ${params.tabletFont}px;
  }
  ${MQ.phone} {
    font-size: ${params.phoneFont}px;
  }  
`;
};

settings.paragraphVwText = {
  font: 16,
  maxFont: 16,
  offset: 2,
  phoneFont: 14,
  tabletFont: 16
};
const paragraphVwText = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'paragraphVwText');
  return `
  font-size: ${windowsDesktopResizing(params.font, params.offset)}px;
  ${MQ.big_desktop} {
    font-size: ${params.maxFont}px;
  }
  ${MQ.tablet_big_down} {
    font-size: ${params.tabletFont}px;
  }
  ${MQ.phone} {
    font-size: ${params.phoneFont}px;
  }  
`;
};

settings.mediumVwText = {
  font: 20,
  maxFont: 20,
  offset: 2,
  phoneFont: 18,
  tabletFont: 20
};
const mediumVwText = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'mediumVwText');
  return `
  font-size: ${windowsDesktopResizing(params.font, params.offset)}px;
  ${MQ.big_desktop} {
    font-size: ${params.maxFont}px;
  }
  ${MQ.tablet_big_down} {
    font-size: ${params.tabletFont}px;
  }
  ${MQ.phone} {
    font-size: ${params.phoneFont}px;
  }  
`;
};

settings.smallBigVwText = {
  font: 40,
  maxFont: 60,
  phoneFont: 30,
  tabletFont: 30
};
const smallBigVwText = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'smallBigVwText');
  return `
  font-size: ${windowsDesktopResizing(params.font, params.offset)}px;
  ${MQ.big_desktop} {
    font-size: ${params.maxFont}px;
  }
  ${MQ.tablet_big_down} {
    font-size: ${params.tabletFont}px;
  }
  ${MQ.phone} {
    font-size: ${params.phoneFont}px;
  }
`;
};

settings.bigVwText = {
  font: 50,
  maxFont: 60,
  offset: 2,
  phoneFont: 30,
  tabletFont: 60
};
const bigVwText = (settingsStyledComponent) => {
  const params = getParams(settingsStyledComponent, 'bigVwText');
  return `
  font-size: ${windowsDesktopResizing(params.font, params.offset)}px;
  ${MQ.big_desktop} {
    font-size: ${params.maxFont}px;
  }
  ${MQ.tablet_big_down} {
    font-size: ${params.tabletFont}px;
  }
  ${MQ.phone} {
    font-size: ${params.phoneFont}px;
  }
`;
};

const themeOptionsMapping = ({ type = 0 }, version) => version[type];

// insert into mixin all custom functions for theme export
const mixin = {
  bigTitle,
  mainTitlePage,
  subMainTitlePage,
  subSecondaryTitlePage,
  mainParagraphPage,
  cardBox,
  buttonV1,
  buttonV1Icon,
  cardWrapperDesign,
  bulletsPoint,
  bulletsChildren,
  radioInput,
  subtitleLabel,
  smallVwText,
  paragraphVwText,
  mediumVwText,
  smallBigVwText,
  bigVwText,
  themeOptionsMapping,
  windowsDesktopResizing
};

export default mixin;
