import { createBrowserRouter } from "react-router-dom";
import { fetchBooks, fetchBooksById } from './service/fetchBooks'
import { lazy } from "react";
const App = lazy(() => import('./App'))
const BookList = lazy(() => import('./pages/BookList'))
const Book = lazy(() => import('./pages/Book'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Author = lazy(() => import('./components/Author'))
const Home = lazy(() => import('./pages/Home'))

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                element: <Home />,
                index: true
            },
            {
                path: '/books',
                element: <BookList />,
                loader: fetchBooks,
            },
            {
                path: `/books/:bookId`,
                element: <Book />,
                loader: fetchBooksById,
                children: [
                    {
                        path: '/books/:bookId/author',
                        element: <Author />,
                        loader: fetchBooksById,
                    }
                ]
            }
        ]
    }
])