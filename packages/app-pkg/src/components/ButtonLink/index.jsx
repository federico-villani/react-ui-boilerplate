import React from 'react';
import PropTypes from 'prop-types';
import scrollToElement from 'scroll-to-element';

import {
  ButtonContainer,
  ButtonIcon,
  ButtonText
} from './styles';

const ButtonLink = (props) => {
  const handleClick = (e) => {
    if (props.to === '#') {
      e.preventDefault();
    }
    props.onButtonClick && props.onButtonClick();
    props.scrollTo && scrollToElement(props.scrollTo);
  };

  return (
    <ButtonContainer
      to={props.to}
      onClick={handleClick}
      className={props.className}
    >
      <ButtonIcon
        color={props.color}
        className={props.icon}
        rotate={props.rotate}
        size={props.size}
      />
      {props.text && (
      <ButtonText
        color={props.color}
        notUppercase={props.notUppercase}
      >
        {props.text}
      </ButtonText>
      )}
    </ButtonContainer>
  );
};

ButtonLink.propTypes = {
  color: PropTypes.object,
  icon: PropTypes.string,
  rotate: PropTypes.string,
  size: PropTypes.number,
  text: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onButtonClick: PropTypes.func,
  scrollTo: PropTypes.string,
  notUppercase: PropTypes.bool,
  className: PropTypes.string
  //inMethod: PropTypes.bool,
};

export default ButtonLink;
