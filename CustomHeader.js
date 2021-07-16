import React from 'react';
import {View , Text , TouchableOpacity, SafeAreaView} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const CustomHeader = ({navigation , title}) => {
    return(
        <SafeAreaView>
        <View style={{flexDirection: 'row', height: 50 , backgroundColor: 'white'}}>
          <View style={{flex: 0.5,}}>
           
               <View style={{marginTop: 10,backgroundColor: 'white', marginLeft:10}}>
                 <TouchableOpacity onPress={() =>navigation.goBack() }>
                  <Feather 
                           name="arrow-left"
                           color="black"
                           size={30}
                       />
               </TouchableOpacity>
               
               </View>
          
          </View>
          <View style={{flex: 1 ,backgroundColor: 'white'}}>
            <Text style={{fontSize: 20, color:'black', textAlign:'center', marginTop:10}}>{title}</Text>
   
          </View>
          <View style={{flex: 0.5,}}></View>
          
      </View>
        </SafeAreaView>
    )
}
export default CustomHeader;