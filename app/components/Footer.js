import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main, DoranHome, MyPage } from '../screens';

// 하단 아이콘
import DoranIcon from '../assets/ic_doranClick.gif';
import MainIcon from '../assets/ic_mainClick.gif';
import MypageIcon from '../assets/ic_mypageClick.gif';
import DoranNoIcon from '../assets/ic_doranNoClick.png';
import MainNoIcon from '../assets/ic_mainNoClick.png';
import MyPageNoIcon from '../assets/ic_mypageNoClick.png';
import selectMain from '../assets/img_selectMain.png';
import selectDoran from '../assets/img_selectDoran.png';
import selectMypage from '../assets/img_selectMypage.png';

const icons = [
    { 
        name: 'Doran', 
        icon: DoranIcon, 
        inactiveIcon: DoranNoIcon,
        background: selectDoran,
        leftOffset: 10,
    },
    { 
        name: 'Main', 
        icon: MainIcon, 
        inactiveIcon: MainNoIcon,
        background: selectMain,
    },
    { 
        name: 'MyPage', 
        icon: MypageIcon, 
        inactiveIcon: MyPageNoIcon,
        background: selectMypage,
        rightOffset: 10,
    },
];

const Footer = () => {
    const navigation = useNavigation();
    const [selectedIcon, setSelectedIcon] = useState('Main');
    const [backgroundImage, setBackgroundImage] = useState(selectMain);

    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);
        setBackgroundImage(icons.find(icon => icon.name === iconName).background);
        navigation.navigate(iconName);
    };

    return (
        <Container>
            <Background source={backgroundImage} />
            {icons.map((icon, index) => (
                <BottomIcon
                    key={index}
                    selected={selectedIcon === icon.name}
                    onPress={() => handleIconClick(icon.name)}
                    style={{ right: icon.rightOffset, left: icon.leftOffset }}
                >
                    <Icon source={selectedIcon === icon.name ? icon.icon : icon.inactiveIcon} />
                </BottomIcon>
            ))}
        </Container>
    );
}
const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    height: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 10px;
    border-radius: 15px 15px 0px 0px;
`;
const Background = styled.Image`
    width: 100%;
    position: absolute;
    height: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 15px 15px 0px 0px;
`;
const Icon = styled.Image`
    width: 42px;
    height: 42px;
`;
const BottomIcon = styled.TouchableOpacity`
    transform: translateY(${(props) => (props.selected ? '-15px' : '0')});
    border-radius: 100%;
    background-color: #E9F6F2;
    margin: 8px;
    padding: 3px;

`;

export default Footer;