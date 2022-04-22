import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import './App.css'
import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import Home from './pages/Home';

function App() {

  const location = useLocation();

  useEffect(() => {
AOS.init({
      offset:120,
      duration: 700,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
