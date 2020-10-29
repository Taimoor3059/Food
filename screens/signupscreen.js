import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View,ImageBackground, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from '../firebase/config'
// import LoginScreen from "../screens/loginscreen"
function SignupScreen({navigation}) {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        console.log('passsword enterted')
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                setEmail(" ")
                setFullName(" ")
                setPassword(" ")
                setConfirmPassword(" ")
                navigation.navigate('Login',{user: data})
                // const usersRef = firebase.firestore().collection('users')
                // usersRef
                //     .doc(uid)
                //     .set(data)
                //     .then(() => {
                //         setFullName("")
                //         setEmail("")
                //         setPassword("")
                //         setConfirmPassword("")
                //         console.log('about to navigate to login screen')
                //         navigation.navigate('Login')
                //         // navigation.navigate('LoginScreen', {user: data})
                //     })
                //     .catch((error) => {
                //         alert(error)
                //     });
            })
            .catch((error) => {
                alert(error)
        });
    }

    return (
        <View style={styles.container}>
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">
            {/* <Image
                style={styles.logo}
                source={require('../../../assets/MHPLogo.png')}
            /> */}
            <TextInput
                style={styles.input}
                placeholder='Full Name'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setFullName(text)}
                value={fullName}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Confirm Password'
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onRegisterPress()}>
                <Text style={styles.buttonTitle}>Create account</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
            </View>
        </KeyboardAwareScrollView>
    </View>
    );
  }

export default SignupScreen; 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 100,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#03989E',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: 'white'
    },
    footerLink: {
        color: "#03989E",
        fontWeight: "bold",
        fontSize: 16
    }
  });