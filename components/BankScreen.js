import React, { Component } from 'react';
import axios from 'axios';
import styles from './ApiStyles';
import {
    View, Button, FlatList, ActivityIndicator, Alert,
    Text, List, 
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
        
        fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.lat},${this.state.long}&type=bank&radius=1000&key=`)
              .then(response => response.json())
              .then((responseJson) => {
                  console.log('getting data from fetch', responseJson)
                  setTimeout(() => {
                      this.setState({
                          loading: false,
                          axiosData:(responseJson.results)
                      })
                  }, 2000)

              })
              .catch(error => console.log(error))       
        
              
    }

    FlatListSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            />
        );
    }

    renderItem = (data) => {
        return (
            <TouchableOpacity style={styles.list}>
                <Text style={styles.lightText}>{data.item.name}</Text>
                <Text style={styles.lightText}>{data.item.vicinity}</Text>
                </TouchableOpacity>
        )

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

                <FlatList
                data={axiosData}
                //ItemSeparatorComponent={FlatListItemSeparator}
                renderItem={item => this.renderItem(item)}
                keyExtractor={item => item.id.toString()}
                />
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

