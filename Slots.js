import React ,{useState , useEffect} from 'react';
import {View , Text , SafeAreaView ,FlatList  , StyleSheet, TouchableOpacity , Modal, TextInput} from 'react-native';
import CustomHeader from './CustomHeader';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';



const Slots = ({navigation , route}) => {
   const user = 'user';
    const [data , setData] = useState('');
    const [dateData , setDateData] = useState('');
    const [trigger , setTrigger] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [itemDate , setItemDate] = useState('');
    const [itemTime , setItemTime] = useState('');
    const [username , setUserName] = useState('');
    const [usermobile , setUserMobile] = useState('');
    const [useremail , setUserEmail] = useState('');
    const [errortext, setErrortext] = useState('');
    const [finaldata , setFinalData] = useState('');
    
   


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setSlots();
          });
        
          return () => {
            unsubscribe;
          };
        }, [navigation]);

    const setSlots = () => {
        var arr = [{"slot" : "9:00 AM - 11:00 AM"} , 
                   { "slot" :  "11:00 AM - 13:00 PM"},
                    {"slot" :  "13:00 PM - 15:00 PM"} ,
                    {"slot" :  "15:00 PM - 17:00 PM"} ,
                    {"slot" :  "17:00 PM - 19:00 PM"}];
        //console.log(arr);
         setData(arr);

         var today = new Date();
         var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
         //console.log(date);
         var tomorrowdate =today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ (today.getDate()+1);
         console.log(tomorrowdate);
         var daytomorrow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ (today.getDate()+2);
         //console.log(daytomorrow)
         var arr2 = [{"t1" : date } , {"t1" : tomorrowdate} , {"t1" : daytomorrow}];
         console.log(arr2);
     
         setDateData(arr2);
         var time1 = today.getHours() + ":" + today.getMinutes();
         console.log(time1);
        
    }
    
    const setDate = () => {
        setTrigger('1');
        setModalVisible(true);
    }
    const checkedDate = (param1) => {
        setModalVisible(false);
        console.log(param1);
        var arrd = [];
        arrd.push(param1)
        setItemDate(arrd[0]['param1']);
        
    }
    const setTime = () => {
        setTrigger('2');
        setModalVisible(true);
    }
    const checkedTime = (key2) => {
        setModalVisible(false);
        console.log(key2);
        var arrt = [];
        arrt.push(key2)
        setItemTime(arrt[0]['key2']);
       
    }


    const handleSubmit = () => {
        if (!itemDate) {
            setItemDate('');
            setErrortext(' Select date : is a required field');
            return;
          }
        if (!itemTime) {
            setItemDate('');
            setErrortext(' Select Time : is a required field');
            return;
          }
        if (!username) {
            
            setUserName('');
            setErrortext('Name : is a required feild');
            return;
          }
          if(usermobile.length != 10 ||  !usermobile || usermobile.charAt(0) < 6){
         
            
            setUserMobile('');
            setErrortext(' Mobile : is a required field / please fill a valid 10 digit number');
            return;
          }
          if (!useremail) {

            setUserEmail('');
            setErrortext(' Email : is a required field');
            return;
          }


          setUserName('');
          setUserMobile('');
          setUserEmail('');
          setErrortext('');
          setTrigger('3')
         
            saveData();

           
          
          
          
          setTimeout(() => {

            navigation.navigate('Booked',{pname : username , pmobile : usermobile , pemail : useremail , pdate : itemDate ,ptime : itemTime});
          }, 4000);
          
    }
    const saveData = async () => {
        const finalarray = [];
        finalarray.push({pdate : itemDate , ptime : itemDate  , pname : username , pmobile : usermobile , pemail : useremail});
        console.log(finalarray)
        setFinalData(finalarray)
      try {
                await AsyncStorage.setItem('user', JSON.stringify(finalarray) )
                .then( ()=>{
                console.log('data is saved')
                } )
              } catch (error) {
                // Error retrieving data
              }
        
      }
    

    


    return(
        <SafeAreaView style={{flex:1 , backgroundColor:'#A7C7E7'}}>
            <CustomHeader title="Book Your Appointment" navigation={navigation} />
            <View style={styles.dateFlex}> 
                <View style={{flex:3}}>
                    <Text style={{fontSize:20 , color:'black', fontWeight:'bold', marginTop:8, textAlign:'left'}}>Select Appoinment Date</Text>
                </View>

                <View style={{flex:1}}>
                   <TouchableOpacity onPress={() => setDate() }>
                       <Text style={{marginTop:8}}>
                       <Feather 
                           name="arrow-down-circle"
                           color="black"
                           size={30}
                       />
                       
                       </Text>
                   </TouchableOpacity>

                </View>

            </View>

            <View style={styles.setdate}> 
                <View style={{flex:1}}>
                    <Text style={{fontSize:20 , color:'black', fontWeight:'bold', marginTop:8, textAlign:'center'}}>{itemDate}</Text>
                </View>
            </View>

            <View style={styles.timeFlex}> 
                <View style={{flex:3}}>
                    <Text style={{fontSize:20 , color:'black', fontWeight:'bold', marginTop:8, textAlign:'left'}}>Select Appoinment Time</Text>
                </View>

                <View style={{flex:1}}>
                   <TouchableOpacity onPress={() => setTime() }>
                       <Text style={{marginTop:8}}>
                       <Feather 
                           name="arrow-down-circle"
                           color="black"
                           size={30}
                       />
                       
                       </Text>
                   </TouchableOpacity>

                </View>

            </View>
            <View style={styles.setdate}> 
                <View style={{flex:1}}>
                    <Text style={{fontSize:20 , color:'black', fontWeight:'bold', marginTop:8, textAlign:'center'}}>{itemTime}</Text>
                </View>
            </View>


            <View >
            <Text style={{fontSize: 18 , color: 'black' , marginLeft: 10 , textAlign:'left'}}> Name </Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={username}
                onChangeText={(username) =>
                    setUserName(username)}
                onSubmitEditing={handleSubmit}
                
                
            />
            </View>
            <View >
            <Text style={{fontSize: 18 , color: 'black' , marginLeft: 10 , textAlign:'left'}}> Mobile </Text>
            <TextInput
                style={styles.input}
                placeholder="Mobile"
                value={usermobile}
                keyboardType="numeric"
                onChangeText={(usermobile) =>
                    setUserMobile(usermobile)}
                onSubmitEditing={handleSubmit}
                
                
            />
            </View>
            <View >
            <Text style={{fontSize: 18 , color: 'black' , marginLeft: 10 , textAlign:'left'}}> Email </Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={useremail}
                onChangeText={(useremail) =>
                    setUserEmail(useremail)}
                onSubmitEditing={handleSubmit}
                
                
            />
            </View>

            <View>
                    {errortext != '' ? (
                      <Text style={styles.errorMsg}>
                        {errortext}
                      </Text>
                    ) : 
                    <Text style={styles.errorMsg}>
                      {errortext}
                  </Text>
                    }
            </View>

            <View >
                <TouchableOpacity onPress={() => {handleSubmit()}}>
                    <Text style={{fontSize: 20 , color:'black' , textAlign:'center', marginTop:10}}>
                        Book Appointment !
                    </Text>
                </TouchableOpacity>

            </View>

            {
                trigger === '3' ? (
                    <View>
                        <Text  style={{fontSize: 20 , color:'green' , textAlign:'center', marginTop:10}}> Appointment Booked Successfully</Text>
                    </View>
                )
                :
                null
            }


            <Modal  animationType={'slide'}
                            visible={modalVisible}
                          onRequestClose={() => {
                            console.log('Modal has been closed.');
                          }}>
                    
                    {
                        trigger === '1' ? (
                            <View>
                                <View style={{flexDirection:'row', width:'100%' , height:60 , borderWidth:1 , borderColor:'black'}}>
                                    <View style={{flex:1}}>
                                        <Text style={{textAlign:'left' , marginLeft:10 , fontSize:18 , fontWeight:'bold', color:'black', marginTop:20}}>Select date</Text>
                                    </View>

                                </View>
                                <FlatList 
                                data={dateData}
                                // keyExtractor={keyExtractor}
                                keyExtractor={item => `key-${item.t1}`}
                                renderItem={({item}) => {
                            return  <View style={{flexDirection: 'row', width: '100%', height: 80,backgroundColor:'white',marginTop:5,borderRadius:15}}>
                            <View style={{flex:3,}}>
                            
                            <Text style={{fontSize: 16 , color: 'black'  , marginLeft: 5,marginTop: 25}}>{" "}{item.t1}{" "}</Text>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={() => {checkedDate({param1 : item.t1})}}>
                                <Text style={{marginTop: 25}}>
                                        <Feather 
                                        name="arrow-right"
                                        color="black"
                                        size={30}
                                    />
                                        </Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                            }}
                        />

                            </View>
                           

                    )
                        :
                      trigger === '2' ? (
                        <View>
                        <View style={{flexDirection:'row', width:'100%' , height:60 , borderWidth:1 , borderColor:'black'}}>
                            <View style={{flex:1}}>
                                <Text style={{textAlign:'left' , marginLeft:10 , fontSize:18 , fontWeight:'bold', color:'black', marginTop:20}}>Select Time</Text>
                            </View>

                        </View>
                        <FlatList 
                        data={data}
                        // keyExtractor={keyExtractor}
                        keyExtractor={item => `key-${item.slot}`}
                        renderItem={({item}) => {
                    return  <View style={{flexDirection: 'row', width: '100%', height: 80,backgroundColor:'white',marginTop:5,borderRadius:15}}>
                    <View style={{flex:3,}}>
                    <Text style={{fontSize: 16 , color: 'black'  , marginLeft: 5,marginTop: 25}}>{" "}{item.slot}{" "}</Text>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={() => {checkedTime({key2 : item.slot})}}>
                        <Text style={{marginTop: 25}}>
                                <Feather 
                                name="arrow-right"
                                color="black"
                                size={30}
                            />
                                </Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    }}
                />

                    </View>
                   
                      )
                      :
                      null
                    }

                </Modal>
                

        </SafeAreaView>
    )

}

export default Slots;
const styles= StyleSheet.create({
    dateFlex:{
        flexDirection:'row' , 
        width:'80%',
        height: 50,
        marginLeft : '10%',
        marginRight:'10%',
       
    },
    setdate:{
        flexDirection:'row' , 
        width:'80%',
        height: 50,
        marginLeft : '10%',
        marginRight:'10%',
        borderWidth:1,
        borderColor:'white',
        marginTop:10,
        borderRadius:20
       


    },
    timeFlex:{
        flexDirection:'row' , 
        width:'80%',
        height: 50,
        marginLeft : '10%',
        marginRight:'10%',
        marginTop:30
       


    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor:'white',
        color:'black',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
});