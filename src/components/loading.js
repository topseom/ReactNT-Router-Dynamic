import React from 'react';
import { View,Text,Image,ActivityIndicator } from 'react-native';

const Loading = ({loading})=>{
    if(!loading){
        return false;
    }
    return(
        <View>
            <ActivityIndicator  size="large" color="#c7c7c7" />
        </View>
    )
}
export default Loading;