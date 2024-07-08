import { Link } from "react-router-dom"

function NotFound(){

    return (
        <div>
            <h1>Sorry</h1>
            <p>Page Not Found</p>
            <Link to="/home">Go to Home</Link>
        </div>
    )
}
export default NotFound