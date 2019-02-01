import React from 'react';

const Button = ({ text, colorBg, pos }) => <button type="button" style={{ color: colorBg || 'blue', position: pos || 'absolute' }}>{text}</button>;
export default Button;
