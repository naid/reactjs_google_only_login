import { useContext } from 'react';
import { useLogin, useLoginUpdate } from "../auth/LoginProvider";
import Login from '../auth/Login';


const Navbar = ({ setSigned, setProfile }) => {
    const { isLoggedIn, profile, message } = useLogin();
     
    return ( 
        <div className="navbar">
            <div className="my-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
                <div>
                    <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">
                    {isLoggedIn ? (<div>{message}</div>) : (
                        <div className="">Please Log In</div>
                    )}
                    </h4>
                    {/* <ul aria-label="current Status" className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-400 text-sm mt-3">
                        <li className="flex items-center mr-4">
                            <div className="mr-1">
                                <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_sub_text_and_border-svg1.svg" alt="Active" />
                                <img className="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_sub_text_and_border-svg1dark.svg" alt="Active" />
                            </div>
                            <span>Active</span>
                        </li>
                        <li className="flex items-center mr-4 mt-4 md:mt-0">
                            <div className="mr-1">
                                <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_sub_text_and_border-svg2.svg" alt="Trending" />
                                <img className="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_sub_text_and_border-svg2dark.svg" alt="Trending" />
                            </div>
                            <span> Trending</span>
                        </li>
                        <li className="flex items-center mt-4 md:mt-0">
                            <div className="mr-1">
                                <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_sub_text_and_border-svg3.svg" alt="date" />
                                <img className="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_sub_text_and_border-svg3dark.svg" alt="date" />
                            </div>
                            <span>Started on 29 Jan 2020</span>
                        </li>
                    </ul> */}
                </div>
                <div className="mt-6 md:mt-0">
                    {/* <button className="mr-3 bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 dark:hover:bg-gray-600 dark:text-indigo-600 px-5 py-2 text-sm">Back</button>
                    <button className="transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Edit Profile</button> */}

                    <Login setSigned={setSigned} setProfile={setProfile}/>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;