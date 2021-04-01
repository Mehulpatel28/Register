import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Right from 'react-native-vector-icons/dist/MaterialIcons';


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
                    onPress={() => navigation.navigate('Details', item)}>

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

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  img: {
    height: 80,
    width: 80,
    marginTop: 9,
    marginLeft:15,
    borderRadius: 30,
    resizeMode: 'contain',
  },
  listItem: {
    height: 100,
    flex: 1,
    marginVertical: 10,
    backgroundColor: '#50d093',
    flexDirection: 'row',
  },
  item: {
    color: 'white',
    fontSize: 20,
  },
  email: {
    color: 'white',

    fontSize: 20,
  },
  text: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 20,
    marginTop:30
  },

});