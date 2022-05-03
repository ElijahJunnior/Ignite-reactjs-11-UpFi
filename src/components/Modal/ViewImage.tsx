import {
  Modal, ModalOverlay, ModalContent,
  ModalFooter, ModalBody, Image, Link
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen, onClose, imgUrl
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent w="auto" h="auto" overflow="hidden" bg="gray.800">
        <ModalBody padding="0">
          <Image src={imgUrl} maxW="900px" maxH="600px" />
        </ModalBody>
        <ModalFooter justifyContent="flex-start">
          <Link
            href={imgUrl}
            fontFamily="Roboto" fontSize="14px" fontWeight="400"
            lineHeight="16px" color="gray.50" textDecor="none"
          >
            Abrir Original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal >
  )
}
