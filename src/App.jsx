import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const[actress, setActress] = useState([]);

  const fetchActress = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((response) => {
      console.log(response.data);
      setActress(response.data);
    });
  };

  useEffect(() =>{
    fetchActress();
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h1>STELLE DEL CINEMA</h1>
        </div>
        <div className="row g-3">
          {actress.map((female) => (
            <div key={`female-${female.id}`} className='col-12 col-md-6 col-lg-3'>
              <div className='card rounded-0'>
                <div className="actress-img img-thumbnail">
                  <img src={female.image} alt="" />
                  <div className='actress-infos text-bg-danger p-2'>
                    <h3 className='actress-name'>{female.name}</h3>
                    <p className='actress-birth'>{female.birth_year}</p>
                    <p className='actress-nation'>{female.nationality}</p>
                    <p className="actress-bio">{female.biography}</p>
                    <p className="actress-awards">{female.awards}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
