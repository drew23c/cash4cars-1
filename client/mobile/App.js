import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, SafeAreaView } from 'react-native';
import Communications from 'react-native-communications';
import towtruck from './pics/towtruck.jpg';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>TA Trucking</Text>
          <TouchableWithoutFeedback onPress={() => Communications.phonecall('9178625466', true)}><Text style={styles.phoneNumber}>Call 24/7 (917) 862-5466</Text></TouchableWithoutFeedback>
          <Image style={styles.image} source={towtruck} />
          <View>
            <Text style={{fontSize:15}}><Text style={{color:'green'}}>CA$H</Text> FOR JUNK CARS, VANS & TRUCKS</Text>
          </View>
          <View style={styles.features}>
            <Text style={{fontSize:20}}>Service Include:</Text>
              <Text style={{fontSize:20}}>Snow Removal</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    width:'100%',
    height:'100%',
    marginTop:19
  },
  title:{
    position:'absolute',
    zIndex:10,
    marginTop:30,
    alignItems:'flex-start',
    fontSize:25,
    left:5
  },
  phoneNumber:{
    position:'absolute',
    zIndex:10,
    top:0,
    color:'white'
  },
  image:{
    width:'100%',
    height:'50%',
    zIndex:9,
    marginTop:5
  },
  features:{
    position:'absolute',
    left:40,
    marginTop:350,
    zIndex:10,
  }
});
