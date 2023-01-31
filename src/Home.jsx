import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';

export function Home() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg={'#ffffff'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              John Akinyemi
            </Text>
            <br />{' '}
            <Text  
              bgGradient='linear(to-l, #0ACDFF, #6DC0D5)'
              bgClip='text'
              as={'span'}>
              Frontend Developer
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          A Frontend Web Developer with broad knowledge in HTML, CSS,
          Javascript & React 
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            './manafro.jpg'
          }
        />
      </Flex>
    </Stack>
  );
}

