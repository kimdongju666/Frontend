import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';
import { useState } from 'react';

function Solution() {
  const [pdfData, setPdfData] = useState(null);

  const fetchPdf = async () => {
    try {
      const response = await axios.get('http://localhost:8080/pdf/download/accident.pdf', {
        responseType: 'blob', // PDF 파일을 ArrayBuffer 형태로 받아옴
      });
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfData(pdfUrl);
    } catch (error) {
      console.error('Error fetching PDF:', error);
    }
  };

  return (
    <>
    <Header />
    <div className="App" >
      <div className="container">
        <button onClick={fetchPdf}>Fetch PDF</button>
        {pdfData && <iframe src={pdfData} title='PDF Viewer' type="application/pdf" width="100%" height="600px" />}
      </div>
    </div>
    <Footer />
    </>
  )
}
export default Solution;