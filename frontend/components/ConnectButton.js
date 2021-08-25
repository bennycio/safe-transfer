import { Button, Box, Text } from "@chakra-ui/react"
import { useEthers, useEtherBalance } from "@usedapp/core"
import { formatEther } from "@ethersproject/units"
import Identicon from "./Indenticon"

export default function ConnectButton() {
  const { activateBrowserWallet, account } = useEthers()
  const etherBalance = useEtherBalance(account)

  function handleConnectWallet() {
    activateBrowserWallet()
  }

  return account ? (
    <Box
      display="flex"
      alignItems="center"
      bgGradient="linear(to-r, pink.400,purple.400)"
      borderRadius="xl"
      py="0">
      <Box px="3">
        <Text color="white" fontSize="md">
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
        </Text>
      </Box>
      <Button
        bgGradient="inherit"
        bg="pink.400"
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px">
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    </Box>
  ) : (
    <Button onClick={handleConnectWallet}>Connect to a wallet</Button>
  )
}
