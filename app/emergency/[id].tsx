import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { emergencies } from '@/data/emergencies';
import { StepCard } from '@/components/StepCard';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';

export default function EmergencyStepsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);
  
  const emergency = emergencies.find(e => e.id === id);
  if (!emergency) {
    return null;
  }

  const totalSteps = emergency.steps.length;
  const currentStepData = emergency.steps[currentStep];
  const isLastStep = currentStep === totalSteps - 1;
  const totalInfoCards = emergency.additionalInfo?.length || 0;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <ThemedText style={styles.title}>{emergency.title}</ThemedText>
        
        {!showAdditionalInfo ? (
          <StepCard
            stepNumber={currentStep + 1}
            totalSteps={totalSteps}
            description={currentStepData.description}
          />
        ) : (
          <StepCard
            stepNumber={currentInfoIndex + 1}
            totalSteps={totalInfoCards}
            description={emergency.additionalInfo?.[currentInfoIndex].content}
            customStyle={{ backgroundColor: '#ff9800' }}
            customTextStyle={{ color: '#fff' }}
          />
        )}
      </ScrollView>

      <View style={styles.buttonsWrapper}>
        {!showAdditionalInfo && isLastStep && emergency.additionalInfo && (
          <Pressable
            style={[styles.fullWidthButton, { backgroundColor: '#ff9800', marginBottom: 16 }]}
            onPress={() => setShowAdditionalInfo(true)}
          >
            <ThemedText style={styles.buttonText}>Additional Info</ThemedText>
          </Pressable>
        )}

        <View style={styles.buttonContainer}>
          {!showAdditionalInfo ? (
            <>
              <Pressable
                style={[styles.button, currentStep === 0 && styles.buttonDisabled]}
                onPress={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
              >
                <ThemedText style={styles.buttonText}>Previous</ThemedText>
              </Pressable>
              
              {!isLastStep ? (
                <Pressable
                  style={styles.button}
                  onPress={() => setCurrentStep(prev => prev + 1)}
                >
                  <ThemedText style={styles.buttonText}>Next</ThemedText>
                </Pressable>
              ) : (
                <Pressable
                  style={[styles.button, styles.finishButton]}
                  onPress={() => router.back()}
                >
                  <ThemedText style={styles.buttonText}>Finish</ThemedText>
                </Pressable>
              )}
            </>
          ) : (
            <>
              <Pressable
                style={[styles.button, currentInfoIndex === 0 && styles.buttonDisabled]}
                onPress={() => setCurrentInfoIndex(prev => Math.max(0, prev - 1))}
                disabled={currentInfoIndex === 0}
              >
                <ThemedText style={styles.buttonText}>Previous</ThemedText>
              </Pressable>
              
              {currentInfoIndex < totalInfoCards - 1 ? (
                <Pressable
                  style={styles.button}
                  onPress={() => setCurrentInfoIndex(prev => prev + 1)}
                >
                  <ThemedText style={styles.buttonText}>Next</ThemedText>
                </Pressable>
              ) : (
                <Pressable
                  style={[styles.button, styles.finishButton]}
                  onPress={() => {
                    setShowAdditionalInfo(false);
                    setCurrentInfoIndex(0);
                  }}
                >
                  <ThemedText style={styles.buttonText}>Back to Steps</ThemedText>
                </Pressable>
              )}
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 44,
    paddingBottom: 200, // Add extra padding to account for the buttons
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonsWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    padding: 16,
    paddingBottom: 32,
    zIndex: 1,
  },
  button: {
    backgroundColor: '#2f95dc',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
    elevation: 2, // Add this for Android shadow
    shadowColor: '#000', // Add these shadow properties for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  fullWidthButton: {
    backgroundColor: '#ff9800',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  finishButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  additionalInfoContainer: {
    padding: 16,
    flex: 1,
    marginBottom: 80, // Add space at bottom for consistent button positioning
  },
  infoItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
  },
  infoButton: {
    backgroundColor: '#2f95dc',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  infoButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fullWidthButton: {
    backgroundColor: '#2f95dc',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  additionalInfoTitle: {
    fontSize: 18,
    color: '#ff9800',
    textAlign: 'center',
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    minHeight: 200,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 16,
  },
});