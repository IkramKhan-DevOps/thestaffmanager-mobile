import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import BaseView from "../components/BaseView";
import colors from "../config/colors";


function CalenderScreen({navigation}) {
    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key: 'workout', color: 'green'};

    return (
        <BaseView>
            <View style={{marginVertical:20}}>
                <View style={{paddingHorizontal:40, marginBottom:20}}>
                    <Text style={{textAlign:"center", fontWeight:"bold", color:colors.lightDark, fontSize:25}}>
                        Your Calender
                    </Text>
                    <Text style={{textAlign:"center", fontSize:16, color:colors.grey500, marginTop:10}} numberOfLines={1}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                </View>
                <View>
                    <Calendar
                        initialDate={'2022-11-18'}
                        minDate={'2022-11-17'}
                        maxDate={'2030-01-31'}
                        onDayPress={day => {
                            console.log('selected day', day);
                        }}
                        onDayLongPress={day => {
                            console.log('selected day', day);
                        }}
                        markingType={'period'}
                        markedDates={{
                            '2022-11-21': {startingDay: true, color: '#50cebb', textColor: 'white'},
                            '2022-11-22': {color: '#70d7c7', textColor: 'white'},
                            '2022-11-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'},
                            '2022-11-24': {color: '#70d7c7', textColor: 'white'},
                            '2022-11-25': {endingDay: true, color: '#50cebb', textColor: 'white'}
                        }}

                        onMonthChange={month => {
                            console.log('month changed', month);
                        }}
                        hideArrows={false}
                        hideExtraDays={true}
                        disableMonthChange={false}
                        firstDay={1}
                        hideDayNames={false}
                        showWeekNumbers={false}
                        onPressArrowLeft={subtractMonth => subtractMonth()}
                        onPressArrowRight={addMonth => addMonth()}
                        disableArrowLeft={false}
                        disableArrowRight={false}
                        disableAllTouchEventsForDisabledDays={true}
                        enableSwipeMonths={true}
                    />
                </View>
            </View>
        </BaseView>
    );
}

export default CalenderScreen;

