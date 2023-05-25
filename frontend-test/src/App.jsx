import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Profile, ChangePhoto } from "./components";

export default function App() {
  return (
    <>
      <Router>
      <div className="bg-[#212121] h-[100vh] flex items-center relative py-10">
        <div className="min-w-[375px] min-h-[667] bg-white mx-auto relative">
            <Navbar />
            
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/change-photo" element={<ChangePhoto />} />
            </Routes>
        </div>
      </div>
      </Router>
    </>
  )
}

