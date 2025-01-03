import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServerHeader = () => (
  <header className="p-4 flex items-center gap-4 border-b border-gray-800">
    <ChevronLeft className="h-6 w-6" />
    <span className="text-sm">MULTIPLAYER / SERVER BROWSER /</span>
    <h1 className="text-xl font-bold">SERVER INFO</h1>
    <Link to={'/matrixrain'}><button className="absolute right-20 top-2 border-2 border-gray-500 p-2 rounded bg-transparent transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-white hover:text-black font-semibold">Matrix Rain</button></Link>
  </header>
);

export default ServerHeader;