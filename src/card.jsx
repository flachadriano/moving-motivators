module.exports = React.createClass({
  propTypes: {
    cardIndex: React.PropTypes.number,
    imageUrl: React.PropTypes.string,
    onSelect: React.PropTypes.func
  },
  onClick() {
    this.props.onSelect(this.props.cardIndex);
  },
  render() {
    return (
      <div className="column column-2">
        <div className="inside inside-up">UP</div>
        <img className="inside inside-img col-image" src={ 'card/' + this.props.imageUrl} onClick={this.onClick}/>
        <div className="inside inside-down">DOWN</div>
      </div>
      );
  },
});
