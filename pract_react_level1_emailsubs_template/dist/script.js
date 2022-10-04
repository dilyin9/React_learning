//-------ЗАГОТОВКА КОДА-----------

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("label", { htmlFor: "email" }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email:"), /*#__PURE__*/
      React.createElement("input", { type: "email", id: "email" }), /*#__PURE__*/
      React.createElement("button", null, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));