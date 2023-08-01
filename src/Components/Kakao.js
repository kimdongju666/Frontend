import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Map, MapMarker } from 'react-kakao-maps-sdk';


const { kakao } = window;

function Kakao() {

  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할 수 없어요..',
        isLoading: false,
      }));
    }
  }, []);
  useEffect(() => {
    // 지도 초기화 및 마커 표시하는 함수
    const initializeMap = async () => {
      try {
        const response = await axios.get('/hospital');
        const addresses = response.data.data.ADRES;
        console.log(addresses);
        const parsedAddresses = addresses.map((item) => item.ADRES);

        // 카카오맵 API 초기화
        window.kakao.maps.load(() => {
          const container = document.getElementById('map'); // 지도를 표시할 DOM 엘리먼트
          const options = {
            center: new window.kakao.maps.LatLng(state.center.lat, state.center.lng), // 지도 중심 좌표 (현위치)
            level: 8, // 지도 확대 레벨
          };
          const map = new window.kakao.maps.Map(container, options);

          // 주소 데이터를 이용하여 장소 표시
          const geocodeWithPromise = (address) => {
            return new Promise((resolve, reject) => {
              const geocoder = new window.kakao.maps.services.Geocoder();
              geocoder.addressSearch(address, (result, status) => {
                if (status === window.kakao.maps.services.Status.OK) {
                  resolve(result[0]);
                } else {
                  reject(status);
                }
              });
            });
          };


          Promise.all(parsedAddresses.map(geocodeWithPromise))
            .then((results) => {
              results.forEach((result) => {
                const position = new window.kakao.maps.LatLng(result.y, result.x);
                const marker = new window.kakao.maps.Marker({
                  position,
                });
                marker.setMap(map);
              });
            })
            .catch((error) => {
              console.log('Geocoding Error:', error);
            });
        });
      } catch (error) {
        console.log(error);
      }
    };

    // Map 컴포넌트가 렌더링된 이후에 Kakao Map API 초기화 함수 호출
    initializeMap();
  }, [state.center]);

  /* useEffect(() => {
    // 지도 초기화 및 마커 표시하는 함수
    const initializeMap = async () => {
      try {
        const response = await axios.get('/hospital');
        const addresses = response.data.data;
        const parsedAddresses = addresses.map((item) => item.ADRES);

        // 카카오맵 API 초기화
        window.kakao.maps.load(() => {
          const container = document.getElementById('map'); // 지도를 표시할 DOM 엘리먼트
          const options = {
            center: new window.kakao.maps.LatLng(state.center.lat, state.center.lng), // 지도 중심 좌표 (현위치)
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

    // Map 컴포넌트가 렌더링된 이후에 Kakao Map API 초기화 함수 호출
    initializeMap();
  }, [state.center]);
 */
  return (
    <>
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: '100%',
          height: '800px',
        }}
        level={3} // 지도의 확대 레벨
      >
        {!state.isLoading && (
          <MapMarker position={state.center}>
            <div style={{ padding: '5px', color: '#000' }}>
              {state.errMsg ? state.errMsg : '여기에 계신가요?!'}
            </div>
          </MapMarker>
        )}
      </Map>
    </>
  );
}

export default Kakao;
