import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

module.exports = React.createClass({
  propTypes: {
    onSubmitClick: React.PropTypes.func,
  },
  getInitialState() {
    return {
      nameInputValue: '',
      nameError: '',
      submitted: false,
    };
  },
  onHandleNameInputChange(e) {
    this.setState({nameInputValue: e.target.value, nameError: ''});
  },
  onSubmitClick() {
    if (this.state.nameInputValue.trim().length === 0) {
      this.setState({nameError: 'This field is required.'});
    } else {
      this.props.onSubmitClick();
      this.setState({submitted: true});
    }
  },
  render() {
    const submitLayout = (
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
      </div>);

    const thankyouLayout = (
      <div className="form-submit-container">
        <div>
          Thank you!
        </div>
      </div>
    );
    return this.state.submitted ? thankyouLayout : submitLayout;
  },
});
