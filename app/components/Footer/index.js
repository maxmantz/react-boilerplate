/**
*
* Footer
*
*/

import React from 'react';

const styles = {
  root: {
    background: 'teal',
    height: '100px',
    flexShrink: 1,
  },
};

function Footer() {
  return (
    <div id="footer" style={styles.root}>
      <p>This is the footer!</p>
    </div>
  );
}

export default Footer;
