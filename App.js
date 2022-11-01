import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.view}>
      <StatusBar/>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
      <View style={styles.view4}></View>
      <View style={styles.view5}></View>
    </View>
  );
}
const styles = StyleSheet.create({

  //PADRE
  view:{
    // flex:1,
    // minHeight:'100%' 
    // flexDirection:'row',     // ↔
    // justifyContent:'center', // ↔  Horizontal
    // alignItems:'center'      // ↕ Vertical

    flex:1,
    flexDirection:'column' ,   // Por defecto ↕
    alignItems:'center',       // ↔  Horizontal
    justifyContent:'center',   // ↕ Vertical
  },

  // HIJOS

  view2:{
    padding:20,
    backgroundColor:'red',
  },
  view3:{
    padding:20,
    backgroundColor:'yellow',
  },
  view4:{
    padding:20,
    backgroundColor:'blue',
  },
  view5:{
    padding:20,
    backgroundColor:'green',
  },
});
