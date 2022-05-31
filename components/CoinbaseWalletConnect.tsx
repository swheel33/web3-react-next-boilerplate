import { useEffect } from 'react'
import { hooks, coinbaseWallet } from '../connectors/coinbaseWallet'
import { Button, HStack, Text, Image} from '@chakra-ui/react'


const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function CoinbaseWalletConnect() {
    const chainId = useChainId()
    const accounts = useAccounts()
    const error = useError()
    const isActivating = useIsActivating()
    const isActive = useIsActive()
    const provider = useProvider()
    const ENSNames = useENSNames(provider)

    // attempt to connect eagerly on mount
    useEffect(() => {
        void coinbaseWallet.connectEagerly()
    }, [])
    
    
    return (
        <Button onClick={() => coinbaseWallet.activate()}>
            <HStack justify='center'>
                <Image src='/cbw-logo.png' alt='cbw-logo' width='10%'/>
                <Text>Coinbase Wallet</Text>
            </HStack>
        </Button>
    )
}