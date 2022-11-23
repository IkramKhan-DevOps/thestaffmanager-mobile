import {StatusBar, View} from "react-native";

export default function BaseView({children}) {
    return (
        <View style={{marginTop:StatusBar.currentHeight||0, flex:1}}>
            { children }
        </View>
    )
}
