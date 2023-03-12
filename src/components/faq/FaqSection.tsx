import {FC} from 'react'
import {Grid, Text} from "@nextui-org/react";
import {faqData} from "@/data/test-data";
import FaqCard from "@/components/faq/FaqCard";

const FaqSection: FC = () => {

    return <>
        <div className='container mx-auto'>
            <div className='mx-2'>
                <Text h2>How it works</Text>
                <Text h4>Find out how to get started</Text>

            </div>
            <Grid.Container gap={2}>
                {faqData.map((value, index) =>
                    <Grid xs={12} sm={4} key={index}>
                        <FaqCard data={value}/>
                    </Grid>
                )}
            </Grid.Container>
        </div>
    </>
}

export default FaqSection
