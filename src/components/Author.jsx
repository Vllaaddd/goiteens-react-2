import { useLoaderData, useOutletContext } from "react-router-dom"

export default function Author(){
    const aboutAuthor = useOutletContext()
    return(
        <h1>Author: {aboutAuthor}</h1>
    )
}