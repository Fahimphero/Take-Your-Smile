import { signOut } from "firebase/auth";
import { isError, useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useUser from "../../../hooks/User/UseUser";
import Loading from "../Loading/Loading";
import useAdmin from "../../../hooks/Admin/useAdmin";

const NavEnd = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [admin, adminLoading]: any = useAdmin(user);
  const [users, userLoading]: any = useUser(user);
  const email = user?.email;
  const { isLoading, error, data, refetch } = useQuery(['data'], () =>
    fetch(`https://take-your-smile-server.onrender.com/user/${email}`, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
  )
  if (isLoading || userLoading || adminLoading) {
  }

  if (isError || error) {

  }
  refetch();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const logout = () => {
    signOut(auth);
    navigate('/login')
    localStorage.removeItem('accessToken');

  }
  const navigation = <>
    <li className=' text-white  cursor-pointer'><Link onClick={scrollToTop} to='/weddings'
      className='transition-all duration-300 uppercase'> Wedding</Link></li>

    <li className=' text-white  cursor-pointer uppercase'><Link onClick={scrollToTop} to='/social'
      className='transition-all duration-300'> Social</Link></li>

    <li className=' text-white cursor-pointer uppercase'><Link onClick={scrollToTop} to='/articles' className='transition-all duration-300'>Articles</Link></li>


    <li className=' text-white  cursor-pointer uppercase'><Link onClick={scrollToTop} to='/contactus'
      className='transition-all duration-300'> Contact Us</Link></li>
    {user ? <li className=' text-white  cursor-pointer uppercase'>

      {/* Start */}
      <div className="dropdown dropdown-end">
        <label id="0" className=" m-1"> <button className=" transition-all duration-300 uppercase"  >

          <div className="avatar ">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {
                data?.image ? <img src={data?.image} alt={data.name} className="w-12 h-12" /> : <img src="https://i.ibb.co/rwGPsQ9/profile.jpg" alt={data?.name} className="w-14 h-14" />}
            </div>
          </div></button> </label>
        <ul id="0" className="dropdown-content menu p-2 shadow drop-bg rounded  w-52">

          <div className="drop-bg uppercase px-1 py-2 w-64 mt-4  rounded max-w-screen origin-center  right-0 appear-done enter-done"
          >

            {
              users?.role === "user" &&
              <>
                <Link onClick={scrollToTop} className="flex items-center px-3 py-3 cursor-pointer  text-secondary text-sm focus:outline-none hover:bg-primary hover:text-white" to="/favourites"> My Favourites</Link>
                <Link onClick={scrollToTop} className="flex items-center px-3 py-3 cursor-pointer text-secondary text-sm focus:outline-none hover:bg-primary hover:text-white" to="/profiles"> Profile </Link>
                <Link onClick={scrollToTop} className="flex items-center px-3 py-3 cursor-pointer text-secondary text-sm focus:outline-none hover:bg-primary hover:text-white" to="/yourbookings"> My Bookings</Link>

                <Link onClick={scrollToTop} className="flex items-center px-3 py-3 cursor-pointer text-secondary text-sm focus:outline-none hover:bg-primary hover:text-white" to="/availablejob">Apply for Employee</Link>
              </>
            }
            {
              admin?.role === "Admin" && <Link onClick={scrollToTop} className="flex items-center px-3 py-3 cursor-pointer text-secondary text-sm focus:outline-none hover:bg-primary hover:text-white" to="/admin"> Admin DashBoard</Link>
            }
            <button className="flex w-full items-center px-3 py-3 cursor-pointer  text-secondary text-sm focus:outline-none hover:bg-primary hover:text-white"
              onClick={(e) => {
                logout();
                scrollToTop()
              }} >LOGOUT</button>
          </div>
        </ul>
      </div>
      {/* end */}

    </li> : <li className=' text-secondary  cursor-pointer uppercase'><Link onClick={scrollToTop} to='/login'
      className='transition-all duration-300 text-white'> Login</Link></li>}


  </>
  return (
    <nav>
      <ul className='flex space-x-8 items-center capitalize  text-sm'>

        {navigation}
      </ul>
    </nav>
  );
};

export default NavEnd;