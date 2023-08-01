import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/CommonTable.css';

const GetData = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('/open-api')
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setData(filteredData);
  };

  return (
    <>
      <div>
      <br/>
      <h5>[Guide Line]</h5>
      <p>Search for the Business Manage Place area you want to know below and copy the Business Name you're curious about
      <br/>
      <a href={'https://map.naver.com/'}>NaverMap</a> Click NaverMap to go to the next link, paste it into the search box, and check the location</p>
      </div>
      <div className='content-search'>
        <input
          type='text'
          id='content-search'
          placeholder='Put on the Business Manage Place In Korean'
          className='input-text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='search-button' onClick={handleSearch}>
          Search
        </button>
      </div>
      <table className='common-table'>
        <thead>
          <tr className='common-table-header-column'>
            <th className='second-header'>Business Name</th>
            <th className='third-header'>Business Manage Place</th>
            <th className='last-header'>Permit Day</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className='common-table-row'>
              <td>{item.businessName}</td>
              <td>{item.businessManagePlace}</td>
              <td>{item.permitDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default GetData;
