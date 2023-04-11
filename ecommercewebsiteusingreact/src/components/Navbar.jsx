import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    SimpleGrid,Grid,Image
  } from '@chakra-ui/react';
  import {Link as RouterLink} from "react-router-dom"
  import styles from "./Navbar.module.css"
  import  logo from '../Images/Logo.png'
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import { useContext } from 'react';
  import {ObjContext} from "../Context/ContextApi"
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
     const{isAuth,logout}=useContext(ObjContext)
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              <RouterLink to="/"><Box w='100px' borderRadius="100%" ><Image w='70px' src={logo} alt='err'/></Box></RouterLink>
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
             
            </Button>
           {!isAuth?<RouterLink to="/login"><Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
            </RouterLink>:<Button onClick={()=>logout()}>Logout</Button>}
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                   </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
    const DesktopSubNav = (props) => {
        console.log(props.subLabel)
    return (
      <Link
        href={props.href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
                {props.label}
              {/* {label} */}
            </Text>
            {console.log(typeof props?.subLabel,'is')}
            
            {props.subLabel && props.subLabel.map((el)=><Text fontSize={'sm'}>{el}</Text>)}
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: 'WOMEN',
      children: [
        {
          label: 'Friends and Family:25% offer',
          subLabel: [<RouterLink to="/products">Shop All-click here</RouterLink>,"AQUA",'MOTHER','rag & bone','Theory'],
          href: '#',
        },
        {
          label: 'sale & clearance',
          subLabel: ['Shop All','A.L.C',"Alice + Olivia","ba&sh","Eileen Fisher","FRAME","L'AGENCE",'Maje','Sandro'],
          href: '#',
        },
        {
         label: 'Clothing',
         subLabel: ["Active & Workout","Blazers",'Coats & Jackets','Dresses','Jeans & Denim',"Longwear","Maternity","Matching Sets","Pants & Leggings","Shorts","Skirts","Sleepwear & Robes","Sweaters","Swimsuits & Cover-Ups","Tops"],
          href: '#',
        },
      ],
    },
    {
        label: 'SHOES',
        children: [
          {
            label: 'Friends and Family:25% offer',
            subLabel: ["Shop All","Badgley Mischka","Loeffler Randall","Select Stuart Weitzman",'Vince'],
            href: '#',
          },
          {
            label: 'New & Noteworthy',
            subLabel: ['NEW:Valentino Spring',"Trending Now:Elevated Wedges","New Arrivals","Best Sellers","Shoes Under $200"],
            href: '#',
          },
        ],
      },
      {
        label: 'HANDBAGS',
        children: [
          {
            label: 'Friends and Family:25% offer',
            subLabel: ['Shop All',"Cult Gaia","Loeffler Randall","See by Chick","STAUD"],
            href: '#',
          },
          {
            label: 'New & Noteworthy',
            subLabel: ['New:Oscar de la Renta',"New Arrivals","Best Sellers","Handbags Under $200","Trending Flows Elevated Totes"],
            href: '#',
          },
        ],
      },
      {
        label: 'JEWELRY & ACCESSORIES',
        children: [
          {
            label: 'Friends and Family:25% offer',
            subLabel: ['Marco Bicego',"Prada Sunglasses","Roberto Coin"],
            href: '#',
          },
          {
            label: 'Sale & Clearance',
            subLabel: ['Diamonds:30-50% Off,Select Luxury Sunglasses:25% Off',"Shop All"],
            href: '#',
          },
          {
            label: 'Jewelry',
            subLabel: ["Bracelets","Earrings","Necklaces","Rings","Under $200"],
            href: '#',
          },
        ],
      },
      {
        label: 'MEN',
        children: [
          {
            label: 'Friends and Family:25% offer',
            subLabel: ['Canali',"rag & bone","The Men's Store","Theory"],
            href: '#',
          },
          {
            label: 'Sale & Clearance',
            subLabel: [<RouterLink to="/products">Shop All</RouterLink>,"Jeans & Denim:25% Off"],
            href: '#',
          },
          {
            label: 'New & Noteworthy',
            subLabel: ['New Arrivals',"Best Sellers","Wardrobe Essentials"],
            href: '#',
          },
        ],
      },
      {
        label: 'KIDS',
        children: [
          {
            label: 'Girls',
            subLabel: ['Girls 2-6X',"Girls 7-16","Tops & Tees","Bottoms"],
            href: '#',
          },
          {
            label: 'Boys',
            subLabel: ['Boys 2-7',"Boys 8-20","T-Shirts & Polos","Bottoms"],
            href: '#',
          },
          {
            label: 'Dresses',
            subLabel: ['Casual',"Party","Trending Now Easter"],
            href: '#',
          },
        ],
      },
    {
      label: 'HOME',
      children: [
        {
          label: 'Bath',
          subLabel: ['Bathroom Decor & Accessories','Towels',"Luxury Bath"],
          href: '#',
        },
        {
          label: 'Bedding',
          subLabel: ['Bedding Collections','Bedding Essentials',"Quilts & Covertlets","Sheets","Luxury Bedding"],
          href: '#',
        },
        {
          label: 'Luggage & Travel',
          subLabel: ['Luggage',"Travel Bags",'Travel Accessories'],
          href: '#',
        },
      ],
    },
    {
      label: 'SALE',
      children: [
        {
          label: 'Women',
          subLabel: ['Active workout','Coats & Jackets','Dresses','Jeans & Denim','Pants & Leggings','Sleepwear & Lounge','Sweaters','Swimsuits & Cover-Ups','Tops'],
          href: '#',
        },
        {
          label: 'Shoes',
          subLabel: ['Boots','Flats','Pumps','Sandals','Sneakers'],
          href: '#',
        }
      ],
    },
    {
      label: 'Designers',
      children: [
        {
          label: 'Women',
          // subLabel: ['Active workout','Coats & Jackets','Dresses','Jeans & Denim','Pants & Leggings','Sleepwear & Lounge','Sweaters','Swimsuits & Cover-Ups','Tops'],
          href: '#',
        },
        {
          label:"Shoes",
          href: '#',
        },
        {
          label:"Handbags",
          href: '#',
        },
        {
          label:"Jewelry & Accessories",
          href: '#',
        },
        {
          label:"Kids",
          href: '#',
        },
        {
          label:"Men",
          href: '#',
        },
        {
          label:"Home",
          href: '#',
        },
      ]
    },
  ];