import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import Error from './components/Error';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Dashboard from './components/Dashboard';
import Blog from './components/Blog';
import GadgetDetail from './components/gadgetDetail';
import Laptop from './components/Laptop';
import Accessories from './components/Accessories';
import SmartWatch from './components/SmartWatch';
import Phone from './components/Phone';
import Gadgets from './components/Gadgets';
import ProductsNotFound from './components/ProductsNotFound';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Gadgets></Gadgets>
          },
          {
            path: "products/laptop",
            element: <Laptop></Laptop>
          },
          {
            path: "products/phone",
            element: <Phone></Phone>
          },
          {
            path: "products/smartwatch",
            element: <SmartWatch></SmartWatch>
          },
          {
            path: "products/accessories",
            element: <Accessories></Accessories>
          },
          {
            path: "products/cable",
            element: <ProductsNotFound></ProductsNotFound>
          }
        ]
      },
      {
        path: "gadget/:productId",
        element: <GadgetDetail></GadgetDetail>,
        loader: () => fetch('/gadgetData.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/gadgetData.json')
      },
      {
        path: "blog",
        element: <Blog></Blog>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
