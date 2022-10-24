import { Routes, Route } from 'react-router-dom';
import Error404 from './components/error404/Error404';
import Dashboard from './components/Dashboard/Dashboard';
import UserList from './components/UserList/UserList';

export default function Routing(props) {
    return (
        <Routes>
            <Route exact path="/" element={<UserList />} />
            <Route exact path="/dashboard/:id" element={<Dashboard userData={props.userData} />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}