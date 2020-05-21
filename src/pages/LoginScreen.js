import React from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
//import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';
import firebase from '../database/Firebase';
import {Fab} from "../styles/styles";


class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            isLoading: false,
        }
    }

    componentDidMount() {    

 /*       
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyA7RSbq5qTWa3jiVCMstMUWCJv_SEKBpJI",
            authDomain: "projetoteste-d4b2d.firebaseapp.com",
            databaseURL: "https://projetoteste-d4b2d.firebaseio.com",
            projectId: "projetoteste-d4b2d",
            storageBucket: "projetoteste-d4b2d.appspot.com",
            messagingSenderId: "349036326212",
            appId: "1:349036326212:web:8987f7ced5ab52ce21fb11",
            measurementId: "G-MZGS288ZGP"
        };
        
        // Initialize Firebase
        if(!firebase.apps.length) { 
            firebase.initializeApp(firebaseConfig);
            
        }    

    */    

    }

    tryLogin(){

        this.setState({isLoading: true});

     
        console.log("usuario", this.state.mail, "senha", this.state.password);  

        // destructing
        const { mail, password } = this.state;

        // promisse
        firebase.auth().signInWithEmailAndPassword(mail, password)
            .then(user => {
                console.log("Usuario Logado", user);
                this.props.navigation.navigate('SecondScreen');
            })
            .catch(error => {
                console.log("Fatal Error!", error)
                if (error.code === 'auth/user-not-found') {
                    Alert.alert("Usuário não cadastrado", "Deseja cadastrar um novo usuário",
                    [{  text: 'Não', 
                        onPress: () => {consol.log("Usuário não quer criar conta")}},
                    
                    {  text: 'Sim',
                        onPress: () => {
                            console.log("Usuário quer criar uma conta");
                            firebase.auth().createUserWithEmailAndPassword(mail, password)
                                .then(user => {console.log("usuario criado", user)})
                                .catch(error => {console.log("Error na criação do usuario", error)})        

                        }
                     }]);
                }

            })
            .finally(() => {
                console.log("Terminou!!!")
                this.setState({isLoading: false});
            })
        
    }   
        
    onChangeMail(value) {
        this.setState({mail: value});
    }    
    
    
    onChangePassword(value) {
        this.setState({password: value});
    }

    renderButton() {

        if (this.state.isLoading)
            return <ActivityIndicator />
    
        return( 


            <Button 
                    color="#4473ba"
                    title="Entrar" 
                    onPress={()=>this.tryLogin()}
                />
        )



    }

    render() {
        return (
            <View>
                <TextInput placeholder="user@email.com"
                            value={this.state.mail}
                            onChangeText={(value)=>this.onChangeMail(value)}
                />

                <TextInput placeholder="*******"
                            value={this.state.password}
                            secureTextEntry
                            onChangeText={(value)=>this.onChangePassword(value)}
                />

                { this.renderButton() }     
                

                <Fab><Text>+</Text></Fab>

            </View>
        );
    }
};

export default function(props) {
    const navigation = useNavigation();

    return <LoginScreen {...props} navigation={navigation} />
}