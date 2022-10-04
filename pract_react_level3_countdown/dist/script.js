/*ВСПОМНИМ УСЛОВИЕ ЗАДАЧИ
Реализуйте обратный отсчёт до заданной даты — вашего дня рождения.
*/

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isInFuture: true };

  }

  componentDidMount() {
    const countDown = setInterval(() => {
      const myBirthday = new Date('Aug 15, 2020 00:00:00').getTime();
      const now = new Date().getTime();
      const distance = myBirthday - now;

      //when date is reached
      if (distance < 0) {
        clearInterval(countDown);
        this.setState({
          isInFuture: false });

        alert("IT'S MY BIRTHDAY!");
      } else {
        const days = Math.floor(distance / day);
        const hours = Math.floor(distance % day / hour);
        const minutes = Math.floor(distance % hour / minute);
        const seconds = Math.floor(distance % minute / second);

        this.setState({
          days,
          hours,
          minutes,
          seconds });

      }
    }, second);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: "main-container" }, /*#__PURE__*/
      React.createElement("h1", { className: "title" }, "To my birthday:"), /*#__PURE__*/
      React.createElement("div", { className: "counter" }, /*#__PURE__*/
      React.createElement("div", { className: "clock-part" }, /*#__PURE__*/
      React.createElement("span", { className: "number" }, days), "days"), /*#__PURE__*/

      React.createElement("div", { className: "clock-part" }, /*#__PURE__*/
      React.createElement("span", { className: "number" }, hours), "Hours"), /*#__PURE__*/

      React.createElement("div", { className: "clock-part" }, /*#__PURE__*/
      React.createElement("span", { className: "number" }, minutes), "Minutes"), /*#__PURE__*/

      React.createElement("div", { className: "clock-part" }, /*#__PURE__*/
      React.createElement("span", { className: "number" }, seconds), "Seconds")), /*#__PURE__*/


      React.createElement("div", { className: "birthday-emoji" }, "\uD83C\uDF89")));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));