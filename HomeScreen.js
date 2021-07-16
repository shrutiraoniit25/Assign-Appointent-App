import React , {useState , useEffect} from 'react';
import {View , Text , SafeAreaView , TouchableOpacity , StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({navigation , route}) => {
    const user = 'user';
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

    const retrieveData = async () => {
        
        try {
            const value = await AsyncStorage.getItem('user');
            
            if (value !== null) {
                
              var str= value;
                console.log(str)
                console.log(str[0]['pemail'])
             

            }
            else{
                alert(' data null');
             
            }
          } catch (error) {
            // Error retrieving data
          }
        
      }
    
    


    return(
        <SafeAreaView style={{flex:1 , backgroundColor:'white'}}>
            <View style={styles.flex}>
                <View style={styles.flexheader}>
                    <Text style={styles.headerText}>Appointment App</Text>
                </View>
            </View>
            {

            }

            <View style={styles.buttonflex}>
                <View style={{flex:3 }}>
                    <Text style={{textAlign:'left' , marginLeft:10 , marginTop:20 , fontSize:22, }}>
                        Book An Appointment
                    </Text>

                </View>
                <View style={{flex:1 }}>
                    <TouchableOpacity onPress = {() => navigation.navigate('Slots')}>
                        <Text style={{marginTop: 10}}>
                        <Feather 
                           name="arrow-right"
                           color="black"
                           size={50}
                       />
                        </Text>
                         
                    </TouchableOpacity>
                    
                </View>

            </View>



        </SafeAreaView>
    )

}

export default HomeScreen;
const styles = StyleSheet.create({
    flex:{
        flexDirection:'row',
        width:'100%',
        height:180,
        borderBottomWidth:10,
        borderColor:'#A7C7E7',
        backgroundColor:'#A7C7E7',
        position:'absolute',
        borderBottomRightRadius:150


    },
    flexheader:{
        flex:1 , 
        marginTop:20,
        marginBottom:40,

    },
    headerText:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        textAlign:'left',
        marginTop:50,
        marginLeft:20
        
    },
    buttonflex:{
        flexDirection:'row',
        width:'80%',
        height:80,
        borderWidth:1,
        marginTop:200,
        marginLeft:'10%',
        marginRight:'10%',
        borderRadius:20,
    }

});
