import { Link } from "react-router-dom"

const Home = () => {
    return (
        <main className="home">
            <h2>Open Replay</h2>
            <p>
                <Link to="/admin">Read more on Open Replay</Link>
            </p>
            <p><b>Chief Editor :</b> Federico Kereki</p>
        </main>
    )
}
export default Home