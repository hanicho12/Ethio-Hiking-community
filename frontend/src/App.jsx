import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import {Landing, About, Places, BookingDetail, Register, HomeLayout,   ExplorePlaces, Error, ReviewPage } from './pages'
import { Children } from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'places',
        element: <Places />
      },
      {
        path: 'reviewPage',
        element: <ReviewPage />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'bookingDetail/:id',
        element: <BookingDetail />
      },
      {
        path: 'explorePlaces/:id',
        element: <ExplorePlaces />
      }
    ]
  }
])

const App  = () => {
  return(
  <div className='all'>
      <RouterProvider router={router}/>
  </div>
  )
}

export default App
