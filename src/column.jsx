import React from 'react';
import Card from './card.jsx';

module.exports = React.createClass({
  propTypes: {
    cardId: React.PropTypes.number,
    imageUrl: React.PropTypes.string,
    priority: React.PropTypes.number,
    onSelect: React.PropTypes.func,
    onScrollClick: React.PropTypes.func,
  },
  onUpClick() {
    this.props.onScrollClick('up', this.props.cardId);
  },
  onDownClick() {
    this.props.onScrollClick('down', this.props.cardId);
  },
  render() {
    return (
      <div className="inner-container">
        <div className="column column-1" onClick={this.onUpClick}>
          <i className="fa fa-arrow-up"></i>
        </div>
        <Card priority={this.props.priority} cardId={this.props.cardId} imageUrl={this.props.imageUrl} onSelect={this.props.onSelect} key={this.props.cardId}/>
        <div className="column column-3" onClick={this.onDownClick}>
          <i className="fa fa-arrow-down"></i>
        </div>
      </div>
    );
  },
});
