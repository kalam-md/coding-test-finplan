import { arrow } from "../assets";
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const getPageName = () => {
    switch (location.pathname) {
      case '/':
        return 'Profil';
      case '/change-photo':
        return 'Ganti Photo Profil';
      default:
        return '';
    }
  };

  return (
    <nav className="w-full py-2 bg-[#002984] flex justify-start items-center">
      <Link to="/" className="ml-2">
        <img src={arrow} alt="arrow" className="w-[25px] h-[25px]" />
      </Link>
      <h1 className="ml-2 font-semibold text-[24px] text-white">{getPageName()}</h1>
    </nav>
  )
}