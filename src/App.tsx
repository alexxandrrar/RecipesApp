import React from 'react';
import { routes } from './constants/path';
import { Route,Routes } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map(({ path,element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
