import { NavLink, useLoaderData, useSearchParams } from "react-router-dom"

export default function BooksList(){

    const books = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams()
    const searchParam = searchParams.get('title') || ''
    
    const updateQueryString = (title) => {
        const nextParams = title !== "" ? { title } : {};
        setSearchParams(nextParams)
    }

    const filterBooks = books.filter(({title}) => {
        return title.toLowerCase().includes(searchParam.toLowerCase())
    })

    return(
        <div>
            <input type="text" value={searchParam} onChange={(e) => updateQueryString(e.target.value)} />
            <h1>Booklist</h1>
            <ul className="booklist">
                {filterBooks.map(({id, title, author}) => (
                    <li key={id}>
                        <NavLink to = {`/books/${id}`}>{id} - {title} {author}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}