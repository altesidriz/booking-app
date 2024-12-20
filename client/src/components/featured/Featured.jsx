import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {
    const { data, error, loading } = useFetch("/api/hotels/countByCity?cities=New York,Plovdiv,Sydney");

    return (
        <div className='featured'>
            {loading ? ("Loading please wait"): (<>
                <div className="featuredItem">
                    <img src="https://fnst.axflare.com/community/WEBP/oyLcYvyrCp.webp" alt="" className='featuredImg' />
                    <div className="featuredTitles">
                        <h1>New York</h1>
                        <h2>{data[0]} properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://plovdivcitycard.com/wp-content/uploads/2019/09/Your-Perfect-European-City-Break-Plovdiv-Bulgaria.png" alt="" className='featuredImg' />
                    <div className="featuredTitles">
                        <h1>Plovdiv</h1>
                        <h2>{data[1]} properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZDshdZpXIHI/v0/1200x800.jpg" alt="" className='featuredImg' />
                    <div className="featuredTitles">
                        <h1>Sydney</h1>
                        <h2>{data[2]} properties</h2>
                    </div>
                </div>
            </>)}
        </div>
    )
}

export default Featured