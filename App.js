import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import GameList from './src/components/GameList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E60012" />
      
      {/* Cabeçalho do App */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GAME BACKLOG</Text>
        <Text style={styles.headerSubtitle}>Nintendo Switch Edition</Text>
      </View>

      {/* Saudação */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Bem-vindo, Rafael!</Text>
        <Text style={styles.subtitleText}>Pronto para organizar a sua biblioteca?</Text>
      </View>

      {/* Lista de Jogos */}
      <GameList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#E60012',
    paddingTop: 24,
    paddingBottom: 16,
    alignItems: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  welcomeContainer: {
    padding: 24,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 14,
    color: '#888888',
  },
});