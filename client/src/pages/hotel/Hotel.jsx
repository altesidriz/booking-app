import './hotel.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
import { useState } from 'react'

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);

  const photos = [
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483342748.jpg?k=1935ea12b1893f0278e6727afe235df5410624c1114108da52f8939de4363a27&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483342805.jpg?k=17afc8d8797e5a3a5117337d6eeb2d2733f978cba9651300c433fd19de26ea3f&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483342845.jpg?k=d8c763f060ea8bf24449ce666aa27e25aa30c52b50833e4b2b6125ed22b8c974&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483342878.jpg?k=4866d21ad70c159869ebe28872f60e9849d06124a194067e8825f49aeb67d19f&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483342982.jpg?k=3d1ccaf2c1e95a2ec8050a5562293ce8ed123940879bb70a11a1cf9b4e076042&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/483342941.jpg?k=157208e6bd887744a6826b78c69f27515d7bf3f5c7fc41ca980f5813243e70f8&o=&hp=1'
  ];

  const handleOpenSlide = (index) => {
    setSlideNumber(index);
    setOpenSlide(true)
  }

  const handleMove = (direction, presentSlide) => {

    if(direction === 'l'){
      presentSlide = presentSlide === 0 ? 5 : presentSlide-1;
    }else{
      presentSlide = presentSlide === 5 ? 0 : presentSlide+1;
    }
    setSlideNumber(presentSlide);
  };

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="hotelContainer">
        {openSlide && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=> setOpenSlide(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=> handleMove('l', slideNumber)}/>
          <div className="sliderWrapper">
           <img src={photos[slideNumber]} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=> handleMove('r', slideNumber)}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st.1 no.1</span>
          </div>
          <span className="hotelDistance">Excellent location - 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay over $114 at this property and get free airport taxi</span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImageWrapper" key={index}>
                <img onClick={()=>handleOpenSlide(index)} src={photo} alt="" className="hotelImg"/>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Oceanfront Renovated King Bed Sauna</h1>
              <p className="hotelDesc">Cabana Palms - Oceanfront Renovated King Bed Sauna is a sustainable apartment in Myrtle Beach where guests can make the most of the private beach area and garden. This beachfront property offers access to a balcony and free private parking. The apartment features a pool with sea views, sauna, and an elevator.
                With free Wifi, this 1-bedroom apartment provides a cable flat-screen TV, a washing machine, and a fully equipped kitchen with a dishwasher and oven. The comfortable, air-conditioned accommodation also comes with soundproofing and a fireplace. For added privacy, the accommodation has a private entrance and is protected by full-day security.
                There is an on-site bar.
                Sightseeing tours are available within a reachable distance. Guests can also relax on the sun terrace.
                Myrtle Beach Convention Center is 3.3 miles from the apartment, while Carolina Opry Theater is 3.5 miles away. The nearest airport is Myrtle Beach International Airport, 6.8 miles from Cabana Palms - Oceanfront Renovated King Bed Sauna.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for beach holidays</h1>
              <span>Located just in fron of the ocean!</span>
              <h2> <b>$4650</b> (9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel