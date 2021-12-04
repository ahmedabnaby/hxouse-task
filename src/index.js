import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SimpleReactLightbox from 'simple-react-lightbox'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);
