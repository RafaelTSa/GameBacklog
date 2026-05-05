import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const INITIAL_GAMES = [
  { id: '1', title: 'The Legend of Zelda: Breath of the Wild', status: 'Finalizado' },
  { id: '2', title: 'Super Mario Odyssey', status: 'Jogando' },
  { id: '3', title: 'Metroid Prime Remastered', status: 'Quero Jogar' }
];

export default function GameList() {
  const renderGameItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.gameTitle}>{item.title}</Text>
      <Text style={styles.gameStatus}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Biblioteca de Jogos</Text>
      <FlatList
        data={INITIAL_GAMES}
        keyExtractor={(item) => item.id}
        renderItem={renderGameItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E60012', // Vermelho temático Nintendo Switch
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#E60012',
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  gameStatus: {
    fontSize: 14,
    color: '#A0A0A0',
  },
});