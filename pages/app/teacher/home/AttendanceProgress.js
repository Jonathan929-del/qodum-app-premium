// Imports
import {Card, ProgressBar} from 'react-native-paper';
import {Image, Text, TouchableOpacity, View} from 'react-native';





// Main function
const AttendanceProgress = () => {
    return (
        <View style={{width:'90%', display:'flex', flexDirection:'row', alignItems:'flex-start', justifyContent:'center', gap:10}}>


            <View style={{flex:1, position:'relative', display:'flex', flexDirection:'column', gap:10, paddingHorizontal:20, paddingVertical:20, borderRadius:10, backgroundColor:'#DFEEF6'}}>
                {/* Attendance */}
                <View style={{display:'flex', flexDirection:'column', gap:8}}>
                    <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'600', fontSize:14}}>Attendance</Text>
                        <Text style={{color:'gray'}}>88</Text>
                    </View>
                    <ProgressBar
                        progress={0.89}
                        color='#0094DA'
                        style={{height:7, borderRadius:10, backgroundColor:'#fff'}}
                    />
                </View>


                {/* Fee */}
                <View style={{display:'flex', flexDirection:'column', gap:8}}>
                    <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'600', fontSize:14}}>Fee</Text>
                        <Text style={{color:'gray'}}>70</Text>
                    </View>
                    <ProgressBar
                        progress={0.7}
                        color='#0094DA'
                        style={{height:7, borderRadius:10, backgroundColor:'#fff'}}
                    />
                </View>
            </View>

            {/* Human Resources */}
            <View style={{width:100, height:100, alignItems:'center', gap:5}}>
                <Card style={{width:'100%', borderRadius:20}}>
                    <TouchableOpacity style={{height:'100%', width:'100%', alignItems:'center', justifyContent:'center'}}>
                        <Image
                            style={{width:'70%', height:'70%'}}
                            source={require('../../../../assets/Home/HumanResources.png')}
                        />
                    </TouchableOpacity>
                </Card>
                <Text style={{color:'gray', fontSize:12, textAlign:'center'}}>Human resources (HR)</Text>
            </View>

            <View style={{width:'32%', height:120}}>
                <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate('teacher-notices')}
                        style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                    >
                        <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                            <Image
                                style={{width:'50%', height:'60%'}}
                                source={require('../../../../assets/Home/HumanResources.png')}
                            />
                        </View>
                        <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                            <Text style={{fontWeight:'600'}}>Human resources (HR)</Text>
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


        </View>
    );
};





// Export
export default AttendanceProgress;