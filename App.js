import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, Button,ScrollView, Platform, TouchableOpacity, Touchable, TextInput, LocalStorage } from 'react-native';
import Header from './componentes/Header.js';//tem q arrumar ta dando erro 4:37
import Body from './componentes/Body.js';


export default function App(){
  
  const [estado,setarEstado] = useState('Leitura');
  const [anotacao,setarAnotacao] = useState('');

  // useEffect(()=>{

  //   //quando inicializar o app queremos q leia a anotacao

  //   (async () => {
  //     try{
  //         const anotacaoLeitura = await LocalStorage.getItem('anotacao');
  //         setarAnotacao(anotacaoLeitura);
  //     }catch(error){}
  //   })();

  // },[])

  // setDate = async() => {
  //   try{
  //       await LocalStorage.setItem('anotacao',anotacao)
  //   }catch(error){

  //   }
  //   alert('Alteração feita com sucesso! :)')
  // }
  function atualizarTexto(){
      setarEstado('Leitura');
      // setDate();
  }

  if(estado == 'Leitura'){
  return (
    <View style={{backgroundColor:'#1f1f1f',flex:1}}>
      <StatusBar hidden/>
      <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>Done!</Text></View>
    {
      (anotacao != '')?
    <View style={{padding:20}}><Text style={styles.anotacao}>{anotacao}</Text></View>
    :
    <View style={{padding:20}}><Text style={{color:'#ffffff',opacity:0.3}}>Nenhuma anotação encontrada :(</Text></View>
    }
    <TouchableOpacity onPress={()=> setarEstado('Atualizando')} style={styles.btnAnotacao}>
      {
        (anotacao == "")?
      <Text style={styles.btnAnotacaoTexto}>+</Text>
      :
      <Text style={{fontSize:12,color:'white',textAlign:'center',marginTop:16}}>Editar!</Text>
      }
    </TouchableOpacity>
    </View>

  );
    }else if (estado == 'Atualizando'){
      return (
      <View style={{backgroundColor:'#1f1f1f',flex:1}}>
      <StatusBar hidden/>
      <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:18}}>Done!</Text></View>

        <TextInput autoFocus={true} onChangeText={(text)=>setarAnotacao(text)} style={{color:'#ffffff',fontSize:15,padding:20,height:300,textAlignVertical:'top'}} multiline={true} numberOfLines={5} value={anotacao}></TextInput>

      <TouchableOpacity onPress={()=> atualizarTexto()} style={styles.btnSalvar}><Text style={{textAlign:'center',color:'white'}}>Salvar!</Text></TouchableOpacity>
      </View>
    );
    }
  }

  const styles = StyleSheet.create({
    header:{
      width:'100%',
      padding:20,
      backgroundColor:'#000000'
    },
    anotacao:{
      color:'#ffffff',
      fontSize:15
    },
    btnAnotacao: {
      position:'absolute',
      right:20,
      bottom:20,
      width:50,
      height:50,
      backgroundColor:'#069',
      borderRadius:25
    },
    btnAnotacaoTexto: {
      color:'white',
      fontSize:30,
      position:'relative',
      textAlign:'center',
      top:3
    },
    btnSalvar: {
      position:'absolute',
      right:20,
      bottom:20,
      width:100,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#069',
      borderRadius:25
    }
  });