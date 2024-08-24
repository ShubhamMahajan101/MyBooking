import React from 'react';
import { View, Text,Dimensions, StyleSheet, FlatList, Modal, ScrollView, Image, TouchableOpacity } from 'react-native';
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;



const DATA = [
  {
    id: 1,
    num:1,
    title: 'Start Session',
    discrioption:'Share The OTP to the professional fro the treatment to begin'
  },
  {
    id: 2,
    num:2,
    title: 'Session Ongoing',
    discrioption:'Hope you enjoy your session.electronic typesetting, remaining essentially'
  },
  {
    id: 3,
    num:3,
    title: 'End Session',
    discrioption:'Share The OTP to the professional fro the treatment to end'
  },
  {
    id: 4,
    num:4,
    title: 'Provide Feedback',
    discrioption:'Help us improve your experience by providing feedback'
  },
  
];


const BookingDetailsScreen = ({ route , navigation}) => {
  const { booking } = route.params;

  return (
    <View >
      <ScrollView>
      <View style={{width:mobileW,padding:mobileW*5/100, height:mobileW*16/100,alignItems:'center', flexDirection:'row', justifyContent:'space-between', backgroundColor:'white'}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Image resizeMode='contain' style={{width:mobileW*6/100, height:mobileW*6/100, }}
      source={ require('../assets/icon_Back.png')}
      ></Image>
      </TouchableOpacity>
      <Text style={{color:'#000', fontSize:mobileW*5/100, fontWeight:'bold'}}>{booking.title}</Text>
      <Image resizeMode='contain' style={{width:mobileW*6/100, height:mobileW*6/100, }}
      source={ require('../assets/dots.png')}
      ></Image>
      </View>
      <View style={{width:mobileW, height:mobileW*15/100, flexDirection:'row', backgroundColor:'#000', padding:mobileW*5/100}}>
      <Text style={{fontSize:mobileW*4/100, color:'#FFF', fontWeight:'500'}}>ENTER OTP BEGIN SERICE : </Text>
      <Text style={{fontSize:mobileW*5/100, color:'#FFF', fontWeight:'bold'}}>5245 </Text>
      </View>
      <View style={{padding:mobileW*5/100}}>
      <Text style={{fontSize:mobileW*5/100, color:'#000',fontWeight:'bold'}}>Track Your Professional</Text>
      <Image resizeMode='cover' style={{width:mobileW*90/100, height:mobileW*40/100, backgroundColor:'black', marginTop:mobileW*5/100}}
      source={ require('../assets/icon_location.png')}
      ></Image>
      </View>
      <View style={{padding:mobileW*5/100}}>
        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={styles.title}>{booking.title}</Text>
          <View style={styles.Onstatus}>
          <Text style={{fontSize: mobileW*3/100, color:'#FBA10A',
    fontWeight: 'bold'}}>{booking.status}</Text>

          </View>
          </View>
          <Text style={{fontSize: mobileW*4.5/100,color:'#000',
    fontWeight: 'bold'}}>{booking.price}</Text>
        </View>
      </View>
<View style={{flexDirection:'row',paddingLeft:mobileW*5/100,paddingRight:mobileW*5/100,alignItems:'center', justifyContent:'space-between'}}>
<View style={{flexDirection:'row', alignItems:'center'}}>
      <Image resizeMode='cover' style={{width:mobileW*6/100, height:mobileW*6/100, }}
      source={ require('../assets/calendar.png')}
      ></Image>
              <Text style={{ marginLeft:mobileW*2/100, fontWeight:'500', color:'gray', fontSize:mobileW*4/100}}>
               {booking.date}, </Text>
      </View>

      <View style={{flexDirection:'row', alignItems:'center', marginTop:mobileW*2/100}}>
      <Image resizeMode='contain' style={{width:mobileW*6/100, height:mobileW*6/100, }}
      source={ require('../assets/clock.png')}
      ></Image>
              
              <Text style={{ marginLeft:mobileW*2/100, fontWeight:'500', color:'gray', fontSize:mobileW*4/100}}>
                {booking.time}</Text>
      </View>


</View>
     
    
    <View style={{paddingLeft:mobileW*5/100, marginTop:mobileW*2/100, flexDirection:'row', width:mobileW*90/100, paddingRight:mobileW*5/100, alignItems:'center',
    }}>
      
    <Image resizeMode='cover' style={{width:mobileW*6/100, height:mobileW*6/100, }}
      source={ require('../assets/home.png')}
      ></Image>
      <Text style={{width:mobileW*75/100, marginLeft:mobileW*2/100, fontWeight:'500', color:'gray', fontSize:mobileW*4/100}}>Akshya Nagar 1st block 1st cross mulund West, Mumbai 400080</Text>
    </View>

<View style={{padding:mobileW*5/100, backgroundColor:'#fff', marginTop:mobileW*2/100}}>
<Text style={{color:'#000', fontSize:mobileW*4/100, fontWeight:'500'}}>OERVIEW: Comprehensive Skin and Hair Analysis</Text>
<Text style={{color:'gray', fontSize:mobileW*3.8/100, marginTop:mobileW*2/100, fontWeight:'500'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
</View>

<View style={{backgroundColor:'#fff', marginTop:mobileW*2/100, padding:mobileW*5/100}}>
<Text style={{fontSize:mobileW*5/100, color:'#000', fontWeight:'bold'}}>Session Overview</Text>
<FlatList
          data={DATA}
          contentContainerStyle={{marginBottom:mobileW*10/100}}
          renderItem={({ item }) => {

            return (
              <View>
<View style={{width:mobileW*80/100, padding:mobileW*2/100, paddingLeft:mobileW*5/100, marginTop:mobileW*3/100, marginLeft:mobileW*5/100, backgroundColor:'white', borderRadius:mobileW*2/100, elevation:0.1, borderWidth:mobileW*0.5/100, borderColor:'gray'}}>
<Text style={{fontSize:mobileW*4.5/100, fontWeight:'bold', color:'#000'}}>{item.title}</Text>
<Text style={{fontSize:mobileW*4/100, marginTop:mobileW*2/100, fontWeight:'400', color:'gray'}}>{item.discrioption}</Text>
</View>
<View style={{width:mobileW*8/100, justifyContent:'center', alignItems:'center', height:mobileW*8/100,borderRadius:mobileW*5/100,marginLeft:mobileW*1/100,bottom:mobileW*5/100,  backgroundColor:'lightgray',position:'absolute'}}>
<Text style={{color:'#fff'}}>{item.num}</Text></View>

</View>)
          }}
                 
                />
</View>


<View style={{width:mobileW, height:mobileW*15/100, flexDirection:'row',alignItems:'center',justifyContent:'space-around', backgroundColor:'rgba(87, 164, 187, 0.2)'}}>
<Text style={{color:'#57A4BB', fontSize:mobileW*3.5/100, fontWeight:'500'}}>Terms & Conditions</Text>
<Text style={{color:'#57A4BB', fontSize:mobileW*3.5/100, fontWeight:'500'}}>Privacy Policy</Text>
</View>

    
    <View style={{width:mobileW*90/100,padding:mobileW*2/100,alignSelf:'center',marginTop:mobileW*2/100,borderRadius:mobileW*1/100, backgroundColor:'white', alignItems:'center', justifyContent:'space-between',flexDirection:'row', marginBottom:mobileW*10/100}}>
    <Image style={{width:mobileW*15/100, height:mobileW*15/100, borderRadius:mobileW*8/100 }}
    source={require('../assets/profile_image.jpeg')}></Image>
    <View style={{ width:mobileW*50/100}}>
    <Text style={{fontSize:mobileW*4.5/100,  fontWeight:'bold', color:'#000'}}>Rachel Andrews</Text>
    <Text style={{fontSize:mobileW*4/100,  fontWeight:'500', color:'graiy'}}>Your Professional</Text>
    </View>
    <View style={{width:mobileW*12/100, height:mobileW*12/100, alignItems:'center',borderRadius:mobileW*2/100, justifyContent:'center', backgroundColor:'#FBA10A'}}>
    <Image style={{width:mobileW*8/100, height:mobileW*8/100, tintColor:'#fff' }}
    source={require('../assets/telephone.png')}></Image>
    </View></View>

    </ScrollView></View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: mobileW*6/100,
    fontWeight: 'bold',
    color:'#000'
  },
  Onstatus: {
    marginLeft:mobileW*5/100,
    padding:mobileW*1.5/100,
    // width: mobileW*25/100,
    // height: mobileW*7/100,
    alignItems: 'center',
   backgroundColor:'rgba(251, 161, 10, 0.1)',
  //  backgroundColor:'#FBA10A',
    borderRadius: mobileW*5/100,
  },
});

export default BookingDetailsScreen;
