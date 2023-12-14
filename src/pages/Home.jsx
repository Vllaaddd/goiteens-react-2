import logo from '../logo.jpg'

export default function Home() {    
    return (
        <div className="thumb">
            <h1>Home page</h1>
            <img width='500' src={logo} alt="" />
            <p>Start with the tutorial. It will quickly introduce you to the primary features of React Router: from configuring routes, to loading and mutating data, to pending and optimistic UI.</p>
        </div>
    )
}