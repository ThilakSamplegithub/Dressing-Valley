import { Box } from "@chakra-ui/react"
import {Routes,Route} from "react-router-dom"
import Navbar from "../components/Navbar"
import Login from "../Pages/Login"
import Products from "../Pages/Products"
import NavigationBar from "../components/NavigationBar"
import NotFoundPage from "../Pages/NotFoundPage"
import PrivateRoute from "../Pages/PrivateRoute"
export default function AllRoutes(){
    return(
        <Box>
            <Routes>
                <Route path="/" element={<NavigationBar/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/products" element={<PrivateRoute><Products/></PrivateRoute>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
        </Box>
    )
}