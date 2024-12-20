import './promotion.css';
import { CiShoppingTag } from "react-icons/ci";

const Promotion = () => {
  return (
    <div className='promoContainer'>
        <div className="leftCont">
            <span><CiShoppingTag size={40} color='black'/></span>
            <p>Members save 10% or more on over 100,000 hotels worldwide when signed in</p>
        </div>
        <button>Sign up</button>
    </div>
  )
}

export default Promotion