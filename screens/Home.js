import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import {Card} from 'react-native-paper';


const Home=({navigation})=>
{
    return(
        <View style={styles.homeview}>
            <Card style={styles.mycard} onPress={()=>navigation.navigate('Weather')}>
                <View style={styles.cardview}>
                    <Image 
                        style={styles.imagestyle}
                        source={require('../Images/weather.jpg')}
                    />
                    <Text style={{fontSize:18}}>
                        Weather Predictions
                    </Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardview}>
                <Image 
                    style={styles.imagestyle}
                    source={require('../Images/agriculture.png')}
                />
                <Text style={{fontSize:18}}>Modern Agricultural Techniques</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardview}>
                <Image 
                    style={styles.imagestyle}
                    source={require('../Images/guidance.png')}
                />
                <Text style={{fontSize:18}}>Guidance</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardview}>
                <Image 
                    style={styles.imagestyle}
                    source={require('../Images/support.png')}
                />
                <Text style={{fontSize:18}}>Support</Text>
                </View>
            </Card>
        </View>
    );  
}
const styles=StyleSheet.create
(
    {   homeview:{
        flex: 1,
        backgroundColor: '#0b0',
    
   },
        mycard:{   
            margin:10,
        },
        cardview:{
            flexDirection:'row',
            margin: 10
        },
        imagestyle:{
            width:70,height:70,borderRadius:35
        }
    }
);

export default Home;
