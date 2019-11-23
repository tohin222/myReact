import React, { Component } from "react";
import PropsTypes from "prop-types";
import {Consumer} from '../../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown,faTimes  } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {Link} from 'react-router-dom'


class Contact extends Component {
  state={
    showDetails: false
  }
   showOnClick=(e)=>{
    this.setState({
      showDetails: !this.state.showDetails
    })
    
  }
  onClickDelete=async(id,dispatch)=>{
    try{
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({type: 'DELECT_CONTACT',payload: id})
    }catch(e){
      dispatch({type: 'DELECT_CONTACT',payload: id})
  }
}
  render() {
    const {id,name,email,phone } = this.props.contact;
    const {showDetails} = this.state
    return (
      <Consumer>
        {
          value=>{
            const {dispatch} = value
            return(
              <div className="card mt-3">
              <div className="card-body">
                 <h3>{name}{' '}<FontAwesomeIcon icon={faSortDown} style={{cursor:'pointer'}} onClick={this.showOnClick}/>
                  <FontAwesomeIcon icon={faTimes} 
                  style={{cursor:'pointer',float: 'right',color:'red'}} 
                  onClick={this.onClickDelete.bind(this,id,dispatch)}/> 
                  <Link to={`contact/edit/${id}`}>Edit</Link>
                   </h3>
                  {
                    showDetails ? ( 
                      <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                    </ul>)
                    : null
                  }
              </div>
            </div>
            )
          }
        }
      </Consumer>

    );
  }
}
Contact.propsTypes = {
  contact: PropsTypes.object.isRequired,
 
};
export default Contact;
