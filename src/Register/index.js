import{Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './style'
import Link from '@react-navigation/native'

export default function Register(){
    <View styles={styles.container}>
    <TextInput placeholder='Email' style={styles.input}></TextInput>
    <TextInput placeholder='Password'style={styles.input}></TextInput>
    <TextInput placeholder='Confirm Password'style={styles.input}></TextInput>
    <TextInput placeholder='Cellphone Number'style={styles.input}></TextInput>
    <TextInput placeholder='You Card Number'style={styles.input}></TextInput>
    
    <TouchableOpacity style={styles.btn}>
                <Link to ={{screen: 'Home'}}> Login</Link>
            </TouchableOpacity>
</View>




}