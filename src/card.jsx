const React = require('react');

module.exports = React.createClass({
  propTypes: {
    cardIndex: React.PropTypes.number,
    imageUrl: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    priority: React.PropTypes.number,
  },
  onClick() {
    this.props.onSelect(this.props.cardIndex);
  },
  calculatePriorityStyle(place) {
    switch (place) {
    case 'up': return { flexGrow: 4 - this.props.priority };
    case 'down': return { flexGrow: 4 + this.props.priority };
    default: return {};
    }
  },
  render() {
    return (
      <div className="column column-2">
        <div className="inside inside-up" style={this.calculatePriorityStyle('up')}>UP</div>
        <img className="inside inside-img col-image" src={'card/' + this.props.imageUrl} onClick={this.onClick}/>
        <div className="inside inside-down" style={this.calculatePriorityStyle('down')}>DOWN</div>
      </div>
      );
  },
});
