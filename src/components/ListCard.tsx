import { Box, Flex, Text, Image, VStack, Progress, Button, Icon } from '@chakra-ui/react';
import { useColor } from '../hooks';
import Arrow from '../assets/img/icons/arrow-down.svg'
import { BiDownArrowAlt as ArrowDownIcon } from 'react-icons/bi'
import { ListingDetail } from '../types/listing';
import { shortMonthNames } from '../utils/const';

interface Props {
  title: string
  subtitle: string
  listing: ListingDetail
}

export default function ListCard({ title, subtitle, listing }: Props) {
  const color = useColor();
  const startTime = new Date(listing.startTime);
  const endTime = new Date(listing.endTime);
  const remainTime = new Date(listing.endTime - Date.now() * 1000)
  return (
    <Flex
      minHeight='14'
      minWidth='12'
      shadow='lg'
      paddingY='4'
      paddingX='8'
      alignItems='center'
      border='1px solid'
      borderColor={color.cardBorder}
      borderRadius='20px'
      flexDirection='column'
    >
      <Box width='100%' margin='10px'>
        <Text as='h1' fontSize='20px' textAlign='start'>{title}</Text>
        <Text as='h2' fontSize='14px' textAlign='start'>{subtitle}</Text>
      </Box>
      <VStack width='100%' spacing='24px'>
        <Flex
          minWidth='100%'
          minHeight='14'
          paddingY='4'
          paddingX='4'
          alignItems='center'
          border='1px solid'
          borderColor='rock.100'
          borderRadius='10px'
          bgColor='rock.50'
          margin='10 0px'
        >
          <Box width='100%'>
            <Text as='h1' fontSize='14px' textAlign='start'>Current Deposits</Text>
            <Text as='h2' fontSize='18px' textAlign='start' marginTop='10px'>{listing.fromToken.supply.toLocaleString()}</Text>
          </Box>
          <Flex width='100%' justifyContent='end' flexDirection='column'>
            <Flex margin='5px' justifyContent='end'>
              <Text fontSize='0.7vw' textAlign='end' marginTop='10px' width='max-content'>{listing.fromToken.name}</Text>
            </Flex >
            <Flex justifyContent='end' margin='5px'>
              <Image src={listing.fromToken.icon} />
              <Text as='h1' fontSize='16px' textAlign='end' marginLeft='15px'>{listing.fromToken.symbol}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex >
          <Icon as={ArrowDownIcon} boxSize={8} color={color.black} />
        </Flex>
        <Flex
          minWidth='100%'
          minHeight='14'
          paddingY='4'
          paddingX='4'
          alignItems='center'
          border='1px solid'
          borderColor='rock.100'
          borderRadius='10px'
          bgColor='rock.50'
          margin='10px'
        >
          <Box width='100%' margin='5px'>
            <Text as='h1' fontSize='14px' textAlign='start'>Tokens Left</Text>
            <Text as='h2' fontSize='18px' textAlign='start' marginTop='10px'>{listing.toToken.supply.toLocaleString()}</Text>
          </Box>
          <Flex width='100%' justifyContent='end' flexDirection='column'>
            <Flex margin='5px' justifyContent='end'>
              <Text fontSize='0.7vw' textAlign='end' marginTop='10px' width='max-content'>{listing.toToken.name}</Text>
            </Flex >
            <Flex justifyContent='end' margin='5px'>
              <Image src={listing.toToken.icon} />
              <Text as='h1' fontSize='16px' textAlign='end' marginLeft='15px'>{listing.toToken.symbol}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          minWidth='100%'
          minHeight='14'
          flexDirection='column'
        >
          <Progress hasStripe value={listing.progress} minWidth='100%' />
          <Flex minWidth='100%'>
            <Text as='h5' fontSize='10px' textAlign='start' width='50%'>
              {shortMonthNames[startTime.getMonth()]} {startTime.getDate()}, {startTime.getFullYear()}
            </Text>
            <Text as='h5' fontSize='10px' textAlign='end' width='50%'>
              {shortMonthNames[endTime.getMonth()]} {endTime.getDate()}, {endTime.getFullYear()}
            </Text>
          </Flex>
        </Flex>
        <Flex
          minWidth='100%'
          minHeight='14'
          justifyContent='center'
        >
          <Button width='100%' color={color.main}>Details</Button>
        </Flex>
      </VStack>
    </Flex>
  )
}