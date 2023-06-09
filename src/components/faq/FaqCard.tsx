import {FC} from 'react'
import {IFaqCard} from "@/types/faq.type";
import {Card, Row, Text} from "@nextui-org/react";

interface IFaqCardProps {
    data: IFaqCard
}

const FaqCard: FC<IFaqCardProps> = ({data}) => {

    return <Card isPressable variant="shadow">
        <Card.Body css={{p: 0}}>
            <Card.Image
                src={data.img}
                objectFit="cover"
                width="100%"
                height='100%'
                alt={data.title}
            />
        </Card.Body>
        <Card.Footer>
            <Row wrap="wrap" justify="space-around" align="center">
                <Text h5>{data.title}</Text>
                <Text className='mx-3 text-center' color='#787f85'>{data.desc}</Text>
            </Row>
        </Card.Footer>
    </Card>
}

export default FaqCard
