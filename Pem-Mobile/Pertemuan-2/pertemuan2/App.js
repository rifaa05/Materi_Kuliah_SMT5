import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama Lengkap : Rifa'ah Fatihatu Sa'adah</Text>
      <Text>TTL : Majalengka, 05 Juli 2006</Text>
      <Text>Cita-Cita : Menjadi Dokter</Text>
      <Text>Rencana Hidup : Meningkatkan kualitas hidup dan membantu orang lain</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
