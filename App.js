import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Configura a barra de estado do telemóvel */}
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.title}>GAME BACKLOG</Text>
        <Text style={styles.subtitle}>Nintendo Switch Edition</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bem-vindo, Rafael!</Text>
        <Text style={styles.infoText}>Pronto para organizar a sua biblioteca?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fundo escuro (Dark Mode)
  },
  header: {
    backgroundColor: '#E60012', // Vermelho oficial Nintendo
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  subtitle: {
    color: '#FFF',
    fontSize: 14,
    opacity: 0.8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  infoText: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
  },
});