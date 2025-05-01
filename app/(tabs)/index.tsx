import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { emergencies } from '@/data/emergencies';
import { EmergencyButton } from '@/components/EmergencyButton';

export default function FirstAidScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.headerContainer}>
        <ThemedText style={styles.title}>First Aid Guide</ThemedText>
        <ThemedText style={styles.subtitle}>
          Select an emergency situation for step-by-step instructions
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.contentContainer}>
        {emergencies.map((emergency) => (
          <EmergencyButton
            key={emergency.id}
            id={emergency.id}
            title={emergency.title}
            description={emergency.description}
            icon={emergency.icon}
          />
        ))}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    padding: 16,
    marginTop: 44,
    marginBottom: 8,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});