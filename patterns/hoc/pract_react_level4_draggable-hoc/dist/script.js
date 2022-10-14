function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /*ВСПОМНИМ УСЛОВИЕ ЗАДАЧИ
Реализовать HOC (High Order Component) Draggable. Draggable должен быть компонентом, который, оборачивая другие компоненты, даёт им возможность перетаскивания их мышкой (Drag'n'Drop).
*/

function Circle({ color }) {
  return /*#__PURE__*/(
    React.createElement("div", {
      className: "circle",
      style: { backgroundColor: color } }));


}

function Triangle({ color }) {
  return /*#__PURE__*/(
    React.createElement("div", {
      className: "triangle",
      style: { borderBottomColor: color } }));


}

class Draggable extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      isDragging: false,

      prevDragX: 0,
      prevDragY: 0,

      translateX: 0,
      translateY: 0 });_defineProperty(this, "handleMouseDown",







    ({ clientX, clientY }) => {
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('mouseup', this.handleMouseUp);

      this.setState({
        isDragging: true,
        prevDragX: clientX,
        prevDragY: clientY });

    });_defineProperty(this, "handleMouseMove",

    ({ clientX, clientY }) => {
      const { isDragging } = this.state;

      if (!isDragging) {
        return;
      }

      const diffX = clientX - this.state.prevDragX;
      const diffY = clientY - this.state.prevDragY;

      this.setState({
        prevDragX: clientX,
        prevDragY: clientY,
        translateX: this.state.translateX + diffX,
        translateY: this.state.translateY + diffY });

    });_defineProperty(this, "handleMouseUp",

    () => {
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.removeEventListener('mouseup', this.handleMouseUp);

      this.setState({
        isDragging: false });

    });}componentWillUnmount() {window.removeEventListener('mousemove', this.handleMouseMove);window.removeEventListener('mouseup', this.handleMouseUp);}

  render() {
    const { children } = this.props;
    const { translateX, translateY, isDragging } = this.state;

    return /*#__PURE__*/(
      React.createElement("div", {
        onMouseDown: this.handleMouseDown,
        style: {
          transform: `translate(${translateX}px, ${translateY}px)`,
          cursor: isDragging ? 'grabbing' : 'grab',
          opacity: isDragging ? 0.7 : 1 } },


      children));


  }}


class DraggablePlayground extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",

    {
      colors: ['#EB5168', '#74E394', '#1A61F7', '#F5AF73', '#E26C5C'] });}


  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" },
      this.state.colors.map((color, i) => {
        const Component = i % 2 === 0 ?
        Circle :
        Triangle;

        return /*#__PURE__*/React.createElement(Draggable, null, /*#__PURE__*/
        React.createElement(Component, { key: i, color: color }));

      })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DraggablePlayground, null), document.querySelector("#app"));