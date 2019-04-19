import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
        <DropdownToggle caret style={{backgroundColor:"#e6e6e6", color: "#8f8fa1 ", border:"none", borderRadius:"25px", margin:"5px", marginBottom:"10px", minHeight:"3em", width: this.props.width, display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft:"2em", paddingRight:"2em"}}>
          {this.props.name}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>{this.props.name} 1</DropdownItem>
          <DropdownItem>{this.props.name} 2</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}