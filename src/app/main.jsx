import React from 'react';
import ReactDOM from 'react-dom';
import dragula from 'react-dragula';
import Flexbox from './flexbox.jsx';
import FormButton from './form-button.jsx';
import FormSubmit from './form-submit.jsx';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import motivatorsApp from './store/reducers';
import { motivatorOrderModified } from './store/actions';

// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';

const request = require('superagent');

const cards = [
  { imageUrl: 'Acceptance.png',
    name: 'Aceitação',
    description: 'As pessoas ao meu redor aprovam o que eu faço e quem eu sou' },
  { imageUrl: 'Curiosity.png',
    name: 'Curiosidade',
    description: 'Eu tenho muitas coisas para investigar e pensar' },
  { imageUrl: 'Freedom.png',
    name: 'Liberdade',
    description: 'Eu sou independente dos outros com meu próprio trabalho e responsabilidades' },
  { imageUrl: 'Goal.png',
    name: 'Meta',
    description: 'Meu propósito na vida é refletido no trabalho que eu faço' },
  { imageUrl: 'Honor.png',
    name: 'Honra',
    description: 'Eu me sinto orgulhoso que meus valores pessoais estão refletidos em como eu trabalho' },
  { imageUrl: 'Mastery.png',
    name: 'Maestria',
    description: 'Meu trabalho desafia minha competência mas ainda está dentro das minhas habilidades' },
  { imageUrl: 'Order.png',
    name: 'Ordem',
    description: 'Existem regras e políticas o suficiente para um ambiente estável' },
  { imageUrl: 'Power.png',
    name: 'Poder',
    description: 'Há espaço o suficiente para que eu influencie o que está acontecendo em torno de mim' },
  { imageUrl: 'Relatedness.png',
    name: 'Relação',
    description: 'Eu tenho bons contatos sociais com as pessoas dentro e em torno do meu trabalho' },
  { imageUrl: 'Status.png',
    name: 'Status',
    description: 'Minha posição é boa e reconhecida pelas outras pessoas com as quais eu trabalho;' },
];

const motivators = [
  { id: 0, priority: 0 },
  { id: 1, priority: 0 },
  { id: 2, priority: 0 },
  { id: 3, priority: 0 },
  { id: 4, priority: 0 },
  { id: 5, priority: 0 },
  { id: 6, priority: 0 },
  { id: 7, priority: 0 },
  { id: 8, priority: 0 },
  { id: 9, priority: 0 },
];

const storeMotivators = {
  cards,
  motivators
};

const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(motivatorsApp, storeMotivators);

const App = React.createClass({
  getInitialState() {
    return {
      debug: true,
      form: false,
    };
  },
  componentDidMount() {
    dragula([document.querySelector('.cards-outer-container')], {
      direction: 'horizontal',
    }).on('drop', function () {
      const x = document.getElementsByClassName('column-2');
      const modifiedOrder = [];
      for (let i = 0; i < 10; i++) {
        modifiedOrder.push(parseInt(x[i].getAttribute('data-reactid').split('$')[1].split('.')[0], 10));
      }
      this.cancel(true);
      store.dispatch(motivatorOrderModified(modifiedOrder));
    });
  },
  onSubmit(email, name) {
    const result = store.getState().motivators.map(motivator => ({
      id: motivator.id,
      name: cards[motivator.id].name,
      priority: motivator.priority,
      nameUser: name
    }));

    request
      .post('/save')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({ email, result })
      .end();
  },
  toggleDebug() {
    this.setState({ debug: !this.state.debug });
  },
  toggleForm(name) {
    // this.setState({ form: true });
    this.onSubmit('adriano.araujo@philips.com', name)
  },
  containerClass() {
    return this.state.form ? 'big-container transitioned' : 'big-container';
  },
  render() {
    return (
      <div className={this.containerClass()} style={{ height: '100%', width: '100%' }}>
        <Provider store={store}>
          <Flexbox />
        </Provider>
        <FormButton onClick={this.toggleForm} />
        <FormSubmit onSubmitClick={this.onSubmit} />
      </div>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('reactHere'));
