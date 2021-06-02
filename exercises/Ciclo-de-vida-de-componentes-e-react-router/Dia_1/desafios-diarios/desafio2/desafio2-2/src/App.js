import './App.css';
import React from 'react';
import Profile from './components/Profile';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.loadingPage = this.loadingPage.bind(this);

    this.state = {
      loading: false,
    }
  }

  loadingPage() {
    return(
      <span> Loading ...</span>
    )
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? this.loadingPage : <h1>tenso</h1> }
      </div>
    );
  }
}

export default App;
