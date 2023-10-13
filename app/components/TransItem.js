import { useState } from "react";
import styled from "styled-components";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PropTypes from 'prop-types';

import CategoryTag from "./CategoryTag";
import MainCover from '../assets/img_main_sample.png'
import BookmarkNot from '../assets/ic_bookmark_unselected.png';
import Bookmark from '../assets/ic_bookmark_selected.png';


const TransItem = ({ 
    img, 
    title, 
    category, 
    review, 
    score, 
    price 
}) => {
    const navigation = useNavigation();
    const [click, setClick] = useState();
    const movePage = () => {
        navigation.navigate('TransDetail', {  
            img, 
            title, 
            category, 
            review, 
            score, 
            price 
        })
    };

    return (
        <Container onPress={movePage}>
            <SubContainer>
                <Title> {title} </Title>
                <ReviewInfo>
                    <StarPoint> {score.toFixed(1)} {" "} | </StarPoint>
                    <StarPoint> {review}개의 리뷰 </StarPoint>
                </ReviewInfo>
                <CategoryInfo>
                    {category.map((item, idx) => (
                        <CategoryTag key={idx} category={item}/>
                    ))}
                </CategoryInfo>
                <CategoryInfo>
                    <PriceInfo> {price.toLocaleString()}원 </PriceInfo>
                    <TouchableOpacity onPress={() => setClick(!click)}>
                        <BookmarkImg source={(click ? Bookmark : BookmarkNot)}/>
                    </TouchableOpacity>
                </CategoryInfo>
            </SubContainer>
            <Image 
                style={styles.coverImg}
                source={img}
            />
        </Container>
    );
}

TransItem.defaultProps = {
    img: MainCover,
  };

TransItem.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.array,
    review: PropTypes.number,
    score: PropTypes.number,
    price: PropTypes.number,
};

const styles = StyleSheet.create({
    coverImg: {
        width: 145,
        height: 111,
    },
})

const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    padding: 26px 27px 26px 28px;
`;
const SubContainer = styled.View`
    margin-right: 31px;
`;
const Title = styled.Text`
    color: #3A3C3B;
    font-size: 14px;
    font-weight: 400;
`;
const ReviewInfo = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 10px;
`;
const StarPoint = styled.Text`
    color: #3A3C3B;
    font-size: 9px;
    font-weight: 300;
`;
const CategoryInfo = styled.View`
    display: flex;
    flex-direction: row;
`;
const BookmarkImg = styled.Image`
    width: 27px;
    height: 24px;
    margin-top: 16px;
    margin-left: 31px;
`;
const PriceInfo = styled.Text`
    color: #3A3C3B;
    font-size: 16px;
    font-weight: 700;
    margin-top: 16px;
`;
export default TransItem;