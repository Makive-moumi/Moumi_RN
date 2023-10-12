import styled from "styled-components";
import { Image, StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import MainCover from '../assets/img_main_sample.png'
import CategoryTag from "./CategoryTag";

const TransItem = ({ 
    img, 
    title, 
    category, 
    review, 
    score, 
    price 
}) => {
    return (
        <Container>
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
                <PriceInfo> {price}원 </PriceInfo>
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

const Container = styled.View`
    display: flex;
    flex-direction: row;
    padding: 20px 27px;
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
const PriceInfo = styled.Text`
    color: #3A3C3B;
    font-size: 16px;
    font-weight: 700;
    margin-top: 16px;
`;
export default TransItem;
