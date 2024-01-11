import React from 'react';
import './not.-found.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
    <section className='body-error'>
    <h1 className='error'>404 Error Page #2</h1>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link to={"/home"} className="more-link">
          Visit the original article
        </Link>
      </div>
    </section>
    </>
  );
}

export default NotFound;
