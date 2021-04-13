import React from 'react'
import { View,Image} from 'react-native'

export default function SplashScreen({navigation}) {
    setTimeout(() => {
        navigation.navigate('Login');
      }, 4000);
    return (
        <View>
        <Image
        source={require('../../../src/assets/splash.gif')}
        style={{height: 740, width: '100%'}}
        />
        </View>
    )
}
