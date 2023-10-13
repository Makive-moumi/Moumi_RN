// 모우미(번역 신청) 상세 > 번역가홈
import React, { useState } from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native';

import likeClick from '../../assets/ic_bookmark_selected.png';
import likeNotClick from '../../assets/ic_bookmark_unselected.png';
import quotationMarks from '../../assets/ic_quotation_marks.png';
import priceNoti from '../../assets/img_pricenoti.png';
import transExplan from '../../assets/img_transExplan.png';
import reviewing from '../../assets/img_reviewing.png';


const featureSummary = [
  {
    content: '빠르고 이해하기 쉽게',
    percentage: '34%'
  },
  {
    content: '이해하기 쉽고 친절하게',
    percentage: '12%'
  },
  {
    content: '시간을 잘 지키고 친절하게',
    percentage: '9%'
  },
];
const TransInfo = [
  {
    Name: '합판? 접목성? 나무로 집 꾸미는 방법',
    State: '번역 완료'
  },
]

const Explanation = ({ route, navigation }) => {
  const [click, setClick] = useState(false);
  const { img, title, category, review, score, price } = route.params;

  const moveReviewPage = () => {
    navigation.navigate('의뢰인후기');
  }

  return (
    <ScrollView style={styles.container}>
      {/* 제목 */}
      <View style={styles.titleContainer}> 
        <Text style={styles.title}> {title} </Text>
        <Pressable onPress={() => setClick(!click)}>
          <Image 
            style={styles.likeBtn} 
            source={(click ? likeClick : likeNotClick)}
          />
        </Pressable>
      </View>

      <View style={styles.line}/>

      {/* 분야 */}
      <View style={styles.area}>
        <SubTitle> 분야 </SubTitle>
        <View style={styles.entireCategory}>
          {category.map((item) => (
            <Text style={styles.categoryColor}> {item} </Text>
          ))}
        </View>
      </View>

      <View style={styles.line}/>

      {/* 번역가 특징 안내 */}
      <View style={styles.area}>
        <SubTitle> 이 번역가님의 특징은 이렇게 나와요 :{')'} </SubTitle>
        <Text style={styles.smallExplan}> 번역가에게 의뢰를 맡긴 분들의 후기를 바탕으로 선택된 키워드예요 </Text>
        <View style={styles.featureField}>
            <Image 
              style={styles.qmImg}
              source={quotationMarks}
            />
            <Text style={styles.featureSubTitle}> 빠르고 이해하기 쉽게 번역해줘요! </Text>
            <KeywordEx source={transExplan}/>
        </View>
        <Reviewing source={reviewing}/>
      </View>

      <View style={styles.line}/>

      {/* 번역가 최근 활동 */}
      <View style={styles.area}>
        <SubTitle> 이 번역가님의 최근 활동이에요 :{')'} </SubTitle>
        <View style={styles.activityExamArea}>
          <Text style={styles.activityTitle}> 활동 사례 </Text>
          <Text style={styles.activitySubTitle}> {TransInfo.length} {'>'} </Text>
        </View>

        <View style={styles.activityList}>
          {TransInfo.map((item, index) => (
            <View style={styles.activitySubList}>
              <Text style={styles.activityListContent}> {item.Name} </Text>
              <Text style={[
                styles.activityListContent, { 
                color: '#AEAEAE',
                marginTop: 8
              }]}> {item.State} </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.line}/>

       {/* 번역 신청 전 참고사항 */}
       <View style={styles.area}>
        <SubTitle> 신청 전 참고해주세요! </SubTitle>
        <View style={styles.noticeField}>
          <Text style={[
            styles.noticeContent, {
            marginTop: 0
          }]}> ∙ 경제 관련 기사 번역 특화 </Text>
          <Text style={styles.noticeContent}> ∙ 연락 가능 시간 : 평일 오전 10시 ~ 오후 8시 </Text>
          <Text style={styles.noticeContent}> ∙ 평균 응답 대기 시간 : 30분 </Text>
        </View>
      </View>

      <View style={styles.line}/>

      {/* 번역 가격 안내*/}
      <View style={styles.area}>
        <SubTitle> 건당 가격은 이래요 </SubTitle>
        <PriceNotice source={priceNoti}/>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  line: {
    height: 0.5,
    backgroundColor: '#D9D9D9',
  },
  area: {
    paddingVertical: 30,
    paddingHorizontal: 28
  },

  // 제목
  titleContainer: {
    width: 'auto',
    flexDirection: 'row',
    paddingTop: 35,
    paddingBottom: 30,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3A3C3B'
  },
  likeBtn: {
    width: 27,
    height: 24,
    marginBottom: 5,
    marginLeft: 111
  },
  
  // 분야
  entireCategory: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5
  },
  categoryColor: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginTop: 10,
    marginRight: 8,
    backgroundColor: '#F3F6F6',
    color: '#3A3C3B',
    fontSize: 9,
    fontWeight: '300',
    borderRadius: 10,
    overflow: 'hidden'
  },

  // 번역가 특징
  featureField: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 15,
    marginTop: 30,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 20,
  },
  smallExplan: {
    marginTop: 10,
    color: '#666',
    fontSize: 9,
    fontWeight: '300',
  },
  featureSubTitle:{
    marginBottom: 31,
    color: '#3A3C3B',
    fontSize: 12,
    fontWeight: '500'
  },
  qmImg:{
    width: 28,
    height: 28,
    bottom: 3 
  },
  featureContent: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  featureContentSummary: {
    marginBottom: 15,
    color: '#666',
    fontSize: 9,
    fontWeight: '300',
  },
  reviewCheckArea: {
    alignItems: 'center',
    marginTop: 30
  },
  subLine: {
    width: 107,
    height: 1,
    marginTop: 5,
    backgroundColor: '#666'
  },

  activityExamArea: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20
  },
  activityTitle: {
    color: '#666',
    fontSize: 10,
    fontWeight: '700',
  },
  activitySubTitle: {
    marginLeft: 15,
    color: '#AEAEAE',
    fontSize: 10,
    fontWeight: '500'
  },
  activityList: {
    flexDirection: 'row',
    overflow: 'scroll',
  },
  activitySubList:{
    width: 97, 
    marginRight: 12,
  },
  activityListContent: {
    color: '#3A3C3B',
    fontSize: 9,
    fontWeight: '500',
  },

  noticeField: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 15,
  },
  noticeContent: {
    marginTop: 10,
    color: '#3A3C3B',
    fontSize: 10,
    fontWeight: '300'
  },
});
const Reviewing = styled.Image`
  width: 100px;
  height: 25px;
  margin-top: 30px;
  margin-left: 110px;
`;
const KeywordEx = styled.Image`
  width: 290px;
  height: 85px;
`;
const SubTitle = styled.Text`
  color: #3A3C3B;
  font-size: 12px;
  font-weight: 500;
`;
const PriceNotice = styled.Image`
  width: 330px;
  height: 110px;
  margin-top: 20px;
`;
export default Explanation;