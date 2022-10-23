function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /*ВСПОМНИМ УСЛОВИЕ ЗАДАЧИ
Реализуйте компонент с двумя полями для ввода пароля. Если введенные пароли не совпадают или они слишком короткие (меньше 6 символов), то выдать соответсвующие сообщения.
*/

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '' };

  }

  render() {
    const {
      placeholder,
      onChange,
      isPassword } =
    this.props;

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("input", {
        type: isPassword ? 'password' : 'text',
        className: "input",
        placeholder: placeholder,
        value: this.state.value,
        onChange: e => {
          this.setState({ value: e.target.value });
          if (onChange) {
            onChange(e.target.value);
          }
        } })));



  }}


class CheckPasswords extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",






    (fieldName, value) => {
      this.setState({ [fieldName]: value }, this.checkPasswords);
    });_defineProperty(this, "checkPasswords",

    () => {
      const { password1, password2 } = this.state;
      const message = password1 !== password2 ?
      'Пароли не совпадают' :
      password1.length < 6 ?
      'Пароль должен быть не менее 6 символов' :
      '';

      this.setState({ message });
    });this.state = { password1: '', password2: '' };}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(Input, {
        placeholder: "Введите пароль",
        isPassword: true,
        onChange: value => this.handleChange('password1', value) }), /*#__PURE__*/

      React.createElement(Input, {
        placeholder: "Введите пароль повторно",
        isPassword: true,
        onChange: value => this.handleChange('password2', value) }), /*#__PURE__*/

      React.createElement("div", { className: "message" }, this.state.message)));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(CheckPasswords, null),
document.querySelector("#app"));