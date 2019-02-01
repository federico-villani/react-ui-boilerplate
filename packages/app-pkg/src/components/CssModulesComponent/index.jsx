import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import styles from './style.module.scss';

const CssModulesComponent = () => (
  <div>
    <p className={styles.greenClass}>bottone con cssModules styles</p>
  </div>
);

CssModulesComponent.propTypes = {
};

export default CssModulesComponent;
