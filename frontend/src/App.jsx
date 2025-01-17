import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import 'aos/dist/aos.css';
import {Landing, About, BookingDetail, Newsletter, HomeLayout,   ExplorePlaces, Error, ReviewPage } from './pages';

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
        path: 'reviewPage',
        element: <ReviewPage />
      },
      {
        path: 'newsletter',
        element: <Newsletter />
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
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  
  return(
  <div>
      <RouterProvider router={router}/>
  </div>
  )
}

export default App
