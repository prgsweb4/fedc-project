import Nav from "./Nav"
import { Link } from "react-router-dom"
function Headers() {
    return (
        <header>
            <head>
            <meta name="description" content="your text goes here"/>
            <meta name="title" content="Little lemon"/>
            <meta name="og:title" content="Little lemon"/>
            <title>Little lemon</title>
            </head>
            
            <Link to="/"><img src="/images/logo.png" alt="little lemon"/></Link>
            <Nav/>
        </header>
    )
}
export default Headers;