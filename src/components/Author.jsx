import { useLoaderData } from "react-router-dom"

export default function Author(){
    const { aboutAuthor } = useLoaderData()
    return(
        <h1>Author: {aboutAuthor}</h1>
    )
}