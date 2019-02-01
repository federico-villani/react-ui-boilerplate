import styled, { css } from 'styled-components';

const IconFont = styled.i`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')} !important;
  font-size: ${props => props.font}px;
  ${props => props.marginRight && css`
    margin-right: ${props.marginRight !== 'auto' ? `${props.marginRight}px` : props.marginRight};
  `}
  ${props => props.marginLeft && css`
    margin-left: ${props.marginLeft !== 'auto' ? `${props.marginLeft}px` : props.marginLeft};
  `}
  
  ${props => props.marginTop && css`
    margin-left: ${props.marginTop !== 'auto' ? `${props.marginTop}px` : props.marginTop};
  `}
  
  color: ${props => props.theme.colors.violet};
  ${props => (props.color && props.color.indexOf('#') !== -1) && css`
    color: ${props.color};
  `};
  ${props => (props.color && props.color.indexOf('#') === -1) && css`
    color: ${props.theme.colors[props.color]};
  `};

  cursor: ${props => (props.withCursor ? 'pointer' : 'default')};
  padding: 0;
  line-height:1 !important;

  ${props => props.opacity && css`
    opacity: ${props.opacity};
  `}

  ${props => !props.customHeight && css`
    line-height: 35px !important;
  `}

  ${props => props.noPadding && css`
    padding: 0;
  `}

  ${props => props.paddingLeft && css`
    padding-left: ${props.paddingLeft}px;
  `}

  border-bottom: ${props => (props.selected
    ? `4px solid ${props.theme.colors.violet}`
    : `4px solid ${props.theme.colors.transparent}`
  )};

  ${props => props.noBottom && css`
    border-bottom: 0 none;
  `};

  &:before {
    // color: ${props => (props.color ? props.color : props.theme.colors.violet)} !important;
    ${props => (props.color && props.color.indexOf('#') !== -1) && css`
      color: ${props.color} !important;
    `};
    ${props => (props.color && props.color.indexOf('#') === -1) && css`
      color: ${props.theme.colors[props.color]} !important;
    `};
  }
  ${props => props.insideCard && css`
    cursor:pointer;
  `}
`;

export default IconFont;
