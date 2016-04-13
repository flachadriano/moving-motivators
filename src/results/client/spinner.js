import React from 'react';

class Spinner extends React.Component {
  render() {
    if (this.props.show) {
      return (
        <i className="fa fa-refresh fa-spin fa-fw" aria-hidden="true"></i>
      );
    } else {
      return null;
    }
  }
}

Spinner.propTypes = {
  show: React.PropTypes.bool,
};

Spinner.defaultProps = {
  show: false,
};

export default Spinner;
