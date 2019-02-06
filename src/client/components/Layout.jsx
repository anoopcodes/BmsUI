import React from 'react';
import NavMenu from './NavMenu';

export default props => (
  <div className="root">
    <header>
      <div className="row">
        <div className="col-lg-2">
          <div className="logo">
          </div>
        </div>
      </div>
    </header>
    <div>
    <NavMenu />
    {props.children}
    </div>
    <footer></footer>
  </div>
);
