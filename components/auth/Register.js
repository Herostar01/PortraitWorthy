import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import firebase from 'firebase/app'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { initializeApp } from 'firebase/app';
import { addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIRy08UPFXVAtAgzMHJ-2adVd3TOnhf24",
    authDomain: "portraitworthy.firebaseapp.com",
    projectId: "portraitworthy",
    storageBucket: "portraitworthy.appspot.com",
    messagingSenderId: "1036890874490",
    appId: "1:1036890874490:web:597a79c40bd6d8034d91c3",
    measurementId: "G-LPKE9HF207"
};

    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    const auth = getAuth(app);

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
            .then((result) => {
                firebase.firestore().collection("users")
                    firebase.getAuth().currentUser.uid
                    .set({
                        name,
                        email,
                        
                    })
                console.log(result)
        })
            .catch((error) => {
                console.log(error);
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