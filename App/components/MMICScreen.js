import React, { Component } from 'react';
import axios from 'axios';
import styles from './ApiStyles';
import {
    View, Button, FlatList, ActivityIndicator, Alert,
    Text, 
    TouchableOpacity
} from "react-native";


class ApiContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
           loading: false,
            axiosData: [],

            lat: 0,
            long: 0,
    
        };
  

    };

 

    async componentWillMount(){
        navigator.geolocation.getCurrentPosition(
			position => {
				
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                })
                console.log(this.state.lat);
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
         
    }

     

    goForAxios = () => {
        this.setState({
            loading: true,

        })
        
        fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat},${this.state.long}&${API_KEY}`)
              .then(response => response.json())
              .then((responseJson) => {
                  console.log('getting data from fetch', responseJson)
                  setTimeout(() => {
                      this.setState({
                          loading: false,
                          axiosData:(responseJson)
                      })
                  }, 2000)

              })
              .catch(error => console.log(error))       
                      
    }

    render() {
        const {  fromAxios, loading, axiosData } = this.state
        
        return (
            <View style={styles.parentContainer}>
             <View>
                <Text style={styles.textStyle}>Nearby ATMs</Text>
            </View>
            <View style={{ margin: 18 }}>
                <Button
                    title={'Click'}
                    onPress={
                        this.goForAxios
                    }
                    color='green'
                />
            </View>

            {
                <Text>{JSON.stringify(axiosData)}</Text>
            }
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading Data...</Text>
                </View>
            }
          </View>


        );
    }
}

export default ApiContainer;

