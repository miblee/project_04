import React from 'react';
import './App.css';
import {Tabs, Tab} from 'react-bootstrap';
import AnalyzeMyPost from './AnalyzeMyPost';
import MyHistory from './MyHistory';

class NavBar extends React.Component {
  constructor(){
    super();

    // this.get_history = this.get_history.bind(this);
  }

  // get_history(){
  //   console.log('fetching history log')
  //   fetch('/posts')
  //   .then(res => res.json() )
  //   .then( data => {
  //     this.setState ({
  //       log: (this.statel.log).concat(data)
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }

  render(){

    return (
      <div>
        <Tabs id="navmenu" defaultActiveKey={1} animation={false}>
          <Tab eventKey={1} title="Analyze My Text">
             <AnalyzeMyPost />
          </Tab>
          <Tab eventKey={2} title="My History">Blabbity blah blah 🐣
            <MyHistory />
          </Tab>
        </Tabs>
      </div>
    )

  }
}

export default NavBar;



