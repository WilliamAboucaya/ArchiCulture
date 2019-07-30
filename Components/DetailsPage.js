import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import getAnecdote from '../Helpers/GetAnecdoteHelper'
import getHeaderWiki from '../Helpers/GetWikiHeaderHelper'

import Styles from '../Styles/Styles'
import { ScrollView } from 'react-native-gesture-handler';


class DetailsPage extends Component {
    constructor() {
        super()
    }

    render() {
        //const { photoNumber } = this.props;
        let photoNumber = this.props.navigation.getParam('photoNumber')
        console.log(this.props.navigation.getParam('photoNumber'));

        let name = "";
        if(photoNumber == 0){
            name = 'tour_effeil';
        }
        else if(photoNumber == 1){
            name = 'tour_de_pise';
        }
        else if(photoNumber == 2){
            name = 'le_louvre';
        }
        return (
            <ScrollView>
                <View style={Styles.container}>
                    <Text style={Styles.title}>Informations complémentaires : </Text>
                    <Text style={Styles.content}>{ getHeaderWiki(name) }</Text>
                    <Text style={Styles.titleAnecdote}>Anecdote : </Text>
                    <Text style={Styles.content}>{ getAnecdote(name) }</Text>
                    <Button onPress={this.goToHomePage} title='Accueil'/>
                </View>
            </ScrollView>
        )
    }

    goToHomePage = () => {
        this.props.navigation.navigate("HomePage")
    }
}

export default DetailsPage