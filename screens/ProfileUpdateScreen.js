import {Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Line from "../components/Line";
import colors from "../config/colors";
import MInput from "../components/MInput";
import {useState} from "react";
import MPicker from "../components/MPicker";

function ProfileUpdateScreen({navigation}) {
    const [checkVal, setCheckVal] = useState(true)
    const [option, setOption] = useState()
    const options = [
        {label: 'MARK I', value: 1},
        {label: 'MARK X', value: 2},
        {label: 'MARK Z', value: 3},
        {label: 'MARK K', value: 4},
    ]

    return (
        // MAIN CONTAINER
        <View style={styles.container}>

            <View style={styles.subContainer}>
                <Text style={styles.heading}>Profile</Text>
                <Text style={styles.subHead}>user profile information</Text>


                {/* INPUT CONTAINER */}
                <View style={styles.inputContainer}>
                    <MInput iconName={"checkmark-done-sharp"} keyboardType={"default"} placeholder={"Username"}/>
                    <MInput iconName={"text"} keyboardType={"default"} placeholder={"First Name"}/>
                    <MInput iconName={"text"} keyboardType={"default"} placeholder={"Last Name"}/>
                    <MInput iconName={"mail"} keyboardType={"email-address"} placeholder={"Email Address"}/>
                    <MInput iconName={"call"} keyboardType={"phone-pad"} placeholder={"Phone Number"}/>
                    <MPicker iconName={"apps"} items={options} placeholder={"Category"}
                             onSelectItem={(option)=>setOption(option)} selectedItem={option}
                    />

                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Switch value={checkVal} thumbColor={colors.blue} onValueChange={
                            (value) => setCheckVal(value)
                        }/>
                        <Text style={{fontWeight:"bold", color:colors.darkGrey}}>
                            Are yu sure you want check this option.
                        </Text>
                    </View>


                </View>

                <Line/>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>

                <Text style={{padding: 10, color: colors.dark, fontWeight: "bold"}}>
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
    subContainer: {
        width: "100%",
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

