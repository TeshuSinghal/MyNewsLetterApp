import React from 'react';
import { View,TouchableOpacity, Text, StyleSheet,Image } from 'react-native';

export default class News extends React.Component {
render() {
return (
<View>
<TouchableOpacity
onPress={()=>this.props.navigation.navigate('HomeScreen')}>
</TouchableOpacity>

<Text style={styles.button}>Top News</Text>
<Text style={styles.text}>With the COVID-19 pandemic still raging in India, healthcare has gained the prime focus in the Union Budget 2021-22 presented by Finance Minister Nirmala Sitharaman on Monday. Presenting the budget, focusing on "health,hope,and growth,"she announced the total budget outlay for the healthcare sector is Rs. 2.23 lakh crore-a whopping 137% rise from last year. </Text>
</View> 
)
}
}


const styles = StyleSheet.create({
 button:{ 
textAlign: 'center',
fontSize: 25,
marginBottom: 40,
backgroundColor: 'lime',
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







