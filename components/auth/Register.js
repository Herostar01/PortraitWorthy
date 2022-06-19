import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){
        const { email, password, name } = this.state;
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed In
            const user = userCredential.user;
            console.log(results)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
        })
    }

    render() {

        return (

            <View>
                <TextInput 
                    placeholder='name'
                    onChangeText={(name) => this.setState( {name} )}
                />

                <TextInput 
                    placeholder='email'
                    onChangeText={(email) => this.setState( {email} )}
                />

                <TextInput 
                    placeholder='password'
                    secureTextEntry
                    onChangeText={(password) => this.setState( {password} )}
                />

                <Button 
                    title="Sign Up"
                    onPress={() => this.onSignUp()}
                />
            </View>
    )
    }
}

export default Register