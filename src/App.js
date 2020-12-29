import React from 'react';
// import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props){
    super(props);
    console.log("hello");
  }
  state = {
    count:0
  }
  add = () => {
    // this.state.count++; // 이렇게 할 경우 react는 render function을 refresh하지 않음
    // this.setState({count: this.state.count+1}); // react는 모든것을 다시 render하지 않고 변하는 부분만 새로 업데이트함(virtual DOM에 의해)
    this.setState(current => ({count: current.count+1})); // setState를 호출 할대마다 react는 새로운 state와 함께 render()를 호출
  }
  minus = () => {
    // this.state.count--; // setState()를 사용해야 됨
    // this.setState({count: this.state.count-1}); // state에 의존하므로 좋은 코드는 아니기 때문에 나중에 바꿀 예정
    this.setState(current => ({count: current.count-1}));
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
    alert('componentWillUnmount');
  }
  render(){
    console.log('render');
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
