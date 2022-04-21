import './App.css';
import { Home, Detail } from './component/page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
