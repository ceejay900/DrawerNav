import PropTypes from 'prop-types';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated, ScrollView, FlatList} from 'react-native';
import { useRef, useState } from 'react';

//card view
import {Card} from 'react-native-shadow-cards'

//icons
import profile from './assets/icons/profile.png'
import listview from './assets/icons/listview.png'
import image from './assets/icons/image.jpeg'
import cardview from './assets/icons/cardview.png'
import aboutus from './assets/icons/aboutus.png'
//Drawer images
import drawer from './assets/drawer.png'
import close from './assets/close.png'

//Scroll images
import image1 from './assets/scrollImages/coffee1.jpg'
import image2 from './assets/scrollImages/coffee2.jpeg'
import image3 from './assets/scrollImages/coffee3.jpeg'
import image4 from './assets/scrollImages/coffee4.jpeg'
import image5 from './assets/scrollImages/coffee5.jpg'
import image6 from './assets/scrollImages/coffee6.jpeg'
import image7 from './assets/scrollImages/coffee7.jpg'
import image8 from './assets/scrollImages/coffee8.jpg'
import image9 from './assets/scrollImages/coffee9.jpeg'
import image10 from './assets/scrollImages/coffee10.jpeg'

//Card View images
import ph from './assets/cardImage/ph.gif'
import sa from './assets/cardImage/sa.gif'
import russia from './assets/cardImage/russia.png'
import us from './assets/cardImage/us.gif'
import france from './assets/cardImage/france.png'
import egypt from './assets/cardImage/egypt.png'
import iran from './assets/cardImage/iran.png'
import israel from './assets/cardImage/israel.png'
import turkey from './assets/cardImage/turkey.png'

//AboutUs
import cj from './assets/aboutUs/cj.png'
import jerad from './assets/aboutUs/jerad.jpg'
import jude from './assets/aboutUs/jude.jpg'
import neil from './assets/aboutUs/neil.jpg'
import sharmaine from './assets/aboutUs/sharmaine.png'
import camila from './assets/aboutUs/camila.jpg'



export default function App() {

  // Drawer nav fuctions
  const [currentTab, setCurrentTab] = useState('ScrollView');

  // to get the current status of menu
  const [showMenu, setShowMenu] = useState(false);

  // anim properties 
  const offsetValue = useRef(new Animated.Value(0)).current;
  //scale initial must be one..
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffSet = useRef(new Animated.Value(0)).current;


  return (
    <View style={styles.container}>
    <View style={{justifyContent: 'flex-start'}}>
    <Image source={profile} style={{
      width: 60, height: 60, 
      borderRadius: 10, 
      margin: 20
    }} ></Image>
    <Text style={{
    fontSize: 20, 
    marginLeft: 20, fontWeight: 
    'bold', color: 'white'}}>User Name</Text>

    <TouchableOpacity>
      <Text style={{marginLeft: 20, color: 'white'}}>View profile</Text>
    </TouchableOpacity>

    <View style={{flexGrow: 1, marginTop: 40,}}>
      {/* tab bar button */}
      {TabButton(currentTab, setCurrentTab, "ScrollView", image)}
      {TabButton(currentTab, setCurrentTab, "ListView", listview)}
      {TabButton(currentTab, setCurrentTab, "CardView", cardview)}
      {TabButton(currentTab, setCurrentTab, "AboutUs", aboutus)}
    </View>

    </View>

    <Animated.View style={{flexGrow: 1, position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    borderRadius: showMenu ? 15 : 0.,
    backgroundColor: 'white',
    transform:[
      {scale: scaleValue},
      {translateX: offsetValue}
    ]
    }}>

    {/* {Over lay view} */}

    <Animated.View style={{
      transform: [
        {
          translateY: closeButtonOffSet
        }
      ]
    }}>

          <TouchableOpacity onPress={() => {
      // retrieve animation here...
      //maximize screen
      Animated.timing(scaleValue, {
        toValue: showMenu ? 1 : 0.88,
        duration: 300,
        useNativeDriver: true.valueOf,
      })
      .start()

      //restore down screen size
      Animated.timing(offsetValue, {
        toValue: showMenu ? 0 : 170,
        duration: 300,
        useNativeDriver: true.valueOf,
      })
      .start()

      Animated.timing(closeButtonOffSet, {
        toValue: !showMenu ? -30 : 0,
        duration: 300,
        useNativeDriver: true.valueOf,
      })
      .start()

      setShowMenu(!showMenu);
    }}>

      {/* navigation icon */}
    <Image source={showMenu ? close : drawer} style={{
      width: 50, height: 50, marginLeft: 10,
      marginTop: 5,
    }}></Image>

    </TouchableOpacity>

    {/* //Title */}
     <View>
      <Text style={{fontSize: 30, fontWeight: 'bold',
    color: 'black', marginLeft: 10,}}>{currentTab}</Text>
    
    {/* //Display change background */}
      
    <View>{navigationTab(currentTab)}</View>

    </View>
    
    </Animated.View>

    </Animated.View>
    
      <StatusBar style="auto" />
    </View>
  );
}


// Change display according to Menutab..

const navigationTab = (currentTab) =>{
  //scrollView
  if(currentTab === 'ScrollView'){
  return(
    <View style={{alignSelf: 'center', height: 500, width: 400, margin: 20,}}>
    <ScrollView style={{alignSelf:'center', }}>
      <Image source={image1} style={styles.scrollImage}></Image>
      <Image source={image2} style={styles.scrollImage}></Image>
      <Image source={image3} style={styles.scrollImage}></Image>
      <Image source={image4} style={styles.scrollImage}></Image>
      <Image source={image5} style={styles.scrollImage}></Image>
      <Image source={image6} style={styles.scrollImage}></Image>
      <Image source={image7} style={styles.scrollImage}></Image>
      <Image source={image8} style={styles.scrollImage}></Image>
      <Image source={image9} style={styles.scrollImage}></Image>
      <Image source={image10} style={styles.scrollImage}></Image>
    </ScrollView>
    </View>
  );
  }
  //listView
  else if(currentTab === 'ListView'){
    return (
    <View style={{alignSelf: 'center', height: 500, width: 400}}>
      <FlatList
        data={[
          {key: 'Afghanistan'},
          {key: 'Bahamas'},
          {key: 'Cambodia'},
          {key: 'Denmark'},
          {key: 'Egypt'},
          {key: 'Fiji'},
          {key: 'Gabon'},
          {key: 'Haiti'},
          {key: 'Iceland'},
          {key: 'Japan'},
        ]}
        renderItem={({item}) => <Text style={styles.listView}>{item.key}</Text>}
      />
    </View>
  );
  } 
  //cardView
  else if(currentTab === 'CardView'){
    return(
      <View style={{height: 500, 
        width: 400, marginTop: 20}}>
        <ScrollView>
        <Card style={styles.cardstyle}>
          <Image source={ph} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: Philippines</Text>
          <Text style={styles.cardText}>Content: Asia</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={sa} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: South Africa</Text>
          <Text style={styles.cardText}>Content: Africa</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={russia} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: Russia</Text>
          <Text style={styles.cardText}>Content: Eurasia</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={us} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: United States of America</Text>
          <Text style={styles.cardText}>Content: America</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={france} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: France</Text>
          <Text style={styles.cardText}>Content: Europe</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={egypt} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: Egypt</Text>
          <Text style={styles.cardText}>Content: Africa, Asia</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={iran} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: Iran</Text>
          <Text style={styles.cardText}>Content: Asia</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={israel} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: Israel</Text>
          <Text style={styles.cardText}>Content: Asia</Text>
        </Card>
        <Card style={styles.cardstyle}>
          <Image source={turkey} style={styles.cardImage}></Image>
          <Text style={styles.cardText}>Name: Turkey</Text>
          <Text style={styles.cardText}>Content: Europe, Asia</Text>
        </Card>
    </ScrollView>
    </View>
    );
  }
  //aboutUs
  else if(currentTab === 'AboutUs'){
    return(
      <View style={{width: 400, height: 500}}>
        <View style={styles.parent}>
        <Card style={styles.child}>
          <Image source={neil} style={styles.aboutImage}></Image>
          <Text style={styles.aboutText}>Vilaga, Neil Christian O.</Text>
        </Card> 
        <Card style={styles.child}> 
          <Image source={jude} style={styles.aboutImage}></Image>
          <Text style={styles.aboutText}>Calma, Jude Martin V.</Text>
        </Card>
        </View>
        <View style={styles.parent}>
        <Card style={styles.child}>
          <Image source={cj} style={styles.aboutImage}></Image>
          <Text style={styles.aboutText}>Caballero, Ceejay, B.</Text>
        </Card>
        <Card style={styles.child}>
          <Image source={jerad} style={styles.aboutImage}></Image>
          <Text style={styles.aboutText}>Fajardo, Jerad Andrei C.</Text>
        </Card>
        </View>
        <View style={styles.parent}>
        <Card style={styles.child}>
          <Image source={sharmaine} style={styles.aboutImage}></Image>
          <Text style={styles.aboutText}>Miranda, Sharmaine F.</Text>
        </Card>
        <Card style={styles.child}>
          <Image source={camila} style={styles.aboutImage}></Image>
          <Text style={styles.aboutText}>Suyat, Camila O.</Text>
        </Card>
        </View>
        </View>
    );
  }
  else {
    return null;
  }
}




//for multiple Buttons
const  TabButton = (currentTab, setCurrentTab, title, image) =>{
  return(
    <TouchableOpacity onPress={() => {
      setCurrentTab(title)
    }}>
      <View  style={{flexDirection: 'row', 
      backgroundColor: currentTab == title ? 'white' : 'transparent',
      marginLeft: 20, marginTop: 10, padding: 10,
      borderRadius: 10
    }}>

      <Image source={image} style={{
        width: 25, height: 25,
        alignSelf: 'center',
      }}></Image>

      <Text style={{
        fontSize: 15, fontWeight: 'bold',
        alignSelf: 'center', paddingLeft: 15,
        color: currentTab == title ? 'red' : 'white',
      }}>{title}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  scrollImage: {
    width: 250, 
    height: 200, 
    margin: 20, 
    borderRadius: 10
  },
  listView:{
    alignSelf: 'center',
    fontSize: 30,
    margin: 20,
  },
  cardstyle: {
    borderRadius: 20,
    alignSelf: 'center',
    padding: 20,
    margin: 20,
    elevation: 20,
  },
  cardImage: {
    width: 250, 
    height: 100, 
    margin: 20, 
    borderRadius: 10
  },
  cardText:{
    alignSelf: 'center', 
    fontSize: 15,
  },
  parent: {
    flexDirection: 'row', 
    alignSelf: 'center',
  },
  child: {
    borderRadius: 20, 
    width: 150, 
    height: 150, 
    margin: 5, 
    alignSelf: 'flex-start',
    margin: 20,
    elevation: 20,
  },
  aboutImage:{
    width: 80, 
    height: 80, 
    margin: 20, 
    borderRadius: 10, 
    alignSelf: 'center',
  },
  aboutText: {
    fontSize: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  }
});
