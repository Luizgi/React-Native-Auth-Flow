import{Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './style'
import { Link } from '@react-navigation/native'

export default function LoginScreen(){
    return(
        <View style={styles.container}>

            <TextInput placeholder='Email' style={styles.input}></TextInput>
            <TextInput placeholder='Password'style={styles.input}></TextInput>

            <TouchableOpacity style={styles.btn}>
                <Link to ={{screen: 'Home'}}> Login</Link>
            </TouchableOpacity>
            <View>
                <Link to ={{screen: 'RecoverPass'}} style={styles.links}> Esqueceu a Senha? </Link>
                <Link to ={{screen: 'Register'}} style={styles.links}> Não tem uma conta ainda? </Link>
            </View>

        </View>
    )
}