import {StyleSheet, TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import colors from "../config/colors";

function MInput({iconName, iconColor = colors.darkGrey, iconSize = 25, ...otherProps}) {
    return (
        <View style={styles.container}>
            {iconName && <Ionicons name={iconName} size={25} color={iconColor}/>}
            <TextInput {...otherProps} style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 20,
        flexDirection: "row",
        backgroundColor: colors.grey200,
        marginBottom:5,
    },
    input: {
        flex: 1,
        fontSize: 18,
        marginLeft: 10,
        fontWeight: "bold",
        color: colors.darkGrey
    }
})

export default MInput;
