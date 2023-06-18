import React, { useEffect, useState } from 'react';
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