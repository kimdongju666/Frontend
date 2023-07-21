import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const {kakao} = window;

function Kakao() {

  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }))
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 주소 데이터를 가져오기 위한 Axios 요청
        const response = await axios.get("/hospital");
        const addresses = response.data.data; // 가져온 주소 데이터
        const parsedAddresses = addresses.map((item) => item.ADRES);
        console.log(parsedAddresses)

        // 카카오맵 API 초기화
        window.kakao.maps.load(() => {
          const container = document.getElementById("map"); // 지도를 표시할 DOM 엘리먼트
          const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 지도 중심 좌표
            level: 8, // 지도 확대 레벨
          };
          const map = new window.kakao.maps.Map(container, options);

          // 주소 데이터를 이용하여 장소 표시
          const geocoder = new window.kakao.maps.services.Geocoder();
          parsedAddresses.forEach(async (address) => {
            try {
              const result = await geocoder.addressSearch(address);
              if (result && result.length > 0) {
                const position = new window.kakao.maps.LatLng(result[0].y, result[0].x);
                const marker = new window.kakao.maps.Marker({
                  position,
                });
                marker.setMap(map);
              }
            } catch (error) {
              console.log(error);
            }
          });
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "800px",
        }}
        level={3} // 지도의 확대 레벨
      >
        {!state.isLoading && (
          <MapMarker position={state.center}>
            <div style={{ padding: "5px", color: "#000" }}>
              {state.errMsg ? state.errMsg : "여기에 계신가요?!"}
            </div>
          </MapMarker>
        )}
      </Map>
    </>
  )
}

export default Kakao