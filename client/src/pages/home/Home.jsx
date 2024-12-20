import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'

import './home.css'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import Promotion from '../../components/promotion/Promotion'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

const Home = () => {
    const { user } = useContext(AuthContext);
  
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        {user ? null : <Promotion/>}
        <MailList />
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Top Destinations</h1>
        <FeaturedProperties/>
        <Footer />
      </div>
    </div>
  )
}

export default Home