import { Link } from "react-router-dom";


const NotFoundPage = () => {
    return ( <div style={styles.container}>
        <div>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>🙀Oops! Page Not Found</p>
            <Link to="/" style={styles.link}> ↩️ Go back Home</Link>
        </div>
    </div> );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    },
    title: {
        fontSize: "4rem",
        fontWeight: "bold",
        color: "#fff"
    },
    message: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#fff"
    },
    link: {
        textDecoration: "none",
        color: "#58a6ff",
        fontSize: "1.5rem",
        fontWeight: "bold"
    }
}
 
export default NotFoundPage;