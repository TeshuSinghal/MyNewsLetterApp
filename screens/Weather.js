import React from 'react';
import { View,TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

export default class Weather extends React.Component {
render() {
return (
<View>
<TouchableOpacity
onPress={()=>this.props.navigation.navigate('HomeScreen')}>
</TouchableOpacity>

<Text style={styles.button}>Weather</Text>
<Text style={styles.text}>Weather in Lucknow. Today's temperature in Lucknow is 8°c. Day's maximum temperature would hover at 21°c, while minimum temperature is predicted to be 7°c.</Text>
</View>
)
}
}


const styles = StyleSheet.create({
 button:{ 
textAlign: 'center',
fontSize: 25,
marginBottom: 40,
backgroundColor: 'lightblue',
marginTop: 30,
fontWeight: 'bold'
}, 
text: {
fontSize: 20,
marginBottom: 15,
fontWeight: 'bold',
},
}
)




