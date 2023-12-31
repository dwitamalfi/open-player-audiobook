import React from "react"
import { useRouter } from "next/router"
import { FontAwesomeIcon, config } from '@fortawesome/react-fontawesome'
import { faHouse, faMobileAndroid, faRadio, faRobot, faSearch, faTimeline, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"

export default function Sidebar(){
    const router = useRouter()
    console.log('router',router)
    return(
        <div className='sidebar item-center p-8 shadow-lg max-[992px]:hidden'>
        <div>
            <ul>
                <li className='sidebar-item'>
                    <a className={router?.pathname == "/"? "bg-[#01C587] px-5 py-5 block w-full text-white" : "bg-white  p-5   block w-full" } onClick={()=> router.push('/dashboard')}>
                          <FontAwesomeIcon icon={faHouse} /> Beranda
                    </a>
                </li>
                <hr/>
                <li className='sidebar-item'>
                   <a className={router?.pathname == "/search"? "bg-[#01C587]  px-5 py-5 block w-full text-white" : "bg-white  p-5   block w-full" }   onClick={()=> router.push('/teams')}>
                         <FontAwesomeIcon icon={faSearch} />  Search
                   </a>
                  
                </li>
                <hr/>
                <li className='sidebar-item'>
                   <a className={router?.pathname == "/collection"? "bg-[#01C587]  px-5 py-5 block w-full text-white" : "bg-white  p-5   block w-full" }   onClick={()=> router.push('/')}>
                        <FontAwesomeIcon icon={faRadio} />  Koleksi
                   </a>
                </li>
                <hr/>
                <li className='sidebar-item'>
                   <a className={router?.pathname == "/profile"? "bg-[#01C587]  px-5 py-5 block w-full text-white" : "bg-white  p-5   block w-full" }   onClick={()=> router.push('/')}>
                         <FontAwesomeIcon icon={faUser} />  Profil
                   </a>
                </li>
                <hr/>
            </ul>
        </div>
        <div>
            <h3 className="m-5">Dapatkan di Aplikasi</h3>
            <ul>
                <li className='sidebar-item'>
                    <a className={router?.pathname == "/android"? "bg-[#01C587] px-5 py-5 block w-full text-white" : "bg-white  p-5   block w-full" } onClick={()=> router.push('/dashboard')}>
                          <FontAwesomeIcon icon={faRobot} /> Android
                    </a>
                </li>
                <hr/>
                <li className='sidebar-item'>
                    <a className={router?.pathname == "/iphone"? "bg-[#01C587] px-5 py-5 block w-full text-white" : "bg-white  p-5   block w-full" } onClick={()=> router.push('/dashboard')}>
                          <FontAwesomeIcon icon={faRobot} /> IOS
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
}