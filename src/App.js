import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AdminClientPanel from './AdminClientPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminClientPanel />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;