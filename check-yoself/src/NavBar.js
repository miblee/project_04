import React from 'react';
import './App.css';
import {Tabs, Tab} from 'react-bootstrap';
import AnalyzeMyPost from './AnalyzeMyPost';
import MyHistory from './MyHistory';

class NavBar extends React.Component {

  render(){

    return (
      <div>
        <Tabs id="navmenu" defaultActiveKey={1} animation={false}>
          <Tab eventKey={1} title="Analyze My Text">
             <AnalyzeMyPost />
          </Tab>
          <Tab eventKey={2} title="My History">
            <MyHistory />
          </Tab>
        </Tabs>
      </div>
    )

  }
}

export default NavBar;



