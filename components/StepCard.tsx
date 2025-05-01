import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { ThemedText } from './ThemedText';

interface StepCardProps {
  stepNumber: number;
  totalSteps: number;
  description: string;
  customStyle?: ViewStyle;
  customTextStyle?: TextStyle;
}

export function StepCard({ stepNumber, totalSteps, description, customStyle, customTextStyle }: StepCardProps) {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.stepCounter}>
        Step {stepNumber} of {totalSteps}
      </ThemedText>
      <View style={[styles.card, customStyle]}>
        <ThemedText style={[styles.description, customTextStyle]}>
          {description}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  stepCounter: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
    color: '#666',
  },
  card: {
    backgroundColor: '#2f95dc', // Default blue color
    borderRadius: 16,
    padding: 24,
    minHeight: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 28,
  },
});