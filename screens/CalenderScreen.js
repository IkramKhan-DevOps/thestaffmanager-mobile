import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


function CalenderScreen({navigation}) {
    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key: 'workout', color: 'green'};

    return (
        <View style={{flex: 1, paddingHorizontal: 10, justifyContent: 'center'}}>
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

                monthFormat={'yyyy MM'}
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
                renderHeader={date => {

                }}
                enableSwipeMonths={true}
                displayLoadingIndicator={true}
            />
        </View>
    );
}

export default CalenderScreen;

