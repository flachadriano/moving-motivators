import React from 'react';

const wrapperStyle = {
  textAlign: 'center',
};

const Spinner = () => <div style={ wrapperStyle }><i className="fa fa-refresh fa-spin fa-fw" aria-hidden="true"></i></div>;

export default Spinner;
