import { useRef } from 'react';
import styled from "styled-components";

import TopArrow from '../assets/ic_topArrow.png';
import { StyleSheet, TouchableOpacity } from 'react-native';

const TopMoveBtn = ({ scrollRef }) => {
    const moveTop = () => {
        scrollRef.current.scrollTo({ y: 0 });
    }

    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={() => moveTop()}
        >
            <Arrow source={TopArrow}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        position: 'absolute',
        width: 30,
        height: 30,
        right: 25,
        bottom: 90,
        borderWidth: 1,
        borderColor: '#159A7F',
        borderRadius: 5,
    }
})

const Container = styled.View`
    
`;
const Arrow = styled.Image`
    margin-top: 8px;
    margin-left: 6px;
`;
export default TopMoveBtn;