import { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main, DoranHome, MyPage } from '../screens';

// 하단 아이콘
import DoranIcon from '../assets/bottom_dorandoranIcon.gif';
import MainIcon from '../assets/bottom_mainIcon.gif';
import MypageIcon from '../assets/bottom_mypageIcon.gif';

const Footer = () => {
    const navigation = useNavigation();

    return (
        <Container> 
            <TouchableOpacity onPress={() => navigation.navigate('Doran')}>
                <Icon source={DoranIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Icon source={MainIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
                <Icon source={MypageIcon}/>
            </TouchableOpacity>
        </Container>
    );
}
const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    height: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #E9F6F2;
    border-radius: 15px 15px 0px 0px;
`;
const Icon = styled.Image`
    width: 42px;
    height: 42px;
`;

export default Footer;