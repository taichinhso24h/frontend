import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryPostContainer from '../Containers/Client/CategoryPostContainer';
import HomeContainer from '../Containers/Client/HomeContainer';
import PostDetailContainer from '../Containers/Client/PostDetailContainer';
import ScheduleContainer from '../Containers/Client/ScheduleContainer';

function Navigation() {
    return (
        <Router>
            <Routes>
                <Route index element={<HomeContainer />} />
                <Route path="/schedule" element={<ScheduleContainer />} />
                <Route path="/category/:name" element={<CategoryPostContainer />} />
                <Route path="/:any-:id" element={<PostDetailContainer />} />
            </Routes>
        </Router>
    )
}
export default Navigation