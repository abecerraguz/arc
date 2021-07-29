import React from 'react';
import { useAppContext } from 'fusion:context';

const Header = () => {
  /* retrieve global content from fusion's app context */
  const appContext = useAppContext();
  const { globalContent } = appContext;

  return (
    <header className="container-fluid">
      <h1 className="text-info">News from Demo!</h1>
      <hr/>
      <h2 className="card-title">{globalContent.headlines && globalContent.headlines.basic}</h2>
      <p className="card-text">{globalContent.description && globalContent.description.basic}</p>
    </header>
  );
}

export default Header;