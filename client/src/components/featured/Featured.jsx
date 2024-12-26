import useFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {
    const { data, error, loading } = useFetch("/api/hotels/countByCity?cities=Seoul,Sofia,Bucharest");

    return (
        <div className='featured'>
            {loading ? ("Loading please wait"): (<>
                <div className="featuredItem">
                    <img src="https://res.cloudinary.com/dtljonz0f/image/upload/c_fill,w_588,h_420,g_auto/f_auto/q_auto/v1/gc-v1/seoul/shutterstock_2345265717_y7twyc?_a=BAVARSAP0" alt="" className='featuredImg' />
                    <div className="featuredTitles">
                        <h1>Seoul</h1>
                        <h2>{data[0]} properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://pohcdn.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/sofia-2.jpg" alt="" className='featuredImg' />
                    <div className="featuredTitles">
                        <h1>Sofia</h1>
                        <h2>{data[1]} properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://www.citiesabc.com/wp-content/uploads/2020/05/DALL%C2%B7E-2024-09-24-10.53.51-A-panoramic-view-of-Bucharest-Romania-showcasing-the-citys-diverse-architecture.-The-image-features-the-grand-Palace-of-the-Parliament-in-the-backg-1.webp" alt="" className='featuredImg' />
                    <div className="featuredTitles">
                        <h1>Bucharest</h1>
                        <h2>{data[2]} properties</h2>
                    </div>
                </div>
            </>)}
        </div>
    )
}

export default Featured