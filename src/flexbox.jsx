import React from 'react';
import Column from './column.jsx';
import { connect } from 'react-redux';
import { increaseMotivatorPriority, decreaseMotivatorPriority } from './store/actions';
// const Modal = require('./modal.jsx');

let App = React.createClass({
  propTypes: {
    state: React.PropTypes.object,
    dispatch: React.PropTypes.func,
  },
  getInitialState() {
    return {
      title: '',
      imageUrl: '',
      description: '',
    };
  },
  onScrollClick(direction, cardIndex) {
    const { dispatch } = this.props;
    if (direction === 'up') dispatch(increaseMotivatorPriority(cardIndex));
    if (direction === 'down') dispatch(decreaseMotivatorPriority(cardIndex));
  },
  cardSelected(cardIndex) {
    this.setState({
      title: this.props.state.cards[cardIndex].name,
      imageUrl: this.props.state.cards[cardIndex].imageUrl,
      description: this.props.state.cards[cardIndex].description,
    });
    // $('#myModal').modal();
  },
  render() {
    const cardNodes = this.props.state.motivators.map((motivator, key) => {
      return React.createElement(Column,
        { key, priority: motivator.priority, imageUrl: this.props.state.cards[key].imageUrl, onSelect: this.cardSelected, cardIndex: key, onScrollClick: this.onScrollClick });
    });

    return (
      <div className="outer-container">
        {cardNodes}
      </div>
      );
  }
});

function select(state) {
  return {
    state
  };
}

export default connect(select)(App);

// <Modal title={this.state.title} imageUrl={this.state.imageUrl} description={this.state.description}/>

