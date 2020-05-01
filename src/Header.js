import React from 'react';
import './style.css'

class Header extends React.Component {
    render() {
       return (
          <div className="header">
              <img src={'https://s3.amazonaws.com/media.thecrimson.com/photos/2019/11/04/083317_1340569.png'} alt="logo" />
              ...it's a drama now
              {/* The Office: It's a Drama Now */}
              {/* <img src={'https://66.media.tumblr.com/tumblr_m9ea337Zz31rtjtd0o1_500.gifv'} alt="logo" /> */}
          </div>


       );
    }
 }

export default Header;