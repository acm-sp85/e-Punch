import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import RenderShops from './components/RenderShops';

function UnauthenticatedApp({ setCurrentUser }) {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    fetch('/coffee_shops', {
      credentials: 'include',
    }).then((res) => {
      if (res.ok) {
        res.json().then((shops) => {
          shops.shift();
          setShops(shops);
        });
      } else {
        console.log('shops not loaded');
      }
    });
  }, []);
  return (
    <div>
      <nav>
        <span>
          <h1 className="logo">ePUNCH</h1>
        </span>
      </nav>
      <Switch>
        <Route exact path="/">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser} />
        </Route>
        <Redirect to="/" />
      </Switch>
      <div>
        <h2 className="centered">Affiliate Coffee shops in our platform</h2>
        {shops.length > 1 ? (
          <div>
            {shops.map((shop) => (
              <RenderShops info={shop} key={shop.id} />
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default UnauthenticatedApp;
