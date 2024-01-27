import useFetch from '../../hooks/useFetch';
import './propertyList.css'

const PropertyList = () => {
    const { data, error, loading } = useFetch("/api/hotels/countByType");

    



    console.log(data);

    const images = [
        "https://atlashotel.bg/images/296b17b911bb6d31ce6b830b74ec8099e78ec378.jpg",
        "https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU",
        "https://images.micazu.nl/_images/house/43407/images/villa_surga-1-3547.jpeg?&width=1600&height=1200&mode=crop"
    ]
    return (
        <div className="pList">
          {loading ? (
            "loading"
          ) : (
            <>
              {data &&
                images.map((img,i) => (
                  <div className="pListItem" key={i}>
                    <img
                      src={img}
                      alt=""
                      className="pListImg"
                    />
                    <div className="pListTitles">
                      <h1>{data[i]?.type}</h1>
                      <h2>{data[i]?.count} {data[i]?.type}</h2>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      );  
}

export default PropertyList