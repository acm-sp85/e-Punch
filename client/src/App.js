import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  const logOut = () => {
    fetch('/logout', { method: 'DELETE' }).then(() => {
      console.log('logged out');
      window.location.href = '/';
    });
  };

  useEffect(() => {
    fetch('/me', {
      credentials: 'include',
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthChecked(true);
          console.log(user);
        });
      } else {
        setAuthChecked(true);
      }
    });
  }, []);

  if (!authChecked) {
    return <div></div>;
  }

  return (
    <Router>
      {currentUser ? (
        <AuthenticatedApp
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          logOut={logOut}
        />
      ) : (
        <UnauthenticatedApp setCurrentUser={setCurrentUser} />
      )}
    </Router>
  );
}

export default App;
