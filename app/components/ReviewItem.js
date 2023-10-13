import styled from "styled-components";

const ReviewItem = ({ 
    writer,
    id,
    score,
    date,
    content
}) => {
    return (
        <Container>
            <WriterInfo>
                <Writer> {writer} {" "} </Writer>
                <SubWriterInfo> 
                    {id} 
                    {" "} | {" "} 
                    {score.toFixed(1)} 
                    {" "} | {" "} 
                    {date} 
                </SubWriterInfo>
            </WriterInfo>
            <Content> {content} </Content>
            <Line/>
        </Container>
    );
}
const Container = styled.View`
    isplay: flex;
    flex-direction: column;
`;
const Line = styled.View`
    height: 0.5px;
    background-color: #D9D9D9;
    margin: 20px 0;
`;
const WriterInfo = styled.View`
    display: flex;
    flex-direction: row;
`;
const Writer = styled.Text`
    color: #3A3C3B;
    font-size: 10px;
    font-weight: 500;
`;
const SubWriterInfo = styled.Text`
    color: #AEAEAE;
    font-size: 10px;
    font-weight: 500;
`;
const Content = styled.Text`
    margin-top: 11px;
    color: #3A3C3B;
    font-size: 12px;
    font-weight: 300;
`;
export default ReviewItem;