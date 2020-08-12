import {Link} from 'react-router-dom';

import React from 'react';

function Error() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <p>Sorry, an error has occured, Requested page not found!</p>
            <Link to="/" className="btn btn-primary btn-lg mt-3">
              Take me Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error;
