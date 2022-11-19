import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Line from "../components/Line";
import colors from "../config/colors";

function ProfileUpdateScreen({navigation}) {
    return (
        // MAIN CONTAINER
        <View style={styles.container}>

            <View style={styles.subContainer}>
                <Text style={styles.heading}>Profile</Text>
                <Text style={styles.subHead}>user profile information</Text>


                {/* INPUT CONTAINER */}
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} keyboardType={"default"} placeholder={"Username"}/>
                    <TextInput style={styles.input} keyboardType={"default"} placeholder={"First Name"}/>
                    <TextInput style={styles.input} keyboardType={"default"} placeholder={"Last Name"}/>
                    <TextInput style={styles.input} keyboardType={"email-address"} placeholder={"Email Address"}/>
                    <TextInput style={styles.input} keyboardType={"phone-pad"} placeholder={"Phone Number"}/>
                    <TextInput style={styles.input} keyboardType={"default"} secureTextEntry={true}
                               placeholder={"Enter Password"}/>
                </View>

                <Line/>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>

                <Text style={{padding:10, color:colors.dark, fontWeight:"bold"}}>
                    Want to change Password? Click Here.
                </Text>
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
    subContainer:{
        width:"100%",
        paddingHorizontal: 30
    },
    inputContainer: {
        width: "100%",
        marginTop: 10,
    },

    image: {
        width: 100, height: 100
    },
    heading: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold"
    },
    subHead: {
        textAlign: "center",
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
        width: "100%",
        fontWeight: "bold",
        color: colors.lightDark
    },
    buttonContainer: {
        justifyContent: "center", width: "100%",
        marginVertical: 5, padding: 15, borderRadius: 25,
        backgroundColor: colors.blue
    },
    buttonText: {
        color: colors.white, textAlign: "center",
        fontSize: 18, fontWeight: "bold"
    }
});

export default ProfileUpdateScreen;

