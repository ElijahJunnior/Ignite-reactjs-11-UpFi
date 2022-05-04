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
        <ModalFooter justifyContent="flex-start" py="8px" px="10px">
          <Link
            href={imgUrl} isExternal
            py="4px" px="8px" textDecor="none"
            border="solid" borderWidth="1px" borderRadius="4px"
            color="gray.50" borderColor="transparent"
            fontFamily="Roboto" fontSize="14px"
            fontWeight="400" lineHeight="14px"
            _focus={{ borderColor: "blue.500" }}
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal >
  )
}
