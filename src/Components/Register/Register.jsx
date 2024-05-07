import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import errorIcon from '../../Images/img_video_camera.svg'
import success from '../../Images/img_checkmark.svg'
import './register.css';

const Register = ({ register, setCurrentRegis }) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [sec, setSec] = useState(5);

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setIsButtonDisabled(() => {
            setFormData(prev => {
                return (
                    { ...prev, [e.target.name]: e.target.value }
                )
            });
            return formData.name === '' && formData.email === ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            setError('Please enter your name');
            return;
        }
        if (!formData.email.trim()) {
            setError('Please enter your email');
            return;
        }
        if (!validateEmail(formData.email)) {
            setError('Please enter a valid email address');
            return;
        }
        console.log('Registration data:', formData);

        setCurrentRegis(false)

        const successTime = setInterval(() => {
            setSec(prev => {
                console.log(prev)
                if(prev === 0) {
                    clearInterval(successTime)
                    navigate('/')
                    setCurrentRegis(true)
                }
                return prev - 1
            } )
        }, 1000)

        setError('');
        setFormData({ name: '', email: '' });
        setIsButtonDisabled(true);
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <div className='register'>
            {register ? (
                <form className='registerForm' onSubmit={handleSubmit}>
                    <div className='formheading'>Registration Form</div>
                    <div className='quate'>Start your success <br /> Journey here!</div>
                    <div>
                        <input
                            className='myBtn inputs'
                            type='text'
                            placeholder='Enter your name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        /> <br />
                        <input
                            className='myBtn inputs'
                            type='text'
                            placeholder='Enter your email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        /> <br />
                        {error && (
                            <div className='error'>
                                <img
                                    src={errorIcon}
                                    alt='errorr'
                                />
                                <span>{error}</span>
                            </div>
                        )}
                        <button
                            className={`myBtn ${isButtonDisabled ? 'submit' : 'submitNow'}`}
                            type='submit'
                            disabled={isButtonDisabled}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            ) : (
                <div className='successDiv'>
                    <div>
                        <img
                            src={success}
                            alt='success'
                        />
                    </div>
                    <div className='success'>Success Submitted</div>
                    <div className='congrats'>Congratulations</div>
                    <div className='successText'>
                        Your request has been successfully submitted to us. We <br />
                        will validate your information and reach out to your <br />
                        shortly with updates
                    </div>
                    <div className='redirect'>
                        Redirecting you to Homepage in <span>{` ${sec} Seconds`}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Register;
