//-------ЗАГОТОВКА КОДА-----------

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '' };

  }

  render() {
    const { placeholder } = this.props;

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("input", {
        type: "text",
        className: "input",
        placeholder: placeholder,
        value: this.state.value,
        onChange: e => this.setState({ value: e.target.value }) }), /*#__PURE__*/

      React.createElement("div", { className: "error" })));



  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(Input, {
  placeholder: "Username",
  validate: value => value.length < 3,
  errorMessage: "\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0430" }),

document.querySelector("#app"));