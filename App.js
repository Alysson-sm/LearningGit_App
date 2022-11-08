import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { List,Appbar, Title, Paragraph,Divider, Card} from 'react-native-paper';


// function App() {
//   return (
    
//     <List.Section style = {styles.list}>
//       <Card style={styles.card}>
//       <Card.Content>
//         <Title>Card title</Title>
//         <Paragraph>card Paragraph</Paragraph>
//       </Card.Content>
//       </Card>
//       <Card style={styles.card}>
//       <Card.Content>
//         <Title>Card title</Title>
//         <Paragraph>card Paragraph</Paragraph>
//       </Card.Content>
//       </Card>
//       <Card style={styles.card}>
//       <Card.Content>
//         <Title>Card title</Title>
//         <Paragraph>card Paragraph</Paragraph>
//       </Card.Content>
//       </Card>
//       <Card style={styles.card}>
//       <Card.Content>
//         <Title>Card title</Title>
//         <Paragraph>card Paragraph</Paragraph>
//       </Card.Content>
//       </Card>
//     </List.Section>
    
//   );
// }

// function AppBar (){
//   return(
//     <Appbar.Header>
//     <Appbar.BackAction onPress={() => {}} />
//     </Appbar.Header>
//   );
// }


// export default function MyApp () {
//   return (
//     App()
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//   },
//   list:{
//     flex:1,
//     padding:20,
//     margin:20,
//   },
//   divider:{
//     color:'red',
//   },
//   card:{
//     flex:0.4,
//     justifyContent: 'center',
//     marginTop:10,
//     marginBottom:10,
//     borderRadius:15,

//   }
// });

import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const GitDoc = () => <Text>Git</Text>;

const GitInstall = () => <Text>Instalação</Text>;

const GitComand = () => <Text>Comandos</Text>;

const GitLinks = () => <Text>Links</Text>;



const HomeScreen = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'Git', title: 'Git', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
      { key: 'Instalação', title: 'Instalação', focusedIcon: 'album' },
      { key: 'Comandos', title: 'Comandos', focusedIcon: 'history' },
      { key: 'Links', title: 'Links', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
      Git: GitDoc,
      Instalação: GitInstall,
      Comandos: GitComand,
      Links: GitLinks,
      });

      return (
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      );
    };

    export default HomeScreen;