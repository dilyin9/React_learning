/*ВСПОМНИМ УСЛОВИЕ ЗАДАЧИ
Реализуйте блок с данными для авторизации. Если человек уже был зарегистрирован, то отображать только поле для заполнения логина. Иначе показывать также поля для ввода телефона и электронной почты.
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedUp: false };

  }

  handleChecked(e) {
    this.setState({
      isSignedUp: e.target.checked });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", null, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0430\u043D\u043A\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438"), /*#__PURE__*/
      React.createElement("div", { className: "sign-up-block" }, /*#__PURE__*/
      React.createElement("input", { type: "checkbox",
        id: "isSignedUp",
        className: "sign-up-block__checkbox",
        onChange: e => this.handleChecked(e) }), /*#__PURE__*/

      React.createElement("label", { htmlFor: "isSignedUp", className: "sign-up-block__label" }, "\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D")), /*#__PURE__*/



      React.createElement("label", { htmlFor: "login", className: "form-label" }, "Login"), /*#__PURE__*/
      React.createElement("input", { id: "login", className: "form-input" }),

      !this.state.isSignedUp ? /*#__PURE__*/
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("label", { htmlFor: "phone", className: "form-label" }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/
      React.createElement("input", { id: "phone", className: "form-input" }), /*#__PURE__*/
      React.createElement("label", { htmlFor: "email", className: "form-label" }, "Email"), /*#__PURE__*/
      React.createElement("input", { id: "email", className: "form-input" })) :

      undefined));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));