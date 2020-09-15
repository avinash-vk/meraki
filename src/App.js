import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// import components
import SignIn from './views/auth/SignIn';
import SignUp from './views/auth/SignUp';
import Profile from './views/profile';
import Story from './views/story';
import StoryCreateForm from './views/story/storyCreateForm';
import Home from './views/home';
import Landing from './views/landing';

function App() {
  const [auth, setAuth] = useState(true); // make it false later.

  let routes;
  // authenticated routing
  if (auth) {
    routes = (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/story/:id" component={Story} />
        <Route exact path="/story/new/:id" component={StoryCreateForm} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    );
  } else {
    // implement later.
  }

  return (
    <BrowserRouter>
      <div className="App">{routes}</div>
    </BrowserRouter>
  );
}

export default App;