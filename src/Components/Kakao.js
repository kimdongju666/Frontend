/* import React, { useEffect, useState } from 'react';
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
 */
import React from 'react';
import KakaoMap from './KakaoMap.js';

function Kakao() {
  const addresses = [
    '제주특별자치도 제주시 첨단로 242',
    '제주특별자치도 제주시 광양9길 10',
    '제주특별자치도 제주시 서광로2길 24',
    // 추가 주소들
  ];

  return (
    <div className="App">
      <KakaoMap addresses={addresses} />
    </div>
  );
}

export default Kakao;