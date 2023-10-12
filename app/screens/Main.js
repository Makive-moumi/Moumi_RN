import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";
import Footer from '../components/Footer';

// 아이콘
import search from '../assets/ic_search.png';
import notification from '../assets/ic_notification.png';
import newsImage from '../assets/img_mainnews.png';
import rightArrow from '../assets/ic_rightArrow.png';
import { Image } from 'react-native';

const Main = () => {
    const navigation = useNavigation();

    return (
        <Container>
            {/* 상단 검색창 및 알림 아이콘 */}
            <TopContainer>
                <SearchContainer/>
                <SearchIcon source={search}/>
                <NotificationIcon source={notification}/>
            </TopContainer>
            <NewsContainer>
                <NewsTitle> 새로운 소식이 {'\n'} 업데이트 되었어요! </NewsTitle>
                <NewsSubContainer onTouchEnd={() => navigation.navigate('Doran')}>
                    <NewsSubTitle> 도란도란 확인하기 </NewsSubTitle>
                    <NewsArrow source={rightArrow}/>
                </NewsSubContainer>
                <NewsImg source={newsImage}/>
            </NewsContainer>
            {/* 하단바 */}
            <Footer/>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;
// 상단
const TopContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 42px;
    margin-left: 22px;
`;
const SearchContainer = styled.TextInput`
    width: 82%;     
    height: 35px;
    border-radius: 20px;
    background: #F3F6F6;
`;
const SearchIcon = styled.Image`
    position: absolute;
    width: 22px;
    height: 22px;
    margin-top: 6px;
    margin-left: 12px;
`;
const NotificationIcon = styled.Image`
    width: 26px;
    height: 26px;
    margin-top: 4px;
    margin-left: 13px;
`;
// 중앙
const NewsContainer = styled.View`
    width: 88%;
    height: 162px;  
    border-radius: 20px;
    background: #E9F6F2;
    margin-top: 32px;
    margin-left: 24px;
`;
const NewsSubContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 35px;
    margin-left: 26px;
    padding-bottom: 5px;
    border-bottom-width: 0.5px;
    border-color: #728F89;
    align-self: flex-start;
`;
const NewsTitle = styled.Text`
    color: #3A3C3B;
    font-family: Gothic A1;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px; 
    margin-top: 15px;
    margin-left: 20px;
`;
const NewsImg = styled.Image`
    position: absolute;
    width: 212px;
    height: 190px;
    margin-top: 16px;
    margin-left: 140px;
`;
const NewsSubTitle = styled.Text`
    color: #728F89;
    font-size: 9px;
    font-weight: 300;
`;
const NewsArrow = styled.Image`
    margin-top: 2px;
    margin-left: 2px;
`;
export default Main;