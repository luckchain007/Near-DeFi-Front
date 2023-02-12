import { Box, Flex, Text, Image, VStack, Progress, Button } from "@chakra-ui/react";
import { useColor } from "../hooks";
import Arrow from "../assets/img/icons/arrow-down.svg"
import { ListingDetail } from "../types/listing";
import { shortMonthNames } from "../utils/const";

interface Props {
  id: number
  listing: ListingDetail
}

export default function ListCard({ listing, id }: Props) {
  const color = useColor();
  const startTime = new Date(listing.startTime);
  const endTime = new Date(listing.endTime);
  return (
    <Flex
      minHeight="14"
      minWidth='12'
      shadow="lg"
      paddingY="4"
      paddingX="8"
      alignItems="center"
      border='1px solid'
      borderColor={color.cardBorder}
      borderRadius='20px'
      flexDirection='column'
    >
      <Box width='100%' margin='10px'>
        <Text as='h1' fontSize='20px' textAlign='start'>Swap {id}</Text>
        <Text as='h2' fontSize='14px' textAlign='start'>Easy way to trade your tokens</Text>
      </Box>
      <VStack width="100%" spacing='24px'>
        <Flex
          minWidth='100%'
          minHeight="14"
          paddingY="4"
          paddingX="4"
          alignItems='center'
          border='1px solid'
          borderColor='rock.100'
          borderRadius='10px'
          bgColor='rock.50'
          margin='10 0px'
        >
          <Box width='100%'>
            <Text as='h1' fontSize='14px' textAlign='start'>From</Text>
            <Text as='h2' fontSize='18px' textAlign='start' marginTop='10px'>{listing.fromToken.supply}</Text>
          </Box>
          <Flex width='100%' justifyContent='end' flexDirection='column'>
            <Flex margin='5px' justifyContent='end'>
              <Text as='h2' fontSize='1vw' textAlign='end' marginTop='10px' width='max-content'>{listing.fromToken.name}</Text>
            </Flex >
            <Flex justifyContent='end' margin='5px'>
              <Image src={listing.fromToken.icon} />
              <Text as='h1' fontSize='16px' textAlign='end' marginLeft='15px'>{listing.fromToken.symbol}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Image src={Arrow} />
        </Flex>
        <Flex
          minWidth='100%'
          minHeight="14"
          paddingY="4"
          paddingX="4"
          alignItems='center'
          border='1px solid'
          borderColor='rock.100'
          borderRadius='10px'
          bgColor='rock.50'
          margin='10px'
        >
          <Box width='100%' margin='5px'>
            <Text as='h1' fontSize='14px' textAlign='start'>To</Text>
            <Text as='h2' fontSize='18px' textAlign='start' marginTop='10px'>{listing.toToken.supply}</Text>
          </Box>
          <Flex width='100%' justifyContent='end' flexDirection='column'>
            <Flex margin='5px' justifyContent='end'>
              <Text as='h2' fontSize='1vw' textAlign='end' marginTop='10px' width='max-content'>{listing.toToken.name}</Text>
            </Flex >
            <Flex justifyContent='end' margin='5px'>
              <Image src={listing.toToken.icon} />
              <Text as='h1' fontSize='16px' textAlign='end' marginLeft='15px'>{listing.toToken.symbol}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          minWidth='100%'
          minHeight="14"
          flexDirection='column'
        >
          <Flex minWidth='100%'>
            <Text as='h5' fontSize='10px' textAlign='start' width='50%'>
              {shortMonthNames[startTime.getMonth()]} {startTime.getDate()}, {startTime.getFullYear()}
            </Text>
            <Text as='h5' fontSize='10px' textAlign='end' width='50%'>
              {shortMonthNames[endTime.getMonth()]} {endTime.getDate()}, {endTime.getFullYear()}
            </Text>
          </Flex>
          <Progress hasStripe value={listing.progress} minWidth='100%' />
        </Flex>
        <Flex
          minWidth='100%'
          minHeight="14"
          justifyContent='center'
        >
          <Button width='100%'>Details</Button>
        </Flex>
      </VStack>
    </Flex>
  )
}