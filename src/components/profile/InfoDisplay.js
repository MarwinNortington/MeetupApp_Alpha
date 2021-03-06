'use strict'

import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Animated
} from 'react-native';
import Colors from '../../constants/Colors';

const InfoDisplay = props => {
    return(
        <View >
            <View style={styles.infoContainer}>
                <View style={styles.realNameDisplay}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>{props.userName}</Text>
                </View>

                <View style={styles.bioDisplay}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: 'grey'}}>
                        React Native Junior Developer | ambivert | book lover | son | brother | a man with a dream of inspiring others
                    </Text>
                </View>
                <View style={styles.followInfoContainer}>
                    <TouchableOpacity onPress={props.pickImage} style={styles.followMyProfile_Button}>
                        <Text style={{fontSize: 17, color: Colors.third, marginLeft: 7, alignSelf: 'center'}}>Post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.followMyProfile_Button, {backgroundColor: props.isFollowed ? Colors.third : 'transparent'}]} onPress={props.onFollow}>
                        {
                            props.isFollowed 
                            && <Text style={{fontSize: 17, color: 'white', marginHorizontal: 10}}>Followed</Text>
                        }
                        {
                            !props.isFollowed 
                            && <Text style={{fontSize: 17, color: Colors.third, marginHorizontal: 10}}>Follow</Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    realNameDisplay:{
        // borderColor: 'black', borderWidth: 2,
        alignSelf: 'center',
        marginBottom: 10
    },
    tagNameDisplay:{
        // borderColor: 'black', borderWidth: 2,
        marginLeft: 15,
        marginBottom: 10
    },
    bioDisplay:{
        // borderColor: 'black', borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    followInfoContainer:{
        // borderColor: 'black', borderWidth: 2,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden',
        marginBottom: 10
    },
    followMyProfile_Button:{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.third,
        borderWidth: 1,
        borderRadius: 3,
        height: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        width: 100
    },
})

export default InfoDisplay;