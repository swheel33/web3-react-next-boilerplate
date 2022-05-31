import { useEffect } from 'react'
import { hooks, walletConnect } from '../connectors/walletConnect'
import { Button, HStack, Text, Image} from '@chakra-ui/react'


const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function WalletConnectConnect() {
    const chainId = useChainId()
    const accounts = useAccounts()
    const error = useError()
    const isActivating = useIsActivating()
    const isActive = useIsActive()
    const provider = useProvider()
    const ENSNames = useENSNames(provider)

    // attempt to connect eagerly on mount
    useEffect(() => {
        void walletConnect.connectEagerly()
    }, [])
    
    
    return (
        <Button onClick={() => walletConnect.activate()}>
            <HStack justify='center'>
                <Image src='/wc-logo.png' alt='wc-logo' width='15%'/>
                <Text>Wallet Connect</Text>
            </HStack>
        </Button>
    )
}