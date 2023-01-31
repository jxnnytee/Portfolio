import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Link, IconButton, useColorModeValue,
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export function Home() {
  return (
    <Stack id='Home' mt='50px' minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg={'#ffffff'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              color='gray.600'
              position={'relative'}
            >
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
          Javascript & React.
          </Text>
          <Flex>
          <Link href="https://github.com/jxnnytee/" target='_blank' 
          pr={'5px'}>
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              bgGradient='linear(to-l, #0ACDFF, #6DC0D5)'
              fontSize="3xl"
              icon={<BsGithub />}
              _hover={{
                bg: 'blue.500',
                color: useColorModeValue('white', 'gray.700'),
              }}
              isRound
            />
          </Link>
          <Link href="https://www.linkedin.com/in/john-akinyemi-531a9a263/" target='_blank'>
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    bgGradient='linear(to-l, #0ACDFF, #6DC0D5)'
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
                </Flex>
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

