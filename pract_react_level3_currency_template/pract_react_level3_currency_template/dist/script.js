//-------ЗАГОТОВКА КОДА-----------

class ExchangeRates extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("span", null, "\u041A\u0443\u0440\u0441\u044B \u0432\u0430\u043B\u044E\u0442:"), /*#__PURE__*/
      React.createElement("b", null, " USD "), /*#__PURE__*/
      React.createElement("span", null, "65.42"), /*#__PURE__*/
      React.createElement("b", null, " EUR "), /*#__PURE__*/
      React.createElement("span", null, "70.53")));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(ExchangeRates, null), document.querySelector("#app"));