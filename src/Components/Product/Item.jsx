import { Badge, Box , Button, Image } from "@chakra-ui/react"
import {  StarIcon } from '@chakra-ui/icons'

function Item({imageUrl, formattedPrice , imageAlt , title}) {
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c8f774ac-da90-47b0-92b0-2e6faa8dd5a3/go-flyease-shoe-5nWPkx.png" }alt={imageAlt} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              Brand nike
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {title}
          </Box>
  
          <Box>
           ${formattedPrice}
          </Box>

          <Box display='flex' mt='2' alignItems='center'>
            <Button colorScheme='gray' variant='outline' width="100%">Add to cart</Button>
          </Box>
        </Box>
      </Box>
    )
  }


  export default Item