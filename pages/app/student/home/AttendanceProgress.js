// Imports
import React from 'react';
import {Card, ProgressBar} from 'react-native-paper';
import {Image, Text, TouchableOpacity, View} from 'react-native';





// Main function
const AttendanceProgress = ({navigation}) => {
    return (
        <View style={{width:'90%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', gap:10}}>


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

            {/* Fees */}
            <View style={{width:'32%', height:120}}>
                <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('student-fee')}
                        style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                    >
                        <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                            <Image
                                style={{width:'50%', height:'60%'}}
                                source={require('../../../../assets/Home/Fee.png')}
                            />
                        </View>
                        <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                            <Text style={{fontWeight:'600'}}>Fee</Text>
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
    );
};





// Export
export default AttendanceProgress;