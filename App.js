/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';


class Botao extends Component{

  constructor(props){
    super(props);
    this.state = '';
    this.style = StyleSheet.create({
      botao:{
        color:"#000000",
        width:250,
        borderWidth:2,
        height:50,
        borderColor:"#000000",
        borderRadius:25
      },
      botaoArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      botaoTexto:{
        fontSize:14,
        fontWeight:'bold',
        textAlign:'center'
      }

     
    })
  }

  render(){
    return(
      <TouchableOpacity style={this.style.botao} onPress={this.props.onPress}>
        <View style={this.style.botaoArea}>
         <Text style={this.style.botaoTexto}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }


}


export default class App extends Component {
  quebrar_biscoito(){
    alert('ola mundo');
  }
  render() {    
    return (
      <View >
      <Image source={require('./images/biscoito.png')}/>
        <Botao text="Quebrar biscoito" onPress={this.quebrar_biscoito}/>
      </View>
    );
  }
}
