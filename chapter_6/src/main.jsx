import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Myprams from './components/MyPrams/Myprams.jsx'
import GIthub, { githubInfoLoader } from './components/Github/GIthub.jsx'

/* The commented code is creating a router using the `createBrowserRouter` function from the
`react-router-dom` library. It defines the routes for the application using an array of route
objects. */
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//     ]
//   }
// ])

/* The code is creating a router using the `createBrowserRouter` function from the `react-router-dom`
library. It defines the routes for the application using JSX elements wrapped in `Route` components.
The router is then assigned to the `router` constant. */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='myprams/:myprams' element={<Myprams />} />
      <Route path='github' loader={githubInfoLoader} element={<GIthub />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
