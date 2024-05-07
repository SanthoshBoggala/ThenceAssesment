import React from 'react'
import logo from '../../Images/logo.svg'
import './navbarSection.css'

const NavbarSection = () => {
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
                    <button
                        className='myBtn getProjects'
                    >
                        Get Projects
                    </button>
                    <button
                        className='myBtn onBoard'
                    >
                        OnBoard Talent
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavbarSection
