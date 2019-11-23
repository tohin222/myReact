import React, { Component } from "react";
import PropsTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faThumbsUp,faSortDown,faTimes  } from '@fortawesome/free-solid-svg-icons'


class Contact extends Component {
  state={
    showDetails: false
  }
  // showOnClick=(name,e)=>{
  //   console.log(name);
    
  // }
   showOnClick=(e)=>{
    this.setState({
      showDetails: !this.state.showDetails
    })
    
  }
  onClickDelete=()=>{
    this.props.deleteKoreDibo()
  }
  // showOnChange=(e)=>{
  //   console.log(e.target.value);
    
  // }
  render() {
    const {name,email,phone } = this.props.contact;
    const {showDetails} = this.state
    return (
      <div className="card mt-3">
        <div className="card-body">
           <h3>{name}<FontAwesomeIcon icon={faSortDown} style={{cursor:'pointer'}} onClick={this.showOnClick}/>
            <FontAwesomeIcon icon={faTimes} style={{cursor:'pointer',float: 'right',color:'red'}} onClick={this.onClickDelete}/>  </h3>
           {/* <h3><input type="text" onChange={this.showOnChange}/> </h3> */}
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
    );
  }
}
Contact.propsTypes = {
  contact: PropsTypes.object.isRequired,
  deleteKoreDibo: PropsTypes.func.isRequired
};
export default Contact;
