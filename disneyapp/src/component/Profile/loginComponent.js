import React,{useState}from 'react';
import {useNavigate} from 'react-router-dom';
import './Profile.css'

const url = process.env.REACT_APP_LOGIN_API_URL;

const Login = () =>{

    
    let navigate = useNavigate();
    const [message,setMessage] = useState('');

    const initialValues = {
        email:'',
        password:"",
    }

    const [values,setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const checkout = () => {
        console.log(values)
        fetch(`${url}/login`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                setMessage(data.token)
            }else{
                sessionStorage.setItem('ltk',data.token)
                navigate('/Profile')
            }
        })

    }

    return( 
        <div className='conta'>
            <div className='pannel'>
                    <h2>LOGIN</h2>
                    <div className='panelbody'>
                            <h2 style={{color:"red"}}>{message}</h2>
                            <div className='col'>
                                <label for="email" className='contlabel'>Email</label>
                                <input className='formcont' id='email' name='email' value={values.email} onChange={handleInputChange} placeholder='enter email'/>
                            </div>
                            <div className='col'>
                                <label for="password" className='contlabel'>Password</label>
                                <input className='formcont' id='password' name='password' value={values.password} onChange={handleInputChange} placeholder='enter password'/>
                            </div>
                    </div>
                    <button className='btn btn-success' onClick={checkout}>Login</button>
                </div>
        </div>
    )
      
}
export default Login;