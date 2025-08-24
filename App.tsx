import { StyleSheet, View, Text, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'light';

  return (
    <SafeAreaProvider>
      <View
        style={[
          styles.container,
          isDarkMode ? styles.darkContainer : styles.lightContainer,
        ]}
      >
        <Text
          style={[
            styles.text,
            isDarkMode ? styles.whiteText : styles.blackText,
          ]}
        >
          Hello, Kevin!
        </Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
  whiteText: {
    color: '#fff',
  },
  blackText: {
    color: '#000',
  },
});

export default App;
