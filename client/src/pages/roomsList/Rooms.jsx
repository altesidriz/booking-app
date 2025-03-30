import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Loader from '../../components/loader/Loader';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Rooms = () => {
    const { hotelId } = useParams();
    const { data, loading, error } = useFetch(`/rooms/${hotelId}`);

    return (
        <div>
            <Navbar />
            <Header />
            {loading ? <Loader /> :
                data.map((room) => (
                    <div className='listWrapper' key={room._id}>
                        <div>{room.type}</div>
                        <div>{room.amenities}</div>
                        <div>{room.price}</div>
                        <div>{room.available ? 'Available' : 'Not Available'}</div>
                    </div>
                ))}
            <Footer />
        </div>
    )
}

export default Rooms