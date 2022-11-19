import colors from "../config/colors";
import {View} from "react-native";

export default function Line({color=colors.darkGrey}) {
    return (
        <View style={{
            borderColor:color,
            borderBottomWidth:1, marginVertical:10,marginHorizontal:10
        }} />
    )
}
