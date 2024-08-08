import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/404"
import Detalhes from "./pages/Detalhes"

export default function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />                
                <Route path="/detalhes/:id" element={<Detalhes />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}