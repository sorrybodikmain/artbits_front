import {FC} from 'react'
import {Button, Card, Grid, Row, Text} from "@nextui-org/react";
import {BsCartPlus} from "react-icons/bs";

interface NftCardProps {
    data: {
        img: string,
        title: string,
        price: string,
    }
}

const NftCard: FC<NftCardProps> = ({data}) => {

    return <Grid xs={6} sm={3}>
        <Card isPressable isHoverable>
            <Card.Header css={{position: 'absolute', zIndex: 1}}>
                <Button auto className='right-0'>
                    <BsCartPlus size={20}/>
                </Button>
            </Card.Header>
            <Card.Body css={{p: 0}}>
                <Card.Image
                    src={'https://nextui.org' + data.img}
                    objectFit='cover'
                    width='100%'
                    height={150}
                    alt={data.title}
                />
            </Card.Body>
            <Card.Footer css={{justifyItems: 'flex-start'}}>
                <Row wrap='wrap' justify='space-between' align='center'>
                    <Text b>{data.title}</Text>
                    <Text
                        css={{
                            color: '$accents7',
                            fontWeight: '$semibold',
                            fontSize: '$sm'
                        }}
                    >
                        {data.price}
                    </Text>
                </Row>
            </Card.Footer>
        </Card>
    </Grid>
}

export default NftCard
