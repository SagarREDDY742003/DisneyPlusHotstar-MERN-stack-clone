import React,{useState}from 'react';
import {useNavigate} from 'react-router-dom';

const url = process.env.REACT_APP_LOGIN_API_URL;

const Register = () =>{

    let navigate = useNavigate();

    const initialValues = {
        name:'',
        email:'',
        password:"",
        phone:""
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
        fetch(`${url}/register`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate('/login'))
    }

    return( 
        <div className='conta'>
            <div className='pannel'>
                    <h2>REGISTER</h2>
                    <div className='panelbody'>
                            <div className='col'>
                                <label for="fname" className='contlabel'>Name</label>
                                <input className='formcont' id='fname' name='name' value={values.name} onChange={handleInputChange} placeholder='enter name'/>
                            </div>
                            <div className='col'>
                                <label for="email" className='contlabel'>Email</label>
                                <input className='formcont' id='email' name='email' value={values.email} onChange={handleInputChange} placeholder='enter email'/>
                            </div>
                            <div className='col'>
                                <label for="password" className='contlabel'>Password</label>
                                <input className='formcont' id='password' name='password' value={values.password} onChange={handleInputChange} placeholder='enter password' />
                            </div>
                            <div className='col'>
                                <label for="phone" className='contlabel'>Phone</label>
                                <input className='formcont' id='phone' name='phone' value={values.phone} onChange={handleInputChange} placeholder='enter phone number'/>
                            </div>
                    </div>
                    <button className='btn btn-success' onClick={checkout}>Register</button>
                </div>
        </div>
        // <div className='container'>
        //     <div className='panel container'>
        //         <div className='panel-heading'>
        //             <h3>Register</h3>
        //             <div className='panel-body'>
        //                 <div className='row'>
        //                     <div className='col-md--6 form-group'>
        //                         <label for="fname" className='control-label'>Name</label>
        //                         <input className='form-control' id='fname' name='name' value={values.name} onChange={handleInputChange} />
        //                     </div>
        //                     <div className='col-md--6 form-group'>
        //                         <label for="email" className='control-label'>Email</label>
        //                         <input className='form-control' id='email' name='email' value={values.email} onChange={handleInputChange} />
        //                     </div>
        //                     <div className='col-md--6 form-group'>
        //                         <label for="password" className='control-label'>Password</label>
        //                         <input className='form-control' id='password' name='password' value={values.password} onChange={handleInputChange} />
        //                     </div>
        //                     <div className='col-md--6 form-group'>
        //                         <label for="phone" className='control-label'>Phone</label>
        //                         <input className='form-control' id='phone' name='phone' value={values.phone} onChange={handleInputChange} />
        //                     </div>
        //                 </div>
        //                 <button className='btn btn-success' onClick={checkout}>Register</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
      
}
export default Register;