import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Right from 'react-native-vector-icons/dist/MaterialIcons';

class componentName extends Component {
  render() {
    return (

      <View style={styles.container}>

        <TouchableOpacity>
          <View>
            <Icon
              style={styles.icn}
              name="person"
              color="#000"
            />
            <Text style={styles.txt}> Parent Profile</Text>
            <Icon
              style={styles.icn1}
              name="keyboard-arrow-right"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <Icon
              style={styles.icn}
              name="storage"
              color="#000"
            />
            <Text style={styles.txt}> Term & Conditions </Text>
            <Icon
              style={styles.icn1}
              name="keyboard-arrow-right"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <Icon
              style={styles.icn}
              name="email"
              color="#000"
            />
            <Text style={styles.txt}> Contact & FAQs </Text>
            <Icon
              style={styles.icn1}
              name="keyboard-arrow-right"
            />
          </View>
        </TouchableOpacity>

      </View>

    )
  }
}

export default componentName

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    padding: 10,
    alignItems: "center"
  },
  icn: {
    position: 'absolute',
    left: 30,
    top: 15,
    fontSize: 40,
    fontWeight: 'bold'
  },
  txt: {
    height: 40,
    width: 400,
    paddingLeft: 50,
    justifyContent: 'space-between',
    borderColor: 'gray',
    marginTop: 17,
    marginBottom: 5,
    marginLeft: 30,
    fontSize: 24
  },
  icn1: {
    position: 'absolute',
    left: 330,
    top: 17,
    fontSize: 37,
    fontWeight: 'bold'
  },
})