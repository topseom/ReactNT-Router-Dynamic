import React from 'react';
import { View,Text,FlatList,StyleSheet } from 'react-native';
import Loading from '../components/loading';
import axios from 'axios';

class UsersScreen extends React.Component{
    static navigationOptions = {
        title:"Users"
    }
    constructor(props){
        super(props);
        this.state = {loading:true,users:[]};
    }
    componentDidMount(){
        axios('https://raw.githubusercontent.com/topseom/data/master/users.json').then(data=>{
            this.setState({ loading:false,users:data.data });
        }).catch(err=>{
            this.setState({ loading:false });
        });  
    }

    showList = ()=>{
        if(this.state.users.length){
            return(
                <View>
                    <FlatList data={this.state.users} 
                        renderItem={
                            (item) => <Text style={styles.item}>{item.item.email}</Text>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                
            )
        }
    }
    render(){
        return(
            <View>
                <Loading loading={this.state.loading} />
                {this.showList()}
            </View>
        );
    }
}
export default UsersScreen;

const styles = StyleSheet.create({
    item: {
      padding: 20,
      fontSize: 18,
      height: 60,
    }
  })