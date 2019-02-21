import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import MQ from '../../utils/mediaQueries';

const mediaquery = {
  phone: MQ.checkMediaQuery(MQ.phone),
  tablet: MQ.checkMediaQuery(MQ.tablet)
};

export const ButtonContainer = styled(Link)`
  display: inline-block;
  &:hover,
  &:active,
  &:visited, 
  &:focus {
    text-decoration: none;
  }

  ${props => props.inMethod && css`
    margin-left: auto;
  `}
`;

export const ButtonIcon = styled.div`
  display: inline-block;
  text-decoration: none;
  box-sizing: border-box;
  text-align: center;
  font-weight: bold;
  font-size: ${props => (props.size ? `${props.size}px` : '28px')};
  /*line-height: 2.4em;*/
  transform: ${props => `rotate(${props.rotate})` || 'none'};
  
  &:hover,
  &:active,
  &:visited, 
  &:focus {
    text-decoration: none;
  }
  &:before {
    ${props => props.color && props.color.icon && css`
      color: ${props.color.icon} !important;
    `}
  }
`;

export const ButtonText = styled.div`
  color: ${props => ((props.color && props.color.text) ? props.color.text : props.theme.colors.black)};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: ${props => (props.notUppercase ? '0.8px' : '1.2px')};
  margin-left:25px;
  text-transform: ${props => (props.notUppercase ? 'none' : 'uppercase')};
  ${mediaquery.phone}{
    font-size: 14px;
    margin-right: 15px;
    margin-left: 10px;
  }
`;
