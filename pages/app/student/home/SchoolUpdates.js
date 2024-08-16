// Imports
// import {router} from 'expo-router';
import {Card} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNotification} from '../../../../context/NotificationProvider';





// Main function
const SchoolUpdates = ({navigation}) => {

    // Class notices count
    const {classNoticesCount, noticesCount} = useNotification();

    return (
        <View style={{width:'100%', display:'flex', flexDirection:'column', gap:10, paddingHorizontal:20}}>

            {/* Title */}
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10}}>
                <Text style={{fontSize:14, fontWeight:'700', color:'gray'}}>SCHOOL UPDATES</Text>
                <LinearGradient
                    colors={['#000', '#fff']}
                    start={{x:0, y:0}}
                    end={{x:1, y:0}}
                    style={{flex:1, opacity:0.7, height:1}}
                />
            </View>


            {/* Boxes */}
            <View style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:2, rowGap:10}}>

                {/* Notice */}
                <View style={{width:'32%', height:120}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('student-notices')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/Notice.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Notice</Text>
                                {noticesCount !== 0 && (
                                    <View style={{width:16, height:16, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:30, backgroundColor:'red'}}>
                                        <Text style={{fontSize:12, color:'#fff'}}>{noticesCount}</Text>
                                    </View>
                                )}
                            </View>
                            <View style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', paddingVertical:4, backgroundColor:'#DFEEF6', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                                <Text style={{fontSize:12, color:'#0094DA'}}>Details</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>


                {/* Class Notice */}
                <View style={{width:'32%', height:120}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('student-class-notices')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/ClassNotice.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Class Notice</Text>
                                {classNoticesCount !== 0 && (
                                    <View style={{width:16, height:16, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:30, backgroundColor:'red'}}>
                                        <Text style={{fontSize:12, color:'#fff'}}>{classNoticesCount}</Text>
                                    </View>
                                )}
                            </View>
                            <View style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', paddingVertical:4, backgroundColor:'#DFEEF6', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                                <Text style={{fontSize:12, color:'#0094DA'}}>Details</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>


                {/* Events */}
                <View style={{width:'32%', height:120}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-class-notices')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/Events.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Events</Text>
                                {noticesCount !== 0 && (
                                    <View style={{width:16, height:16, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:30, backgroundColor:'red'}}>
                                        <Text style={{fontSize:12, color:'#fff'}}>{noticesCount}</Text>
                                    </View>
                                )}
                            </View>
                            <View style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', paddingVertical:4, backgroundColor:'#DFEEF6', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                                <Text style={{fontSize:12, color:'#0094DA'}}>Details</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>


                {/* Academic Survey */}
                <View style={{width:'32%', height:130}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-class-notices')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/AcademicSurvey.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Academic Survey</Text>
                                {noticesCount !== 0 && (
                                    <View style={{width:16, height:16, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:30, backgroundColor:'red'}}>
                                        <Text style={{fontSize:12, color:'#fff'}}>{noticesCount}</Text>
                                    </View>
                                )}
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
export default SchoolUpdates;