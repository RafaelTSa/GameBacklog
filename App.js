import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import GameList from './src/components/GameList';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E60012" />
      
      {/* Header Fixo com a identidade do Switch */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GAME BACKLOG</Text>
        <Text style={styles.headerSubtitle}>Nintendo Switch Edition</Text>
      </View>

      {/* Conteúdo Principal com a lista e os filtros */}
      <View style={styles.content}>
        <GameList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#E60012',
    paddingTop: 50,
    paddingBottom: 15,
    alignItems: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  headerSubtitle: {
    color: '#FFFFFF',
    fontSize: 12,
    opacity: 0.9,
    marginTop: 2,
  },
  content: {
    flex: 1,
  },
});