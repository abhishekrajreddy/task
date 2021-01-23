import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter,Link } from 'react-router-dom'
import {onFetchingUser,onDeletingUser} from './../redux/Action/userAction'
import { MDBDataTableV5 } from 'mdbreact';


class ViewUser extends Component {

    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){
        this.props.onFetchingUser()
    }

    onDelete=async(email)=>{
        const res = await this.props.onDeletingUser(email);
        console.log(res)
        if(res){
            this.props.onFetchingUser()
        }
    }
         
    render() {
        if(!this.props.user.user)return(<div className='text-center container mt-5'><h1>LOADING...</h1></div>)
        var data ={
            columns:[
                { label: '#', field: 'index' },
                { label: 'First Name', field: 'first_name' },
                { label: 'Last Name', field: 'last_name' },
                { label: 'Email', field: 'email' },
                { label: 'State', field: 'states' },
                { label: 'City', field: 'city' },
                { label: 'Pincode', field: 'pincode' },  
                { label: 'Action', field: 'action' },
            
            ],
            rows :this.props.user.user.map((e,i)=>{
            return{
                index:i+1,
                first_name:e.first_name,
                last_name:e.last_name,
                email:e.email,
                states:e.states,
                city:e.city,
                pincode:e.pincode,
                action:
                    <div>
                    <button onClick={()=>{if(window.confirm(`Are You Sure To Delete ${e.first_name} ${e.last_name}`)){this.onDelete(e.email)};}} className='btn btn-danger'>Delete</button>
                    <Link to={`/edit/${e.email}/${e.first_name}/${e.last_name}/${e.pincode}/${e.city}/${e.states}`} className='btn btn-info ml-1'>Edit</Link>
                    {/* <Link to={`/edit/param1=${e.email}&param2=${e.first_name}&param3=${e.last_name}&param4=${e.pincode}&param5=${e.city}&param6=${e.states}`} className='btn btn-secondary ml-1'>Edit</Link> */}
                    </div>

                }
            })
        }
        return(
            <div>
            <div className='container mt-2'>
            <Link className='nav-link' style={{fontSize:'18px'}}  to='/add'><u>+ Add Record </u></Link>
            </div>
            <MDBDataTableV5 className='container' hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={data} searchTop searchBottom={false} hover borderedless theadColor='dark'  />
           </div>
        )
    }
}

const mapStateToProps=state=>({
    user:state.user
})

export default connect(mapStateToProps,{onFetchingUser,onDeletingUser})(withRouter(ViewUser))