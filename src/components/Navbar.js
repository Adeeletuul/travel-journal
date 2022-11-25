import whiteIcon from "../images/icons8-globus_-asien-50.png"

export default function Navbar() {
    return (
        <nav>
            <img className="nav-image" src={whiteIcon} alt="" />
            <h1 className="nav-title">my travel journal.</h1>
        </nav>
    )
}