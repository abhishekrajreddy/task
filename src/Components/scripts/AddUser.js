import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom'
import {onAddingUser} from '../redux/Action/userAction'


class AddUser extends Component {
    

    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            states:'',
            city:'',
            pincode:'',
            email_error:'',      
        }   
    }
    
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        
    } 


    onSubmit=()=>{
        // console.log(this.state)
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        const {first_name,last_name,email,states,city,pincode} = this.state;
        if(first_name === '' || last_name === '' || email === '' || states === '' || city === '' || pincode === '' ){
            this.setState({email_error:'Enter Email'})
        }
        else if(!validEmailRegex.test(email)  ){
            this.setState({email_error:'Enter Valid Email'})
        }
        else{
        const {first_name,last_name,email,states,city,pincode} = this.state;
        const data={first_name,last_name,email,states,city,pincode}
        this.props.onAddingUser(data,this.props.history)
        this.setState({first_name:'',
        last_name:'',
        email:'',
        states:'---Select State---',
        city:'',
        pincode:'',
        email_error:'',
        })
        }
        
    }
    
    

   
    render() {
        const {first_name,last_name,email,city,pincode,email_error} = this.state;
        return (
            <div>
                <div className='container mt-5'>
                    <div className='row justify-content-center'>
                        <div className='col-6 card py-3'>
                            <h1 className='text-center text-primary'><u>Add User</u></h1>
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
                                <input type='email' className='form-control' name='email' value={email} onChange={this.onHandleChange} required />
                                {email_error?<small className='text-danger'>{email_error}</small>:''}
                            </div>
                            <div className='form-group'>
                                <label>State</label>
                                <select className='form-control' name='states' onChange={this.onHandleChange}>
                                <option value='none'>---Select State---</option>
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
                                {/* <input type='number' className='form-control' name='pincode'  value={pincode} onChange={this.onHandleChange} /> */}
                            </div>
                            <div className='mt-2 text-right'>
                                <button className='btn btn-primary form-control w-25' onClick={this.onSubmit}>Add</button>
                                <Link to='/'><button className='btn btn-secondary form-control w-25 ml-1' >Cancel</button></Link>
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


export default connect(mapStateToProps,{onAddingUser})(withRouter(AddUser))