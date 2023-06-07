import { Link } from "react-router-dom";
import { useContext } from 'react';
import { LoginContext } from "../auth/LoginProvider";

const Sidebar = () => {
    const { isLoggedIn, isUser } = useContext(LoginContext);

    return ( 
        <>
        {isLoggedIn && isUser &&
        <div className="sidebar">
                <div className="flex flex-col items-center w-16 h-full overflow-hidden text-indigo-300 bg-indigo-900 rounded">
                    <Link className="flex items-center justify-center mt-3" >
                    <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                    </Link>
                    <div className="flex flex-col items-center mt-3 border-t border-gray-700">
                    <Link className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700" >
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </Link>
                    <Link className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700" >
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </Link>
                    <Link className="flex items-center justify-center w-12 h-12 mt-2 text-indigo-100 bg-indigo-700 rounded" >
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </Link>
                    <Link className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-indigo-700" >
                        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                    </Link>
                </div>
                </div>
            
            <div className="flex flex-col items-center w-16 h-full overflow-hidden text-indigo-300 bg-indigo-900 rounded">
                
                <Link className="flex items-center justify-center w-12 h-12 mt-auto hover:bg-indigo-700" >
                <svg className="w-6 h-6 stroke-current" stroke="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 106V184c97.2 76 160 194.8 160 328 0 229.6-186.4 416-416 416S96 741.6 96 512c0-133.2 62.8-251.6 160-328V106C121.6 190.8 32 341.2 32 512c0 265.2 214.8 480 480 480s480-214.8 480-480c0-170.8-89.6-321.2-224-406z" fill="white" /><path d="M512 32c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32s32-14.4 32-32V64c0-17.6-14.4-32-32-32z" fill="white" /></svg>
                </Link>
            </div>
        </div>
        }
        </>
     );
}
 
export default Sidebar;