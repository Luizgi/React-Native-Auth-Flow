import React from "react-native";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'aquamarine',
        width: '100%',
        height: '100%' ,
    
    },
    input:{
        height:40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        justifyContent:'center',
        alignItems: 'center',
    },

    btn:{
        backgroundColor: 'green',
        height: '40px',
        width: '75%',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:'10px'
    
    
    }

})

export default Styles;