import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Navigation from './navigations';
import { ProgressProvider } from './contexts';


const App = () => {
  //const [isReady, setIsReady] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <ProgressProvider>
        <StatusBar 
          barStyle="dark-content"
          backgroundColor="#ffffff"/>
        <Navigation />
      </ProgressProvider>
    </ThemeProvider>
  );

}

export default App;

/*
리액트 네비게이션 설치
npm install @react-navigation/native

리액트 네비게이션 라이브러리 사용에 필요한 추가 라이브러리 설치
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

추가로 필요한 라이브러리 설치(스택 네비게이션과 탭 네비게이션 활용을 위한)
npm install @react-navigation/stack @react-navigation/bottom-tabs

스타일드 컴포넌트 라이브러리 설치
npm install --save styled-components

prop-types 라이브러리 설치
npm install --save prop-types

npm install react-native-gesture-handler

라디오버튼
npm install react-native-paper

체크박스
npm i react-native-bouncy-checkbox --save

api 통신
npm add axios

이미지 슬라이드
npm i react-native-image-slider-box

*/