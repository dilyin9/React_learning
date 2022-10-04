//-------ЗАГОТОВКА КОДА-----------

const items = ['apple', 'pineapple', 'orange', 'apricot', 'lime', 'lemon', 'plum'];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "filtered-list" }, /*#__PURE__*/
      React.createElement("input", { className: "filtered-list__input" }), /*#__PURE__*/
      React.createElement("ul", { className: "filtered-list__list" },
      this.props.items.map((item, ind) => /*#__PURE__*/
      React.createElement("li", { key: ind, className: "filtered-list__item" }, item)))));




  }}


App.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string) };


ReactDOM.render( /*#__PURE__*/React.createElement(App, { items: items }), document.querySelector("#app"));