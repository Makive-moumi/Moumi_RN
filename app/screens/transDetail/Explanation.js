// 모우미(번역 신청) 상세 > 번역가홈
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import likeClick from '../../assets/ic_bookmark_selected.png';
import likeNotClick from '../../assets/ic_bookmark_unselected.png';
import quotationMarks from '../../assets/ic_quotation_marks.png';
import styled from 'styled-components';

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
        <Text style={styles.subTitle}> 분야 </Text>
        <View style={styles.entireCategory}>
          {category.map((item) => (
            <Text style={styles.categoryColor}> {item} </Text>
          ))}
        </View>
      </View>

      <View style={styles.line}/>

      {/* 번역가 특징 안내 */}
      <View style={styles.area}>
        <Text style={styles.subTitle}> 이 번역가님의 특징은 이렇게 나와요 :{')'} </Text>
        <Text style={styles.smallExplan}> 번역가에게 의뢰를 맡긴 분들의 후기를 바탕으로 선택된 키워드예요 </Text>
        <View style={styles.featureField}>
            <Image 
              style={styles.qmImg}
              source={quotationMarks}
            />
            <Text style={styles.featureSubTitle}> 빠르고 이해하기 쉽게 번역해줘요! </Text>
            {featureSummary.map((item, index) => (
              <View key={index} style={styles.featureContent}> 
                <Text style={styles.featureContentSummary}> {item.content} </Text>
                <View style={styles.line}/>
                <Text style={styles.featureContentSummary}> {item.percentage} </Text>
              </View>
            ))}
        </View>
        <TouchableOpacity 
          onPress={moveReviewPage}
          style={styles.reviewCheckArea}>
          <Text style={styles.subTitle}> 후기 전체보기 {'>'} </Text>
          <View style={styles.subLine}/>
        </TouchableOpacity>
      </View>

      <View style={styles.line}/>

      {/* 번역가 최근 활동 */}
      <View style={styles.area}>
        <Text style={styles.subTitle}> 이 번역가님의 최근 활동이에요 :{')'} </Text>
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
        <Text style={styles.subTitle}> 신청 전 참고해주세요! </Text>
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
        <Text style={styles.subTitle}> 건당 가격은 이래요 </Text>
        <View style={[
          styles.noticeField, {
            borderColor: '#E9F6F2'
          }]}>
          <PriceNoticeInfo>
            <PriceNoti> 
              번역가를 처음 이용하시는 입문자 분들께 추천 {'\n'} 
              ∙ 1건 (최대 5페이지, 1만자) {'\n'} 
              ∙ 수정 최초 한 회 가능 {'\n'} 
              ∙ 번역 기간 1주일
            </PriceNoti>
          </PriceNoticeInfo>
          <Text> 9,900원 </Text>
        </View>
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
  subTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#3A3C3B'
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
    paddingBottom: 30,
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
const PriceNoticeInfo = styled.View`
  padding: 0;
  background-color: #E9F6F2;
`;
const PriceNoti = styled.Text`
  color: #3A3C3B;
  font-size: 10px;
  font-weight: 300;
  line-height: 20px; /* 200% */
`;
export default Explanation;