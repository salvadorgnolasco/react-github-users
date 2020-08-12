import { Link } from 'react-router-dom';

import React from 'react';

function Error() {
  return (
    <main className="container mt-5">
      <section className="row">
        <div className="col">
          <h1>Oops!</h1>
          <h2>404 Not Found</h2>
          <p>Sorry, an error has occured, Requested page not found!</p>
          <Link to="/" className="btn btn-primary btn-md mt-3">
            Take me Home
            </Link>
        </div>
      </section>
    </main>
  )
}

export default Error;
