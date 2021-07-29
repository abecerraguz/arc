/*  /components/layouts/basic.jsx  */

import React from 'react'
import PropTypes from 'prop-types';

const BasicLayout = (props) => {
  console.log('Muestran las Props-->', props)
  const [header, main, aside, footer] = props.children;
  return (
    <>
  
    <div className="container">
    
      <div className="row">
        <header className='col-lg-12 bg-light mt-5 pt-5'>
          {header}
        </header>
        <main className='col-lg-8'>
          {main}
        </main>
        <aside className='col-lg-4'>
          {aside}
        </aside>
        <footer className='col-lg-12'>
          {footer}
          <p>Copyright &copy; 2020</p>
        </footer>
      </div>
    </div>
    </>
  )
}

BasicLayout.propTypes = {
  children: PropTypes.node
}

BasicLayout.sections = ['header', 'main', 'aside', 'footer']

export default BasicLayout