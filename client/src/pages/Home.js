import React from 'react';

class Home extends React.Component {
  state = {
    currentUser: null
  };

  componentDidMount() {
    //make axios call to backend to get currentUser info and set it to state
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
