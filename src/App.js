import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ShowNavbar from './components/Navbar/Shownavbar';
import Profile from './components/Profile/Profile';
import Filter from './components/Filter/Filter';
import ProtectedRoute from './components/Navbar/ProtectedRoute';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ShowNavbar>
          <Navbar />
        </ShowNavbar>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute
                isAuthenticated={
                  !localStorage.getItem('isAuthenticated') ? false : true
                }
              >
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isAuthenticated={
                  !localStorage.getItem('isAuthenticated') ? false : true
                }
              >
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/filter"
            element={
              <ProtectedRoute
                isAuthenticated={
                  !localStorage.getItem('isAuthenticated') ? false : true
                }
              >
                <Filter />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
