import { ReactNode } from 'react';
import {
  Box,Flex,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,Image, Icon,HStack,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>CUSTOMER SERVICE</ListHeader>
            <Link href={'#'}>1-800-777-0000</Link>
            <Link href={'#'}>FAQs & Help</Link>
            <Link href={'#'}>Visitor Services</Link>
           <Flex> <Link href={'#'}><Text>Shipping to</Text><Image src="https://assets.bloomingdales.com/feature/header-bcom/latest/images/flags/IN.png" alt="error"/><Text as="span">go to the U.S. Site</Text></Link></Flex>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>YOUR ORDER</ListHeader>
            <Link href={'#'}>order Status & History</Link>
            <Link href={'#'}>Shipping Policy</Link>
            <Link href={'#'}>Returns & Exchanges</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>ABOUT DRESSINGVALLEY</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>b the change</Link>
            <Link href={'#'}>Careers</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>FOLLOW US</ListHeader>
            <HStack>
<Icon  xmlns="http://www.w3.org/2000/svg" width="1024" height="8" viewBox="0 0 1024 1024" color='#000000'>
  <path
    fill='currentColor'
     d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zM512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40z"
  />
</Icon>
<Icon  xmlns="http://www.w3.org/2000/svg" width="1024" height="8" viewBox="0 0 1024 1024" color='#000000'>
  <path
    fill='currentColor'
    d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"
  />
</Icon>
<Icon  xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" color='#000000'>
  <path
    fill='currentColor'
    d="M25 10c-8.3 0-15 6.7-15 15c0 6.4 4 11.8 9.5 14c-.1-1.2-.2-3 .1-4.3c.3-1.2 1.8-7.5 1.8-7.5s-.4-.9-.4-2.2c0-2.1 1.2-3.6 2.7-3.6c1.3 0 1.9 1 1.9 2.1c0 1.3-.8 3.2-1.2 5c-.4 1.5.7 2.7 2.2 2.7c2.7 0 4.7-2.8 4.7-6.9c0-3.6-2.6-6.1-6.3-6.1c-4.3 0-6.8 3.2-6.8 6.5c0 1.3.5 2.7 1.1 3.4c.1.1.1.3.1.4c-.1.5-.4 1.5-.4 1.7c-.1.3-.2.3-.5.2c-1.9-.9-3-3.6-3-5.8c0-4.7 3.4-9.1 9.9-9.1c5.2 0 9.2 3.7 9.2 8.7c0 5.2-3.3 9.3-7.8 9.3c-1.5 0-2.9-.8-3.4-1.7c0 0-.8 2.9-.9 3.6c-.3 1.3-1.3 2.9-1.9 3.9c1.4.5 2.9.7 4.4.7c8.3 0 15-6.7 15-15s-6.7-15-15-15z"
  />
</Icon>
<Icon  xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 24 24" color='#000000'>
  <path
    fill='currentColor'
    d="M20 12.05a8 8 0 1 0-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 0 1 3-3.14a11.92 11.92 0 0 1 1.79.16v2h-1a1.16 1.16 0 0 0-1.3 1.26v1.51h2.22l-.36 2.33h-1.85V20A8 8 0 0 0 20 12.05Z"
  />
</Icon>
<Icon  xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="-1 -1 24 24" color='#000000'>
  <path
    fill='currentColor'
    d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10z"/><path d="M15 6.947c-.368.16-.763.27-1.178.318c.424-.25.748-.646.902-1.117a4.16 4.16 0 0 1-1.304.49A2.06 2.06 0 0 0 11.923 6c-1.133 0-2.051.905-2.051 2.02c0 .158.018.312.053.46a5.854 5.854 0 0 1-4.228-2.11a1.982 1.982 0 0 0-.278 1.015c0 .7.363 1.32.913 1.681a2.076 2.076 0 0 1-.93-.253v.025a2.03 2.03 0 0 0 1.646 1.98a2.108 2.108 0 0 1-.927.034a2.049 2.049 0 0 0 1.916 1.403a4.156 4.156 0 0 1-2.548.864c-.165 0-.328-.01-.489-.028A5.863 5.863 0 0 0 8.144 14c3.774 0 5.837-3.078 5.837-5.748l-.007-.262A4.063 4.063 0 0 0 15 6.947z"
  />
</Icon>
            </HStack>
            {/* <AppStoreBadge />
            <PlayStoreBadge /> */}
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          {/* <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack> */}
        </Container>
      </Box>
    </Box>
  );
}