import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <header style={{backgroundColor: 'green', color: 'white', padding: 10}}>Navbar</header>
      <main>{children}</main>
      <footer style={{backgroundColor: 'black', color: 'white', padding: 10, position: 'fixed', bottom: 0, width: '100%'}}>Footer</footer>
    </div>
  )
}

export default Layout;