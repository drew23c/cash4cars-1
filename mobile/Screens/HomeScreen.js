import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView, Animated } from 'react-native';
import Communications from 'react-native-communications';
import towtruck from '../pics/towtruck.jpg';
import towtruckIcon from '../pics/towtruckIcon.jpg';
import cash from '../pics/cash.png';
import phoneIcon from '../pics/phone.png';

export default class App extends Component {
  static navigationOptions = {
    title:'TA Trucking'
  }
  render() {
    return (
      <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => Communications.phonecall('9178625466', true)}><Text style={styles.phoneNumber}>Call 24/7 917-862-5466</Text></TouchableWithoutFeedback>
          <Image style={styles.image} source={towtruck} />
          <ScrollView maximumZoomScale={5} overScrollMode="auto">
            <View style={{alignItems:'center'}}>
            <View>
            <Text style={{fontSize:20, textAlign:'center'}}><Text style={{color:'green'}}>CA$H</Text> FOR JUNK CARS, VANS & TRUCKS</Text>
          </View>
          <View style={[styles.features, {paddingBottom:10}]}>
            <Text style={{fontSize:20}}>Service Include:</Text>
              <Text style={{fontSize:20}}>Snow Removal</Text>
          </View>
          <View style={[styles.contact, {paddingBottom:10}]}>
            <Text style={{fontSize:20}}>Call Tony</Text>
            <Text style={{fontSize:20, color:'red'}} onPress={()=> Communications.phonecall('9178625466', true)}>917-862-5466</Text>
          </View>
          <View style={{alignItems:'center', position:'relative'}}>
            <Text style={{textAlign:'center', fontSize:20, paddingBottom:10}}>We buy junk cars, vans, trucks, SUVs, forklifts in all 5 boroughs</Text>
            <Text style={{fontSize:20, textAlign:'center'}}>Want to junk your car, van truck SUV, forklift?</Text>
                <TouchableWithoutFeedback onPress={() => Communications.phonecall('9178625466', true)}><Image source={phoneIcon} style={{height:80, width:80, borderRadius:25}} /></TouchableWithoutFeedback>
                <Text style={{fontSize:20}}>Get a fast offer 24/7</Text>
                <Image source={towtruckIcon} style={{height:80, width:80, borderRadius:25}} />
                <Text style={{fontSize:20, textAlign:'center'}}>Get a <Text style={{fontWeight:'bold', fontSize:20}}>FREE</Text> tow. Absolutely <Text style={{fontWeight:'bold'}}>FREE</Text> pickup included.</Text>
                <Image source={cash} style={{height:80, width:80, borderRadius:25}} />
              <Text style={{fontSize:20, textAlign:'center'}}>Get paid immediately, you get paid on the spot!</Text>
            <Text style={{fontSize:20, textAlign:'center'}}>Have any questions?</Text>
            <Text style={{fontSize:20, color:'red'}}>Call 24/7 917-862-5466</Text>
            <Text style={{padding:5, fontSize:20}}>We buy junk cars for cash in the entire New York area. 
                Sell your used or unwanted cars, trucks, SUVs, or vans and 
                get paid on the spot. We don't just buy junk vehicles! We buy 
                <Text style={{fontWeight:'bold'}}> ANY</Text> condition vehicle with or without a title or keys.</Text>
            <Text style={{fontSize:20}}>Lost keys, <Text style={{fontWeight:'bold', fontSize:20}}>NO PROBLEM.</Text></Text>
          </View>
            </View>
            <View style={styles.footer}>
                <Text style={{textAlign:'center', paddingTop:10, color:'white'}}>TA Trucking</Text>
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%',
    top:-5,
    backgroundColor:'rgb(245, 240, 240)'
  },
  title:{
    position:'absolute',
    zIndex:10,
    marginTop:0,
    fontSize:24,
    left:5
  },
  phoneNumber:{
    position:'absolute',
    zIndex:10,
    top:1,
    color:'red'
  },
  image:{
    width:'100%',
    height:'50%',
    zIndex:9,
    marginTop:5
  },
  features:{
    position:'relative',
    zIndex:10,
  },
  contact:{
    position:'relative',
    zIndex:10,
  },
  footer:{
    flex:1,
    width:'100%',
    backgroundColor:'black',
    bottom:0,
  }
});
