import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../../context'
export default class Contacts extends Component {
    render() {
        return(
            <Consumer>
                {value=>{
                    // const {contacts}= value
                    return(
                        <React.Fragment>
                        {
                            value.contacts.map(contact=>(
                             <Contact key={contact.id}
                             contact={contact}
                             />
                            ))
                        } 
                        </React.Fragment> 
                    )
                }}
            </Consumer>
        )

    }
}
