import {INftType} from "@/types/nft.type";

export interface ICollectionType {
    items: INftType[],
    previewItem: INftType,
    name: string,
    creatorImg: string,
    creatorName: string,
    creatorId: string
}