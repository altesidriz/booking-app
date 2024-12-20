import './mailList.css';
import { BiSolidMoon } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";


const MailList = () => {
  return (
    <div className='mail'>
      <h1 className="mailTitle">Find and book your perfect stay <IoInformationCircleOutline size={20}/></h1>
      <div className='box'>
        <span><BiSolidMoon size={32} /></span>
        <span>Earn rewards on every night you stay</span>
      </div>
      <div className='box'>
        <span><FaTag size={32}/></span>
        <span>Save more with Member Prices</span>
      </div>
      <div className='box'>
        <span><FaRegCalendarAlt size={32}/></span>
        <span>Free cancellation options if plans change</span>
      </div>

    </div>
  )
}

export default MailList