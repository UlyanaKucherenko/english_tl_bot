import {Routes, Route} from 'react-router-dom';

import './App.css'
import NotFoundPage from "./pages/NotFoundPage";
import {AuthLayout} from "./Layouts/AuthLayout";
import {MainLayout} from "./Layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Route>
            <Route path="/auth" element={<AuthLayout/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default App;
