import { useState } from 'react'
import RolexOne from '../assets/images/rolex1.jpg'
import RolexTwo from '../assets/images/rolex2.webp'
import RolexThree from '../assets/images/rolex3.webp'
import '../assets/style/main.scss'
import { Footer } from './footer'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'


export const Main = () => {
    const [number, setNumber] = useState(0);
    const [numberT, setNumberT] = useState(0);
    const [numberF, setNumberF] = useState(0);

    const plusNumber = () => {
        setNumber(number + 1)
    }
    const minusNumber = () => {
        setNumber(number - 1)
    }
    const plusNumberT = () => {
        setNumberT(numberT + 1)
    }
    const minusNumberT = () => {
        setNumberT(numberT - 1)
    }
    const plusNumberF = () => {
        setNumberF(numberF + 1)
    }
    const minusNumberF = () => {
        setNumberF(numberF - 1)
    }


    const navigate = useNavigate()

    function goShop() {
        navigate('/shop')
    }


    return (
    <>
        <h1 className='RolexH1'>Rolex Watch</h1>
        <FontAwesomeIcon onClick={goShop} className={'arrow'}  size='2x' icon={faArrowAltCircleUp} />
        <div className="watchDiv">
            <div>
                <img className='imgg' src={RolexOne} alt='RolexOne'/>
                <h2 className='pp'>Professional</h2>
                <h3 className='h33'>1500$</h3>
                <div className='plus'>
                    <button className='pluss' onClick={plusNumber}>+</button>
                    <p>{number}</p>
                    <button className='minus' onClick={minusNumber}>-</button>
                </div>
                <button className='btnWatch'>Buy</button>
            </div>
            <div>
                <img className='imgg' src={RolexTwo} alt='RolexTwo'/>
                <h2 className='pp'>Classic</h2>
                <h3 className='h33'>1200$</h3>
                <div className='plus'>
                    <button className='pluss' onClick={plusNumberT}>+</button>
                    <p>{numberT}</p>
                    <button className='minus' onClick={minusNumberT}>-</button>
                </div>
                <button className='btnWatch'>Buy</button>
            </div>
            <div>
                <img className='imgg' src={RolexThree} alt='RolexThree'/>
                <h2 className='pp'>Professional</h2>
                <h3 className='h33'>1500$</h3>
                <div className='plus'>
                     <button className='pluss' onClick={plusNumberF}>+</button>
                    <p>{numberF}</p>
                    <button className='minus' onClick={minusNumberF}>-</button>
                </div>
                <button className='btnWatch'>Buy</button>
            </div>
        </div>

        <hr/>
        <Footer/>

    
    </>
    )
}