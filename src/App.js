import Layout from "./page/Layout";
import ReactDOM from "react-dom/client";
const App = () => {
    return (
        <>
        <Layout />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



