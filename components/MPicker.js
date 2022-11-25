import {
    Button, FlatList,
    Modal,
    Platform,
    StatusBar,
    StyleSheet, Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import colors from "../config/colors";
import {useState} from "react";

function MPicker({iconName, iconColor = colors.darkGrey, iconSize = 25, placeholder, items, selectedItem, onSelectItem}) {
    const [modalVisible, setModalVisible] = useState(false)

    const PickerItem = function ({label, onPress, onSelectItem, selectedItem}) {
        return (
            <View>
                <TouchableOpacity onPress={onPress}>
                    <Text style={{paddingHorizontal:20, paddingVertical:10, fontWeight:"bold"}}>
                        {label}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {iconName && <Ionicons name={iconName} size={25} color={iconColor}/>}
                    {
                        selectedItem
                            ?(<TextInput editable={false} value={selectedItem.label} style={styles.input}/>)
                            :(<TextInput editable={false} placeholder={placeholder} style={styles.input}/>)
                    }
                    <Ionicons name={"chevron-down"} size={25} color={iconColor}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType={"slide"}>
                <View style={{marginTop: StatusBar.currentHeight || 0}}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={{fontWeight: "bold", textAlign: "center", color: colors.blue}}>
                            Close
                        </Text>
                    </TouchableOpacity>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({item}) =>
                            <PickerItem onPress={() =>{
                                setModalVisible(false);
                                onSelectItem(item)
                            }
                            } label={item.label}/>
                        }
                    />
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 20,
        flexDirection: "row",
        backgroundColor: colors.grey200,
        marginBottom: 5,
    },
    input: {
        flex: 1,
        fontSize: 18,
        marginLeft: 10,
        fontWeight: "bold",
        color: colors.darkGrey
    }
})

export default MPicker;
