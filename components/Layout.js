import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <h1>Header</h1>
            {children}
            <footer>Footer</footer>
        </>
    )
}

export default Layout