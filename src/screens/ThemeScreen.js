import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useThemeStore from '../store/useThemeStore';

const ThemeScreen = ({ navigation }) => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const theme = isDarkMode ? dark : light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        Theme
      </Text>

      <Text style={[styles.status, { color: theme.text }]}>
        Current: {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.button }]}
        onPress={toggleTheme}
      >
        <Text style={{ color: theme.buttonText }}>
          Toggle Theme
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
        <Text style={{ color: theme.link, marginTop: 20 }}>
          Back to Counter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 10 },
  status: { fontSize: 18, marginBottom: 20 },
  button: {
    padding: 12,
    borderRadius: 8,
    width: 160,
    alignItems: 'center',
  },
});

const light = {
  background: '#f5f5f5',
  text: '#222',
  button: '#ddd',
  buttonText: '#000',
  link: '#007AFF',
};

const dark = {
  background: '#121212',
  text: '#fff',
  button: '#2a2a2a',
  buttonText: '#fff',
  link: '#4da6ff',
};