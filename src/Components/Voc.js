import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CommonTable from './Table';
import CommonTableColumn from './TableColumn';
import CommonTableRow from './TableRow';

/* function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('/open-api')
    .then((response)=> {
      setData(response.data);
      console.log(response.data);
    })
  }, []);

  const item = (Object.values(data)).map((item) => (
    <CommonTableRow key={item.id}>
      <CommonTableColumn key={item.factoryName}>{item.factoryName}</CommonTableColumn>
      <CommonTableColumn key={item.businessName}>{item.businessName}</CommonTableColumn>
      <CommonTableColumn key={item.businessManagePlace}>{item.businessManagePlace}</CommonTableColumn>
      <CommonTableColumn key={item.permitDay}>{item.permitDay}</CommonTableColumn>
    </CommonTableRow>
  ));

  return item;
}

function Voc() {
  const item = GetData();

  return (<>
    <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
      {item}
    </CommonTable>
  </>);
} */

function GetData() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/open-api')
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const renderTable = () => {
    if (Object.keys(data).length === 0) {
      return null; 
    }

    return Object.values(data).map((item) => (
      <CommonTableRow key={item.id}>
        <CommonTableColumn>{item.factoryName}</CommonTableColumn>
        <CommonTableColumn>{item.businessName}</CommonTableColumn>
        <CommonTableColumn>{item.businessManagePlace}</CommonTableColumn>
        <CommonTableColumn>{item.permitDay}</CommonTableColumn>
      </CommonTableRow>
    ));
  };

  return renderTable();
}

function Voc() {
  const tableData = GetData();

  return (
    <>
      <CommonTable headersName={['Factory Name', 'Business Name', 'Business Manage Place', 'Permit Day']}>
        {tableData}
      </CommonTable>
    </>
  );
}

export default Voc;