import React from 'react';
import './App.css';
import {FormGroup, Button} from 'react-bootstrap';



class AnalyzeMyPost extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.analyzePost = this.analyzePost.bind(this);
  }


  handleChange(evt){
    this.setState({
      query: evt.target.value
    });
  }


  analyzePost(evt) {
    evt.preventDefault(evt);
    var text = {
      "documents": [{
      "id": 1,
      "text": this.state.query
      }]
    };
    text = JSON.stringify(text);
    console.log(typeof this.state.query);
    console.log(text);

    // HOW TO RESET TEXT AREA?
    // evt.target.value = '';

    fetch('/api', {
      method:'post',
      body: text
    })
    .then(res => console.log("this is ms's res:", res))
    .catch(function(error) {
      console.log('problem: ' + error.message);
    });
  }


  render() {
    return (
      <form onSubmit={this.analyzePost}>
        <FormGroup bsSize="large">
         <textarea style={{marginTop: '2em'}} rows="7" cols="50" type="text" onChange={this.handleChange} placeholder="Text to Analyze">
         </textarea><br />
         <Button id="submit_btn" type="submit">Submit</Button>
        </FormGroup>
      </form>
    )

  }
}

export default AnalyzeMyPost;
