import { useNavigate } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/')
    }
  return (
    <div className="notFound">
        <div className="headerNotFound">
            <button onClick={handleGoHome}>Go Home</button>
        </div>
        <h3>Opps something went wrong &#128577;</h3>
        <h1>404 : Page not found</h1>
    </div>
  )
}

export default NotFound