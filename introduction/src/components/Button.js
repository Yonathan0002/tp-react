import React from 'react';
import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'


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
