import {
  Box,
  Flex,
  Avatar,
  IconButton,
  Button,
  Menu,
  HStack,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [''];


const NavLink = ({ children }) => (

  <Menu>
  <Button><a href='#Home'>Home</a></Button>
  <Button><a href='#About'>About</a></Button>
  <Button><a href='#Projects'>Projects</a></Button>
  <Button><a href='#Skills'>Skills</a></Button>
  <Button><a href='#Contact'>Contact</a></Button>
  <Button 
  as='button'
  p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, teal.500, green.500)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}><a href='https://drive.google.com/file/d/1u2mV9k5HdN4Sp6HOAiBrR0InG86P0qyF/view?usp=sharing' target='_blank'>Resume</a></Button>
  </Menu>
);

export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box 
        bg={useColorModeValue('gray.100', 'gray.900')} 
        px={4} pos='fixed' 
        w={'100%'} 
        top='0' 
        zIndex='20'
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  alt='JA'
                  src={
                    './ja(1).jpg'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem><a href='#About'>About</a></MenuItem>
                <MenuItem ><a href='#Skills'>Skills</a></MenuItem>
                <MenuDivider />
                <MenuItem ><a href='#Contact'>Contact</a></MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;