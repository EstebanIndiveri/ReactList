import React from 'react';
import PropTypes from 'prop-types';

const Error1 = ({mensaje}) =>(
<p className="alert alert-danger error">{mensaje}</p>
  );
  Error1.propTypes={
    mensaje:PropTypes.string.isRequired
}
 
export default Error1;