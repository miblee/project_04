import React from 'react';
import './App.css';
// import {Modal, Button} from 'react-bootstrap';


class ResultModal extends React.Component {

  render(){
    console.log(this.props);
    return (

        <div id='ResultsModal'>
          Your Statement:" {this.props.textContent} " <br />
          It's Sentiment Rating: {this.props.score}
        <br /><span onClick={this.props.close} >| close |</span>
        </div>
    )
  }
}

export default ResultModal


    // {
      // <Modal show={this.props.show} onHide={this.props.close}>
      //       <Modal.Dialog>
      //         <Modal.Header closeButton>
      //           <Modal.Title>I know you'd like to think your 💩  don't stink</ Modal.Title>
      //         </Modal.Header>
      //         <Modal.Body>
      //           {this.props.query} evaluates to:
      //           {this.props.score}
      //         </ Modal.Body>
      //         <Modal.Footer>
      //           <Button onClick={this.props.close}>Close</Button>
      //         </Modal.Footer>
      //       </Modal.Dialog>
      //     </Modal>
      // }
