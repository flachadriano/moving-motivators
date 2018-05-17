import React from 'react';

module.exports = React.createClass({
  propTypes: {
    cardId: React.PropTypes.number,
    imageUrl: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    priority: React.PropTypes.number,
  },
  onClick() {
    this.props.onSelect(this.props.cardId);
  },
  calculatePriorityStyle(place) {
    switch (place) {
    case 'up': return { flexGrow: 1 - this.props.priority };
    case 'down': return { flexGrow: 1 + this.props.priority };
    default: return {};
    }
  },
  render() {
    return (
      <div className="column column-2">
        <div className="inside inside-up" style={this.calculatePriorityStyle('up')}></div>
        <div className="inside inside-img">
          <img className="col-image" src={'card/' + this.props.imageUrl} onClick={this.onClick}/>
          <span style={{color: '#000000'}}>{this.props.name}</span>
        </div>
        <div className="inside inside-down" style={this.calculatePriorityStyle('down')}></div>
      </div>
      );
  },
});
