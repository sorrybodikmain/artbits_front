import {FC} from 'react'
import Box from "@/components/Box";
import {Text} from "@nextui-org/react";
import {AiFillShop} from "react-icons/ai";

const AppFooter: FC = () => {

    return <Box className='min-h-[20px] container mx-auto'>
        <Box className='mt-6 flex justify-between mx-4'>
            <Box>
                <Text h4 b className='flex'>
                    <AiFillShop className='mr-1'/>
                    ArtBits
                </Text>
                <Text h6>Total Sale</Text>
            </Box>
            <Box>
                <Text h4 b>100k+</Text>
                <Text h6>Auctions</Text>
            </Box>
            <Box>
                <Text h4 b>340k+</Text>
                <Text h6>Creators</Text>
            </Box>
        </Box>
    </Box>
}

export default AppFooter
