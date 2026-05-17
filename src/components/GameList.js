import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GameList() {
  const [games, setGames] = useState([
    { id: '1', title: 'The Legend of Zelda: Breath of the Wild', status: 'Finalizado' },
    { id: '2', title: 'Super Mario Odyssey', status: 'Jogando' },
    { id: '3', title: 'Metroid Prime Remastered', status: 'Quero Jogar' },
    { id: '4', title: 'Sonic Frontiers', status: 'Quero Jogar' }
  ]);
  
  const [newGameTitle, setNewGameTitle] = useState('');
  const [newGameStatus, setNewGameStatus] = useState('Quero Jogar');
  const [activeFilter, setActiveFilter] = useState('Todos');

  const handleAddGame = () => {
    if (newGameTitle.trim() === '') return;
    
    const newGame = {
      id: Date.now().toString(),
      title: newGameTitle,
      status: newGameStatus
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

  // FUNÇÃO NOVA: Atualiza o status do jogo em ciclo contínuo
  const handleToggleStatus = (id) => {
    const updatedGames = games.map(game => {
      if (game.id === id) {
        let nextStatus = 'Quero Jogar';
        if (game.status === 'Quero Jogar') nextStatus = 'Jogando';
        else if (game.status === 'Jogando') nextStatus = 'Finalizado';
        
        return { ...game, status: nextStatus };
      }
      return game;
    });
    setGames(updatedGames);
  };

  const filteredGames = games.filter(game => {
    if (activeFilter === 'Todos') return true;
    return game.status === activeFilter;
  });

  const renderGameItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.gameInfo}>
        <Text style={styles.gameTitle}>{item.title}</Text>
        <Text style={[
          styles.gameStatus, 
          item.status === 'Finalizado' ? styles.statusDone : 
          item.status === 'Jogando' ? styles.statusPlaying : styles.statusWant
        ]}>
          {item.status}
        </Text>
      </View>
      
      {/* Botões de Ação */}
      <View style={styles.actionsContainer}>
        {/* Botão Novo: Alternar Status */}
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => handleToggleStatus(item.id)}
          title="Alterar Status"
        >
          <Ionicons name="refresh-outline" size={22} color="#3498DB" />
        </TouchableOpacity>

        {/* Botão: Remover Jogo */}
        <TouchableOpacity style={styles.actionButton} onPress={() => handleRemoveGame(item.id)}>
          <Ionicons name="trash-outline" size={22} color="#E60012" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Backlog de Jogos</Text>
      
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

      <View style={styles.statusSelectorContainer}>
        <Text style={styles.selectorLabel}>Status do novo jogo:</Text>
        <View style={styles.selectorButtonsRow}>
          {['Quero Jogar', 'Jogando', 'Finalizado'].map((status) => (
            <TouchableOpacity
              key={status}
              style={[styles.selectorChip, newGameStatus === status && styles.selectorChipActive]}
              onPress={() => setNewGameStatus(status)}
            >
              <Text style={[styles.selectorChipText, newGameStatus === status && styles.selectorChipTextActive]}>
                {status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.filterTabsContainer}>
        {['Todos', 'Quero Jogar', 'Jogando', 'Finalizado'].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.tabButton, activeFilter === filter && styles.tabButtonActive]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text style={[styles.tabText, activeFilter === filter && styles.tabTextActive]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredGames}
        keyExtractor={(item) => item.id}
        renderItem={renderGameItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum jogo nesta categoria.</Text>
        }
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E60012',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  formContainer: {
    flexDirection: 'row',
    marginBottom: 8,
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
  statusSelectorContainer: {
    marginBottom: 20,
  },
  selectorLabel: {
    color: '#A0A0A0',
    fontSize: 12,
    marginBottom: 6,
  },
  selectorButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectorChip: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingVertical: 6,
    marginHorizontal: 2,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  selectorChipActive: {
    backgroundColor: '#333',
    borderColor: '#E60012',
  },
  selectorChipText: {
    color: '#888',
    fontSize: 12,
  },
  selectorChipTextActive: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  filterTabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#222',
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabButtonActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#E60012',
  },
  tabText: {
    color: '#888888',
    fontSize: 13,
    fontWeight: 'bold',
  },
  tabTextActive: {
    color: '#E60012',
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
    fontSize: 12,
    fontWeight: 'bold',
  },
  statusDone: { color: '#2ECC71' },  
  statusPlaying: { color: '#3498DB' }, 
  statusWant: { color: '#F1C40F' },    
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 8,
    marginLeft: 4,
  },
  emptyText: {
    color: '#666',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 15,
  }
});