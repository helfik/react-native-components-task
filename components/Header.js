import React from 'react'
import { View, Image, StyleSheet } from 'react-native';

function Header () {
    return (
        <View>
            <Image style={styles.imageStyle} source={ require('../images/pendants.jpeg')}/>
        </View>
    )
}

const styles = StyleSheet.create({

    imageStyle: {
        width: 60,
    }

});

export default Header;
