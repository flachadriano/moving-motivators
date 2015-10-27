import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

module.exports = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
  },
  getInitialState() {
    return {
      nameInputValue: '',
      nameError: '',
    };
  },
  onHandleNameInputChange(e) {
    this.setState({nameInputValue: e.target.value, nameError: ''});
  },
  onSubmitClick() {
    if (this.state.nameInputValue.trim().length === 0) {
      this.setState({nameError: 'This field is required.'});
    }
  },
  render() {
    return (
      <div className="form-submit-container">
        <div className="form-submit-input-container">
          <TextField
            hintText="Name"
            floatingLabelText="Enter your name"
            errorText={this.state.nameError}
            value={this.state.nameInputValue}
            onChange={this.onHandleNameInputChange} />
        </div>
        <div className="form-submit-button-container">
          <RaisedButton label="Send" primary onClick={this.onSubmitClick}/>
        </div>
      </div>
    );
  },
});
