import React, { Component} from 'react';
import { View, Text, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyles from '../globalStyles';



export default class Home extends Component {
    state = {
        title: '',
        titleHidden: true
    };
    
    render() {
        return (
            <View style = {[styles.container, globalStyles.center]}>
            <Text style = {styles.title}>
                {this.state.title}
            </Text>
            <Button
                title = 'voy pa codex'
                onPress = {this.changeState}
            />
            </View>
        );
    }

    changeState = () => {
        if(this.state.titleHidden) {
            this.setState({ 
                title: 'Hoy almuerzo',
                titleHidden: false 
            });
        } else {
            this.setState({ 
                title: '',
                titleHidden: true 
            });
        }
        
    };
}



const styles = EStyleSheet.create({
    container: {
        backgroundColor: '$primaryColor'
    },
    title: {
        textAlign: 'center',
        fontWeight: "500",
        fontSize: 25,
        letterSpacing: 2,
        marginTop: 15,
        color: "$white"
    }
  });
