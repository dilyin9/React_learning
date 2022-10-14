/*ВСПОМНИМ УСЛОВИЕ ЗАДАЧИ
Даны несколько навыков и уровень их прокаченности в процентах. Отобразите бар, в котором закрашена область, пропорциональная числу процентов по каждому из навыков.
*/

class Progress extends React.Component {
  render() {
    const { title, amount } = this.props;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h3", { className: "progressBarTitle" }, title), /*#__PURE__*/
    React.createElement("div", { className: "progressBar" }, /*#__PURE__*/
    React.createElement("div", { className: "progressBarDone", style: { width: `${amount}%` } },
    amount, "%")));



  }}


class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", { className: "title" }, "My Skills"), /*#__PURE__*/
      React.createElement(Progress, { title: "React", amount: 35 }), /*#__PURE__*/
      React.createElement(Progress, { title: "JavaScript", amount: 68 }), /*#__PURE__*/
      React.createElement(Progress, { title: "CSS", amount: 55 })));


  }}



Progress.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired };


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));