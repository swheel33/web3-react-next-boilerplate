import { useEffect } from 'react'
import { walletConnect } from '../../connectors/walletConnect'
import { Button, HStack, Text, Image} from '@chakra-ui/react'



export default function WalletConnectConnect() {

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