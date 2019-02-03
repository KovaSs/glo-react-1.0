import React from 'react';

import "./errorMessage.css"
import img from "./error.gif"

const ErrorMessage = () => (
  <div className="text-error">
    {/* <img src={process.env.PUBLIC_URL + '/img/error.gif'} alt="error"/> */}
    <img src={img} alt="error"/>
    <div>Something goes wrong</div>
  </div>
)

export default ErrorMessage
