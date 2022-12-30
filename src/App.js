import logo from './logo.svg';
import './App.css';
import ServiceProvider from './service/ServiceProvider';
import List from './component/List';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

function App() {
  const [data, setData] = useState([]);
  const [type, setType] = useState('Arrondissement');
    const init = ()=> {
      setType('Arrondissement')
        ServiceProvider.getTreesByArrondissement().then(res => {
            console.log('Tree Data ', res.data);
            setData(res.data);
        }).catch(error => {
            console.log("ERROR : " + error)
        })
    }

    const fetchByGenre = ()=>{
      setType('Genre')
      ServiceProvider.getTreesByGenre().then(res => {
        console.log('Tree Data ', res.data);
        setData(res.data);
    }).catch(error => {
        console.log("ERROR : " + error)
    })
    }

    useEffect(() => {
        init()
    }, []);
  return (
    <div className="App">
      <br/>
      <br/>
      <br/>
      <br/>
      <Button onClick={() => fetchByGenre()} variant="contained">Par Genre</Button>
      <Button onClick={() => init()} variant="contained" style={{marginLeft: '20px'}}>Par Arrondissement</Button>
      <List data={data} type={type}/>
    </div>
  );
}

export default App;
