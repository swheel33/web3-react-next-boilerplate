import { useEffect } from 'react'
import { metaMask } from '../../connectors/metaMask'
import { Button, HStack, Text, Image} from '@chakra-ui/react'

export default function MetaMaskConnect() {

    // attempt to connect eagerly on mount
    useEffect(() => {
        void metaMask.connectEagerly()
    }, [])

    
    return (
        <Button onClick={() => metaMask.activate()}>
            <HStack justify='center'>
                <Image src='/mm-logo.png' alt='metamask logo' width='10%'/>
                <Text>Metamask</Text>
            </HStack>
        </Button>
    )
}