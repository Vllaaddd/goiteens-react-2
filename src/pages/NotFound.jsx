import { Link, useNavigate } from "react-router-dom";

export default function NotFound(){
    const goBack = useNavigate();
    return(
        <>
            <h1>Not Found</h1>
            <button onClick={() => goBack('/')}>Go home</button>
        </>
    )
}