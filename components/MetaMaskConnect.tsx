import { useEffect } from 'react'
import { hooks, metaMask } from '../connectors/metaMask'
import { Button, HStack, Text, Image} from '@chakra-ui/react'


const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function MetaMaskConnect() {
    const chainId = useChainId()
    const accounts = useAccounts()
    const error = useError()
    const isActivating = useIsActivating()
    const isActive = useIsActive()
    const provider = useProvider()
    const ENSNames = useENSNames(provider)

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