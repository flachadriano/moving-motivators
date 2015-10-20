const Column = require('./column.jsx');
const Modal = require('./modal.jsx');

module.exports = React.createClass({
  getInitialState() {
    return {
      title: '',
      imageUrl: '',
      description: '',
    };
  },

  propTypes: {
    cards: React.PropTypes.array
  },

  cardSelected(cardIndex) {
    this.setState({
      title: this.props.cards[cardIndex].name,
      imageUrl: this.props.cards[cardIndex].imageUrl,
      description: this.props.cards[cardIndex].description,
    });
    // $('#myModal').modal();
  },

  onScrollClick(direction, cardIndex) {
    console.log('onScrollClick', direction, cardIndex);
  },

  render() {
    const cardNodes = this.props.cards.map( (card, key) => {
      return React.createElement(Column,
        { imageUrl: card.imageUrl, onSelect: this.cardSelected, cardIndex: key, onScrollClick: this.onScrollClick });
    }.bind(this));

    return (
      <div className="outer-container">
        {cardNodes}
      </div>
      );
  },
});

// <Modal title={this.state.title} imageUrl={this.state.imageUrl} description={this.state.description}/>

