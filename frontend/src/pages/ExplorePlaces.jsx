import { useEffect, useRef, useState } from 'react';
import { useParams} from 'react-router-dom';
import { dayHike, campHike } from '../data/data';
import './explorePlaces.css'
import RequestForm from '../components/forms/RequestForm';

function ExplorePlaces() {
  const targetRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const { id } = useParams();
  const combinedData = dayHike.concat(campHike);
  const [showForm, setShowForm] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  
  let dataItem = combinedData.find(item => item.id === parseInt(id));

  const handleRequestNow = () => {
    setSelectedData(dataItem);
    setShowForm(true);
    targetRef.current.scrollIntoView({ behavior: 'smooth'})
  };

  return (
    <>
      <div className='explore-container'>
        <div className='explore-1st-container'>
              <h1>{dataItem.title}</h1>
          <div className='explore-1st'>
            <p>
              {dataItem.mainDesc}
            </p>
          <div className='explore-img single-img1' style={{ backgroundImage: `url(${dataItem.url[1]})` }} />
          </div>
            </div>
      
      <div className='activities'>
        <h1 >ACTIVITIES</h1>
      <p>{dataItem.activity1}</p>
      </div>
      
      <div className="imgs">
        <div className='explore-img' style={{ backgroundImage: `url(${dataItem.url[2]})` }} />
      <div className='explore-img' style={{ backgroundImage: `url(${dataItem.url[3]})` }} />
      </div>
      <div className='all-activities'>
        <div className="activities-list detail">
        <ul>
          <li className='actitvity2'>{dataItem.activity2}</li>
      </ul>
      <button className='large' onClick={handleRequestNow}>Request a Trip</button>
      </div>
      <div className='last-imgs'>
        
        <div className='last'>
          <div className='img1' style={{ backgroundImage: `url(${dataItem.url[4]})` }} />
          <div className='img2' style={{ backgroundImage: `url(${dataItem.url[5]})` }} /></div>
          <div className='explore-img single-img2' style={{ backgroundImage: `url(${dataItem.url[7]})` }} />
      </div>
      </div>
      <button className='small' onClick={handleRequestNow}>Request a Trip</button>
      <div ref={targetRef}> 
        {showForm && <RequestForm selectedData={selectedData} />}
      </div>
    </div>
    </>
    
  )
}

export default ExplorePlaces;