import {FC} from 'react'
import {Grid, Text} from "@nextui-org/react";
import {collections} from "@/data/test-data";
import CollectionCard from "@/components/collections/CollectionCard";

const CollectionList: FC = () => {

    return <>
        <div className='container mx-auto'>
            <div className='mx-2'>
                <Text h2>Trending Collection</Text>
                <Text h4>Checkout our weekly updated trending collection.</Text>
            </div>
            <Grid.Container gap={2}>
                {collections.map((value, index) =>
                    <Grid xs={12} sm={4} key={index}>
                        <CollectionCard data={value}/>
                    </Grid>
                )}
            </Grid.Container>
        </div>
    </>
}

export default CollectionList
