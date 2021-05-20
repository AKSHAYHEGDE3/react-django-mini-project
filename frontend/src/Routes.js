import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import About from './components/About'
import StudentUI from './components/Student/StudentUI'
import TeacherUI from './components/Teacher/TeacherUI'
import Loginer from './components/Loginer';
const Routes = () => {
    return (
        <div>
            <Router>

                <Switch>
                    <Route path='/student' component={StudentUI}></Route>
                    <Route path='/teacher' component={TeacherUI}></Route>
                    <Route path= '/about' component ={About}></Route>
                    <Route  path='/' component={Loginer}></Route>
                </Switch>
            </Router>   
        </div>
    )
}

export default Routes
