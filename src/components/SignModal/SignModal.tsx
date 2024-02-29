import React from 'react';
import {Modal, Text, View} from 'react-native';

import {Button} from '../ui';
import {Title} from '../ui/Title';
import styles from './SignModal.style';

interface SignModalProps {
  open: boolean;
  receiver: string;
  amount: string;
  handlePress: () => void;
  onClose: () => void;
}

export function SignModal({
  amount,
  receiver,
  open,
  handlePress,
  onClose,
}: SignModalProps) {
  function handleSignPress() {
    onClose();
    handlePress();
  }

  return (
    <Modal visible={open} animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Title text="Sign Transaction" style={styles.title} />
          <Text style={styles.grayText}>Receiver</Text>
          <Text style={styles.text}>{receiver}</Text>
          <Text style={styles.grayText}>Amount</Text>
          <Text style={styles.text}>{amount}</Text>
          <Button title="Sign & submit" onPress={handleSignPress} />
          <Text style={styles.cancelLink} onPress={onClose}>
            Cancel
          </Text>
        </View>
      </View>
    </Modal>
  );
}
