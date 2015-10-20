const Flexbox = require('./flexbox.jsx');
const dragula = require('react-dragula');

const cards = [
    { imageUrl: 'Acceptance.png', name: 'Elfogadás', description: 'Motivál, hogy a körülöttem lévő emberek elfogadnak olyannak, amilyen vagyok, és megerősítenek abban, amit csinálok.'},
    { imageUrl: 'Curiosity.png', name: 'Kíváncsiság', description: 'Motivál, hogy bár vannak monoton, esetleg unalmas feladatok, számos más dolog van, amit felfedezhetek és amin gondolkodhatok.'},
    { imageUrl: 'Freedom.png', name: 'Szabadság', description: 'Motivál, hogy független vagyok a többiektől, megvannak a saját feladataim és felelősségem.'},
    { imageUrl: 'Goal.png', name: 'Cél', description: 'Motivál, hogy nem csupán pénzt keresek, hanem a munkámban visszatükröződnek a személyes (élet)céljaim is. Például munkámmal hozzájárulok ahhoz, hogy a világ (kicsit) jobb legyen.'},
    { imageUrl: 'Honor.png', name: 'Megbecsülés', description: 'Motivál, hogy a személyes értékrendem megjelenik a csapat / szervezet alkotta szabályokban, ezért örömmel tartom be őket, lojális vagyok hozzájuk.'},
    { imageUrl: 'Mastery.png', name: 'Szakmai kiválóság', description: 'Motivál, hogy a munkám olyan kihívások elé állít, amelyek próbára teszik a szaktudásomat, de képességeimnek megfelelőek (nem érzem lehetetlennek a megoldásukat).'},
    { imageUrl: 'Order.png', name: 'Rend', description: 'Motivál, hogy a szervezetben elegendő előírás, szabályozás és irányelv van ahhoz, hogy kiszámítható, stabil munkakörnyezetben dolgozhassak.'},
    { imageUrl: 'Power.png', name: 'Hatalom', description: 'Motivál, hogy lehetőségem van befolyásolni az eseményeket, amik körülöttem történnek.'},
    { imageUrl: 'Relatedness.png', name: 'Kötődés', description: 'Motivál, hogy a körülöttem lévő emberekkel jó kapcsolatot ápolok, és a közeli ismeretségek kialakulását a céges környezet is támogatja.'},
    { imageUrl: 'Status.png', name: 'Státusz', description: 'Motivál, hogy a szervezeti hierarchiában jó pozícióban vagyok, és ezt a velem dolgozók is elismerik.'},
]

var App = React.createClass({
    render: function () {
        return <Flexbox cards={cards}/>;
    },
    componentDidMount: function () {
        dragula([document.querySelector('#card_container')], {
            direction: 'horizontal',
        });
    }
});

React.render(<App />, document.getElementById('reactHere'));

// var zoomed;

// $('.image-up').on('click', function (event) {
//     var up = parseFloat($(event.currentTarget).parent().children('.image-up').css('flex-grow'));
//     var down = parseFloat($(event.currentTarget).parent().children('.image-down').css('flex-grow'));
//     $(event.currentTarget).parent().children('.image-up').css('flex-grow', up - 0.1);
//     $(event.currentTarget).parent().children('.image-down').css('flex-grow', down + 0.1);
// })

// $('.image-down').on('click', function (event) {
//     var up = parseFloat($(event.currentTarget).parent().children('.image-up').css('flex-grow'));
//     var down = parseFloat($(event.currentTarget).parent().children('.image-down').css('flex-grow'));
//     $(event.currentTarget).parent().children('.image-up').css('flex-grow', up + 0.1);
//     $(event.currentTarget).parent().children('.image-down').css('flex-grow', down - 0.1);
// });
