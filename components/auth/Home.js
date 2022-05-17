import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default function Home({ navigation }) {
    
    return (
    
        <View style={StyleSheet.one} >
            

            <Button style={styles.one}
                title="Register" 
                onPress={() => navigation.navigate("Register")}
                />

            <Button style={styles.one}
                title="Login" 
                onPress={() => navigation.navigate("Login")}
                />

        </View>
    )
}

const styles = StyleSheet.create({
    one: {
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center',
        
    },
    two: {
        fontSize: 18
    },
    three: {
        fontSize: 16,
        margin: 10
    }
});