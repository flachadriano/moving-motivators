import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

module.exports = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
  },
  onClick() {
    this.props.onClick(this.name);
  },
  onChange(name) {
    this.name = name.target.value;
  },
  render() {
    return (
      <div className="form-toggle-container">
        <span style={{color: '#000000'}}>Nome</span>
        <input type="text" onChange={this.onChange} style={{margin: '10px'}} />
        <RaisedButton label="Enviar dados" primary={true} onClick={this.onClick} />
      </div>
      );
  },
});
