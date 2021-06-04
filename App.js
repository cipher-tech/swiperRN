import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ball from './src/Ball';
import Deck from './src/deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://images.unsplash.com/photo-1620165367375-0cffc5325532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' },
  { id: 2, text: 'Card #2', uri: 'https://images.unsplash.com/photo-1620165367375-0cffc5325532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' },
  { id: 3, text: 'Card #3', uri: 'https://images.unsplash.com/photo-1620165367375-0cffc5325532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' },
  { id: 4, text: 'Card #4', uri: 'https://images.unsplash.com/photo-1620165367375-0cffc5325532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' },
  { id: 5, text: 'Card #5', uri: 'https://images.unsplash.com/photo-1620165367375-0cffc5325532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' },
  { id: 6, text: 'Card #6', uri: 'https://images.unsplash.com/photo-1620165367375-0cffc5325532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' },
  { id: 7, text: 'Card #7', uri: 'https://images.unsplash.com/photo-1620165367375-0cffc5325532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' },
  { id: 8, text: 'Card #8', uri: 'https://images.unsplash.com/photo-1620165367375-0cffc5325532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80' }
]

export default function App() {
  const renderCard = (item) => {
    return (
      <Card key={item.id}>
        <Card.Title>{item.text}</Card.Title>
        <Image
          resizeMode="cover"
          style={{width: "100%", height: 250}}
          source={{ uri: item.uri }}
        />
        <Text style={{ marginBottom: 10 }}>Show</Text>
        <Button
          icon={{
            name: "code",
            size: 15,
            color: "white"
          }}
          
          title="View now"
        />
      </Card>
    )
  }
  return (
    <SafeAreaProvider>

      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={renderCard}
        />
        <Ball />
        {/* <StatusBar style="auto" /> */}
      </View>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
