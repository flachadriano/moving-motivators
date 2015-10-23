import React from 'react';
import Column from './column.jsx';
import { connect } from 'react-redux';
import { increaseMotivatorPriority, decreaseMotivatorPriority } from './store/actions';

const App = React.createClass({
  propTypes: {
    state: React.PropTypes.object,
    dispatch: React.PropTypes.func,
  },
  getInitialState() {
    return {
      title: this.props.state.cards[0].name,
      imageUrl: this.props.state.cards[0].imageUrl,
      description: this.props.state.cards[0].description,
    };
  },
  onScrollClick(direction, cardId) {
    const { dispatch } = this.props;
    if (direction === 'up') dispatch(increaseMotivatorPriority(cardId));
    if (direction === 'down') dispatch(decreaseMotivatorPriority(cardId));
  },
  cardSelected(cardId) {
    // FIXME
    this.setState({
      title: this.props.state.cards[cardId].name,
      imageUrl: this.props.state.cards[cardId].imageUrl,
      description: this.props.state.cards[cardId].description,
    });
  },
  render() {
    const cardNodes = this.props.state.motivators.map((motivator, key) => {
      return React.createElement(Column,
        { key: motivator.id,
          priority: motivator.priority,
          imageUrl: this.props.state.cards[motivator.id].imageUrl,
          onSelect: this.cardSelected,
          cardId: motivator.id,
          onScrollClick: this.onScrollClick
        });
    });

    return (
      <div className="outer-container">
        <div className="detail-outer-container">
          <div className="detail-card">
            <div className="detail-card-image">
              <img src={'cardempty/' + this.state.imageUrl}/>
            </div>
          </div>
          <div className="detail-text">
            <div className="detail-text-header">{this.state.title}</div>
            <div className="detail-text-desc">{this.state.description}</div>
          </div>
        </div>
        <div className="cards-outer-container">
          {cardNodes}
        </div>
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
