import React from 'react';
import './App.css';
import {FormGroup, Button} from 'react-bootstrap';
import ResultModal from './ResultModal.js'


class AnalyzeMyPost extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      query: '',
      score: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.analyzePost = this.analyzePost.bind(this);

  }


  handleChange(evt){
    this.setState({
      query: evt.target.value
    });
  };


  analyzePost(evt) {
    evt.preventDefault();
    var text = {query: this.state.query}
    text = JSON.stringify(text);
    // HOW TO RESET TEXT AREA?
    // evt.target.value = '';

    fetch('/api', {
      method:'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: text
    })
    .then(res => res.json() )
    .then(data => {
      this.setState({
        score: data.score
      })
    })
    .catch(function(error) {
      console.log('problem: ' + error.message);
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.analyzePost}>
          <FormGroup bsSize="large">
           <textarea style={{marginTop: '2em'}} rows="7" cols="50" type="text" onChange={this.handleChange} placeholder="Text to Analyze">
           </textarea><br />
           <Button id="submit_btn" type="submit" onClick={this.open}>Submit</Button>
          </FormGroup>
        </form>
        <ResultModal score={this.state.score} textContent={this.state.query} />
      </div>
    )

  }
}

export default AnalyzeMyPost;
