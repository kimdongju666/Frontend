import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';

function Solution() {
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await axios.get('http://localhost:8080/pdf/download/accident.pdf', {
          responseType: 'blob',
        });
        const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setPdfData(pdfUrl);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };
    fetchPdf(); 
  }, []);

  return (
    <>
      <Header />
      <div className="App">
        <div className="container">
          {pdfData && <iframe src={pdfData} title='PDF Viewer' type="application/pdf" width="100%" height="1000px" />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Solution;
