import {FC} from 'react'
import {Badge, Card, User} from "@nextui-org/react";
import {ICreator} from "@/types/creator.type";

interface ICreatorCardProps {
    data: ICreator,
    id: number
}

const CreatorCard: FC<ICreatorCardProps> = ({data, id}) => {
    return <Card
        isHoverable
        isPressable
        variant="shadow"
    >
        <Card.Body>
            <Badge
                content={id + 1}
                enableShadow
                variant='bordered'
            >
                <User
                    size='xl'
                    src={`/images/icons/${id+1}.png`}
                    name={data.name}
                    description={`Total sales: ${data.totalSales} ETH`}
                /></Badge>
        </Card.Body>
    </Card>
}

export default CreatorCard
