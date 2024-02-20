import { useEffect, useState } from "react"
import '../assets/style/load.scss'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"


export const Home =() => {
    const[loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000)
    }, [])




    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();



    const onSubmit = (data) => {
        
            navigate('/shop')
        
    }




    return(
        <div className={"home"}>
            {loader ? 
            <div className="center">
                <div className='ring'></div>
                <span>loading...</span>
            </div>
            :
            <div className={'box'}>
                    <span className={'borderLine'}></span>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Sign in</h1>
                        <div className={'inputBox'}>
                            <h2 className={'p'}>Username</h2>
                            <input{...register("firstName", { required: true, maxLength: 20 })}/>
                        </div>
                        <div className={'inputBox'}>
                            <h2 className={'p'}>Password</h2>
                            <input type={'password'}/>

                        </div>
                        <div className={'links'}>
                            {/*<a href={'#'}>sign up</a>*/}
                        </div>
                        <button type='sumbit' style={{padding:5}} onClick={onSubmit}>login</button>



                    </form>
                </div>
            }
            
        </div>
    )
}