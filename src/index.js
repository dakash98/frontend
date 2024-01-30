import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Helmet>
        <title>Crack Maharashtra 10th SSC Board Exams with Free Previous Year Question Papers and solutions</title>
        <meta name="description" content="Access the ultimate collection of 10th SSC Maharashtra Board question papers for free. Students can get valuable insights from the previous year's question paper and solutions for the 10th SSC Maharashtra Board for the respective years 2018,2019,2020,2022,2023" />
        <meta http-equiv="Cache-Control" content="no-store, no-cache, must-revalidate, max-age=0" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </Helmet>
      <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
