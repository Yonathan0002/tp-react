import React from 'react';
import PropTypes from 'prop-types';

export function Button({label, ...props}) {
    return (
    <button {...props}>{label}</button>
    );
}
Button.propTypes = {
    label: PropTypes.string
  };

Button.defaultProps = {
    label: "clic"
  };
export default Button;
