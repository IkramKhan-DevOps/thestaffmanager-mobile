import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BaseView from "../components/BaseView";
import colors from "../config/colors";
import {Ionicons} from "@expo/vector-icons";

function DashboardScreen({navigation}) {
    return (
        <BaseView>
            <View style={{flex:1}}>
                <View style={{backgroundColor:colors.white, marginTop:20, marginHorizontal:20, borderRadius:10, padding:20, alignItems:"center"}}>
                    <Image source={require("../assets/images/user.png")} style={{width:80, height:80}} />
                    <Text style={{textAlign:"center", fontWeight:"bold", fontSize:25}}>
                        Username <Ionicons name={"md-open"} size={23} color={"blue"} />
                    </Text>
                    <Text style={{textAlign:"center", fontStyle:"italic", color:colors.grey500, fontSize:18}}>User Rank</Text>

                </View>
                <View style={{backgroundColor: colors.white,  marginTop:20, marginHorizontal:20, borderRadius:20, padding:20, alignItems:"center"}}>
                    <Text style={{textAlign:"center", fontWeight:"bold", fontSize:25}}>
                        # 26828928
                    </Text>
                    <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20}}>
                        Site Name
                    </Text>
                    <Text style={{textAlign:"center", fontStyle:"italic", color:colors.grey500, fontSize:18}}>
                        (Client Name)
                    </Text>

                    <View style={{flexDirection:"row", marginVertical:20}}>
                        <View style={{width:"50%", padding:10, alignItems: "center"}}>
                            <Ionicons name={"timer"} size={45} color={"green"} />
                            <Text style={{fontWeight:"bold", fontSize:20, marginTop:5}}>
                                2022-12-15
                            </Text>
                            <Text style={{fontSize:20}}>
                                00:00
                            </Text>
                        </View>
                        <View style={{width:"50%", padding:10, alignItems: "center"}}>
                            <Ionicons name={"timer"} size={45} color={"red"}/>
                            <Text style={{fontWeight:"bold", fontSize:20, marginTop:5}}>
                                2022-12-15
                            </Text>
                            <Text style={{fontSize:20}}>
                                00:00
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{backgroundColor:colors.darkGreen, padding:10, borderRadius:15}}>
                        <Text style={{color:colors.white100, fontSize:25, fontWeight:"bold"}}>
                            <Ionicons name={"md-checkmark-done-circle"} size={25} /> Clock In
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </BaseView>
    );
}

const styles = StyleSheet.create({});


export default DashboardScreen;

