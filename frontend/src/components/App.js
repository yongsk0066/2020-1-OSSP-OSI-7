import React,{useState, Fragment} from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import QuizTemplate from './quiz/QuizTemplate';
import QuizSetList from './quiz/QuizSetList';
import Home from './Home';
import Login from './auth/Login';
import Register from './auth/Register';
import AuthRoute from './auth/AuthRoute';
import NotFound from './NotFound';
import TestQuiz from './quiz/TestQuiz';
import {login, registerTo} from '../lib/api/fakeAuth';


const App = () => {
  const [user, setUser] = useState("null");
  const authenticated = user != null;

  // const logIn = ({username, password}) =>setUser("user");
  const logIn = ({username, password}) => (setUser(login({username,password}).user));
  const logOut = () =>setUser(null);
  const register = ({username, password}) => registerTo({username, password});


  return (
    <>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"/>

    <Navbar bg="dark" sticky="top">
      <Nav className="mr-auto">
        <Nav.Link><Link to="/">HOME</Link></Nav.Link>
        <Nav.Link><Link to="/quiz">QUIZ</Link></Nav.Link>
      </Nav>
      <Nav>
      { !authenticated ?
        (<Fragment>      
        <Nav.Link><Link to="/login">LOGIN</Link></Nav.Link>
        <Nav.Link><Link to="/register">REGISTER</Link></Nav.Link>
        </Fragment>)
      : (
        <Fragment>
          <Nav.Link onClick={()=>logOut()}>LOGOUT</Nav.Link>
          <Nav.Link>USER</Nav.Link>
        </Fragment>
        )
      }
      </Nav>
    </Navbar>


    <Switch>
      <Route path="/" component={Home} exact/>
      <AuthRoute authenticated={authenticated} path="/quiz" component={QuizSetList} exact/>
      
      <Route path="/login" render={props => (
          <Login authenticated={authenticated} handleSubmit={logIn} {...props} />
        )}/>
      
      <Route path="/register" render={props => (
          <Register authenticated={authenticated} handleSubmit={register} {...props} />
          )}/>
      
      <AuthRoute authenticated={authenticated} path="/create"
        render={props => <QuizTemplate {...props} />}
      />
      <AuthRoute authenticated={authenticated} path="/quiz/:quizSetId" component={TestQuiz}/>}
      />
      
      <Route component={NotFound} />
        </Switch>
    </>
  );
}

export default App;
