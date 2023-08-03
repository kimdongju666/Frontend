import React, { useEffect } from 'react';

const { kakao } = window;
function KakaoMap({ addresses }) {
  useEffect(() => {
    const mapContainer = document.getElementById('kakao-map');
    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 초기 지도 중심 좌표
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapContainer, options);

    // 현재 위치 가져오기
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const currentLocation = new window.kakao.maps.LatLng(latitude, longitude);
          map.setCenter(currentLocation);

          // 현재 위치에 마커 표시
          const currentMarker = new window.kakao.maps.Marker({
            position: currentLocation,
            image: new window.kakao.maps.MarkerImage(
              '/path/to/current-marker.png', // 현재 위치 아이콘 이미지 경로
              new window.kakao.maps.Size(32, 32),
            ),
          });
          currentMarker.setMap(map);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    }

    addresses.forEach((address) => {
      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(result[0].y, result[0].x),
          });
          marker.setMap(map);
        }
      });
    });
  }, [addresses]);

  return <div id="kakao-map" style={{ width: '100%', height: '400px' }} />;
}

export default KakaoMap;
