import axios from 'axios'

export const onAddingUser=(data,history)=>{
    return(dispatch)=>{
        axios.get('https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add',{
            params:{
            param1:data.email,
            param2:data.first_name,
            param3:data.last_name,
            param4:data.pincode,
            param5:data.city,
            param6:data.states,
        }})
        .then(res=>{
            dispatch(AddingSuccess(res.data.Message))
        }).catch(err=>{
            console.log(err.response.data.Message )
        })
    }
}

export const onFetchingUser=()=>{
    return(dispatch)=>{
        dispatch(Fetching())
        axios.get('https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch')
        .then(res=>{
                console.log(res.data.data)
                dispatch(FetchingSuccess(res.data.data));
        }).catch(err=>{
            console.log(err);
        })
    }
}

export const onDeletingUser=(data)=>{
    return(dispatch)=>{
        return axios.get('https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete',{
            params:{
                param1:data,  
            }
        })
        .then(res=>{
                dispatch(DeleteSuccess(res.data.Message))
                return true;
        }).catch(err=>{
            console.log(err);
            return false
        })
    }
}

export const onEditingUser=(data,history)=>{
    return(dispatch)=>{
         return axios.get('https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit?',{
            params:{
                param1:data.email,
                param2:data.first_name,
                param3:data.last_name,
                param4:data.pincode,
                param5:data.city,
                param6:data.states,
            }
        }
        )
        .then(res=>{
                return res.data.data
        }).catch(err=>{
            console.log(err);
        })
    }
}


export const onUpdatingUser=(data,history)=>{
    return(dispatch)=>{
    axios.get('https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit?',
    {params:{
            param1:data.email,
            param2:data.first_name,
            param3:data.last_name,
            param4:data.pincode,
            param5:data.city,
            param6:data.states,
        }
    })
    .then(res=>{
            console.log(res.data)
            history.push('/view')
    }).catch(err=>{
        console.log(err);
    })
    }
}


export const Fetching=()=>{
    return{
        type:'FETCHING'
    }
}

export const FetchingSuccess=(data)=>{
    return{
        type:'FETCHING_SUCCESS',
        payload:data
    }
}

export const AddingSuccess=(msg)=>{
    return{
        type:'SUCCESS_ADDING',
        payload:msg
    }
}

export const DeleteSuccess=(msg)=>{
    return{
        type:'SUCCESS_DELETE',
        payload:msg,
    }
} 
