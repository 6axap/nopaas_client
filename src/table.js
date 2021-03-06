import React, { useState, useEffect } from "react";
import axios from 'axios';
import './style/App.css';

function Table() {
  const [data, setData] = useState({});

  useEffect(() => {
    callAPI();
  }, []); // see above https://reactjs.org/docs/hooks-effect.html#next-steps

  const callAPI = async () => {
    await fetch('http://localhost:3001/sites')
      .then(res => res.json())
      .then(res => {
        setData(res)
        console.log(data)
      })
      .catch(err => {
        console.error(err)
      });
  }


  return (
    <>
      <h1>Sites</h1>
      <table class="table table-striped table-hover table-bordered table-sm">
      <thead>
          <tr>
          <th scope="col">#</th>
          <th scope="col">Municipality</th>
          <th scope="col">Lot</th>
          <th scope="col">Address</th>
          <th scope="col">Parcel No.</th>
          <th scope="col">Site Type</th>
          <th scope="col">Site Contact</th>
          <th scope="col">Telephone</th>
          <th scope="col">Mail</th>
          <th scope="col">Site Acquisition Manager</th>
          <th scope="col">SID Site</th>
          </tr>
      </thead>
      <tbody>
          <tr>
          <th scope="row">1</th>
          <td>Schupfart</td>
          <td>1</td>
          <td>Aufgentweg 383</td>
          <td>359</td>
          <td>EFH</td>
          <td>Sandrine Gardon</td>
          <td>062 871 99 10</td>
          <td>pfiffer.a@gmail.com</td>
          <td>Alina Pfiffer</td>
          <td>SID004000GNCJVD</td>
          </tr>
      </tbody>
      </table> 
    </>
  );
}

export default Table;



