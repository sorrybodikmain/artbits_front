import {FC} from 'react'
import CreatorList from "@/components/creators/CreatorList";
import CategoryList from "@/components/category/CategoryList";
import HeroSection from "@/components/hero/HeroSection";
import FaqSection from "@/components/faq/FaqSection";
import SubsCard from "@/components/subscription/SubsCard";
import CollectionList from "@/components/collections/CollectionList";

const HomePage: FC = () => {
    return <>
        <HeroSection/>
        <CollectionList/>
        <CategoryList/>
        <CreatorList/>
        <FaqSection/>
        <SubsCard/>
    </>

}
export default HomePage