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
    </View>
  )
}
