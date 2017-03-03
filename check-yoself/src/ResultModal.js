import React from 'react';
import './App.css';
import {Button, Modal} from 'react-bootstrap';


class ResultModal extends React.Component {
  constructor(props){
    super();

    this.state = {
      query: props.query,
      score: props.score
    };
    this.getInitialState = this.getInitialState.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this)
  }

  getInitialState() {
    return { showModal: false };
  };

  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
  };
  render(){
    return (
      // <Modal show={this.state.showModal} onHide={this.close}>
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
      // </Modal>
    )
  }
}

export default ResultModal
