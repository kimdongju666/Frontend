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
    '서울특별시 강남구 일원동 50',
    '서울특별시 강서구 화곡동 377-8',
    '서울특별시 송파구 문정동 17-5',
    '서울특별시 영등포구 영등포동4가 153-1',
    '서울특별시 도봉구 창동 650-46',
    '서울특별시 영등포구 신길동 451-2',
    '서울특별시 강서구 화곡동 349-3',
    '서울특별시 송파구 오금동 77',
    '서울특별시 강남구 대치동 994-5',
    '서울특별시 영등포구 신길동 232-84',
    '서울특별시 영등포구 영등포동7가 94-200',
    '서울특별시 영등포구 여의도동 62',
    '서울특별시 양천구 신정동 329-10',
    '서울특별시 강서구 방화동 495-26',
    '서울특별시 성북구 길음동 1286',
    '서울특별시 동대문구 신설동 101-5',
    '서울특별시 은평구 응암동 96-1',
    '서울특별시 중랑구 면목동 180-1',
    '서울특별시 성동구 행당동 130-115',
    '서울특별시 구로구 구로동 573',
    '서울특별시 중구 을지로6가 18-35',
    '서울특별시 관악구 봉천동 722-19',
    '서울특별시 강남구 삼성동 9',
    '서울특별시 강남구 논현동 241-3',
    '서울특별시 서대문구 남가좌동 102-3',
    '서울특별시 영등포구 신길동 4662',
    '서울특별시 서초구 반포동 505',
    '서울특별시 은평구 진관동 55',
    // 추가 주소들
  ];

  return (
    <div className="App">
      <KakaoMap addresses={addresses} />
    </div>
  );
}

export default Kakao;