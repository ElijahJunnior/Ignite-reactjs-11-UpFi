import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {

  // MODAL USEDISCLOSURE
  const { onClose, onOpen, isOpen } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [selectedImage, setSelectedImage] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string) {

    setSelectedImage(url);

    onOpen();

  }

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {
          cards.map(card => (
            <Card
              key={card.id}
              data={card} viewImage={handleViewImage}
            />
          ))
        }
      </SimpleGrid>
      <ModalViewImage
        isOpen={isOpen} onClose={onClose} imgUrl={selectedImage}
      />
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Imag src={selectedImage} sizes="900px" />
        </ModalContent>
      </Modal> */}
    </>
  );
}
