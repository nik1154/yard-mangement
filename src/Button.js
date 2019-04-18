import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div className="go-btn">
        <Button id={this.props.id} style={{backgroundColor:this.props.color, border:"none", borderRadius:"25px", minWidth:"95%", minHeight:"3em", margin:"5px", marginRight:"5%"}}>{this.props.name}</Button>{' '}
      </div>
    );
  }
}