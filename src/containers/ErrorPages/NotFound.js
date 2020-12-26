import React from 'react';
import errorPageStyles from './ErrorPages.scss';

export default function NotFound() {
  return (
    <div>
      <div className={errorPageStyles.headerText}>Oops! We Can't Find That Page</div>
      <br /><br />
      <p className={errorPageStyles.textCenterNoPad}>It may have been removed or deleted, but check to make sure the address was entered correctly.</p><br />
      <div className={errorPageStyles.textCenter}>To go back, you can use the back button or <a className={errorPageStyles.link} href="/">return to the homepage.</a></div>
      <br />
    </div>
  );
}