import { useRef, useEffect, useState } from 'react'
// import { BVid } from '../Components/BVid'
// import Footer from '../Components/Footer'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import '../App.css'
import * as tt from '@tomtom-international/web-sdk-maps'
import * as ttapi from '@tomtom-international/web-sdk-services'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import { useParams } from 'react-router-dom';
// import { useSSRSafeId } from '@react-aria/ssr';


const Tmap = (props) => {
  const mapElement = useRef()
  const [map, setMap] = useState({})
  const [longitude, setLongitude] = useState(92.7911)
  const [latitude, setLatitude] = useState(24.7561)

  // const traderLocation = [
  //   [latitude + 0.005, longitude + 0.01],
  //   [latitude - 0.005, longitude + 0.0045],
  //   [latitude - 0.008, longitude + 0.004],
  //   [latitude + 0.01, longitude + 0.001]
  // ];


  const convertToPoints = (lngLat) => {
    return {
      point: {
        latitude: lngLat.lat,
        longitude: lngLat.lng
      }
    }
  }

  const drawRoute = (geoJson, map) => {
    if (map.getLayer('route')) {
      map.removeLayer('route')
      map.removeSource('route')
    }
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geoJson
      },
      paint: {
        'line-color': '#4a90e2',
        'line-width': 6

      }
    })
  }

  const addDeliveryMarker = (lngLat, map) => {
    const element = document.createElement('div')
    element.className = 'marker-delivery'
    new tt.Marker({
      element: element
    })
      .setLngLat(lngLat)
      .addTo(map)
  }

  const distance = (lat1, lat2, lon1, lon2) => {

    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
      + Math.cos(lat1) * Math.cos(lat2)
      * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;

    // calculate the result
    return (c * r);
  }

  useEffect(() => {
    const origin = {
      lng: longitude,
      lat: latitude,
    }
    const destinations = []

    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: [longitude, latitude],
      zoom: 14,
    })
    setMap(map)

    const addMarker = (lat, lng, message) => {
      const popupOffset = {
        bottom: [0, -25]
      }
      const popup = new tt.Popup({ offset: popupOffset }).setHTML(message)
      const element = document.createElement('div')
      element.className = 'marker'

      const marker = new tt.Marker({
        draggable: true,
        element: element,
      })
        .setLngLat([lng, lat])
        .addTo(map)

      marker.on('dragend', () => {
        const lngLat = marker.getLngLat()
        setLongitude(lngLat.lng)
        setLatitude(lngLat.lat)
      })

      marker.setPopup(popup).togglePopup()

    }
    addMarker(latitude, longitude, "This is you");
    // traderLocation.map((item, index) => {
    //   addMarker(item[0], item[1], `Trader ${index + 1} | ${(distance(latitude, item[0], longitude, item[1])).toString().substring(0, 4)} Km`);

    // })

    const sortDestinations = (locations) => {
      const pointsForDestinations = locations.map((destination) => {
        return convertToPoints(destination)
      })
      const callParameters = {
        key: process.env.REACT_APP_TOM_TOM_API_KEY,
        destinations: pointsForDestinations,
        origins: [convertToPoints(origin)],
      }

      return new Promise((resolve, reject) => {
        ttapi.services
          .matrixRouting(callParameters)
          .then((matrixAPIResults) => {
            const results = matrixAPIResults.matrix[0]
            const resultsArray = results.map((result, index) => {
              return {
                location: locations[index],
                drivingtime: result.response.routeSummary.travelTimeInSeconds,
              }
            })
            resultsArray.sort((a, b) => {
              return a.drivingtime - b.drivingtime
            })
            const sortedLocations = resultsArray.map((result) => {
              return result.location
            })
            resolve(sortedLocations)
          })
      })
    }

    const recalculateRoutes = () => {
      sortDestinations(destinations).then((sorted) => {
        sorted.unshift(origin)

        ttapi.services
          .calculateRoute({
            key: process.env.REACT_APP_TOM_TOM_API_KEY,
            locations: sorted,
          })
          .then((routeData) => {
            const geoJson = routeData.toGeoJson()
            drawRoute(geoJson, map)
          })
      })
    }


    map.on('click', (e) => {
      destinations.push(e.lngLat)
      addDeliveryMarker(e.lngLat, map)
      recalculateRoutes()
    })

    return () => map.remove()
  }, [longitude, latitude])

  const { product, quantity } = useParams();
  const [message, setmessage] = useState("")
  const [status, setStatus] = useState(props.authDetails.type==="user"?"Loading... Please Wait":"Your recent orders");
  const [bottles, setBottles] = useState(null);
  const [ordersData, setOrdersData] = useState({
    "data": [
      { "ID": 4245245, "user": "user1@gmail.com", "Trader": "trader1@gmail.com", "Cashback Points": 40, "Status": "placed" },
      { "ID": 4344221, "user": "user2@gmail.com", "Trader": "trader2@gmail.com", "Cashback Points": 50, "Status": "received" },
      { "ID": 9871463, "user": "user3@gmail.com", "Trader": "trader3@gmail.com", "Cashback Points": 70, "Status": "received" },
      { "ID": 1354611, "user": "user1@gmail.com", "Trader": "trader1@gmail.com", "Cashback Points": 30, "Status": "received" },
      { "ID": 4631684, "user": "user1@gmail.com", "Trader": "trader1@gmail.com", "Cashback Points": 20, "Status": "placed" },
      { "ID": 9874613, "user": "user2@gmail.com", "Trader": "trader2@gmail.com", "Cashback Points": 90, "Status": "placed" }
    ]
  });

  // const fetchData = async () => {
  //   const response = await fetch("https://script.google.com/macros/s/AKfycbwVWSOK5wl3c3mjiOBC5gPZWvzypDdvDqOaV6JFi6D173peU9WA-6z5cJRgU_79Z7IMKA/exec");
  //   const parsedData = await response.json;
  //   console.log(parsedData);
  // }

  if (props.authDetails.type === "user") {
    setTimeout(() => {
      setBottles(quantity);
      setStatus("Your Order Summary:-");
    }, 2000);
  } 

  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-6" id="colwidth">
            {map && (
              <div className="app">
                <div ref={mapElement} className="map" style={{ width: `600px` }} />
              </div>
            )}
          </div>
          <div className="col-6">
            <h1>{props.authDetails.type === "user" ? "User" : "Trader"} Page</h1>
            {props.authDetails.email !== "" ?
              <h3>Logged in as {props.authDetails.type}</h3>
              :
              <h3>No user logged in.</h3>}
            {status &&
              <div className="container bg-light mt-4 p-3">
                <h2 style={{ color: '#1B4965' }}>{status}</h2>
                {bottles && <>
                  <h4 style={{ color: '#1B4965' }}>Bottles detected: {bottles}</h4>
                  <h4 style={{ color: '#1B4965' }}>Points for 1 bottle: 10</h4>
                  <h4 style={{ color: '#1B4965' }}>Estimated cashback points gained: {bottles * 10}</h4>
                </>
                }
                {
                  props.authDetails.type === "trader" ?
                    <div>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Order Id</th>
                            <th scope="col">User</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                  {/* { "ID": 6, "user": "user2@gmail.com", "Trader": "trader6@gmail.com", "Cashback Points": 90, "Status": "placed" } */}
                          {
                            ordersData["data"].map((item) => {
                              if (item.Trader === props.authDetails.email) {
                                return (
                                  <tr key={item.ID}>
                                    <th scope="row">{item.ID}</th>
                                    <td>{item.user}</td>
                                    <td>{item.Status}</td>
                                  </tr>
                                )
                              }
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                    : ""
                }
              </div>
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Tmap