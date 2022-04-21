import './App.css';
import { Home, Detail } from './component/page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/detail">Detail</Link>
          </li>
        </ul>

        <hr /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;