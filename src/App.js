import logo from './logo.svg';
import React, {useEffect, useState} from 'react'; 
import './App.css';



const App=()=>{
  const [ip, setIp]= useState([]); 
  const [query, setQuery] = useState("8.8.8.8");
  const [search, setSearch] = useState(""); 
  
  useEffect(() => {
    getIp();
    
  }, [query]);
  const getIp= async () => {
    const response = await fetch(`https://ipapi.co/${query}/json/`)
    .then(function(response) {
      response.json().then(jsonData => {
        console.log(jsonData);
        setIp(jsonData);

        console.log(Array.isArray(jsonData));
      });
      
     
    })
    .catch(function(error) {
      console.log(error)
    });
  }
  
  const updateSearch = (e) =>{
     setSearch(e.target.value); 
  };

  const getSearch = (e) => {
    e.preventDefault(); 
    setQuery(search); 
    setSearch('');
  };

  return(
    <div className="container">
       <form onSubmit={getSearch} className="search-form" >
         <input className = " search-bar" 
         type= "text" 
         value = {search} 
         onChange = {updateSearch} 
         />
         <button className ="search-button" type = "submit" > Search </button>

       </form>
   
   <div> {ip.ip} </div> 
   <div> {ip.version} </div>
   <div>  {ip.city} </div>
   <div> {ip.asn}</div>
   <div> {ip.continent_code} </div>
   <div> {ip.country} </div>
   <div> {ip.country_area}</div>
   <div> {ip.country_calling_code}</div>
   <div> {ip.country_capital}</div>
   <div> {ip.country_code_iso3}</div>
   <div> {ip.country_name}</div>

   <div> {ip.country_population}</div>
   <div> {ip.currency}</div>
   <div> {ip.currency_name}</div>
   <div> {ip.languages}</div>
   <div> {ip.region}</div>
   <div> {ip.region_code}</div>
   <div> {ip.timezone}</div>
   <div> {ip.utc_offset}</div>


    </div>
  )
}

export default App;
