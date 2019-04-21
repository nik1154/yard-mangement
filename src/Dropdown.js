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
        <DropdownToggle caret id={this.props.name}>
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