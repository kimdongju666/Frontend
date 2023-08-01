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
      <div className='content-search'>
        <input
          type='text'
          id='content-search'
          placeholder='검색어를 입력해주세요.'
          className='input-text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='search-button' onClick={handleSearch}>
          검색
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
