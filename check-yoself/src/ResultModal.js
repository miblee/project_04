import React from 'react';
import './App.css';
import {Button, Modal} from 'react-bootstrap';


class ResultModal extends React.Component {

  render(){
    const modalStyle = {
      backgroundColor: '#EEDCE1',
    }

    return (
      <div>
        <div className="static-modal">
          <Modal.Dialog >
            <Modal.Header>
              <Modal.Title>Your Post Analysis</Modal.Title>
            </Modal.Header>

            <Modal.Body style={modalStyle}>
              <p>Your Statement: {this.props.textContent}</p>
              <p>Its Sentiment Rating: {this.props.score}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.props.close} >❌</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    )
  }
}

export default ResultModal
