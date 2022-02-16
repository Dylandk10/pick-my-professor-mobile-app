import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {RootStackParamList} from './screens/RootStackPrams';

type myStackScreen = NativeStackNavigationProp<RootStackParamList, 'Signup'>;
interface PropsObject {
    name: number;
}


const MainMenu = (props: PropsObject) => {
   const [count, setCount] = useState(props.name);
   
    const navigation = useNavigation<myStackScreen>();
    function signupClick() {
        navigation.navigate('Signup');
    }

    function buttonClick2() {
        setCount(count -1);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={signupClick}
            >
            <Text style={styles.displayText} >SignUp</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={buttonClick2}
            >
            <Text style={styles.displayText} >Login</Text>
            </TouchableOpacity>
            <Text style={styles.refralStyle}>Your Referals</Text>
            <Text style={styles.countTextSize}>{count}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginRight:20,
        marginLeft: 20,
        flex: 1
    },
    buttonStyle: {
        marginTop: 10,
        backgroundColor: 'black',
        padding: 15,
        marginRight: 15,
        marginLeft: 15
    }, 
    displayText: {
        color: 'white',
        textAlign: 'center'
    },
    countTextSize: {
        fontSize: 55,
        textAlign: 'center',
        padding: 10,
        borderWidth: 4,
        borderColor: 'black',
        borderRadius: 6,
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40
    },
    refralStyle: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    }
});

export default MainMenu;