import React from "react";
import Header from './Header/index';
import Sidebar from "./Sidebar";
import { useRouter } from "next/router"
import { FontAwesomeIcon, config } from '@fortawesome/react-fontawesome'
import { faHome, faHouse, faRadio, faSearch, faTimeline, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"


const Layout = ({handleLogin, children }) => {
  const router = useRouter()
    return (
        <div className='w-full md:w-auto overflow-hidden h-screen'>
          <div className="pb-16">
            <div className='items-center'>
              <Header handleClickLogin={handleLogin}/>
            </div>
          </div>
          <div className='flex w-full h-screen justify-center'>
              <div className='flex shadow-lg w-full h-screen'>
                  <Sidebar/>
                  {children}
              </div>
          </div>
          <br />
          <div className='footer hidden flex-row w-full justify-around bottom-0 fixed footer-nav max-[992px]:flex' >
                    <a className={router?.pathname == "/"? "text-[#01C587] px-5 py-5 block w-full" : "p-5 block w-full" }>
                      <div className="nav-item">
                        <FontAwesomeIcon icon={faHome} />
                        <span>Home</span>
                      </div>
                    
                    </a>
                    <a className={router?.pathname == "/search"? "text-[#01C587] px-5 py-5 block w-full" : "p-5 block w-full" }>
                      <div className="nav-item">
                         <FontAwesomeIcon icon={faSearch} />
                         <span>Search</span>
                      </div>
                    </a>
                    <a className={router?.pathname == "/collection"? "text-[#01C587]  px-5 py-5 block w-full" : "p-5 block w-full" }   onClick={()=> router.push('/')}>
                      <div className="nav-item">
                        <FontAwesomeIcon icon={faRadio} />  
                        <span>Timeline</span>
                      </div>
                    </a>
                    <a className={router?.pathname == "/profile"? "text-[#01C587] px-5 py-5 block w-full" : "p-5 block w-full" }   onClick={()=> router.push('/')}>
                        <div className="nav-item">
                          <FontAwesomeIcon icon={faUser} />  
                          <span>Profile</span>
                        </div>
                     </a>      
            </div>
        </div>
      );
};

export default Layout;
