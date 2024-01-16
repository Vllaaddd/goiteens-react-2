import { Link, Outlet, useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function Book(){

    const {bookId} = useParams()
    const {image, title, description, aboutAuthor, rating, author} = useLoaderData()
    
    const goBack = useNavigate()

    return(
        <div>
            <button onClick={() => {goBack(-1)}} className="button">Go back</button>
            <img src={image} alt="" />
            <h2>Book {bookId}</h2>
            <h1>{title} - {author}</h1>
            <p>{description}</p>
            <p>{rating}</p>
            <Link to={`/books/${bookId}/author`}>Author</Link>
            <Outlet context={aboutAuthor} />
        </div>
    )
}