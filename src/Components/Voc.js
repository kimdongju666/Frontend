/* import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/CommonTable.css'

const GetData = () => {
  const [data, setData] = useState([]);
  
  

  useEffect(() => {
    axios
      .get('/open-api')
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  return (
    <>

    <div className='content-search'>
        <input type='text'
        id='content-search'
        placeholder='검색어를 입력해주세요.'
        className='input-text'
        ></input>
        <button className='search-button'>검색</button>
    </div>
    <table className='common-table'>
      <thead>
        <tr className='common-table-header-column'>
          <th className='first-header'>Factory Name</th>
          <th className='second-header'>Business Name</th>
          <th className='third-header'>Business Manage Place</th>
          <th className='last-header'>Permit Day</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className='common-table-row'>
            <td>{item.factoryName}</td>
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

export default GetData; */

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

  /* const handleSearch = () => {
    // 테이블에서 검색을 수행하는 로직 작성
    // 검색된 결과를 새로운 배열로 필터링하고 해당 배열을 테이블에 표시
    const filteredData = data.filter(
      (item) =>
        item.factoryName.includes(searchTerm) ||
        item.businessName.includes(searchTerm) ||
        item.businessManagePlace.includes(searchTerm) ||
        item.permitDay.includes(searchTerm)
    );
    setData(filteredData);
  }; */

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
            <th className='first-header'>Factory Name</th>
            <th className='second-header'>Business Name</th>
            <th className='third-header'>Business Manage Place</th>
            <th className='last-header'>Permit Day</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className='common-table-row'>
              <td>{item.factoryName}</td>
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
