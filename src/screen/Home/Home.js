import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Right from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './Styles'


export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.callApi();
  }
  async callApi() {

    let resp = await fetch('https://reqres.in/api/users/')
    let respjson = await resp.json()
    console.log("respjson", respjson)
    this.setState({ data: respjson })
    console.log("data", this.state.data.data);
  }

  render() {


    return (
      <View style={styles.container}>

        <FlatList
          numColumns={1}
          keyExtractor={(item) => item.id}
          data={this.state.data.data}
          renderItem={({ item }) => {
            return (
              <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.listItem}>
                  <Image style={styles.img} source={{ uri: item.avatar }}></Image>
                  <View style={styles.text}>
                    <Text style={styles.item}>{item.email}</Text>
                  </View>
                  <TouchableOpacity

                    onPress={()=> this.props.navigation.navigate('Details', item)}>

                    <Right
                      name="keyboard-arrow-right"
                      style={{
                        fontSize: 50, marginTop: 20, marginRight: 15, color: 'white',
                      }}
                    />
                  </TouchableOpacity>

                </View>
              </SafeAreaView>
            )
          }
          }
        />
      </View>
    )
  }
}

