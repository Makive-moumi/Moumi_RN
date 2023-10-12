// 번역 내역 상세 (사용자)
import React, { useState, useEffect } from 'react';
import { StatusBar, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";

import BackBtn from "../assets/ic_back.png";
import GreenFillStar from "../assets/ic_green_fill_star.png";
import GreenEmptyStar from "../assets/ic_green_empty_star.png";
import GrayFillStar from "../assets/ic_gray_fill_star.png";
import GrayEmptyStar from "../assets/ic_gray_empty_star.png";
import MoreIcon from "../assets/ic_more.png";

import { CategoryTag } from '../components';

import axios from 'axios';

const BASEURL = `http://15.165.216.194`;

const TransClient = ({route}) => {
  const navigation = useNavigation();

  const [topInfo, setTopInfo] = useState(null);
  const [review, setReview] = useState(null);
  const [pdfs, setPDF] = useState(null);

  const getRequestDetail = async () => {
    try {
      //console.log(route.params.id);
      const detail = await axios.get(
        BASEURL + `/requests/1/client`
      );
      //${route.params.id}
      
      const content = detail.data.data;
      const request = detail.data.data.request;
      const review = detail.data.data.review;
      setTopInfo({"title": request.title, "image": request.image, "category": request.category});
      setReview({"avgRating": content.reviewRating, "count": content.reviewCount,
        "user": review.name, "rating": review.rating, "content": review.content, "date": review.reviewDate});
      setPDF({"request": content.requestPdfs, "response": content.responsePdfs});
    } catch (error) {
      Alert.alert("API Error");
    } finally {
      
    }
  };

  useEffect(() => {
    getRequestDetail()
  }, []);

  useEffect(() => {
  }, [topInfo, review, pdfs]);

  return (
    <Container>
      <ScrollView>
        <Header>
          <TouchableOpacity
            onPress={() => navigation.goBack('TransClient')}>
            <Image
              style={styles.back}
              source={BackBtn}/>
          </TouchableOpacity>
          <HeaderTitle>번역 상세</HeaderTitle>
        </Header>

        {topInfo != null ?
          <TopContents>
            <Image
              style={styles.cover}
              source={{uri: topInfo.image}}
              resizeMode="cover"/>
            <TransInfo>
              <Title>{topInfo.title}</Title>
              <CategoryList>
                {topInfo.category != null ?
                  topInfo.category.map((cate, idx) => (
                    <CategoryTag key={idx} category={cate}/>
                  ))
                  : null
                }
              </CategoryList>        
            </TransInfo>
          </TopContents>
          : null
        }

        <Line/>

        {review != null ?
          <AvgRating>
            <AvgTitle>평균 평점 ({review.count}건)</AvgTitle>
            <AvgStarts>
              {review.avgRating >= 1 ?
                <Image
                  style={styles.star}
                  source={GreenFillStar}/>
                :
                <Image
                  style={styles.star}
                  source={GreenEmptyStar}/>
              }
              {review.avgRating >= 2 ?
                <Image
                  style={styles.star}
                  source={GreenFillStar}/>
                :
                <Image
                  style={styles.star}
                  source={GreenEmptyStar}/>
              }
              {review.avgRating >= 3 ?
                <Image
                  style={styles.star}
                  source={GreenFillStar}/>
                :
                <Image
                  style={styles.star}
                  source={GreenEmptyStar}/>
              }
              {review.avgRating >= 4 ?
                <Image
                  style={styles.star}
                  source={GreenFillStar}/>
                :
                <Image
                  style={styles.star}
                  source={GreenEmptyStar}/>
              }
              {review.avgRating >= 5 ?
                <Image
                  style={styles.star}
                  source={GreenFillStar}/>
                :
                <Image
                  style={styles.star}
                  source={GreenEmptyStar}/>
              }
            </AvgStarts>
            <AvgValue>{review.avgRating}</AvgValue>
          </AvgRating>
          : null
        }
        <Line/>

        {review != null ?
          <UserReview>
            <ReviewHeader>
              <ReviewTitle>나의 후기</ReviewTitle>
              <Image
                style={styles.more}
                source={MoreIcon}/>
            </ReviewHeader>

            <ReviewContainer>
              <ReviewUserDate>
                <ReviewUser>{review.user}</ReviewUser>
                <ReviewDate>작성일 {review.date}</ReviewDate>
              </ReviewUserDate>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewContainer>
          </UserReview>
          : null
        }
        <Line/>

        {review != null ?
          <MyRating>
            <ReviewTitle>내 평점</ReviewTitle>
            <AvgStarts>
              {review.rating >= 1 ?
                <Image
                  style={styles.star}
                  source={GrayFillStar}/>
                :
                <Image
                  style={styles.star}
                  source={GrayEmptyStar}/>
              }
              {review.rating >= 2 ?
                <Image
                  style={styles.star}
                  source={GrayFillStar}/>
                :
                <Image
                  style={styles.star}
                  source={GrayEmptyStar}/>
              }
              {review.rating >= 3 ?
                <Image
                  style={styles.star}
                  source={GrayFillStar}/>
                :
                <Image
                  style={styles.star}
                  source={GrayEmptyStar}/>
              }
              {review.rating >= 4 ?
                <Image
                  style={styles.star}
                  source={GrayFillStar}/>
                :
                <Image
                  style={styles.star}
                  source={GrayEmptyStar}/>
              }
              {review.rating >= 5 ?
                <Image
                  style={styles.star}
                  source={GrayFillStar}/>
                :
                <Image
                  style={styles.star}
                  source={GrayEmptyStar}/>
              }
            </AvgStarts>
          </MyRating>
          : null
        }

        <Line/>

        <Files>
          <ReviewTitle>번역 요청 파일</ReviewTitle>
          { pdfs != null && pdfs.request != null ?
            pdfs.request.map((pdf, idx) => (
              <FileName key={idx}>뉴스기사.pdf</FileName>
            ))
            :
            <FileNone>업로드 된 파일이 없습니다.</FileNone>
          }
        </Files>

        <Line/>

        <Files>
          <ReviewTitle>번역 완료 파일</ReviewTitle>
          { pdfs != null && pdfs.response != null ?
            pdfs.response.map((pdf, idx) => (
              <FileName key={idx}>뉴스기사.pdf</FileName>
            ))
            :
            <FileNone>업로드 된 파일이 없습니다.</FileNone>
          }
        </Files>

        <Line/>

        <TouchableOpacity>
          <DownloadBtn>
            <DownloadText>파일 다운로드</DownloadText>
          </DownloadBtn>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}
const styles = StyleSheet.create({
  back: {
    width: 8,
    height: 16,
    resizeMode: 'contain',
    padding: 2,
  },
  cover: {
    width: 100,
    height: 70,
    borderRadius: 20,
    marginLeft: 30,
  },
  star: {
    width: 16,
    height: 16,
    marginRight: 4,
    resizeMode: 'contain',
  },
  more: {
    width: 3,
    height: 15,
    marginLeft: 'auto',
    resizeMode: 'contain',
  }
});

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: start;
  justify-content: flex-start;
`;
// 헤더
const Header = styled.View`
  flex-direction: row;
  margin: 16px 0px 38px 30px;
  align-items: center;
`;
// 번역 상세
const HeaderTitle = styled.Text`
  font-size: 18;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  align-self: flex-start;
  margin-left: 12px;
`;

const TopContents = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;
const TransInfo = styled.View`
  margin-left: 25px;
  margin-top: 6px;
`;
const Title = styled.Text`
  font-size: 14;
  font-weight: 400;
  margin-left: 1px;
  color: ${({ theme }) => theme.doranTitle};
`;
// 카테고리 리스트
const CategoryList = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

const Line = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.line};
`;

const AvgRating = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 27px 30px 25px 30px;
  align-items: center;
`;
const AvgTitle = styled.Text`
  font-size: 14;
  font-weight: 300;
  margin-left: 1px;
  color: ${({ theme }) => theme.doranTitle};
`;
const AvgStarts = styled.View`
  margin-left: auto;
  flex-direction: row;
`;
const AvgValue = styled.Text`
  font-size: 18;
  font-weight: 800;
  margin-left: 11px;
  color: ${({ theme }) => theme.mainColor};
`;

const UserReview = styled.View`
  margin: 25px 30px;
`;
const ReviewHeader = styled.View`
  flex-direction: row;
  algin-items: center;
`;
const ReviewTitle = styled.Text`
  font-size: 14;
  font-weight: 500;
  margin-left: 1px;
  color: ${({ theme }) => theme.doranTitle};
`;
const ReviewContainer = styled.View`
  margin-top: 25px;
`;
const ReviewUserDate = styled.View`
  flex-direction: row;
`;
const ReviewUser = styled.Text`
  font-size: 12;
  font-weight: 500;
  color: ${({ theme }) => theme.doranTitle};
`;
const ReviewDate = styled.Text`
  font-size: 9;
  font-weight: 275;
  color: ${({ theme }) => theme.review};
  margin-left: 11px;
  align-self: center;
`;
const ReviewContent = styled.Text`
  font-size: 12;
  font-weight: 400;
  color: ${({ theme }) => theme.review};
  margin-top: 10px;
`;

const MyRating = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 27px 30px 25px 30px;
`;

const Files = styled.View`
  margin: 25px 30px;
`;
const FileName = styled.Text`
  font-size: 12;
  font-weight: 300;
  margin-top: 15px;
  color: ${({ theme }) => theme.text};
  text-decoration-line: underline;
`;
const FileNone = styled.Text`
  font-size: 12;
  font-weight: 300;
  margin-top: 15px;
  color: ${({ theme }) => theme.noneFile};
  text-decoration-line: underline;
`;

const DownloadBtn = styled.View`
  background-color: ${({ theme }) => theme.mainColor};
  margin: 10px 28px;
  padding-vertical: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
const DownloadText = styled.Text`
  color: ${({ theme }) => theme.background};
  font-size: 12;
  font-weight: 500;
`;

export default TransClient;