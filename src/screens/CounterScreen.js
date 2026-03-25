import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useCounterStore from '../store/useCounterStore';
import useThemeStore from '../store/useThemeStore';

const CounterScreen = ({ navigation }) => {
  // ✅ selective subscription
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const reset = useCounterStore((state) => state.reset);

  // ✅ theme subscription
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const theme = isDarkMode ? dark : light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        Counter
      </Text>

      <Text style={[styles.count, { color: theme.text }]}>
        {count}
      </Text>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.button }]} onPress={increase}>
        <Text style={{ color: theme.buttonText }}>Increase</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.button }]} onPress={decrease}>
        <Text style={{ color: theme.buttonText }}>Decrease</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.accent }]} onPress={reset}>
        <Text style={{ color: '#fff' }}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Theme')}>
        <Text style={{ color: theme.link, marginTop: 20 }}>
          Go to Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 10 },
  count: { fontSize: 60, marginBottom: 30 },
  button: {
    padding: 12,
    margin: 8,
    borderRadius: 8,
    width: 150,
    alignItems: 'center',
  },
});

const light = {
  background: '#f5f5f5',
  text: '#222',
  button: '#ddd',
  buttonText: '#000',
  accent: '#4CAF50',
  link: '#007AFF',
};

const dark = {
  background: '#121212',
  text: '#fff',
  button: '#2a2a2a',
  buttonText: '#fff',
  accent: '#ff5252',
  link: '#4da6ff',
};