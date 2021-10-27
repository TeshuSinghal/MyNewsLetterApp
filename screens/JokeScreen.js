import React from 'react';
import { View,TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

export default class News extends React.Component {
render() {
return (
<View>
<Text style={styles.button}>Laughing Corner</Text>

<Text style={styles.text}>Joke1:-</Text>
<Image style={{marginBottom:10, width: 300,height: 300,}} source={require('../assets/joke01.jpg')}/>

<Text style={styles.text}>Joke2 :-</Text>
<Image style={{marginBottom:10, width: 400,height:350,}} source={require('../assets/joke2.png')}/>

<Text style={styles.text}>Joke3:-</Text>
<Image style={{marginBottom:10, width: 400,height:350,}} source={require('../assets/joke3.png')}/>

<Text style={styles.text}>Joke4:-</Text>
<Image style={{marginBottom:10, width: 400,height:380,}} source={require('../assets/joke4.png')}/>
</View>
)
}
}

const styles = StyleSheet.create({
 button:{ 
textAlign: 'center',
fontSize: 30,
marginBottom: 40,
backgroundColor: 'red',
marginTop: 10,
fontWeight: 'bold'
}, 
text: {
fontSize: 20,
color: 'white',
marginBottom: 15,
fontWeight: 'bold',
backgroundColor: 'purple'
},
}
)






