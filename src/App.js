
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [book,setBook] = useState('');
  const[result,setResult] =useState([]);
  const [apiKey,setApiKey] = useState('AIzaSyDZ6NWc--Tseo-RoZF6mgt4ovekgkWQ55A');

  function handleChange(event){
   const book =event.target.value;
   
   setBook(book);
  
  }
  function handleSubmit(event){
    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=20")
    .then((event)=>{return setResult(event.data.items)})
    

    

  }
 
  return (
    <div className="container">
      <h1>Books Finder</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
        <input type='text' onChange={handleChange} className='input-control mt-10'placeholder='search for books' autoComplete='off'
        ></input>
        </div>
        
      <button type='submit' className='btn btn-danger'>search</button>
      
      </form>
      <ul>
        {
          result.map((e)=>{  
            console.log(e)
            
            return(
            <li><img src={e.volumeInfo.imageLinks.thumbnail}/>
            <h3>{e.volumeInfo.title}</h3>
            <h4>Author: {e.volumeInfo.authors}</h4>
            <a href={e.volumeInfo.previewLink }>Read more</a>
            
            </li>)
          })
        }

      </ul>
      
      
    </div>
  );
}

export default App;
