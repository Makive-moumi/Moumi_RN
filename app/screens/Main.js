import styled from 'styled-components/native';
import { useRef } from 'react';
import { useNavigation } from "@react-navigation/native";
import { ScrollView, StatusBar } from 'react-native';

import { FilterLists } from '../components';
import TransItem from '../components/TransItem';
import Footer from '../components/Footer';
import TopMoveBtn from '../components/TopMoveBtn';

// 아이콘
import search from '../assets/ic_search.png';
import notification from '../assets/ic_notification.png';
import newsImage from '../assets/img_mainnews.png';
import rightArrow from '../assets/ic_rightArrow.png';

const Main = () => {
    const navigation = useNavigation();
    const scrollRef = useRef();
    
    const dummyDate = [
        {
            title: "뉴스 번역해드립니다!",
            review: 24,
            score: 5.0,
            price: 12500,
            category: ["뉴스", "공식 문서"]
        },
        {
            title: "뉴스 번역해드립니다!",
            review: 24,
            score: 5.0,
            price: 12500,
            category: ["뉴스", "공식 문서"]
        },
        {
            title: "뉴스 번역해드립니다!",
            review: 24,
            score: 5.0,
            price: 12500,
            category: ["뉴스", "공식 문서"]
        },
    ]

    return (
        <Container>
            <StatusBar 
                barStyle="dark-content"
                backgroundColor="#ffffff"/>
            <ScrollView ref={scrollRef}>
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
                <FilterLists/>
                <Line/>
                <TransList>
                    {dummyDate.map((item, idx) => (
                        <>
                            <TransItem
                                key={idx}
                                title={item.title}
                                review={item.review}
                                score={item.score}
                                price={item.price}
                                category={item.category}
                            />
                            <Line/>
                        </>
                    ))}
                </TransList>
            </ScrollView>
            <TopMoveBtn scrollRef={scrollRef}/>
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
// 중앙 - 새로운 소식 ~~
const NewsContainer = styled.View`
    width: 88%;
    height: 162px;  
    border-radius: 20px;
    background: #E9F6F2;
    margin: 32px 0 54px 24px;
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
// 중앙 - line
const Line = styled.View`
    width: 100%;
    height: 0.5px;
    background: #D9D9D9;
    margin-top: 16px;
`;
const TransList = styled.View`
`;
export default Main;