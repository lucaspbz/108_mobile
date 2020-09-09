import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { formatToHour, formatToDayString } from '../../util/dateParser';

import {
  Container,
  Body,
  Text,
  Confirm,
  ModalContainer,
  ButtonsContainer,
} from './styles';

interface ModalProps {
  time: string;
  onConfirm: () => void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ time, onConfirm, onClose }) => {
  const parsedTime = `${formatToDayString({
    day: new Date(time),
  })}, ${formatToHour({ time })}`;
  return (
    <Container>
      <ModalContainer>
        <Body>Tem certeza que deseja excluir este horário?</Body>
        <Text>{parsedTime}</Text>

        <ButtonsContainer>
          <TouchableOpacity onPress={onConfirm}>
            <Confirm>Excluir</Confirm>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Confirm>Cancelar</Confirm>
          </TouchableOpacity>
        </ButtonsContainer>
      </ModalContainer>
    </Container>
  );
};

export default Modal;
