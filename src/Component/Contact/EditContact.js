import React, { Component } from 'react'
import {Consumer} from '../../context'
import uuid from 'uuid'
import TextInput from '../layout/TextInput'
import axios from 'axios'
import { async } from 'q'

export default class EditContact extends Component {
    state={
        name: '',
        email: '',
        phone:'',
        errors:{}
    }
    async componentDidMount(){
        const {id} = this.props.match.params
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`)
            const contact = res.data
            this.setState({
                name:contact.name,
                email: contact.email,
                phone: contact.phone
            })
    }
    mySubmit=async(dispatch,e)=>{
        e.preventDefault()
        const {name,email,phone} = this.state
        if(name===''){
            this.setState({errors:{name: 'Name is required'}})
            return
        }
        if(email===''){
            this.setState({errors:{email: 'email is required'}})
            return
        }
        if(phone===''){
            this.setState({errors:{phone: 'phone is required'}})
            return
        }
        const upContact ={
            name,
            email,
            phone
        }
        const {id} = this.props.match.params
        const res =await axios.put
        (`https://jsonplaceholder.typicode.com/users/${id}`,upContact)
        dispatch({type: 'UPDATE_CONTACT',payload: res.data})


        // dispatch({type: 'ADD_CONTACT',payload: newContact})

        this.setState({
            name: '',
            email:'',
            phone:'',
            errors:{}
        });
        this.props.history.push('/')
    }
    onAllChange=e=>{
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        const {name,email,phone,errors}= this.state

            return(
                <Consumer>
                    {value=>{
                        const {dispatch} = value
                        return(
                            <div className="card mb-3">
                            <div className="card-header">Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.mySubmit.bind(this,dispatch)}>
                                    <TextInput
                                        label="Name"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={this.onAllChange}
                                        error={errors.name}
                                    />
                                    <TextInput
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your Email"
                                        value={email}
                                        onChange={this.onAllChange}
                                        error={errors.email}
                                    />
                                   <TextInput
                                        label="phone"
                                        name="phone"
                                        placeholder="Enter your phone"
                                        value={phone}
                                        onChange={this.onAllChange}
                                        error={errors.phone}
                                    />
                                    <input type="submit" 
                                    className="btn btn-block btn-light"
                                    value="Update Contact"
                                    />
                                </form>
                            </div>
                        </div>
                        )
                    }}
                </Consumer>
            )

       
    }
}
