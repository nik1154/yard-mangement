import React from 'react';
import {  Form, FormGroup, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Input type="email" name="email" id="exampleEmail" placeholder="User Name" style={{backgroundColor:"#e6e6e6", color: "#8f8fa1 ", border:"none", borderRadius:"25px", margin:"5px", marginBottom:"10px", minHeight:"3em", width: this.props.width, textAlign:"center"}} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" id="examplePassword" placeholder="Password " style={{backgroundColor:"#e6e6e6", color: "#8f8fa1 ", border:"none", borderRadius:"25px", margin:"5px", marginBottom:"10px", minHeight:"3em", width: this.props.width, textAlign:"center", marginRight: this.props.margin}} />
        </FormGroup>
       </Form>
    )
}
}