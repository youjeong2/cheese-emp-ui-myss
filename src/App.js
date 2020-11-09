import React, { useState } from 'react'
// import { createStore, applyMiddleware, combineReducers } from 'redux'
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
// import { Nav } from './components'
// import { AirportContainer, BmiContainer, CabbageContainer , ChatbotContainer,
//          CounterContainer, MovieReviewConainer } from './containers/item'
// import { UserRegister, UserLogin, UserDetail, UserModify, UserWithdrawal, UserList } from './containers/user'
// import { ArticleList, EditArticle, ReadArticle, RemoveArticle, ArticleWriteForm } from './containers/article'
import {Home} from './templates'
// import { Home, User, Article, Item} from './templates'

export default function App(){
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    return (<>
        <BrowserRouter>
                {/* <Nav isAuth = {loggedIn}/> */}
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Redirect from = {'/home'} to={'/'}/> 
 /                    {/* <Route path='/signup' component={Signup}></Route> */}
                    {/* <Route path='/signup-form' component={ UserRegister }/>
                    <Route path='/signin-form' component={ UserLogin }/>
                    <Route path='/user-detail' component={ UserDetail }/>
                    <Route path='/modifying-user-info' component={ UserModify }/>
                    <Route path='/membership-withdrawal' component={ UserWithdrawal }/>
                    <Route path='/userlist' component={ UserList }/>*/}
                    
 /                    {/*<Route path='/article-list' component={ ArticleList }></Route>
                    <Route path='/edit-article' component={ EditArticle }></Route>
                    <Route path='/read-article' component={ ReadArticle }></Route>
                    <Route path='/remove-article' component={ RemoveArticle }></Route>
                    <Route path='/article-write-form' component={ ArticleWriteForm }></Route>*/}

 /                    {/*<Route path='/search-airport' component={ AirportContainer }></Route>
                    <Route path='/find-bmi' component={ BmiContainer }></Route>
                    <Route path='/cabbage-price-predict' component={ CabbageContainer }></Route>
                    <Route path='/chabtbot-service' component={ ChatbotContainer }></Route>
                    <Route path='/counter' component={ CounterContainer }></Route> */}

 /                </Switch>
        </BrowserRouter>

</>)}

// import "tailwindcss/dist/base.css";
// import "./styles/globalStyles.css";
// import React from "react";
// import './App.css'
// import Main from './Main'
// import './assets/stylesheets/total.css'

// // import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// const App = () => {
//   return <Main/>  
// }

// export default App



// import React, { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
// import {Home} from './templates'



// export default function App(){
//     const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
//     return (<>
//         <BrowserRouter>
//                 {/* <Nav isAuth = {loggedIn}/> */}
//                 <Switch>
//                     <Route exact path='/' component={Home}></Route>
//                     <Redirect from = {'/home'} to={'/'}/> 

//                 </Switch>
//         </BrowserRouter>

// </>)}

