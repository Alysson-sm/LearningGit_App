import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Card, Paragraph, Title, Divider, Button } from 'react-native-paper';
import { Header } from 'react-native/Libraries/NewAppScreen';



const styles = StyleSheet.create({

  //documentação style
  safeareaviewdoc: {
    padding: 10,
    backgroundColor: '#32383D',
    justifyContent: 'space-between',
    flex: 1
  },

  carddoc: {
    backgroundColor: '#202529',
    padding: 10,
    marginTop: 10,

  },

  titledoc: {
    color: '#FFFFFF',
    fontSize: 22,
  },

  paragraphdoc: {
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 1,

  },

  //documentação style


  //intalação style


  scrollviewinstall:{
    flex:1,
    backgroundColor: '#32383D',
    padding:5,
  },
  
  dividerinstall: {
    padding: 1,
    marginBottom:15,
    backgroundColor:'#F8B820',
  },
  
  cardinstall: {
      flex: 1,
      padding: 10,
      marginTop: 10,
      backgroundColor: '#202028',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
  },

  titleinstall: {
    color: '#FFFFFF',
    fontSize: 22,
  },

  paragraphinstall: {
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 1,
  },
  comandinstall: {
    backgroundColor: '#787880',
    color:'white',
    textAlign:'justify',
    fontSize: 18,
    marginVertical:15,
  },
  //intalação style

  //comandos style
  
/*
Paletas de cores:
#202028
#F8A030
#F8B820
#787880
#CED0CE
  */





  scrollviewcomand: {
    flex: 1,
    backgroundColor: '#32383D',
    padding: 5,
  },
  dividercomand: {
    padding: 1,
    marginBottom:15,
    backgroundColor:'#F8B820',},

  cardcomandscreen: {
    flex: 1,
    marginTop: 3,
    marginVertical: 3,
    backgroundColor: '#202529',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,


  },

  titlecomandscreen: {
    color: '#FFFFFF',
    fontSize:22,
  },

  paragraphcomandscreen: {
    color: '#FFFFFF',
    fontSize: 18,
    letterSpacing: 1,
  },
  examplecodcomandoscreen: {
    backgroundColor: '#787880',
    color:'white'
  },
  //comandos style

  //instalação style

})


function DocScreen() {
  return (
    
    <SafeAreaView style={styles.safeareaviewdoc}>
      <ScrollView>
        <Card style={styles.carddoc}>
          <Card.Content>
           
            <Title style={styles.titledoc}>
              O que é Git?
            </Title>

            <Divider style={styles.dividercomand} />

            <Paragraph style={styles.paragraphdoc}>
            O Git é um projeto de código aberto (OpenSource) consolidado e com manutenção ativa por parte da sua equipe de desenvolvimento, foi desenvolvido em 2005 por Linus Torvalds, o famoso criador do kernel Linux. 
            {'\n'}
            Um número enorme de projetos hoje são dependentes do Git para controle de versão, entre os projetos estão projetos comerciais e de código fonte aberto.
            {'\n'}
            Tendo sua arquitetura distribuída , o Git é um DVCS (Distributed Version Control System), no portugues Sistema de controle de versão distribuído.
            {'\n'}
            {'\n'}
            </Paragraph>

            <Paragraph style={styles.paragraphdoc}>
            Mas o que isso significa ?
            {'\n'}
            </Paragraph>

            <Paragraph style={styles.paragraphdoc}>
            Em vez de ter apenas um único local para o histórico completo da versão do software, como é comum em sistemas de controle de versão outrora populares como CVS(Concurrent Version System ) ou Subversion (também conhecido como SVN), no Git, a cópia de trabalho de todo desenvolvedor do código também é um repositório que pode conter o histórico completo de todas as alterações.
            {'\n'}
            {'\n'}
            As características brutas de desempenho do Git são muito fortes quando comparadas a muitas alternativas. Fazer o commit de novas alterações, branches, mesclagem e comparação de versões anteriores – tudo é otimizado para desempenho. Os algoritmos implementados no Git aproveitam o conhecimento profundo sobre atributos comuns de árvores de arquivos de código-fonte reais, como costumam ser modificados ao longo do tempo e quais são os padrões de acesso.
            {'\n'}
            {'\n'}
            O Git tem excelente suporte da comunidade e uma vasta base de usuários. A documentação é excelente e abundante, incluindo livros, tutoriais e sites dedicados. Existem também podcasts e tutoriais em vídeo. O código aberto reduz o custo para desenvolvedores amadores, pois eles podem usar o Git sem pagar uma taxa.
            {'\n'}
            {'\n'}
            O Git é um projeto de código aberto muito bem suportado, com mais de uma década de administração sólida. Os mantenedores do projeto mostraram um julgamento equilibrado e uma abordagem madura para atender às necessidades de longo prazo dos usuários, com lançamentos regulares que melhoram a usabilidade e a funcionalidade.

            </Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>

  );

}

function InstallScreen() {
  return (
    <ScrollView style={styles.scrollviewinstall}>
      <Card style={styles.cardinstall}>
        <Title style={styles.titleinstall}>
          Linux
        </Title>
        <Divider style={styles.dividerinstall}/>
        <Paragraph style={styles.paragraphinstall}>
          Se você deseja instalar as ferramentas básicas do Git no Linux por meio de um instalador binário, geralmente pode fazê-lo por meio da ferramenta de gerenciamento de pacotes que vem com sua distribuição.
          Se você estiver no Fedora (ou qualquer distribuição baseada em RPM intimamente relacionada, como RHEL ou CentOS), você pode usar dnf:
        </Paragraph>
        <Paragraph style={styles.paragraphinstall}>
          $ sudo dnf install git-all
        </Paragraph>
        <Paragraph style={styles.paragraphinstall}>
          Se você estiver em uma distribuição baseada em Debian, como o Ubuntu, tente apt:
        </Paragraph>
        <Paragraph style={styles.comandinstall}>
          $ sudo apt install git-all
        </Paragraph>
        </Card>

        <Card style={styles.cardinstall}>
        <Title style={styles.titleinstall}>
          macOS
        </Title >
        <Divider style={styles.dividerinstall}/>
        <Paragraph style={styles.paragraphinstall}>
          Existem várias maneiras de instalar o Git em um Mac. O mais fácil é provavelmente instalar as ferramentas de linha de comando do Xcode. No Mavericks (10.9) ou superior, você pode fazer isso simplesmente tentando executar gita partir do Terminal na primeira vez.
        </Paragraph>
        <Paragraph style={styles.comandinstall}>
          $ git --version
        </Paragraph>
        <Paragraph style={styles.paragraphinstall}>
          Se você deseja uma versão mais atualizada, também pode instalá-la por meio de um instalador binário. Um instalador do macOS Git é mantido e está disponível para download no site do Git, em https://git-scm.com/download/mac.
        </Paragraph>
        <Paragraph style={styles.comandinstall}>
          https://git-scm.com/download/mac.
        </Paragraph>
        </Card>

        <Card style={styles.cardinstall}>
        <Title style={styles.titleinstall}>
          Instalando no Windows
        </Title>
        <Divider style={styles.dividerinstall}/>
        <Paragraph style={styles.paragraphinstall}> 
          Existem varias maneiras d einstala o Git no windows, porem a mais simple e convecianal e por meio de um arquivo exe que pode ser baixado diretamento pelo link abaixo
        </Paragraph>
        <Paragraph style={styles.comandinstall}>
          https://github.com/git-for-windows/git/releases/download/v2.38.1.windows.1/Git-2.38.1-64-bit.exe | 32 bit
        </Paragraph>
      </Card>
    </ScrollView>
  );
}

function ComandScreen() {
  return (

    <ScrollView style={styles.scrollviewcomand}>

      <Card style={styles.cardcomandscreen}>
        <Card.Content>
          <Title style={styles.titlecomandscreen}> Git init </Title>
          <Divider style={styles.dividercomand} />
          <Paragraph style={styles.paragraphcomandscreen}> inicia um novo projeto gerenciado pelo git </Paragraph>
          <Paragraph style={styles.examplecodcomandoscreen}> git init</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.cardcomandscreen}>
        <Card.Content>
          <Title style={styles.titlecomandscreen}> Git clone </Title>
          <Divider style={styles.dividercomand} />
          <Paragraph style={styles.paragraphcomandscreen}>Como o propio nome sugere esse comando faz um clone de um repositorio remoto para a sua maquina.
          {'\n'}
          {'\n'}
          No terminal digitamos o comando seguido do link que queremos clonar o nosso repositorio.{'\n'}
          </Paragraph>
          <Paragraph style={styles.examplecodcomandoscreen}> git clone https://link-com-o-nome-do-repositório </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.cardcomandscreen}>
        <Card.Content>
          <Title style={styles.titlecomandscreen}> Git branch </Title>
          <Divider style={styles.dividercomand} />
          <Paragraph style={styles.paragraphcomandscreen}>
            Branches (algo como ramificações ou galhos, em português)
            são altamente importantes no mundo do git.{'\n'}
            Usando as branches, vários desenvolvedores conseguem
            trabalhar em paralelo no mesmo projeto simultaneamente.{'\n'}
            Quando se deseja testar uma nova fucionalide sem afetar o projeto principal 
            podemos utilizar uma branche e depois decidir se vamos implementar ela ou não.{'\n'}
          </Paragraph>
          <Paragraph style={styles.examplecodcomandoscreen}> git branch nome-da-branch </Paragraph>
        </Card.Content>
      </Card>


      <Card style={styles.cardcomandscreen}>
        <Card.Content>
          <Title style={styles.titlecomandscreen}>  Git checkout </Title>
          <Divider style={styles.dividercomand} />
          <Paragraph style={styles.paragraphcomandscreen}>Esse também é um dos comandos do Git mais usados.{'\n'}
            Para trabalhar em uma branch, primeiro, é preciso "entrar" nela. Usamos git checkout, na maioria dos casos,
            para trocar de uma branch para outra. {'\n'}
          </Paragraph>
          <Paragraph style={styles.examplecodcomandoscreen}> git checkout nome-da-branch </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.cardcomandscreen}>
        <Card.Content>
          <Title style={styles.titlecomandscreen}>   Git status </Title>
          <Divider style={styles.dividercomand} />
          <Paragraph style={styles.paragraphcomandscreen}> O comando git status nos dá todas as informações necessárias sobre a branch atual. </Paragraph>
          <Paragraph style={styles.examplecodcomandoscreen}> git status</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.cardcomandscreen}>
        <Card.Content>
          <Title style={styles.titlecomandscreen}>  Git add </Title>
          <Divider style={styles.dividercomand} />
          <Paragraph style={styles.paragraphcomandscreen}> Ao criarmos, modificarmos ou excluirmos um arquivo, essas alterações acontecerão em nosso espaço de trabalho local e não serão incluídas no próximo commit (a menos que alteremos as configurações).
            Precisamos usar o comando git add para incluir as alterações de um ou vários arquivos em nosso próximo commit.
          </Paragraph>
          <Paragraph style={styles.examplecodcomandoscreen}>git add arquivo </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.cardcomandscreen}>
        <Card.Content>
          <Title style={styles.titlecomandscreen}> Git commit</Title>
          <Divider style={styles.dividercomand} />
          <Paragraph style={styles.paragraphcomandscreen}> Talvez esse seja o comando mais usado do Git. Quando chegamos a determinado ponto em desenvolvimento, queremos salvar nossas alterações (talvez após uma tarefa ou resolução de problema específica).
          Git commit é como definir um ponto de verificação no processo de desenvolvimento. Você pode voltar a esse ponto mais tarde, se necessário.
          Também precisamos escrever uma mensagem breve para explicar o que desenvolvemos ou alteramos no código-fonte.
          </Paragraph>
          <Paragraph style={styles.examplecodcomandoscreen}>git commit -m "mensagem do commit" </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.cardcomandscreen}>
        <Card.Content>
          <Title style={styles.titlecomandscreen}> Git push</Title>
          <Divider style={styles.dividercomand} />
          <Paragraph style={styles.paragraphcomandscreen}> Após fazer o commit de suas alterações, a próxima coisa a fazer é enviar suas alterações ao servidor remoto. Git push faz o upload dos seus commits no repositório remoto.
          </Paragraph>
          <Paragraph style={styles.examplecodcomandoscreen}>git push repositório-remoto nome-da-branch </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.cardcomandscreen}>
        <Card.Content>
          <Title style={styles.titlecomandscreen}>Git pull </Title>
          <Divider style={styles.dividercomand} />
          <Paragraph style={styles.paragraphcomandscreen}>
            O comando git pull é usado para obter as atualizações de um repositório remoto. Esse comando é uma combinação de git fetch e git merge, o que significa que, quando usamos git pull, ele recebe as atualizações do repositório remoto (git fetch) e aplica imediatamente as alterações mais recentes em seu espaço de trabalho local (git merge).
          </Paragraph>
          <Paragraph style={styles.examplecodcomandoscreen}>git pull repositório-remoto </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.cardcomandscreen}>
        <Card.Content>
          <Title style={styles.titlecomandscreen}>Git revert</Title>
          <Divider style={styles.dividercomand} />
          <Paragraph style={styles.paragraphcomandscreen}>
          Às vezes, precisamos desfazer as alterações que fizemos. Existem várias maneiras de se desfazer as alterações em nosso espaço de trabalho local ou remotamente (dependendo do que você necessita), mas devemos usar esses comandos com cuidado para evitar exclusões indesejadas.

          Uma maneira segura de desfazer nossos commits é usando git revert. Para ver nosso histórico de commits, primeiro, precisamos usar git log -- oneline:

          Em seguida, precisamos apenas especificar o código hash ao lado do commit que desejamos desfazer:
          </Paragraph>
          <Paragraph style={styles.examplecodcomandoscreen}>git revert 3321844</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.cardcomandscreen}>
        <Card.Content>
          <Title style={styles.titlecomandscreen}>Git merge</Title>
          <Divider style={styles.dividercomand} />
          <Paragraph style={styles.paragraphcomandscreen}>
          Quando você concluir o desenvolvimento em sua branch e quando tudo funcionar bem, a etapa final é fazer o merge (mesclar ou unir, em português) da branch com a branch pai (dev ou master/main, em geral). Isso é feito com o comando git merge.

          Git merge, basicamente, integra sua branch com o recurso e todos os seus commits na branch de desenvolvimento (dev) ou na branch principal (master ou main). É importante lembrar que, primeiro, você precisa estar na branch específica na qual você quer fazer o merge de sua branch com o recurso.

          Por exemplo, ao querer fazer o merge de sua branch do recurso na branch dev:

          Primeiro, troque para a branch dev:
          </Paragraph>
          <Paragraph style={styles.examplecodcomandoscreen}>git checkout dev</Paragraph>
          <Paragraph style={styles.paragraphcomandscreen}>Antes do merge, atualize sua branch dev local:
          </Paragraph>
          <Paragraph style={styles.examplecodcomandoscreen}>git fetch</Paragraph>
          <Paragraph style={styles.paragraphcomandscreen}>Por fim, faça o merge da sua branch do recurso em dev:
          </Paragraph>
          <Paragraph style={styles.examplecodcomandoscreen}>git merge nome-da-branch-com-o-recurso </Paragraph>
        </Card.Content>
      </Card>

    </ScrollView>

  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    
    screenOptions={({ route }) => ({
      tabBarIcon: ({color, size }) => {
        let iconName;

        if (route.name === 'Introdução ao Git') {
          iconName = 'list';
        } else if (route.name === 'Guia de instalação') {
          iconName = 'construct'
        }else if (route.name === 'Comandos basicos') {
          iconName = 'code'
        }


        
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#F8A030',
      tabBarInactiveTintColor: '#787880',
      tabBarShowLabel: false,
      tabBarStyle:{
        backgroundColor:'#202028'
      },
      
    })}
   

      





    >

      <Tab.Screen name="Introdução ao Git" component={DocScreen}  options={{
            headerStyle: {
              backgroundColor: '#32383D',
            },
            headerTintColor: '#CED0CE',
          }}/>
      <Tab.Screen name="Guia de instalação" component={InstallScreen} options={{
            headerStyle: {
              backgroundColor: '#32383D',
            },
            headerTintColor: '#CED0CE',
          }}/>
      <Tab.Screen name="Comandos basicos" component={ComandScreen} options={{
            headerStyle: {
              backgroundColor: '#32383D',
            },
            headerTintColor: '#CED0CE',
          }} />
    </Tab.Navigator >
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}


