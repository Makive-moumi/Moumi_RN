// 번역 내역 > 작성한 후기 탭
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styled from 'styled-components/native';

import { TransHomeItem2 } from '../../components';

import axios from 'axios';

const BASEURL = `http://15.165.216.194`;

const HasReview = ({ movePage, navigation }) => {
  const [transData, setTransData] = useState([]);

  // 번역 내역 get
  const getRequests = async () => {
    try {
      const params = {
        page: 0
      }
      const requests = await axios.post(
        BASEURL + `/requests`, {
          category: null,
          hasReview: true
        },
        {
          params: params
        }
      );

      const contents = requests.data.data.content;
      contents.map((content) => (
        getDetail(content.id)
      ))
      

    } catch (error) {
      Alert.alert("API Error");
    } finally {
    }
  }

  const getDetail = async (id) => {
    try {
      const requests = await axios.get(
        BASEURL + `/requests/${id}/client`
      );

      const request = requests.data.data.request;
      const review = requests.data.data.review;

      setTransData([{"id": request.id, "title": request.title, "img": request.image, "category": request.category, "status": request.status,
      "review": review.content, "date": review.reviewDate}, ...transData])

    } catch (error) {
      Alert.alert("API Error2");
    } finally {
    }
  }

  useEffect(() => {
    getRequests();
  }, []);

  useEffect(() => {
  }, [transData]);

  return(
    <Container>
      <ScrollView>
        <TransList>
          {transData.map((data, idx) => (
            <TouchableOpacity
              onPress={() => movePage(data.id)} 
              key={idx}>
              {idx > 0 ?
                <Line/>
                : null
              }
              <TransHomeItem2
                image={data.img}
                title={data.title}
                categories={data.category}
                status={data.status}
                review={data.review}
                date={data.date}/>
            </TouchableOpacity>
          ))}
        </TransList>
      </ScrollView>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: start;
  justify-content: flex-start;
`;

const Line = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.line};
`;

const TransList = styled.View`
  margin-top: 9.5px;
  margin-bottom: 10px;
`;

export default HasReview;