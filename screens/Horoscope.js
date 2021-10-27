import React from 'react';
import { View,TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

export default class Horoscope extends React.Component {
render() {
return (
<View>
<TouchableOpacity
onPress={()=>this.props.navigation.navigate('HomeScreen')}>
</TouchableOpacity>

<Text style={styles.button}>Today's Horoscope</Text>
<Text style={styles.text}>Atrological prediction for Feburary 1, what’s in store for Aries,Virgo, Libra, Scorpio and other zodiac signs Daily horoscope: Are the stars lined up in your favour? Find out the astrological prediction
for Aries, Leo, Virgo, Libra and other zodiac signs for Feburary 1.</Text>
</View>
)
}
}


const styles = StyleSheet.create({
 button:{ 
textAlign: 'center',
fontSize: 30,
marginBottom: 40,
backgroundColor: 'yellow',
marginTop: 10
}, 
text: {
fontSize: 20,
marginBottom: 15,
fontWeight: 'bold',
},

}
)

