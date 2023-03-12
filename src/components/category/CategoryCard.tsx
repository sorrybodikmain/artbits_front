import {FC} from 'react'
import {Card, Row, Text} from "@nextui-org/react";
import {ICategory} from "@/types/category.type";

interface ICategoryCard {
    data: ICategory
}

const CategoryCard: FC<ICategoryCard> = ({data}) => {

    return <Card isPressable                 variant="shadow">
        <Card.Body css={{p: 0}}>
            <Card.Image
                src={`/images/categories/${data.name}.png`}
                objectFit="cover"
                width="100%"
                height={180}
                alt={data.name}
            />
        </Card.Body>
        <Card.Footer css={{justifyItems: "flex-start"}}>
            <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{data.name}</Text>
            </Row>
        </Card.Footer>
    </Card>
}

export default CategoryCard
