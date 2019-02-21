import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerStyled } from './styles';

class Spinner extends React.PureComponent {
  render() {
    const { spinnerState } = this.props;
    if (!spinnerState) return null;
    return (
      <SpinnerStyled>
        here your spinner
      </SpinnerStyled>
    );
  }
}

Spinner.defaultProps = {
  spinnerState: true
};

Spinner.propTypes = {
  spinnerState: PropTypes.bool
};

export default Spinner;
