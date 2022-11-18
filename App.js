import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Card, Paragraph, Title, List, Divider } from 'react-native-paper';





const styles = StyleSheet.create({

  card: {
    flex:1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor:'#777777',
    padding:10,
    marginTop:10
    
  },
  button: {
    flex: 0.3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems:'stretch'
  },
 
  paragraphCard:{
      backgroundColor:'#61BEDC',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      color:'#61BEDC'
    
  },

  titledoc:{
    color:'#FFFFFF'
  },
  paragraphdoc:{
    color:'#FFFFFF',
    
  }

})


function DocScreen() {
  return (
      
  <SafeAreaView style={{padding:10, justifyContent:'space-between'}}>
    <ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.titledoc}>
              O que é Git?
          </Title>
          <Paragraph style={styles.paragraphdoc} numberOfLines={3}>
          De longe, o sistema de controle de versão moderno mais usado no mundo hoje é o Git. O Git é um projeto de código aberto maduro e com manutenção ativa desenvolvido em 2005 por Linus Torvalds, o famoso criador do kernel do sistema operacional Linux. Um número impressionante de projetos de software depende do Git para controle de versão, incluindo projetos comerciais e de código-fonte aberto. Os desenvolvedores que trabalharam com o Git estão bem representados no pool de talentos de desenvolvimento de software disponíveis e funcionam bem em uma ampla variedade de sistemas operacionais e IDEs (Ambientes de Desenvolvimento Integrado).
          </Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Title>
            OLA MUNDO
          </Title>
        </Card.Content>
      </Card>
    </ScrollView>
  </SafeAreaView>

  );

}

function ComandScreen() {
  return (
    <Card style={styles.card}>
        <Card.Content>
          <Title>Git init</Title>
          <Paragraph>comando para inciar um novo projeto com Git</Paragraph>
        </Card.Content>
      </Card>
  );
}

function InstallScreen() {
  return (
    <ScrollView>
    <Card>
      <Title>
        Linux
      </Title>
      <Paragraph>
      Se você deseja instalar as ferramentas básicas do Git no Linux por meio de um instalador binário, geralmente pode fazê-lo por meio da ferramenta de gerenciamento de pacotes que vem com sua distribuição.
      Se você estiver no Fedora (ou qualquer distribuição baseada em RPM intimamente relacionada, como RHEL ou CentOS), você pode usar dnf:
      </Paragraph>
      <Paragraph style={styles.ParagraphComand}>
      $ sudo dnf install git-all
      </Paragraph>
      <Paragraph>
      Se você estiver em uma distribuição baseada em Debian, como o Ubuntu, tente apt:
      </Paragraph>
      <Paragraph style={styles.ParagraphComand}>
      $ sudo apt install git-all
      </Paragraph>
      <Title>
      macOS
      </Title>
      <Paragraph>
      Existem várias maneiras de instalar o Git em um Mac. O mais fácil é provavelmente instalar as ferramentas de linha de comando do Xcode. No Mavericks (10.9) ou superior, você pode fazer isso simplesmente tentando executar gita partir do Terminal na primeira vez.
      </Paragraph>
      <Paragraph style={styles.ParagraphComand}>
      $ git --version
      </Paragraph>
      <Paragraph>
      Se você deseja uma versão mais atualizada, também pode instalá-la por meio de um instalador binário. Um instalador do macOS Git é mantido e está disponível para download no site do Git, em https://git-scm.com/download/mac.
      </Paragraph>
      <Title>
      Instalando no Windows
      </Title>
      <Paragraph>
        Existem varias maneiras d einstala o Git no windows, porem a mais simple e convecianal e por meio de um arquivo exe que pode ser baixado diretamento pelo link abaixo 
      </Paragraph>
      <Paragraph style={styles.ParagraphComand}>
      https://github.com/git-for-windows/git/releases/download/v2.38.1.windows.1/Git-2.38.1-64-bit.exe | 32 bit 
      </Paragraph>
    </Card>
    </ScrollView>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={

      ({ route }) => ({

        tabBarIcon: ({focused, color, size}) =>{
          let iconName;

          if (route.name === 'Documentação') {
            iconName = focused ? 'ios-book': 'ios-book';
            size = 30;
            
            
          }else if (route.name === 'Instalação') {
            iconName = focused ? 'construct' : 'construct';
            size = 30;
            
          }else if (route.name ==='Comandos') {
            iconName = focused ? 'code-working' : 'code'
            size = 30;
            
          }
          return < Ionicons name = {iconName} size = {size} color = {color}/>;

        },
  

      })
      
    }
    tabBarOptions={{
      activeTintColor: '#9C27B0',
      inactiveTintColor: '#777',
      showLabel: false,
    }}
    
    
    
    >
      
      <Tab.Screen name="Documentação" component={DocScreen} />
      <Tab.Screen name="Instalação" component={InstallScreen} />
      <Tab.Screen name="Comandos" component={ComandScreen} />
    </Tab.Navigator >
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
