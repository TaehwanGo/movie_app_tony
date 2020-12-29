import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [] // 좋은 습관 : 미래에 있을 수도 있는 것에 대한 선언, 여기에 굳이 없어도 되긴함
  }
  componentDidMount(){
    setTimeout(() => { // delay function
      this.setState({isLoading:false})
    }, 6000);
  }
  render(){
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}

export default App;
