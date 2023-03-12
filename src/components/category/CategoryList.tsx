import {FC} from 'react'
import {Grid, Text} from "@nextui-org/react";
import {category} from "@/data/test-data";
import CategoryCard from "./CategoryCard";

const CategoryList: FC = () => {

    return <div className='container mx-auto'>
        <div className='mx-2'>
            <Text h2>Browse Categories</Text>
        </div>
        <Grid.Container gap={2}>
            {category.map((value, index) =>
                <Grid key={index} xs={6} sm={3}>
                    <CategoryCard data={value}/>
                </Grid>
            )}
        </Grid.Container>
    </div>
}

export default CategoryList
