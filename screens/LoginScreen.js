import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import colors from "../config/colors";
import Line from "../components/Line";

function LoginScreen({navigation}) {
    return (

        // MAIN CONTAINER
        <View style={styles.container}>

            {/*LOGIN CONTAINER*/}
            <View style={styles.loginContainer}>

                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                           source={require("../assets/images/logo-red-1000.png")}
                    />
                </View>

                <Text style={styles.heading}>Staff Manager</Text>
                <Text style={styles.subHead}>Employees application for staff manager</Text>

                {/* INPUT CONTAINER */}
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} keyboardType={"default"} placeholder={"Enter email"}/>
                    <TextInput style={styles.input} keyboardType={"default"} secureTextEntry={true} placeholder={"Enter Password"}/>
                </View>

                <Line />

                <TouchableOpacity style={styles.buttonContainer} onPress={()=> navigation.navigate("BottomNavigation") } >
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    inputContainer:{
        width:"100%",
        marginTop: 10,
    },
    loginContainer:{
        width:"100%",
        paddingHorizontal: 30
    },
    imageContainer:{
        alignItems: "center"
    },

    image:{
        width: 100, height: 100
    },
    heading: {
        textAlign:"center",
        fontSize:32,
        fontWeight: "bold"
    },
    subHead: {
        textAlign:"center",
        fontSize: 16,
        fontStyle: "italic",
        color: colors.lightGrey
    },
    input: {
        backgroundColor: colors.light,
        borderRadius: 25,
        padding: 10,
        marginVertical: 5,
        fontSize: 16,
        width:"100%",
        fontWeight:"bold",
        color: colors.lightDark
    },
    buttonContainer: {
        justifyContent: "center", width: "100%",
        marginVertical: 5, padding: 15, borderRadius: 25,
        backgroundColor: colors.blue
    },
    buttonText:{
        color: colors.white, textAlign: "center",
        fontSize: 18, fontWeight: "bold"
    }
});

export default LoginScreen;

