import React, { Component } from 'react'
import Contact from './Contact'
export default class Contacts extends Component {
    state={
        contacts: [
            {id:1,name: 'faysal',email: 'faysal@gmail.com',phone: '0564'},
            {id:2,name: 'tohin',email: 'tohin@gmail.com',phone: '0178'},
            {id:3,name: 'abir',email: 'abir@gmail.com',phone: '0154'},
            
        ]
    }
    myDeleteIsReal=(id)=>{
        const {contacts} = this.state
        const newContacts = contacts.filter(contact=> contact.id !==id)
        this.setState({
            contacts: newContacts
        })
    }
    render() {
        const {contacts} = this.state
        return (
            <React.Fragment>
               {
                   contacts.map(contact=>(
                    <Contact key={contact.id}
                    contact={contact}
                    deleteKoreDibo={this.myDeleteIsReal.bind(this,contact.id)}
                    />
                   ))
               } 
               </React.Fragment> 
        )
    }
}
