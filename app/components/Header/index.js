/**
*
* Header
*
*/

import React from 'react';

const styles = {
  root: {
    height: '100px',
    background: 'blue',
  },
};

function Header() {
  return (
    <div style={styles.root}>
      <h1>This is the header</h1>
    </div>
  );
}

export default Header;
