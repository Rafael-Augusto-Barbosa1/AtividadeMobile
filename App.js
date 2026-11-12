import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import BoasVindas from './components/BoasVindas';
import Contador from './components/Contador';
import AlterarTitulo from './components/AlterarTitulo';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Exercício 3 – Alterando o título */}
        <AlterarTitulo />

        {/* Exercício 1 – Mensagem de boas-vindas */}
        <BoasVindas />

        {/* Exercício 2 – Contador com monitoramento */}
        <Contador />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f2f4f8' },
  container: { padding: 20, paddingTop: 50, gap: 20 },
});
