import { useState } from "react";
import styled from "styled-components";
import { ScrollView, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from '@expo/vector-icons';

import cancel from '../assets/ic_cancel.png';

const PaymentMethod = ["신용카드", "무통장 입금", "휴대폰", "카카오페이", "네이버페이", "토스", "삼성페이"];

const Reservation = () => {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(9900);
    const [selectedPayment, setSelectedPayment] = useState("신용카드");

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    } 

    const calculatePrice = () => {
        const unitPrice = 9900; // 단위 가격
        const totalPrice = unitPrice * quantity;
        return totalPrice.toLocaleString();
    }

    const PaymentMethodItem = ({ title, checked, onPress }) => (
        <PaymentItem onPress={onPress}>
            <Ionicons
                name={selectedPayment === title ? 'ios-radio-button-on' : 'ios-radio-button-off'}
                size={24}
                color="#3A3C3B"
            />
            <PaymentMethodText> {title} </PaymentMethodText>
        </PaymentItem>
    );

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <TitleArea>
                <CancelBtn source={cancel}/>
                <Title> 예약 신청 </Title>
            </TitleArea>
            <SubTitle> 구매 확인 </SubTitle>
            <TransList>
                <TransCoverImg/>
                <TransSubInfo>
                    <TransTitle> 뉴스 번역해드립니다! </TransTitle>
                    <TransQuan>
                        <TransQuanTitle> 건 수 </TransQuanTitle>
                        <TransQuanControl>
                            <ChangeQuan onPress={decreaseQuantity}> - </ChangeQuan>
                            <Quantity> {quantity} </Quantity>
                            <ChangeQuan onPress={increaseQuantity}> + </ChangeQuan>
                        </TransQuanControl>
                    </TransQuan>
                </TransSubInfo>
            </TransList>
            <Line/>
            <TotalAmount>
                <TotalAmountTitle> 결제 금액 </TotalAmountTitle>
                <TotalAmountSubTitle> 총 </TotalAmountSubTitle>
                <TotalPrice> {calculatePrice()}원 </TotalPrice>
            </TotalAmount>
            <Line/>
            <SubTitle> 결제방법 </SubTitle>
            <PaymentMethodList>
                {PaymentMethod.map((item, idx) => (
                    <PaymentMethodItem key={idx} title={item} onPress={() => setSelectedPayment(item)}/>
                ))}
            </PaymentMethodList>
            <Line/>
            <NoticeArea>
                <NoticeSubArea>
                    <NoticeText> 결제 전 안내사항 </NoticeText>
                        <BouncyCheckbox
                            fillColor="#3A3C3B"
                            // unfillColor="#FFFFFF"
                            iconStyle={{ 
                                width: 17,
                                height: 17,
                                borderColor: "white",
                                borderRadius: 1,
                                borderWidth: 0.5,
                            }}
                            style={{
                                marginLeft: 76,
                            }}
                            onPress={(isChecked: boolean) => {}}
                        /> 
                    <NoticeAgree> 동의합니다 </NoticeAgree>
                </NoticeSubArea>
                <NoticeSubArea>
                    <NoticeText> 개인정보 제3자 제공 </NoticeText>
                        <BouncyCheckbox
                            fillColor="#3A3C3B"
                            // unfillColor="#FFFFFF"
                            iconStyle={{ 
                                width: 17,
                                height: 17,
                                borderColor: "white",
                                borderRadius: 1,
                                borderWidth: 0.5,
                            }}
                            style={{
                                marginLeft: 49,
                            }}
                            onPress={(isChecked: boolean) => {}}
                        /> 
                    <NoticeAgree> 동의합니다 </NoticeAgree>
                </NoticeSubArea>
            </NoticeArea>
            <Line/>
            <BottomArea>
                <FileBtn>
                    <FileBtnText> 파일 업로드 </FileBtnText>
                </FileBtn>
                <PaymentBtn>
                    <PaymentBtnText> 결제하기 </PaymentBtnText>
                </PaymentBtn>
            </BottomArea>
        </ScrollView>
    );
}

const TitleArea = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    margin-left: 25px;
    align-items: center;
`;
const CancelBtn = styled.Image`
    width: 14px;
    height: 14px;
`;
const Title = styled.Text`
    color: #3A3C3B;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px; /* 144.444% */
    margin-left: 20px;
`;
const SubTitle = styled.Text`
    margin: 39px 0 25px 25px;
    color: #3A3C3B;
    font-size: 15px;
    font-weight: 500;
    line-height: 26px; /* 173.333% */
`;
const Line = styled.View`
    height: 0.5px;
    background-color: #D9D9D9;
`;
const TransList = styled.View`
    display: flex;
    flex-direction: row;
    margin: 0 30px 35px 25px;
`;
const TransCoverImg = styled.Image`
    width: 82px;
    height: 63px;
    border-radius: 15px;
    background: #B3D6E4;
`;
const TransSubInfo = styled.View`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`;
const TransTitle = styled.Text`
    color: #3A3C3B;
    font-size: 14px;
    font-weight: 400;
`;
const TransQuan = styled.View`
    display: flex;
    flex-direction: row;
`;
const TransQuanTitle = styled.Text`
    color: #3A3C3B;
    font-size: 12px;
    font-weight: 300;
    margin-top: 20px;
`;
const TransQuanControl = styled.View`
    display: flex;
    flex-direction: row;
    width: 110px;
    height: 35px;
    margin-top: 15px;
    margin-left: 61px;
    border-radius: 5px;
    border: 1px solid #D9D9D9;
    align-items: center;
    justify-content: space-around;
`;
const ChangeQuan = styled.Text`
    color: #666;
    font-size: 19px;
    font-weight: 100;
`;
const Quantity = styled.Text`
    color: #666;
    font-size: 15px;
    font-weight: 700;
`;
const TotalAmount = styled.View`
    display: flex;
    flex-direction: row;
    margin: 37px 0 30px 25px;
    align-items: center;
    align-self: center;
`;
const TotalAmountTitle = styled.Text`
    color: #3A3C3B;
    font-size: 14px;
    font-weight: 300;
    align-items: flex-start;
    flex: 1;
`;
const TotalAmountSubTitle = styled.Text`
    color: #3A3C3B;
    font-size: 12px;
    font-weight: 300;
`;
const TotalPrice = styled.Text`
    color: #159A7F;
    font-size: 20px;
    font-weight: 700;
    margin-left: 15px;
    margin-right: 35px;
`;
const PaymentMethodList = styled.View`
    margin-left: 28px;
    margin-bottom: 40px;
`;
const PaymentItem = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
`;
const PaymentMethodText = styled.Text`
    color: #3A3C3B;
    font-size: 15px;
    font-weight: 500;
    line-height: 26px; /* 173.333% */
    margin-left: 14px;
`;
const NoticeArea = styled.View`
    margin: 30px 25px 5px 25px;
`;
const NoticeSubArea = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
    justify-content: space-between;
`;
const NoticeText = styled.Text`
    color: #3A3C3B;
    font-size: 14px;
    font-weight: 300;
    align-items: flex-start;
`;
const NoticeAgree = styled.Text`
    color: #3A3C3B;
    font-size: 14px;
    font-weight: 300;
    align-items: flex-end;
`;
const BottomArea = styled.View`
    display: flex;
    flex-direction: row;
    margin: 10px 25px 25px 25px;
`;
const FileBtn = styled.TouchableOpacity`
    margin-right: 10px;
    width: 125px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #159A7F;
    align-self: center;
    justify-content: center;
`;
const FileBtnText = styled.Text`
    color: #159A7F;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 26px; /* 216.667% */
`;
const PaymentBtn = styled.TouchableOpacity`
    width: 205px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #159A7F;
    background: #159A7F;
    align-self: center;
    justify-content: center;
`;
const PaymentBtnText = styled.Text`
    color: #FFFFFF;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 26px; /* 216.667% */
`;
export default Reservation;