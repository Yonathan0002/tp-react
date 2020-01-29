import React from 'react';
import PropTypes from 'prop-types';


export function Button({children, ...props}) {
    return (
      <button {...props}>{children}</button>
    );
}
Button.propTypes = {
  };

Button.defaultProps = {
  };
export default Button;
