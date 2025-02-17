import { createBrowserRouter } from 'react-router-dom';
import { Landing, About, BookingDetail, Newsletter, HomeLayout, ExplorePlaces, Error, ReviewPage } from '../pages';

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
]);

export default router;
