import React from 'react'
import logo from '../../Images/logo.svg'
import './navbarSection.css'
import close from '../../Images/img_close.svg'
import { useNavigate } from 'react-router-dom'

const NavbarSection = ({ regis = false, redirect = true }) => {
    const navigate = useNavigate()

    return (
        <nav class="navbar sticky-top bg-body-tertiary navbarOuterDiv">
            <div className='container-fluid navbarInnerDiv'>
                <div className=''>
                    <img
                        src={logo}
                        alt='logo'
                        className='logo'
                    />
                </div>
                <div className=''>
                    {!regis ? (
                        <>
                            <button
                                className='myBtn getProjects'
                                onClick={()=> navigate('/register')}
                            >
                                Get Projects
                            </button>
                            <button
                                className='myBtn onBoard'
                            >
                                OnBoard Talent
                            </button>
                        </>)
                        : (
                            <>
                                {redirect && (
                                    <img
                                        src={close}
                                        alt='closebtn'
                                        className='close'
                                        onClick={()=> navigate('/')}
                                    />
                                )}
                            </>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavbarSection
