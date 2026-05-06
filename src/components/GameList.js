import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones que já vem no Expo

export default function GameList() {
  const [games, setGames] = useState([
    { id: '1', title: 'The Legend of Zelda: Breath of the Wild', status: 'Finalizado' },
    { id: '2', title: 'Super Mario Odyssey', status: 'Jogando' },
    { id: '3', title: 'Metroid Prime Remastered', status: 'Quero Jogar' },
    { id: '4', title: 'Sonic frontiers', status: 'Quero Jogar' }
  ]);
  
  const [newGameTitle, setNewGameTitle] = useState('');

  const handleAddGame = () => {
    if (newGameTitle.trim() === '') return;
    const newGame = {
      id: Date.now().toString(),
      title: newGameTitle,
      status: 'Quero Jogar'
    };
    setGames([...games, newGame]);
    setNewGameTitle('');
  };

  const handleRemoveGame = (id) => {
    Alert.alert(
      "Remover Jogo",
      "Tem certeza que deseja excluir este jogo da sua biblioteca?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Remover", 
          onPress: () => setGames(games.filter(game => game.id !== id)),
          style: "destructive" 
        }
      ]
    );
  };

  const renderGameItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.gameInfo}>
        <Text style={styles.gameTitle}>{item.title}</Text>
        <Text style={styles.gameStatus}>{item.status}</Text>
      </View>
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => handleRemoveGame(item.id)}
      >
        <Ionicons name="trash-outline" size={24} color="#E60012" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Biblioteca de Jogos</Text>
      
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do jogo..."
          placeholderTextColor="#888888"
          value={newGameTitle}
          onChangeText={setNewGameTitle}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddGame}>
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={games}
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
    color: '#E60012',
    marginBottom: 16,
  },
  formContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  addButton: {
    backgroundColor: '#E60012',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 5,
    borderLeftColor: '#E60012',
  },
  gameInfo: {
    flex: 1,
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
  deleteButton: {
    padding: 8,
  },
});