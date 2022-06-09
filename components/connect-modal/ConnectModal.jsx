import { Button } from '@chakra-ui/react'
import MetaMaskConnect from './MetaMaskConnect'
import CoinbaseWalletConnect from './CoinbaseWalletConnect'
import WalletConnectConnect from './WalletConnectConnect'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    VStack
  } from '@chakra-ui/react'



export default function ConnectModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
       <div>
            <Button onClick={onOpen} size={['xs', 'lg']}>Connect Wallet</Button>
            <Modal isOpen={isOpen} onClose={onClose} size='xs'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Select Wallet</ModalHeader>
                        <ModalCloseButton />
                    <ModalBody>
                        <VStack>
                            <MetaMaskConnect />
                            <CoinbaseWalletConnect />
                            <WalletConnectConnect />
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
       </div>
        
    )
}