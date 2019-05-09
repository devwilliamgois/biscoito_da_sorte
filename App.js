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
  constructor(props){
    super(props);

    this.state = {"texto":"Frase do dia"}
    this.frases = ["O importante não é vencer todos os dias, mas lutar sempre.","Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!","É melhor conquistar a si mesmo do que vencer mil batalhas.","Quem ousou conquistar e saiu pra lutar, chega mais longe!","Enquanto houver vontade de lutar haverá esperança de vencer.","Difícil é ganhar um amigo em uma hora; fácil é ofendê-lo em um minuto.","O medo de perder tira a vontade de ganhar.","Aquele que não tem confiança nos outros, não lhes pode ganhar a confiança.","Escolher o seu tempo é ganhar tempo.","Arriscamo-nos a perder quando queremos ganhar demais.","Perder para a razão, sempre é ganhar.","Muitos sabem ganhar dinheiro, mas poucos sabem gastá-lo.","Se você pretende ser rico, pense em economizar tanto quanto em ganhar.","O homem digno ganha para viver; o menos honesto vive para ganhar.","Para ganhar aquilo que vale a pena ter, pode ser necessário perder tudo mais."]
    this.quebrar_biscoito = this.quebrar_biscoito.bind(this);
  }
  quebrar_biscoito(){
    let s = this.state;
    let r = Math.floor(Math.random () * this.frases.length);
    s.texto = this.frases[r];
    this.setState(s);
  }
  render() {    
    return (
      <View style={style.body}>
      <Image source={require('./images/biscoito.png')} style={style.image}/>
        <Text style={style.texto}>"{this.state.texto}"</Text>
        <Botao text="Quebrar biscoito" onPress={this.quebrar_biscoito}/>
      </View>
    );
  }
}


const style = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:300,
    height:250
  },
  texto:{
    fontSize:20,
    color:"#FF0000",
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  }
})