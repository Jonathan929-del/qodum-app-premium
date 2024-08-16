// Imports
import {Card} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import {Image, Text, TouchableOpacity, View} from 'react-native';





// Main function
const Transport = () => {
    return (
        <View style={{width:'100%', display:'flex', flexDirection:'column', gap:8, paddingHorizontal:20}}>

            {/* Title */}
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10}}>
                <Text style={{fontSize:14, fontWeight:'700', color:'gray'}}>TRANSPORT</Text>
                <LinearGradient
                    colors={['#000', '#fff']}
                    start={{x:0, y:0}}
                    end={{x:1, y:0}}
                    style={{flex:1, opacity:0.7, height:1}}
                />
            </View>


            {/* Boxes */}
            <View style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:2, rowGap:10}}>

                {/* Vehicle Route */}
                <View style={{width:'32%', height:130}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/Route.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Vehicle Route</Text>
                                {/* {ediariesCount !== 0 && (
                                    <View style={{position:'absolute', top:0, right:0, width:22, height:22, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:30, backgroundColor:'red'}}>
                                        <Text style={{fontSize:12, color:'#fff'}}>{ediariesCount}</Text>
                                    </View>
                                )} */}
                            </View>
                            <View style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', paddingVertical:4, backgroundColor:'#DFEEF6', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                                <Text style={{fontSize:12, color:'#0094DA'}}>Details</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>


                {/* Track Vehicle */}
                <View style={{width:'32%', height:130}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/TrackVehicle.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Track Vehicle</Text>
                                {/* {ediariesCount !== 0 && (
                                    <View style={{position:'absolute', top:0, right:0, width:22, height:22, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:30, backgroundColor:'red'}}>
                                        <Text style={{fontSize:12, color:'#fff'}}>{ediariesCount}</Text>
                                    </View>
                                )} */}
                            </View>
                            <View style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', paddingVertical:4, backgroundColor:'#DFEEF6', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                                <Text style={{fontSize:12, color:'#0094DA'}}>Details</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>


                {/* Stoppage Timing */}
                <View style={{width:'32%', height:130}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/ContactNo.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Stoppage Timing</Text>
                                {/* {ediariesCount !== 0 && (
                                    <View style={{position:'absolute', top:0, right:0, width:22, height:22, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:30, backgroundColor:'red'}}>
                                        <Text style={{fontSize:12, color:'#fff'}}>{ediariesCount}</Text>
                                    </View>
                                )} */}
                            </View>
                            <View style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', paddingVertical:4, backgroundColor:'#DFEEF6', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                                <Text style={{fontSize:12, color:'#0094DA'}}>Details</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>


                {/* Emergency Contact */}
                <View style={{width:'32%', height:130}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/EmergencyContact.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Emergency Contact</Text>
                                {/* {ediariesCount !== 0 && (
                                    <View style={{position:'absolute', top:0, right:0, width:22, height:22, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:30, backgroundColor:'red'}}>
                                        <Text style={{fontSize:12, color:'#fff'}}>{ediariesCount}</Text>
                                    </View>
                                )} */}
                            </View>
                            <View style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', paddingVertical:4, backgroundColor:'#DFEEF6', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                                <Text style={{fontSize:12, color:'#0094DA'}}>Details</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>

            </View>
        </View>
    );
};





// Export
export default Transport;