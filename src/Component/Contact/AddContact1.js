import React, { Component } from 'react'

export default class AddContact extends Component {
    state={
        name: '',
        email: '',
        phone:''
    }
    mySubmit=e=>{
        e.preventDefault()
        console.log(this.state);
        
    }
    onAllChange=e=>{
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        const {name,email,phone}= this.state
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.mySubmit}>
                        <div className="form-group">
                            <label htmlFor="">Name:</label>
                            <input type="text"
                            name="name"
                             className="form-control from-control-lg"
                             placeholder='enter your name'
                             value={name}
                             onChange={this.onAllChange}
                             />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email:</label>
                            <input type="email"
                            name="email"
                             className="form-control from-control-lg"
                             placeholder='enter your email'
                             value={email}
                             onChange={this.onAllChange}
                             />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone:</label>
                            <input type="text"
                            name="phone"
                             className="form-control from-control-lg"
                             placeholder='enter your phone'
                             value={phone}
                             onChange={this.onAllChange}
                             />
                        </div>
                        <input type="submit" 
                        className="btn btn-block btn-light"
                        value="Add Contact"
                        />
                    </form>
                </div>
            </div>
        )
    }
}
