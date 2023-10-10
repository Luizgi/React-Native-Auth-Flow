import{Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './style'
import Link from '@react-navigation/native'

export default function RecoverPass(){
    <View styles={styles.container}>
            <TextInput placeholder='Email' style={styles.input}></TextInput>
            <TextInput placeholder='New Password'style={styles.input}></TextInput>
            <TextInput placeholder='Confirm Password'style={styles.input}></TextInput>

            <TouchableOpacity style={styles.btn}>
                <Link to ={{screen: 'Home'}}> Login</Link>
            </TouchableOpacity>
    </View>
    
}