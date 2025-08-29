import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';


export default function App () {
}



function Header({ pagina, setPagina}) {
  const [pagina, setPagina] = useState ('home');

  return (
  
  <SafeAreaView style={StyleSheet.container}>
  
  <Header pagina={pagina} setPagina={setPagina} />
  <ScrollView contentContainerStyle={StyleSheet.content}>
  
  
    {pagina === 'home' && <Home />}
    {pagina === 'sobre' && <Sobre />}
    {pagina === 'serviços' && <serviços />}
    {pagina === 'contato ' && <Contato />}
  </ScrollView>
  <Footer />
  </SafeAreaView>
  );

}

function Header ({ pagina, setPagina}) {
  return (
    <View style={style.header}>
      <Text style={StyleSheet.headerTitle}>Minha Empresa</Text>
      <View style={StyleSheet.nav}>
        {['home', 'sobre', 'servicos', 'contato'].map((p) => (
          <TouchableOpacity>
            styles.navButton, pagina === p && styles.
          </TouchableOpacity>
        
          
        ))}
      </View>
    </View>
  )
}
function Home () {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Bem vindo a nossa empresa</Text>
      <Text>Somos lideres em soluções tecnologicas para o seu negocio.</Text>
    </View>
  );
}

function Sobre() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Sobre nós</Text>
      <Text>Fundada em 2010, temos o compromisso de qualidade e inovação.</Text>
    </View>
  );
}

function Serviços() {
  return (
    <View style={styles.section}>
      <Text styles={styles.title}>Nossos serviços</Text>
      <Text>- Consultoria em TI</Text>
      <Text>- Desenvolvimento de Software</Text>
      <Text>- Suporte Técnico</Text>
    </View>
  );
}

function Contato () {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');

  function enviar() {
    if (!nome || !email || !mensagem) {
      Alert.alert('Erro', 'Por favor preencha todos os campos');
      return;
    }
    Alert.alert('Mensagem enviada', `Obrigado, ${nome}! Retornaremos em breve.`)
    setNome('');
    setEmail('');
    setMensagem('');
  }

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Contato</Text>
      <TextInput
      style={styles.input}
      placeholder="Nome"
      value={nome}
      onChangeText={setNome}
       />
       <TextInput
       style={styles.input}
       placeholder="Email"
       value={email}
       onChangeText={setEmail}
       keyboardType="email-address"
       />
       <TextInput
       style={[styles.input, {height: 100}]}
       placeholder="Mensagem"
       value={mensagem}
       onChangeText={setMensagem}
       multiline
       />
       <TouchableOpacity style={styles.button} onPress={enviar}>
        <Text style={styles.buttonText}>Enviar</Text>
       </TouchableOpacity>
    </View>
  )
}

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={{ color: 'white'}}>
        2025 Minha Empresa.
        Todos os direitos reservados.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fa'

  },
  header: {
    backgroundColor: '#004080',
    padding: 40,
    alignContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12
  },
  nav: {
    flexDirection:'row',
    justifyContent: 'space-around'
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4
  },
  navButtonActive: {backgroundColor: '#0066cc'
    
  },
  navButtonText: {color: 'white', fontWeight: 'bold '},
  content: { padding: 20, flexGrow: 1},
  section: {marginBottom: 20},
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10},
  input: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#004080',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: { color: 'white', fonteWeight: 'bold', fontSize: 16 },
  footer: { backgroundColor: '#00264d', padding: 15, alignItems: 'center' },
});