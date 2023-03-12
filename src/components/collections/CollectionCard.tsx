import {FC} from 'react'
import {ICollectionType} from "@/types/collection.type";
import {Button, Card, Grid, Spacer} from "@nextui-org/react";
import Box from "@/components/Box";

interface ICollectionCardProps {
    data: ICollectionType
}

const CollectionCard: FC<ICollectionCardProps> = ({data}) => {

    return <Box>
        <Card isPressable>
            <Card.Image
                src={data.previewItem.img}
                objectFit="cover"
                width="100%"
                height={250}
                alt={data.previewItem.name}
            />
        </Card>
        <Spacer y={0.2}/>
        <Box>
            <Grid.Container
                gap={1}
                justify="flex-start"
            >
                {data.items.map((value, index) =>
                    <Grid sm={4} key={index}>
                        <Card isPressable>
                            <Card.Image
                                src={value.img}
                                objectFit="cover"
                                width="100%"
                                height={80}
                                alt={value.name}
                            />
                        </Card>
                    </Grid>
                )}
            </Grid.Container>
            <Grid sm={4}>
                <Button css={{
                    width: '100%'
                }}>
                    +1000
                </Button>
            </Grid>
        </Box>
    </Box>
}

export default CollectionCard
