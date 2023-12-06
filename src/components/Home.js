import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return ( 
        <>
            <nav>
                <ul>
                    <li><Link to ="/" >Home</Link></li>
                    <li><Link to ="/chocolates" >The Luxury selection</Link></li>
                    <li><Link to ="/chocolates/new" >Add to the Selection</Link></li>
                </ul>
            </nav>
            <Outlet />
        </> 
    );
}

export default Home;