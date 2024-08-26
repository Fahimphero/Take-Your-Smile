import React from "react";
import { Link } from "react-router-dom";
const DesktopNav = () => {

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const navigation = <>
        <li className=' text-white  cursor-pointer'><Link to='/home' onClick={scrollToTop}
            className='transition-all duration-300 uppercase'> Home</Link></li>
        <li className='  transition-all duration-300 cursor-pointer uppercase '>
            <div className="dropdown dropdown-hover ">
                <label id="0" className=" m-1">Portfolio</label>
                <ul id="0" className="dropdown-content rounded menu p-2 shadow drop-bg  w-52 text-white">
                    <li className='text-secondary   cursor-pointer uppercase'><Link to='/gallery' onClick={scrollToTop}
                        className='transition-all duration-300 hover:bg-primary text-secondary hover:text-white'>Event Gallery</Link></li>
                    <li className='text-secondary  cursor-pointer uppercase'><Link to='/blogslike' onClick={scrollToTop}
                        className='transition-all duration-300 hover:bg-primary hover:text-white'>Blogs</Link></li>
                    <li className='text-secondary  cursor-pointer uppercase'><Link onClick={scrollToTop} to='/donate'
                        className='transition-all duration-300 hover:bg-primary hover:text-white'>Donation</Link></li>
                    <li className=' hover:bg-primary text-secondary rounded-xl  cursor-pointer uppercase'><Link onClick={scrollToTop} to='/ourstory'
                        className='transition-all duration-300 hover:bg-primary text-secondary hover:text-white '> Our Story</Link></li>
                </ul>
            </div>
        </li>

        <li className=' text-white  cursor-pointer uppercase'><Link onClick={scrollToTop} to='/corporate'
            className='transition-all duration-300'> Corporate</Link></li>
        <li className=' text-white  cursor-pointer uppercase'><Link onClick={scrollToTop} to='/nonprofit'
            className='transition-all duration-300'> Non-Profit</Link></li>


    </>

    return (
        <nav>
            <ul className='flex space-x-8  capitalize text-sm'>
                {navigation}
            </ul>
        </nav>
    );
};

export default DesktopNav;
