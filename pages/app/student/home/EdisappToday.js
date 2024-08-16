// Imports
import {Card} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import {Image, Text, TouchableOpacity, View} from 'react-native';





// Main function
const EdisappToday = () => {
    return (
        <View style={{width:'100%', display:'flex', flexDirection:'column', gap:8, paddingHorizontal:20}}>

            {/* Title */}
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10}}>
                <Text style={{fontSize:14, fontWeight:'700', color:'gray'}}>EDISAPP TODAY</Text>
                <LinearGradient
                    colors={['#000', '#fff']}
                    start={{x:0, y:0}}
                    end={{x:1, y:0}}
                    style={{flex:1, opacity:0.7, height:1}}
                />
            </View>


            {/* Boxes */}
            <View style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:2, rowGap:10, paddingBottom:10}}>

                {/* Education News */}
                <View style={{width:'32%', height:130}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/EducationNews.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Education News</Text>
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


                {/* Quote */}
                <View style={{width:'32%', height:130}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/Quote.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Quote</Text>
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


                {/* Thought */}
                <View style={{width:'32%', height:130}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/Thought.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Thought</Text>
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


                {/* City */}
                <View style={{width:'32%', height:120}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/City.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>City</Text>
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


                {/* Word */}
                <View style={{width:'32%', height:120}}>
                    <Card style={{width:'100%', height:'100%', borderRadius:20, backgroundColor:'#fff'}}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('student-ediaries')}
                            style={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}
                        >
                            <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'60%', height:'45%', borderRadius:10, marginLeft:10, marginTop:10, backgroundColor:'#DFEEF6'}}>
                                <Image
                                    style={{width:'50%', height:'60%'}}
                                    source={require('../../../../assets/Home/Word.png')}
                                />
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                                <Text style={{fontWeight:'600'}}>Word</Text>
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
                <View style={{width:'32%'}}/>

            </View>
        </View>
    );
};





// Export
export default EdisappToday;