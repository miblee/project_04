import React from 'react';
import './App.css';
// import {FormGroup, Button} from 'react-bootstrap';

class MyHistory extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      log: []
    }

    this.get_history = this.get_history.bind(this);

  };

componentWillMount(){
  this.get_history()
}
  get_history(){
    fetch('/posts')
    .then(res => res.json() )
    .then( data => {
      this.setState({
        log: data.posts
      })
    })
    .catch(err => console.log(err))
  }



  render(){
    const liStyle = {
      listStyle: 'none'
    };

    console.log(this.state)
    return(
      <div>
        <ul>
          {
            this.state.log.map( (object, i) => {
              return <li style={liStyle} key={i} className="card">analyzed text: {object.content} || score: {object.score}</li>
            })
          }
        </ul>
      </div>
    )
  }

}

export default MyHistory;
