//-------ЗАГОТОВКА КОДА-----------

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("button", null, "\u2764\uFE0F 0"));



  }}


LikeButton.propTypes = {
  initialLikeNumber: PropTypes.number };


ReactDOM.render( /*#__PURE__*/
React.createElement(LikeButton, { initialLikeNumber: 7 }),
document.querySelector("#app"));