import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';

export const Routing = () => {
    return (
        <Routes>
            <Route exact path="/dashboard/:userId" element={<Dashboard />} />
        </Routes>
    )
}

export default Routing;