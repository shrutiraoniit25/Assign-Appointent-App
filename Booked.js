import React ,{useState , useEffect} from 'react';
import {View , Text , SafeAreaView ,FlatList  , StyleSheet, TouchableOpacity , Modal, TextInput} from 'react-native';
import CustomHeader from './CustomHeader';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';

const Booked = ({navigation , route}) => {
    const [name , setName] = useState('');
    const [mobile , setMobile] = useState('');
    const [email , setEmail] = useState('');
    const [date , setDate] = useState('');
    const [time , setTime] = useState('');
    const [newdata , setNewData] = useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            retrieveData();
          });
        
          return () => {
            unsubscribe;
          };
        }, [navigation]);

        const retrieveData = () => {
            setName(!route.params.pname ? '' : route.params.pname)
            setMobile(!route.params.pmobile ? '' : route.params.pmobile)
            setEmail(!route.params.pemail ? '' : route.params.pemail)
            setDate(!route.params.pdate ? '' : route.params.pdate)
            setTime(!route.params.ptime ? '' : route.params.ptime)
        }
    
    


    return(
       <SafeAreaView style={{flex:1 , backgroundColor:'#A7C7E7'}}>
           <CustomHeader title="Booking Details" navigation={navigation} />
           <View style={{flexDirection:'row' , width:'80%' ,height:60 , borderRadius:10 , backgroundColor:'white', marginLeft:'10%',
           marginRight:'10%', marginTop:30}}>
               <View style={{flex:1}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>NAME</Text>
               </View>
               <View style={{flex:0.5}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>:</Text>
               </View>
               <View style={{flex:1.5}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>{name}</Text>
               </View>
           </View>
           <View style={{flexDirection:'row' , width:'80%' ,height:60 , borderRadius:10 ,backgroundColor:'white', marginLeft:'10%',
           marginRight:'10%', marginTop:10}}>
               <View style={{flex:1}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>Mobile No.</Text>
               </View>
               <View style={{flex:0.5}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>:</Text>
               </View>
               <View style={{flex:1.5}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>{mobile}</Text>
               </View>
           </View>
           <View style={{flexDirection:'row' , width:'80%' ,height:60 , borderRadius:10 ,backgroundColor:'white', marginLeft:'10%',
           marginRight:'10%', marginTop:10}}>
               <View style={{flex:1}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>Email</Text>
               </View>
               <View style={{flex:0.5}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>:</Text>
               </View>
               <View style={{flex:1.5}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>{email}</Text>
               </View>
           </View>
           <View style={{flexDirection:'row' , width:'80%' ,height:80 , borderRadius:10 , backgroundColor:'white', marginLeft:'10%',
           marginRight:'10%', marginTop:10}}>
               <View style={{flex:1}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>Date of Appointment</Text>
               </View>
               <View style={{flex:0.5}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>:</Text>
               </View>
               <View style={{flex:1.5}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>{date}</Text>
               </View>
           </View>
           <View style={{flexDirection:'row' , width:'80%' ,height:80 , borderRadius:10 , backgroundColor:'white', marginLeft:'10%',
           marginRight:'10%', marginTop:10}}>
               <View style={{flex:1}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>Time Of Appointment</Text>
               </View>
               <View style={{flex:0.5}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>:</Text>
               </View>
               <View style={{flex:1.5}}>
                   <Text style={{textAlign:'left' ,marginLeft:10 , fontSize:18 , color : 'black' , marginTop:10}}>{time}</Text>
               </View>
           </View>

       </SafeAreaView>
    )



}

export default Booked;