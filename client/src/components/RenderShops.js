import React from 'react';
import '../App.css';

function renderShops({ info }) {
  //   const [shops, setShops] = useState(props.info);

  return (
    <div>
      <div key={info.id}>
        <div className="custom-card col-1-of-3 card-text">
          <img
            src={require('../coffee_shop.png')}
            className="avatar"
            alt="img not found"
          />
          <div className="card-body">
            <h5 className="card-title" id={info.id}>
              {info.name}
            </h5>
            <p>{info.address} </p>
            <p>{info.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default renderShops;
