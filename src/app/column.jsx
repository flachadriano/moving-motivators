import React from 'react';
import Card from './card.jsx';

module.exports = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
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
  topStyle(place) {
    if (place === 'up' && this.props.priority >= 1) return { color: '#4CAF50' };
    if (place === 'down' && this.props.priority <= -1) return { color: '#F44336' };
    return {};
  },
  render() {
    return (
      <div className="inner-container">
        <div className="column column-1" onClick={this.onUpClick} style={this.topStyle('up')}>
          <i className="material-icons">keyboard_arrow_up</i>
        </div>
        <Card name={this.props.name} priority={this.props.priority} cardId={this.props.cardId} imageUrl={this.props.imageUrl} onSelect={this.props.onSelect} key={this.props.cardId}/>
        <div className="column column-3" onClick={this.onDownClick} style={this.topStyle('down')}>
          <i className="material-icons">keyboard_arrow_down</i>
        </div>
      </div>
    );
  },
});
