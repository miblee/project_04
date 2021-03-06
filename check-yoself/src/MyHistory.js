import React from 'react';
import './App.css';
import {Button, Grid, Row, Col} from 'react-bootstrap';

class MyHistory extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      log: [],
      deletePostRes: '',
      avgScore: null
    }

    this.getHistory = this.getHistory.bind(this);
    this.deletePost = this.deletePost.bind(this);
    // this.calcAvgScore = this.calcAvgScore.bind(this);
  };

  componentWillMount(){
    this.getHistory()
  }


// WOULD BE NICE TO BE ABLE TO GRAPH GLOBAL DATA OUT VISUALLY
  // calcAvgScore(){
  //   var sum = (this.state.log).reduce( (total, num) =>{
  //     return total + num;
  //   });
  //   var avg = (sum)/((this.state.log).length)
  //   this.setState({
  //     avgScore: avg
  //   })
  // }

  getHistory(){
    fetch('https://thawing-forest-37622.herokuapp.com/posts')
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

    fetch(`https://thawing-forest-37622.herokuapp.com/posts/${id}`, {
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
    const delBtnStyle = {backgroundColor: '#EEDCE1'};
    return(
      <div>
        <h3>Your Analyzed Text Log</h3>
        <ul>
          <Grid>
            <Row className="show-grid">
              {
                this.state.log.map( (object, i) => {
                  const prettyDate = object.date.split(0, 10);
                  return(
                    <li style={liStyle} key={i}>
                      <Col xs={6} md={4} className="oneThought">
                        <h4>{prettyDate}</h4><hr />
                        <p>" {object.content} "</p>
                        <p>score: {object.score}</p>
                        <Button className="deleteBtn" style={delBtnStyle} id={object._id} onClick={this.deletePost} bsSize="xsmall">Delete</Button>
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
