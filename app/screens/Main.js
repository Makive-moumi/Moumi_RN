import styled from 'styled-components/native';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <Container>
            <Footer/>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;
// const Bottom = styled.View`
//     position: absolute;
//     height: 60px;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #E9F6F2;
//     border-radius: 15px 15px 0px 0px;
// `;

export default Main;