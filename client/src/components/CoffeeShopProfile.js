import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

function Profile(props) {
  const [currentUser, setCurrentUser] = useState(props.currentUser);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [toggleToEdit, setToggleToEdit] = useState(true);
  const [coffee_shop_id, setCoffee_shop_id] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetch('/me', {
      credentials: 'include',
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setName(user.name);
          setAddress(user.address);
          setDescription(user.description);
          setContact(user.contact);
          setCoffee_shop_id(user.id);
        });
      } else {
        console.log("Couldn't access Coffee Shop's info");
      }
    });
  }, []);

  const toggle = () => {
    setToggleToEdit(!toggleToEdit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        address,
        description,
        contact,
      }),
    };

    fetch(`/coffee_shops/${coffee_shop_id}`, requestOptions)
      .then((response) => response.json())
      .then((updated) => {
        setCurrentUser(updated);
        history.push('/');
      });
  };

  return (
    <div>
      {toggleToEdit ? (
        <div
          style={{ maxWidth: '250px', alignContent: 'center', margin: 'auto' }}
        >
          <h1>{currentUser.name}</h1>
          <h2>{currentUser.address}</h2>
          <h3>{currentUser.contact}</h3>
          <p>{currentUser.description}</p>
          <p>{currentUser.user_name}</p>
          <button onClick={toggle} className="custom-button">
            Edit Profile
          </button>
        </div>
      ) : (
        <div>
          <h3>PROFILE</h3>
          <form onSubmit={handleSubmit}>
            <input
              className="custom-imputs"
              type="text"
              placeholder="Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <input
              className="custom-imputs"
              type="text"
              placeholder="Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <input
              className="custom-imputs"
              type="text"
              placeholder="Address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <input
              className="custom-imputs"
              type="text"
              placeholder="Phone number..."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <br />
            <br />
            <button type="submit" className="custom-button">
              Apply Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default Profile;
