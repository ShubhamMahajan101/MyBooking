


import React,{useState, useRef} from 'react';
import { View, Text,TouchableOpacity, ScrollView, Image, Dimensions, FlatList, TextInput, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;

const bookings = [
  {
    id: 1,
    title: 'Full Arms/Legs Polish',
    price: '₹4,500',
    status: 'ONGOING',
    sessionsCompleted: 2,  // 2 sessions completed
    totalSessions: 8,
    date: '12 Nov',
    time: '4:00 PM',
    image: require('../assets/image_1.jpg'),
  },
  {
    id: 2,
    title: 'BB Glow',
    status: 'UPCOMING',
    price: '₹5,800',
    sessionsCompleted: 0,  // 0 sessions completed
    totalSessions: 8,
    date: '12 Nov',
    time: '4:00 PM',
    image: require('../assets/image_3.jpg'),
  },
  {
    id: 3,
    title: 'Vithair Trichology',
    price: '₹4,200',
    status: 'COMPLETED',
    sessionsCompleted: 2,  // All sessions completed
    totalSessions: 8,
    date: '9 Nov',
    time: '4:00 PM',
    image: require('../assets/image_1.jpg'),
  },
  {
    id: 4,
    title: 'Vithair Trichology',
    price: '₹4,200',
    status: 'COMPLETED',
    sessionsCompleted: 5,  // All sessions completed
    totalSessions: 8,
    date: '9 Nov',
    time: '4:00 PM',
    image: require('../assets/image_3.jpg'),
  },
  {
    id: 5,
    title: 'Vithair Trichology',
    price: '₹4,200',
    status: 'ONGOING',
    sessionsCompleted: 6,  // All sessions completed
    totalSessions: 8,
    date: '9 Nov',
    time: '4:00 PM',
    image: require('../assets/image_1.jpg'),
  },
];

const BookingItem = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [home, setHome] = useState('Home')
  const [selectAll, setSelectAll]= useState(true)
  const [ongoing, setOngoing]= useState(true)
  const [upcoming, setUpcoming]= useState(true)
  const [missed, setMissed]= useState(true)
  const [completed, setCompleted]= useState(true)
  const [cancelled, setCancelled]= useState(true)


    const [selectedSessions, setSelectedSessions] = useState({
      all: false,
      ongoing: false,
      upcoming: false,
      missed: false,
      completed: false,
      cancelled: false,
    });
  
    const handleSelect = (type) => {
      if (type === 'all') {
        const allSelected = !selectedSessions.all;
        setSelectedSessions({
          all: allSelected,
          ongoing: allSelected,
          upcoming: allSelected,
          missed: allSelected,
          completed: allSelected,
          cancelled: allSelected,
        });
      } else {
        setSelectedSessions({
          ...selectedSessions,
          all: false, // Deselect "All Sessions"
          [type]: !selectedSessions[type],
        });
      }
    };
  

  const refRBSheet = useRef();

  const getStatusStyle = (status) => {
    switch (status) {
      case 'ONGOING':
        return {
          backgroundColor: 'rgba(0, 255, 0, 0.2)',
          color: '#00ff00',
        };
      case 'UPCOMING':
        return {
          backgroundColor: 'rgba(251, 161, 10, 0.3)',
          color: 'orange',
        };
      case 'COMPLETED':
        return {
          backgroundColor: 'rgba(0, 0, 255, 0.2)',
          color: '#0000FF',
        };
      default:
        return {
          backgroundColor: 'gray',
          color: 'white',
        };
    }
  };

  return (
    <View style={{backgroundColor:'white', flex:1}}>

      <ScrollView>
      <View style={styles.searchbar}>
      <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/search.png')}></Image>
      <TextInput
        style={styles.input}
        placeholder='Search your bookings...'
        placeholderTextColor={'gray'}
        onChangeText={onChangeText}
        value={text}
      />
      <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/menu.png')}></Image>
      </View>

      <View style={{marginBottom:mobileW*10/100, marginTop:mobileW*5/100}}>
        <FlatList
          data={bookings}
          contentContainerStyle={{marginBottom:mobileW*10/100}}
          renderItem={({ item }) => {
            const statusStyle = getStatusStyle(item.status);

            return (
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('BookingDetails', { booking: item })} style={styles.bookingCard}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <View>
                    <View style={[styles.Onstatus, { backgroundColor: statusStyle.backgroundColor }]}>
                      <Text style={[styles.status, { color: statusStyle.color }]}>{item.status}</Text>
                    </View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={{ marginTop: mobileW*2/100, color:'gray', fontSize:mobileW*4/100}}>{item.sessionsCompleted}/{item.totalSessions} Sessions Completed</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: mobileW*2/100 }}>
                      <Text style={{ color: '#000', fontSize: mobileW*5/100, fontWeight: 'bold' }}>{item.price} </Text>
                      <View style={{ width: mobileW*0.5/100, height: mobileW*5/100, backgroundColor: 'lightgray', marginHorizontal: 5 }}></View>
                      <Text style={{fontSize:mobileW*3/100, color:'gray', fontWeight:'500'}}>Per Session</Text>
                    </View>
                  </View>
                  <Image source={item.image} style={styles.image} />
                </View>

                {/* Render Upcoming Session */}
                {item.sessionsCompleted < item.totalSessions && (
                  <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <View >
                    <View style={{width:mobileW*45/100, padding:mobileW*2/100,borderRadius:mobileW*2/100, borderWidth:mobileW*0.2/100,backgroundColor:'#fff',  elevation:1, }}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                      <Text style={{ fontSize: mobileW*4/100, color: '#000', fontWeight: 'bold' }}>Session {item.sessionsCompleted + 1} . </Text>
                      <Text style={{ fontSize: mobileW*3/100, color: 'orange', fontWeight: 'bold' }}>UPCOMING</Text>
                     </View>
                     {item.status==="COMPLETED"&&
                     <TouchableOpacity onPress={() => refRBSheet.current.open()}  style={{backgroundColor:'#000',width:mobileW*30/100,height:mobileW*8/100, marginTop:mobileW*2/100,borderRadius:mobileW*5/100,justifyContent:'center', alignItems:'center'}}> 
                        <Text style={{fontSize:mobileW*4/100, color:'#fff', fontWeight:'500'}}>ADD TO CART</Text>
                      </TouchableOpacity>}

            {item.status!=="COMPLETED"&&
                      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: mobileW*2/100 }}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Image style={{width:mobileW*7/100, height:mobileW*7/100, tintColor:'gray' }}
                        source={require('../assets/calendar.png')}></Image>
                      <Text style={{ color: 'gray',marginLeft:mobileW*2/100, fontSize: mobileW*4.2/100, fontWeight: '500' }}>{item.date} </Text>
                      </View>
                      <View style={{ width: mobileW*0.5/100, height: mobileW*5/100, backgroundColor: 'lightgray', marginHorizontal: 5 }}></View>
                      <Text style={{fontSize:mobileW*4.2/100, color:'gray', fontWeight:'500'}}>{item.time}</Text>
                    </View>}
                    </View>
                   
                      </View>

                    {/* Render Remaining Session */}
                    
                    {item.sessionsCompleted + 1 < item.totalSessions && (
                      <View >
                      <View style={{width:mobileW*45/100, padding:mobileW*2/100,borderRadius:mobileW*2/100, borderWidth:mobileW*0.2/100, backgroundColor:'#fff',  elevation:1, }}>
                      <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{ fontSize: mobileW*4/100, color: '#000', fontWeight: 'bold' }}>Session {item.sessionsCompleted + 2} . </Text>
                        <Text style={{ fontSize: mobileW*3/100, color: 'gray', fontWeight: 'bold' }}>REMAINING</Text>
                       </View>
                       <View style={{backgroundColor:'gray',width:mobileW*30/100,height:mobileW*8/100, marginTop:mobileW*2/100,borderRadius:mobileW*5/100,justifyContent:'center', alignItems:'center'}}> 
                          <Text style={{fontSize:mobileW*4/100, color:'#fff', fontWeight:'500'}}>SCHEDULE NOW</Text>
                        </View>
                      </View>
                     
                        </View>
                    )}
                  </View>
                )}
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
            

      </View>
      
      </ScrollView>

{/* ******************************** RBSHEET ***************************** */}
   
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={true}
        height={mobileH*45/100}
        customStyles={{
          
          wrapper: {
          
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <View style={{padding:mobileW*5/100}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', }}>
          <Text style={{fontSize:mobileW*5/100, color:'#000', fontWeight:'bold'}}>Filter</Text>
          <TouchableOpacity onPress={() => refRBSheet.current.close()}>
          <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/close2.png')}></Image>
    </TouchableOpacity>
          </View>

      

          <View style={{flexDirection:'row',  marginTop:mobileW*8/100}}>
          {selectAll ?(
          <TouchableOpacity onPress={() => setSelectAll(!selectAll)} >
          <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/square.png')}></Image>
    
    </TouchableOpacity>
          ):<TouchableOpacity  onPress={() => setSelectAll(!selectAll)}>
          <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/check.png')}></Image>
    
    </TouchableOpacity>}
          <Text style={{fontSize:mobileW*5/100, marginLeft:mobileW*5/100, color:'#000', fontWeight:'500'}}>All Session</Text>
          </View>



          <View style={{flexDirection:'row',  marginTop:mobileW*2/100}}>
          {ongoing?(
          <TouchableOpacity  onPress={() => setOngoing(!ongoing)}>
          <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/square.png')}></Image>
    </TouchableOpacity>):<TouchableOpacity  onPress={() => setOngoing(!ongoing)}>
          <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/check.png')}></Image>
    
    </TouchableOpacity>}
          <Text style={{fontSize:mobileW*5/100, marginLeft:mobileW*5/100, color:'#000', fontWeight:'500'}}>Ongoing Session</Text>
          </View>






          <View style={{flexDirection:'row',  marginTop:mobileW*2/100}}>

          {upcoming?(
          <TouchableOpacity  onPress={() => setUpcoming(!upcoming)}>
          <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/square.png')}></Image>
    </TouchableOpacity>):<TouchableOpacity  onPress={() => setUpcoming(!upcoming)}>
          <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/check.png')}></Image>
    
    </TouchableOpacity>}
          <Text style={{fontSize:mobileW*5/100, marginLeft:mobileW*4/100, color:'#000', fontWeight:'500'}}>Upcoming Session</Text>
          </View>


          <View style={{flexDirection:'row',  marginTop:mobileW*2/100}}>
          {missed?(
          <TouchableOpacity  onPress={() => setMissed(!missed)}>
          <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/square.png')}></Image>
    </TouchableOpacity>):<TouchableOpacity  onPress={() => setMissed(!missed)}>
          <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/check.png')}></Image>
    
    </TouchableOpacity>}
          <Text style={{fontSize:mobileW*5/100, marginLeft:mobileW*5/100, color:'#000', fontWeight:'500'}}>Missed Session</Text>
          </View>

          <View style={{flexDirection:'row',  marginTop:mobileW*2/100}}>
         {completed?(
          <TouchableOpacity  onPress={() => setCompleted(!completed)}>
          <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/square.png')}></Image>
    </TouchableOpacity>):<TouchableOpacity  onPress={() => setCompleted(!completed)}>
          <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/check.png')}></Image>
    
    </TouchableOpacity>}
          <Text style={{fontSize:mobileW*5/100, marginLeft:mobileW*5/100, color:'#000', fontWeight:'500'}}>Completed Sessions</Text>
          </View>
          <View style={{flexDirection:'row',  marginTop:mobileW*2/100}}>
          {cancelled?(
          <TouchableOpacity  onPress={() => setCancelled(!cancelled)}>
          <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/square.png')}></Image>
    </TouchableOpacity>):<TouchableOpacity  onPress={() => setCancelled(!cancelled)}>
          <Image style={{width:mobileW*5/100, height:mobileW*5/100, tintColor:'#000' }}
    source={require('../assets/check.png')}></Image>
    
    </TouchableOpacity>}
          <Text style={{fontSize:mobileW*5/100, marginLeft:mobileW*5/100, color:'#000', fontWeight:'500'}}>Cancelled Session</Text>
          </View>


          <TouchableOpacity onPress={() => refRBSheet.current.close()} activeOpacity={0.8} style={styles.ApplyButton}>
            <Text style={{fontSize:mobileW*5/100, color:"#fff", fontWeight:'bold'}}>APPLY</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>

{/* ******************************** FOOTER ***************************** */}
      <View style={{width:mobileW, height:mobileW*20/100,  flexDirection:'row', justifyContent:'space-around', position:'absolute',bottom:0, backgroundColor:'#fff'}}>
              <TouchableOpacity activeOpacity={0.8} onPress={()=>setHome('Home')} style={{justifyContent:'center', alignItems:'center'}}>
              <Image style={{width:mobileW*8/100, height:mobileW*8/100, tintColor:home === 'Home'?'orange':'gray' }}
    source={require('../assets/home.png')}></Image>
    <Text style={{color:home === 'Home'?'orange':'gray', fontSize:mobileW*4/100, fontWeight:'500'}}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity  activeOpacity={0.8} onPress={()=>setHome('Booking')} style={{justifyContent:'center', alignItems:'center'}}>
              <Image style={{width:mobileW*8/100, height:mobileW*8/100, tintColor:home === 'Booking'?'orange':'gray' }}
    source={require('../assets/home.png')}></Image>
    <Text style={{color:home === 'Booking'?'orange':'gray', fontSize:mobileW*4/100, fontWeight:'500'}}>My bookings</Text>
              </TouchableOpacity>
              <TouchableOpacity  activeOpacity={0.8} onPress={()=>setHome('Club')} style={{justifyContent:'center', alignItems:'center'}}>
              <Image style={{width:mobileW*8/100, height:mobileW*8/100, tintColor:home === 'Club'?'orange':'gray' }}
    source={require('../assets/home.png')}></Image>
    <Text style={{color:home === 'Club'?'orange':'gray', fontSize:mobileW*4/100, fontWeight:'500'}}>Club</Text>
              </TouchableOpacity>
              <TouchableOpacity  activeOpacity={0.8} onPress={()=>setHome('Assistant')} style={{justifyContent:'center', alignItems:'center'}}>
              <Image style={{width:mobileW*8/100, height:mobileW*8/100, tintColor:home === 'Assistant'?'orange':'gray' }}
    source={require('../assets/home.png')}></Image>
    <Text style={{color:home === 'Assistant'?'orange':'gray', fontSize:mobileW*4/100, fontWeight:'500'}}>Assistant</Text>
              </TouchableOpacity>
              </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookingCard: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  searchbar:{
    paddingLeft:mobileW*4/100,
    paddingRight:mobileW*4/100,
    width:mobileW*90/100,
    borderWidth:mobileW*0.5/100,
    borderColor:'lightgray',
    backgroundColor:'white',
    margin: mobileW*3/100,
    borderRadius:mobileW*8/100,
    flexDirection:'row',
    alignItems:'center',
    padding:mobileW*1/100,
   justifyContent:'space-between'

  },
  input: {
    width:mobileW*70/100,
    height: mobileW*10/100,
    borderRadius:mobileW*8/100,
    // borderWidth: 1,
    padding: 10,
  },
  status: {
    fontSize: mobileW*3/100,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: mobileW*5/100,
    fontWeight: 'bold',
    marginTop: mobileW*2/100,
    color: '#000',
  },
  Onstatus: {
    width: mobileW*20/100,
    height: mobileW*7/100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  sessionBox: {
    flexDirection:'row',
    width: '45%',
    padding: 10,
    backgroundColor: '#FFF',
    elevation: 2,
    borderRadius: 15,
    alignItems: 'center',
  },
 
  ApplyButton:{
    width:mobileW*90/100, 
    height:mobileW*15/100, 
    backgroundColor:"#000", 
    borderRadius:mobileW*10/100, 
    marginTop:mobileW*5/100,
    alignItems:'center', 
    justifyContent:'center'
  }
});

export default BookingItem;
