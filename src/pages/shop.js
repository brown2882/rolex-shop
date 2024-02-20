import '../assets/style/shopp.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHeart, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Main } from './main'
import { useNavigate } from 'react-router-dom'
import { Footer } from './footer'

import { useRef } from 'react'

export const Shopp = () => {

    const [heartColor, setHeartColor] = useState('black'); 

    function heartt() {
        setHeartColor(heartColor === 'black' ? 'red' : 'black');
    }
    
   const navigate = useNavigate()
    
    function handleClick() {
        navigate('/main')
    }

    const [open, setOpen] = useState(false)




    return(
        <>
            <header  className={'section_top'}>
                <div className={'content'}>
                    <div className='kk'>
                        <h1 className='Roh1'>Rolex Shop</h1>
                        <nav> 
                            <div className='btnn'>
                                <div className='searchContainer'>
                                    <input type="text" className={"searchInput"} placeholder="Search  pruduct..."/>
                                    <FontAwesomeIcon icon={faSearch} className='iconOne' />
                                </div>
                                <div className='icons'>
                                     <FontAwesomeIcon icon={faHeart}   onClick={heartt}  style={{ color: heartColor, fontSize:'25px', marginLeft: '15px' }} size='2x' />
                                     <FontAwesomeIcon icon={faBagShopping} className='iconsi' size='2x' />
                                     <FontAwesomeIcon icon={faBars} onClick={() => {setOpen(!open)}} className='iconsi' size='2x' />    
                                </div>    
                            </div>
                            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                                <ul className='ull'>
                                    <li onClick={handleClick}>Rolex watch</li>
                                    <li>Contuct Us</li>
                                </ul>
                            </div>     
                        </nav>
                    </div>
                </div>
            </header>
            <main><Main/></main>
        </>
    )
}

