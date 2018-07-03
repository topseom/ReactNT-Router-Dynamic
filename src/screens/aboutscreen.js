import React from 'react';
import { View,Text,Button } from 'react-native';

class AboutScreen extends React.Component{
    static navigationOptions = ({ navigationOptions }) => {
        return{
            title: "About",
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor
        }
    }
    render(){
        const { navigation } = this.props;
        const id = navigation.getParam('id','NO-ID')
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>hello about {id}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('About')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}
export default AboutScreen;