import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:5251/')
    .then(response => response.json())
    .then(data => this.setState({data: data[0]}))
  }
  
  render() {
    var backendResponse = this.state.data
    return (
      <div>
        Backend Response: {backendResponse.data}
        <p>
          API: http://localhost:5251
        </p>
        <p>
          Backend: http://localhost:32777
        </p>
        <p>
          Frontend: http://localhost:3000
        </p>
      </div>
    )
  }
}

export default App;

