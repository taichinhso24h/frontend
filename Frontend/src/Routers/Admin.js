import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoardContainer from '../Containers/Admin/DashBoardContainer';
import CategoryPostContainer from '../Containers/Admin/CategoryContainer';

function AdminNavigation() {
    return (
        <Router>
            <Routes>
                <Route exact path='/admin/' element={<DashBoardContainer />} />
                <Route exact path='/admin/category' element={<CategoryPostContainer />} />
            </Routes>
        </Router>
    )
}
export default AdminNavigation