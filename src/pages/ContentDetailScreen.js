import React from 'react';
import firebase from '../database/Firebase'
import { View, Text, Button } from 'react-native';

import { useRoute } from '@react-navigation/native';

class ContentDetailScreen extends React.Component {

    constructor() {
        super();    

    }
    render() {

        const { route } = this.props;  

        return (
            <View>
                <Text><b>ID da matéria: </b> {this.props.route.params.id}</Text>
                <Text><b>Nome da matéria:</b> {this.props.route.params.name}</Text> 
                <Text><b>Descrição: </b> {this.props.route.params.desc}</Text>   
                <Text><b>Professor: </b> {this.props.route.params.prof}</Text>
                <Text><b>Curso: </b> {this.props.route.params.curso}</Text>
                <Text><b>Faculdade: </b> {this.props.route.params.facu}</Text>
                
            </View>    

        )    
    }
}

export default function(props) {
    const route = useRoute();

    return <ContentDetailScreen {...props} route={route} />;


}