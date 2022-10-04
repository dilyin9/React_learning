/*ЗАГОТОВКА КОДА*/

class StaredRating extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", { className: "rating" });

  }}


class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h3", { class: "title" }, "\u0417\u0435\u043B\u0435\u043D\u0430\u044F \u043C\u0438\u043B\u044F"), /*#__PURE__*/
    React.createElement(StaredRating, { rate: 4 }), /*#__PURE__*/
    React.createElement("h3", { class: "title" }, "\u0421\u0442\u0440\u0430\u0436\u0438 \u0413\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438"), /*#__PURE__*/
    React.createElement(StaredRating, { rate: 3 }));

  }}


StaredRating.propTypes = {
  rate: PropTypes.number };


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));