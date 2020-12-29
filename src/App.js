import React from 'react';

// function Food(props) {
//   console.log(props.fav);
//   return <h1>I like potato</h1>
// }
function Food({fav}) {
  console.log(fav);
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="pork" />
    </div>
  );
}

export default App;
