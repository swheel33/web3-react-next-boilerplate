import { useEffect } from 'react'
import { coinbaseWallet } from '../../connectors/coinbaseWallet'
import { Button, HStack, Text, Image} from '@chakra-ui/react'



export default function CoinbaseWalletConnect() {

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