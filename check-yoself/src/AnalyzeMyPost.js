import React from 'react';
import './App.css';
import {FormGroup, Button, Modal} from 'react-bootstrap';



class AnalyzeMyPost extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      query: '',
      score: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.analyzePost = this.analyzePost.bind(this);
    this.getInitialState = this.getInitialState.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this)
  }


  handleChange(evt){
    this.setState({
      query: evt.target.value
    });
  };

  getInitialState() {
    return { showModal: false };
  };

  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
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
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>I know you'd like to think your 💩  don't stink</ Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.state.query} evaluates to:
              {this.state.score}
            </ Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    )

  }
}

export default AnalyzeMyPost;
