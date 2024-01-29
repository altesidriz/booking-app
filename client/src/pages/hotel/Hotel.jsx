import './hotel.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { SearchContext } from '../../context/SearchContext'

const Hotel = () => {

  const location = useLocation();
  console.log(location);
  const id = location.pathname.split('/')[2];
  console.log(id);
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);

  const { data, loading, error } = useFetch(`/api/hotels/find/${id}`);

  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  };

  const days = dayDifference(dates[0].endDate, dates[0].startDate);


  const handleOpenSlide = (index) => {
    setSlideNumber(index);
    setOpenSlide(true)
  }

  const handleMove = (direction, presentSlide) => {

    if (direction === 'l') {
      presentSlide = presentSlide === 0 ? 5 : presentSlide - 1;
    } else {
      presentSlide = presentSlide === 5 ? 0 : presentSlide + 1;
    }
    setSlideNumber(presentSlide);
  };

  return (
    <div>
      <Navbar />
      <Header type='list' />
      {loading ? ("Loading please wait"
      ) : (
        <div className="hotelContainer">
          {openSlide && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpenSlide(false)} />
            <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('l', slideNumber)} />
            <div className="sliderWrapper">
              <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('r', slideNumber)} />
          </div>}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">Excellent location - {data.distance}m from center</span>
            <span className="hotelPriceHighlight">Book a stay over {data.cheapestPrice}BGN at this property and get free airport taxi</span>
            <div className="hotelImages">
              {data.photos?.map((photo, index) => (
                <div className="hotelImageWrapper" key={index}>
                  <img onClick={() => handleOpenSlide(index)} src={photo} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for beach holidays</h1>
                <span>Located just in fron of the ocean!</span>
                <h2> <b>{days * data.cheapestPrice * options.room} BGN</b> ({days} nights)</h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>)}
    </div>
  )
}

export default Hotel