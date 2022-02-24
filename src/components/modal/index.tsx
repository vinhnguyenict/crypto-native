import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Modal} from 'react-native';

interface PropsType {
  visible: boolean;
  closable?: boolean;
  onCancel?: (...args: any[]) => any;
  animationType?: 'none' | 'slide' | 'fade';
  presentationStyle?:
    | 'fullScreen'
    | 'pageSheet'
    | 'formSheet'
    | 'overFullScreen';
  transparent?: boolean;
  centered?: boolean;
  children?: React.ReactNode;
}
const SModal = (props: PropsType) => {
  const {visible, children, transparent = false} = props;
  return (
    <Modal visible={visible} transparent={transparent} style={styles.modal}>
      <SafeAreaView>{children}</SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {paddingTop: 20, paddingBottom: 10},
});

export default SModal;
