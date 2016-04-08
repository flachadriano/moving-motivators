import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

module.exports = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
  },
  onClick() {
    this.props.onClick();
  },
  render() {
    return (
      <div className="form-toggle-container">
        <RaisedButton label="Save my motivators" primary={true} onClick={this.onClick} />
      </div>
      );
  },
});
