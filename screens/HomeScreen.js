import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Image } from 'react-native';


export default class HomeScreen extends React.Component{

render(){
return(
<View>

<TouchableOpacity style={[styles.button,{backgroundColor: 'red'}]} 
onPress={()=>this. props.navigation. navigate('JokeScreen')}>
<Text style={styles.buttonText}>Read a Joke</Text>
</TouchableOpacity>


<TouchableOpacity style={[styles.button,{backgroundColor: 'yellow'}]}
onPress={()=>this. props.navigation. navigate('Horoscope')}>
<Text style={styles.buttonText}>Horoscope</Text>
</TouchableOpacity>

<TouchableOpacity style={[styles.button,{backgroundColor: 'lime'}]}
onPress={()=>this. props.navigation. navigate('NewsScreen')}>
<Text style={styles.buttonText}>Top news</Text>
</TouchableOpacity>

<TouchableOpacity style={[styles.button,{backgroundColor: 'lightblue'}]}
onPress={()=>this. props.navigation. navigate('Weather')}>
<Text style={styles.buttonText}>Check Weather</Text>
</TouchableOpacity>

<Text style = {styles.rate}>Rate Us</Text>

<TouchableOpacity>
<Image style = {styles.image2} source={require('../assets/thumbsdown.png')}/>
</TouchableOpacity>

<TouchableOpacity>
<Image style = {styles.image1} source={require('../assets/thumbsup.png')}/>
</TouchableOpacity>

</View>
)
}
}

const styles = StyleSheet.create({
 button:{  
 justifyContent : 'center', 
 alignSelf : 'center', 
 borderWidth : 2, 
 borderRadius : 15, 
 marginTop:40, 
 width : 200,
 height:50,
}, 
buttonText : {
fontSize: 20,
marginLeft: 35,
fontWeight: 'bold',
} ,
rate:{
fontSize: 20,
fontWeight: 'bold',
marginTop: 20,
marginLeft: 130,
fontFamily: 'times',
},
image1: {
width: 50,
height: 50,
marginTop:-47,
marginLeft: 60,
marginRight:30
},
image2: {
width: 50,
height: 50,
marginTop:20,
marginLeft:220
}
}
)
 
 
 