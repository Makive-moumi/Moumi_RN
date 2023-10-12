// 번역 내역 > 후기 쓰기 탭
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Alert, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { TransHomeItem } from '../../components';

import axios from 'axios';

const BASEURL = `http://15.165.216.194`;

const NoneReview = ({ route, navigation }) => {
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
          hasReview: false
        },
        {
          params: params
        }
      );
      const contents = requests.data.data.content;
      const datas = [];
      contents.map((content) => (
        datas.push({"id": content.id, "title": content.title, "img": content.image, "category": content.category, "status": content.status})
      ))
      setTransData(datas);

    } catch (error) {
      Alert.alert("API Error");
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
              key={data.id}
              onPress={navigation.navigate('TransClient', {id: data.id})}>
              {idx > 0 ?
                <Line/>
                : null
              }
              <TransHomeItem image={data.img} title={data.title} categories={data.category} status={data.status}/>
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

export default NoneReview;