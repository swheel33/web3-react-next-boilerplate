import { useEffect } from 'react'
import { hooks as metaMaskHooks, metaMask } from '../connectors/metaMask'
import { hooks as coinbaseWalletHooks, coinbaseWallet } from '../connectors/coinbaseWallet'
import { hooks as walletConnectHooks, walletConnect} from '../connectors/walletConnect'
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
  import truncateEthAddress from 'truncate-eth-address'


export default function ConnectModal({accounts, chainId, ENSNames, isActive}: {
    accounts: string;
    chainId: number;
    ENSNames: string;
    isActive: boolean;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
       <div>
            {!isActive && <Button onClick={onOpen}>Connect Wallet</Button>}
            {isActive && <Button>{ENSNames[0] ? ENSNames[0] : truncateEthAddress(accounts[0])}</Button>}
            <Modal isOpen={isOpen && !isActive} onClose={onClose} size='xs'>
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