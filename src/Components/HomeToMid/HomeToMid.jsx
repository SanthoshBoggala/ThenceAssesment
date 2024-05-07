import React from 'react'
import HomeTop from '../HomeTop/HomeTop'
import Carousels from '../Carousers/Carousels'
import hero from '../../Images/hero.png'
import sparkle from '../../Images/img_spark_sparkle.svg'
import booster from '../../Images/booster.svg'
import './homeToMid.css';
import { Button } from 'bootstrap'

const HomeToMid = () => {
    const ReduceProjectTime = ()=>{
        return (
            <div className='reduceProjectTime'>
                <div className='bigPercentage'>
                    40%
                </div>
                <div className='reduceProjectTimeText'>
                Achieved reduction in project execution time by optimising team availability
                </div>
                <img 
                        src={sparkle}
                        alt='sparkle'
                />
            </div>
        )
    }
    const Staff = ()=>{
        return (
            <div className='staff'>
                <div>
                    <img 
                        src={booster}
                        alt='stffBooster'
                    />
                </div>
                <div className='staffTextDiv'>
                    <div className='staffTextDays'>10 DAYS</div>
                    <div className='staffText'>Staff Deployment</div>
                </div>
            </div>
        )
    }

    const ClientExpense = ()=>{
        return (
            <div className='clientExpense'>
                <div className='million'>
                    $0.5 <span>MILLION</span>
                </div>
                <div className='clientExpenseText'>
                    Reduced client expenses by saving on hiring and employee costs.
                </div>
            </div>
        )
    }

    return (
        <div className='homeToMid'>
            <HomeTop />
            <div className='homeMid row g-0'>
                <div className='col-md-7 hero'>
                    <img
                        src={hero}
                        alt='heroo'
                    />
                    <ReduceProjectTime />
                    <Staff />
                    <ClientExpense />
                </div>
                <div className='col-md-5 carouselDiv'>
                    <Carousels />
                    <div className='exploreMore'>
                    <button
                        className='myBtn'
                    >
                        Explore More ➜
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeToMid
