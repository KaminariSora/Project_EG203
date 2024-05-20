import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Section1_1 from './Components/section1_1';
import SliderTest from './Components/slider-test';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Section4_1 from './Components_4/section4_1';
import PageSection2_2 from './Components_2/section2_2';
import PageSection2_1 from './Components_2/section2';
import Section5 from './Components_5/section5';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "Section1_1",
    element: <Section1_1/>
  },
  {
    path: "Section2_1",
    element: <PageSection2_1/>
  },
  {
    path: "Section2_2",
    element: <PageSection2_2/>
  },
  {
    path: "Section4_1",
    element: <Section4_1/>
  },
  {
    path: "Section5_1",
    element: <Section5/>
  },
  {
    path: "Slider-test",
    element: <SliderTest/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
