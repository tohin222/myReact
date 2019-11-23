import React, { Component } from 'react'
import Contacts from './Component/Contact/Contacts'
import AddContact from './Component/Contact/AddContact'
import EditContact from './Component/Contact/EditContact'
import Header from './Component/layout/Header'
import About from './Component/pages/About'
import NotFound from './Component/pages/NotFound'
import Test from './Component/test/Test'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from './context'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

 class App extends Component {
  render() {
   
    return (
     <Provider>
       <Router >
       <Header  logo="ThemePixel"  />
        <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/add/contact" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about/:id" component={About} />
              <Route exact path="/test" component={Test} />
              <Route exact  component={NotFound} />
            </Switch>
            {/* <AddContact  />
            <Contacts  /> */}
        </div>
       </Router>  
     </Provider>
    )
  }
}

export default App