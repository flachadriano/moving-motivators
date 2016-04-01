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

const cards = [
  { imageUrl: 'Acceptance.png',
    name: 'Elfogadás',
    description: 'Motivál, hogy a körülöttem lévő emberek elfogadnak olyannak, amilyen vagyok, és megerősítenek abban, amit csinálok.' },
  { imageUrl: 'Curiosity.png',
    name: 'Kíváncsiság',
    description: 'Motivál, hogy bár vannak monoton, esetleg unalmas feladatok, számos más dolog van, amit felfedezhetek és amin gondolkodhatok.' },
  { imageUrl: 'Freedom.png',
    name: 'Szabadság',
    description: 'Motivál, hogy független vagyok a többiektől, megvannak a saját feladataim és felelősségem.' },
  { imageUrl: 'Goal.png',
    name: 'Cél',
    description: 'Motivál, hogy nem csupán pénzt keresek, hanem a munkámban visszatükröződnek a személyes (élet)céljaim is. Például munkámmal hozzájárulok ahhoz, hogy a világ (kicsit) jobb legyen.' },
  { imageUrl: 'Honor.png',
    name: 'Megbecsülés',
    description: 'Motivál, hogy a személyes értékrendem megjelenik a csapat / szervezet alkotta szabályokban, ezért örömmel tartom be őket, lojális vagyok hozzájuk.' },
  { imageUrl: 'Mastery.png',
    name: 'Szakmai kiválóság',
    description: 'Motivál, hogy a munkám olyan kihívások elé állít, amelyek próbára teszik a szaktudásomat, de képességeimnek megfelelőek (nem érzem lehetetlennek a megoldásukat).' },
  { imageUrl: 'Order.png',
    name: 'Rend',
    description: 'Motivál, hogy a szervezetben elegendő előírás, szabályozás és irányelv van ahhoz, hogy kiszámítható, stabil munkakörnyezetben dolgozhassak.' },
  { imageUrl: 'Power.png',
    name: 'Hatalom',
    description: 'Motivál, hogy lehetőségem van befolyásolni az eseményeket, amik körülöttem történnek.' },
  { imageUrl: 'Relatedness.png',
    name: 'Kötődés',
    description: 'Motivál, hogy a körülöttem lévő emberekkel jó kapcsolatot ápolok, és a közeli ismeretségek kialakulását a céges környezet is támogatja.' },
  { imageUrl: 'Status.png',
    name: 'Státusz',
    description: 'Motivál, hogy a szervezeti hierarchiában jó pozícióban vagyok, és ezt a velem dolgozók is elismerik.' },
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
  onSubmit() {
    store.getState().motivators.map(motivator => {
      console.log(cards[motivator.id].name, `(${motivator.priority})`);
    });
  },
  toggleDebug() {
    this.setState({ debug: !this.state.debug });
  },
  toggleForm() {
    this.setState({ form: true });
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
