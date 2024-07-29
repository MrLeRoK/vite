import {Header} from "../components/Header/Heder.jsx";
import {Footer} from "../components/Footer/Footer.jsx";

export const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
