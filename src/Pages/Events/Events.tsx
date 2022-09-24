import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import PageTitle from '../shared/PageTitle/PageTitle';


import { Link } from 'react-router-dom';


import './Events.css'

const Events = () => {
    const naviagate = useNavigate();
    const handleload = (e: any) => {

        window.scrollTo(0, 0);

        naviagate('/home')
    }
    const handleSocial = (e: any) => {

        window.scrollTo(0, 0);

        naviagate('/social')
    }
    const handleWeddings = (e: any) => {

        window.scrollTo(0, 0);

        naviagate('/weddings')
    }
    const handleNonprofit = (e: any) => {

        window.scrollTo(0, 0);

        naviagate('/nonprofit')
    }
    const handleCorporate = (e: any) => {

        window.scrollTo(0, 0);

        naviagate('/corporate')
    }
    return (
        <div className=''>
            <PageTitle title="Events" />
            <div className='text-center' style={{ backgroundColor: '#c62127' }}>
                <h3 className='text-4xl  pt-6' style={{ fontFamily: 'Josefin Sans', color: 'white', wordSpacing: '6px' }}><strong>What type of event do you want to plan?</strong>
                </h3>
                <h3 className='text-4xl text-neutral  pb-8 pt-4' style={{ fontFamily: 'Josefin Sans', wordSpacing: '9px' }}><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></h3>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 parent" >
                <div className='background-img-1 '>
                    <div className='child' style={{ paddingTop: '20vh' }}>
                        <h2 className='text-3xl lg:text-4xl align-middle  text-center' style={{ fontFamily: 'monospace', color: 'white', wordSpacing: '4px' }}><strong>PLAN A CORPORATE EVENT</strong></h2>
                        <h2 className='text-center pt-3'>   <button className="change " onClick={handleCorporate}>GET STARTED</button></h2>
                    </div>

                </div>
                <div className='background-img-2 '>
                    <div className='child' style={{ paddingTop: '20vh' }}>
                        <h2 className='text-3xl lg:text-4xl align-middle  text-center' style={{ fontFamily: 'monospace', color: 'white', wordSpacing: '4px' }}><strong>PLAN A NON-PROFIT EVENT</strong></h2>
                        <h2 className='text-center pt-3'>   <button className="change " onClick={handleNonprofit}>GET STARTED</button></h2>
                    </div>

                </div>
                <div className='background-img-3 '>
                    <div className='child' style={{ paddingTop: '20vh' }}>
                        <h2 className='text-3xl lg:text-4xl align-middle  text-center' style={{ fontFamily: 'monospace', color: 'white', wordSpacing: '4px' }}><strong>PLAN A SOCIAL EVENT</strong></h2>
                        <h2 className='text-center pt-3'> <button className="change " onClick={handleSocial}>GET STARTED</button></h2>
                    </div>

                </div>
                <div className='background-img-4 '>
                    <div className='child' style={{ paddingTop: '20vh' }}>
                        <h2 className='text-3xl lg:text-4xl align-middle  text-center' style={{ fontFamily: 'monospace', color: 'white', wordSpacing: '4px' }}><strong>PLAN A WEDDING</strong></h2>
                        <h2 className='text-center pt-3'> <button className="change " onClick={handleWeddings} >GET STARTED</button></h2>
                    </div>

                </div>

            </div>
            <div style={{ backgroundColor: '#2d2d2d' }}>
                <h2 style={{ paddingTop: '57px', paddingBottom: '57px' }} className=' text-center'>
                    <button className="change " onClick={handleload}>ENTER SITE</button>
                </h2>
            </div>

        </div >
    );
};

export default Events;