import React from 'react';
import { View,Text,Button,Image,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { couterIncrease,couterDecrease } from '../actions/counter';
import Loading from '../components/loading';
import axios from 'axios';

import { DrawerActions } from 'react-navigation';

class HomeScreen extends React.Component{
    
    constructor(props){
        super(props);
        this.state = { loading:true,users:[] }
    }

    componentDidMount(){
        axios('https://raw.githubusercontent.com/topseom/data/master/users.json').then(data=>{
            this.setState({ loading:false,users:data.data });
        }).catch(err=>{
            this.setState({ loading:false });
        });  
    }
    
    static navigationOptions = ({ navigationOptions,navigation })=>{
        return{
            headerTitle:(
                <Image source={require('../../assets/images/spiro.png')} style={{ width: 40, height: 40}} />
            ),
            headerLeft:(
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Text style={{color:'#fff',padding:16}}>Menu</Text>
                </TouchableOpacity>
            ),
            headerRight:(
                <TouchableOpacity onPress={()=>navigation.navigate('TestModal')}>
                    <Text style={{color:'#fff',padding:16}}>Info</Text>
                </TouchableOpacity>
            )
        }
    };
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {
                    this.state.users.length?
                    <Text>{this.state.users[0].email}</Text>:
                    <Text></Text>
                }
                <Button title={'increase'} onPress={this.props.increase}  />
                <Text>{ this.props.counter }</Text>
                <Button title={'decrease'} onPress={this.props.decrease}  />
                <View  style={{width:"100%",marginTop:10}}>
                    <Button  title={'About'} onPress={()=>this.props.navigation.navigate('About',{id:20})} />
                </View>
                <View  style={{width:"100%",marginTop:10}}>
                    <Button  title={'Users'} onPress={()=>this.props.navigation.navigate('Users')} />
                </View>
                <View  style={{width:"100%",marginTop:10}}>
                    <Button  title={'Auth'} onPress={()=>this.props.navigation.navigate('Auth')} />
                </View>
                <View  style={{width:"100%",marginTop:10}}>
                    <Button  title={'Tabs'} onPress={()=>this.props.navigation.navigate('Tabs')} />
                </View>
                <Loading loading={this.state.loading} />
            </View>
        )
    }
}
const mapStateToProps = (state,props)=>{
    return{
        counter:state.counter
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        increase:()=>dispatch(couterIncrease()),
        decrease:()=>dispatch(couterDecrease())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);