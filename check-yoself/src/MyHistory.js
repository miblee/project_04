import React from 'react';
import './App.css';
// import {FormGroup, Button} from 'react-bootstrap';

class MyHistory extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      post_log: 'bald eagle'
    }

    this.get_history = this.get_history.bind(this);
    // this.analyzePost = this.analyzePost.bind(this);
  // }


  // handleChange(evt){
  //   this.setState({
  //     query: evt.target.value
  //   });
  // }

  }

  get_history(){
    console.log('fetching')
    fetch('/text')
    .then(res => console.log(res))
    .then(j => console.log(j))
    .catch(err => console.log(err))
  }

  render() {
    {this.get_history()}
    return (
      <div>
        Howdy<br />
      </div>
    )

  }
}

export default MyHistory;
