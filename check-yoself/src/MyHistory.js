import React from 'react';
import './App.css';
// import {FormGroup, Button} from 'react-bootstrap';

class MyHistory extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      post_log: 'bald eagle'
    }

    // this.analyzePost = this.analyzePost.bind(this);
  // }


  // handleChange(evt){
  //   this.setState({
  //     query: evt.target.value
  //   });
  // }

  }


  render() {
    const log = this.props.get_history();
    return (
      <div>
        Howdy<br />
        {log}
        {this.props.get_history}
      </div>
    )

  }
}

export default MyHistory;
