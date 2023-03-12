import {Button, Grid, Text} from '@nextui-org/react'
import CreatorCard from "@/components/creators/CreatorCard";
import {creators} from "@/data/test-data";
import {GoRocket} from "react-icons/go";


const CreatorList = () => {

    return <>
        <div className='container mx-auto'>
            <div className='mx-2'>
                <Text h2 className='flex'>Top creators
                    <Button
                        className='absolute ml-auto mt-2'
                        bordered
                        color="secondary"
                        auto>
                        <GoRocket className='mr-2'/>
                        View Rankings
                    </Button>
                </Text>
                <Text h4>Checkout Top Rated Creators on the NFT Marketplace</Text>

            </div>
            <Grid.Container gap={2}>
                {creators.map((value, index) =>
                    <Grid xs={12} sm={4} key={index}>
                        <CreatorCard data={value} id={index}/>
                    </Grid>
                )}
            </Grid.Container>
        </div>
    </>
}

export default CreatorList