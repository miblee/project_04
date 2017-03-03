import React from 'react';
import './App.css';
import {Button, Grid, Row, Col} from 'react-bootstrap';

class MyHistory extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      log: [],
      deletePostRes: ''
    }

    this.getHistory = this.getHistory.bind(this);
    this.deletePost = this.deletePost.bind(this);
  };

  componentWillMount(){
    this.getHistory()
  }

  getHistory(){
    fetch('/posts')
    .then(res => res.json() )
    .then( data => {
      this.setState({
        log: data.posts
      })
    })
    .catch(err => console.log(err))
  }


  deletePost(evt){
    evt.preventDefault();
    var id = evt.target.id;

    fetch(`/posts/${id}`, {
      method:'post',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then( (res) => res.json() )
    .then( data => {
      this.setState({
        log: data.posts
      });
    })
    .catch(function(error) {
      console.log('problem: ' + error.message);
    });
}


  render() {
    const liStyle = {listStyle: 'none'};
    return(
      <div>
        <h3>Your Analyzed Text Log</h3>
        <ul>
          <Grid>
            <Row className="show-grid">
              {
                this.state.log.map( (object, i) => {
                  return(
                    <li style={liStyle} key={i}>
                      <Col xs={6} md={4} className="oneThought">
                        <h4>{object.date}</h4><hr />
                        <p>" {object.content} "</p>
                        <p>score: {object.score}</p>
                        <Button id={object._id} onClick={this.deletePost} bsSize="xsmall">Delete</Button>
                      </Col>
                  </li>
                  )
                })
              }
            </Row>
          </Grid>
        </ul>
      </div>
    )
  }

}

export default MyHistory;
