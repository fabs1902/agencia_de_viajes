import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
  return (
    <>
    <ScrollView>
    <Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={() => {
      alert('Modal has been closed.');
    }}>
      <View style={styles.vistaModal}>
        <View style={styles.Modal}>
          <Text style={styles.subtitulo}>Ir a a playa</Text>
          <Text>El Salvador cuenta con hermosas playas a nivel de Centroamérica</Text>
          <Button title='Cerrar' onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}></Button>
        </View>
      </View>
    </Modal>
      <View style={{flexDirection:'row'}}>
        <Image style={styles.banner} source={require('./src/img/bg.jpg')}>
        </Image>
      </View>
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>¿Qué hacer en El Salvador</Text>
        <ScrollView horizontal>
          <View>
            <Image style={styles.ciudad} source={require('./src/img/act1.jpg')}>
            </Image>
          </View>
          <View>
            <Image style={styles.ciudad} source={require('./src/img/act2.jpg')}> 
            </Image>
          </View>
          <View>
          <TouchableHighlight onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}>
            <Image style={styles.ciudad} source={require('./src/img/act3.jpg')}> 
            </Image>
          </TouchableHighlight>
          </View>
          <View>
            <Image style={styles.ciudad} source={require('./src/img/act4.jpg')}> 
            </Image>
          </View>
          <View>
            <Image style={styles.ciudad} source={require('./src/img/act5.jpg')}> 
            </Image>
          </View>
        </ScrollView>

        <Text style={styles.titulo}>Platillos salvadoreños</Text>
        <View>
          <View>
            <Image style={styles.mejores} source={require('./src/img/mejores1.jpg')}>
            </Image>
          </View>
          <View>
            <Image style={styles.mejores} source={require('./src/img/mejores2.jpg')}>
            </Image>
          </View>
          <View>
            <Image style={styles.mejores} source={require('./src/img/mejores3.jpg')}>
            </Image>
          </View>
        </View>

        <Text style={styles.titulo}>Rutas Turisticas</Text>
        <View style={styles.listado}>
          <View style={styles.listaItem}>
            <Image style={styles.mejores} source={require('./src/img/ruta1.jpg')}></Image>
          </View>
          <View style={styles.listaItem}>
            <Image style={styles.mejores} source={require('./src/img/ruta2.jpg')}></Image>
          </View>
          <View style={styles.listaItem}>
            <Image style={styles.mejores} source={require('./src/img/ruta3.jpg')}></Image>
          </View>
          <View style={styles.listaItem}>
            <Image style={styles.mejores} source={require('./src/img/ruta4.jpg')}></Image>
          </View>
        </View>        
    </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height:250,
    flex:1,
  },
  titulo:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:10
  },
  contenedor:{
    marginHorizontal:10,
  },
  ciudad:{
    width:250,
    height:300,
    marginRight:10
  },
  mejores:{
    width:'100%',
    height:200,
    marginVertical:5
  },
  listaItem:{
    flexBasis:'49%'
  },
  listado:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  vistaModal:{
    backgroundColor:'#000000aa',
    flex:1
  },
  Modal:{
    backgroundColor:'#fff',
    margin:50,
    padding:50,
    borderRadius:10,
    flex:1,
  },
  subtitulo:{
    fontWeight:'bold',
    fontSize:14,
    justifyContent:'center'
  }
});
