import { Pressable, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface EmergencyButtonProps {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export function EmergencyButton({ id, title, description, icon }: EmergencyButtonProps) {
  const router = useRouter();

  return (
    <Pressable 
      style={styles.button}
      onPress={() => router.push(`/emergency/${id}`)}
    >
      <Ionicons name={icon as any} size={32} color="#fff" />
      <ThemedText style={styles.title}>{title}</ThemedText>
      <ThemedText style={styles.description}>{description}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2f95dc',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#fff',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
    color: '#fff',
  },
});