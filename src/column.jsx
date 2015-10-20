const React = require('react');
const Card = require('./card.jsx');

module.exports = React.createClass({
  propTypes: {
    cardIndex: React.PropTypes.number,
    imageUrl: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    onScrollClick: React.PropTypes.func,
  },
  onUpClick() {
    this.props.onScrollClick('up', this.props.cardIndex);
  },
  onDownClick() {
    this.props.onScrollClick('down', this.props.cardIndex);
  },
  render() {
    return (
      <div className="inner-container">
        <div className="column column-1" onClick={this.onUpClick}>1</div>
        <Card cardIndex={this.props.cardIndex} imageUrl={this.props.imageUrl} onSelect={this.props.onSelect} key={this.props.cardIndex}/>
        <div className="column column-3" onClick={this.onDownClick}>3</div>
      </div>
    );
  },
});