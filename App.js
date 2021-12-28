/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App = () => {


  return (
    <SafeAreaView style={{display:'flex',flex:1}}   >
      <View style={{backgroundColor:'#FEFEFF',flex:1,justifyContent:'center'}}>
      <View style={{backgroundColor:'#FEFEFF',flex:1,justifyContent:'center',padding:30}} >
      
      <Image
        style={{height:200,width:200}}
        source={require('./assets/task1.png')}
      />
      <Text style={{fontFamily:'sefoe',fontWeight:'bold',fontSize:30,color:'#25306B'}}>
        Get things done
      </Text>
      <Text style={{color:'#D7D8D9',fontSize:20,fontWeight:'bold',marginRight:100}}>
        Just a click away from planning your tasks
      </Text>

      </View>
      <View style={{position:'absolute',bottom:-180,right:-200,borderRadius:500,backgroundColor:'#25306B',width:400,height:400}}>
       
      </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
