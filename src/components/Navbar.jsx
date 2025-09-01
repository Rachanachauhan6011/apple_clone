import { Search, Lock } from 'lucide-react'
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='bg-gray-100 px-6 py-3 flex justify-center gap-10 items-center'>
            <Link to="/" className="text-2xl font-bold flex"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" className='h-10 w-10'/></Link>
            <nav>
                <ul className='flex space-x-6 text-sm font-medium text-gray-500'>
                    <li ><Link to="/" className='hover:text-gray-400'>Store</Link></li>
                    <li ><Link to="/mac" className='hover:text-gray-400'>Mac</Link></li>
                    <li ><Link to="/ipad" className='hover:text-gray-400'>iPad</Link></li>
                    <li ><Link to="/iphone" className='hover:text-gray-400'>iPhone</Link></li>
                    <li ><Link to="/watch" className='hover:text-gray-400'>Watch</Link></li>
                    <li ><Link to="/airpods" className='hover:text-gray-400'>AirPods</Link></li>
                    <li ><Link to="/tvhome" className='hover:text-gray-400'>TV & Home</Link></li>
                    <li ><Link to="/entertainment" className='hover:text-gray-400'>Entertainment</Link></li>
                    <li ><Link to="/accessories" className='hover:text-gray-400'>Accessories</Link></li>
                    <li ><Link to="/support" className='hover:text-gray-400'>Support</Link></li>
                    <li><Search/></li>
                    <li><Lock /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar