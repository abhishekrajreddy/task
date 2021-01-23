import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom'
import {onEditingUser,onUpdatingUser} from './../redux/Action/userAction'

class EditUser extends Component {
    constructor(props){
        super(props);
        // console.log(this.props.match.params)
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            states:'',
            city:'',
            pincode:'',
        }   
    }
    componentDidMount=()=>{
        const userData= this.props.match.params
        this.props.onEditingUser(userData)
        this.setState(
        {   first_name:userData.first_name,
            last_name:userData.last_name,
            email:userData.email,
            states:userData.states,
            city:userData.city,
            pincode:userData.pincode,
        }
        )
    }

    onHandleChange=(e)=>{this.setState({[e.target.name]:e.target.value})} 

    onUpdate=()=>{
        const {first_name,last_name,email,states,city,pincode} = this.state;
        const updatedData={first_name,last_name,email,states,city,pincode}
        this.props.onUpdatingUser(updatedData,this.props.history)
    }
    render() {
        const {first_name,last_name,email,states,city,pincode} = this.state;
        // if(!this.props.user.user)return(<div className='text-center container mt-5'><h1>LOADING...</h1></div>)

        return (
            <div>
                
                <div className='container mt-5'>
                    <div className='row justify-content-center'>
                        <div className='col-6 card py-3'>
                            <h1 className='text-center text-info'><u>Edit User</u></h1>
                             <div className='form-group'>
                                <label>First Name</label>
                                <input type='text' className='form-control' name='first_name' value={first_name} onChange={this.onHandleChange}  />
                            </div>
                            <div className='form-group'>
                                <label>Last Name</label>
                                <input type='text' className='form-control' name='last_name' value={last_name} onChange={this.onHandleChange}  />
                            </div>
                            <div className='form-group'>
                                <label>Email</label>
                                <input type='email' className='form-control' name='email' value={email} onChange={this.onHandleChange} readOnly />
                            </div>
                            <div className='form-group'>
                                <label>State</label>
                                <select className='form-control' name='states' value={states} onChange={this.onHandleChange}>
                                <option value='none'>---Select State--</option>
                                    <option value='maharashtra'>Maharashtra</option>
                                    <option value='delhi'>Delhi</option>
                                    <option value='goa'>Goa</option>
                                    <option value='gujrat'>Gujrat</option>
                                </select>
                            </div>
                            <div className='from-group'>
                                <label>City</label>
                                <input type='text' className='form-control' name='city' value={city} onChange={this.onHandleChange}  />
                            </div>
                            <div className='from-group'>
                                <label>Pincode</label>
                                <input type='tel' className='form-control' name='pincode'  value={pincode} onChange={this.onHandleChange} minlength="5"  maxlength="5"/>
                            </div>
                            <div className='mt-2 text-right'>
                                <button className='btn btn-info form-control w-25' onClick={this.onUpdate}>Update</button>
                                <Link to='/view'><button className='btn btn-secondary form-control w-25 ml-1' >Cancel</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    user:state.user
})

export default connect(mapStateToProps,{onEditingUser,onUpdatingUser})(withRouter(EditUser))