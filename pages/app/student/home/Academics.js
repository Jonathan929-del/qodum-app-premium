// Imports
import {Card} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNotification} from '../../../../context/NotificationProvider';





// Main function
const Academics = ({navigation}) => {

    // Class notices count
    const {ediariesCount} = useNotification();

    return (
        <View style={{width:'100%', display:'flex', flexDirection:'column', gap:10, paddingHorizontal:20}}>

            {/* Title */}
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10}}>
                <Text style={{fontSize:14, fontWeight:'700', color:'gray', fontSize:14}}>ACADEMICS</Text>
                <LinearGradient
                    colors={['#000', '#fff']}
                    start={{x:0, y:0}}
                    end={{x:1, y:0}}
                    style={{flex:1, opacity:0.7, height:1}}
                />
            </View>


            {/* Boxes */}
            <View style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:2, rowGap:10}}>

                {/* Assignments */}
                <View style={{width:'32%', height:120}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('student-assignments')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/Assignments.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Assignments</Text>
                                {/* {noticesCount !== 0 && (
                                    <View style={{width:16, height:16, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:30, backgroundColor:'red'}}>
                                        <Text style={{fontSize:12, color:'#fff'}}>{noticesCount}</Text>
                                    </View>
                                )} */}
                            </View>
                            <View style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', paddingVertical:4, backgroundColor:'#DFEEF6', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                                <Text style={{fontSize:12, color:'#0094DA'}}>Details</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>


                {/* Syllabus */}
                <View style={{width:'32%', height:120}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-assignments')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/Syllabus.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Syllabus</Text>
                                {/* {noticesCount !== 0 && (
                                    <View style={{width:16, height:16, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:30, backgroundColor:'red'}}>
                                        <Text style={{fontSize:12, color:'#fff'}}>{noticesCount}</Text>
                                    </View>
                                )} */}
                            </View>
                            <View style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', paddingVertical:4, backgroundColor:'#DFEEF6', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                                <Text style={{fontSize:12, color:'#0094DA'}}>Details</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>


                {/* Lesson Plan */}
                <View style={{width:'32%', height:120}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-assignments')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/LessonPlan.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Lesson Plan</Text>
                                {/* {noticesCount !== 0 && (
                                    <View style={{width:16, height:16, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:30, backgroundColor:'red'}}>
                                        <Text style={{fontSize:12, color:'#fff'}}>{noticesCount}</Text>
                                    </View>
                                )} */}
                            </View>
                            <View style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', paddingVertical:4, backgroundColor:'#DFEEF6', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                                <Text style={{fontSize:12, color:'#0094DA'}}>Details</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>


                {/* E-diary */}
                <View style={{width:'32%', height:120}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/ediary.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>E-diary</Text>
                                {ediariesCount !== 0 && (
                                    <View style={{position:'absolute', top:0, right:0, width:22, height:22, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:30, backgroundColor:'red'}}>
                                        <Text style={{fontSize:12, color:'#fff'}}>{ediariesCount}</Text>
                                    </View>
                                )}
                            </View>
                            <View style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', paddingVertical:4, backgroundColor:'#DFEEF6', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                                <Text style={{fontSize:12, color:'#0094DA'}}>Details</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                </View>


                {/* Time Table */}
                <View style={{width:'32%', height:120}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/TimeTable.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Time Table</Text>
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


                {/* Attendance */}
                <View style={{width:'32%', height:120}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/Attendance.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Attendance</Text>
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


                {/* Results */}
                <View style={{width:'32%', height:120}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/Results.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Results</Text>
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


                {/* Online Class */}
                <View style={{width:'32%', height:120}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/OnlineClasses.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Online Class</Text>
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


                {/* Empty space */}
                <View style={{width:'32%'}} />

            </View>
        </View>
    );
};





// Export
export default Academics;