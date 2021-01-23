import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
    }
    toggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        const {isOpen}=this.state
        return (
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">TASK</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className='nav-link' to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/add">Add</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to="/view">View</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar> 
        )
    }
}
