import {ICreator} from "@/types/creator.type";
import {ICategory} from "@/types/category.type";
import {IFaqCard} from "@/types/faq.type";
import {ICollectionType} from "@/types/collection.type";

export const creators: ICreator[] = [
    {
        name: "Keepitreal",
        img: '/images/icons/1.png',
        totalSales: 2541.12
    },
    {
        name: "DigiLab",
        img: '/images/icons/1.png',
        totalSales: 434.12
    },
    {
        name: "GravityOne",
        img: '/images/icons/1.png',
        totalSales: 432.12
    },
    {
        name: "BlueWhale",
        img: '/images/icons/1.png',
        totalSales: 4325.12
    },
    {
        name: "Mr fox",
        img: '/images/icons/1.png',
        totalSales: 546.12
    },
    {
        name: "Shroomie",
        img: '/images/icons/1.png',
        totalSales: 324.12
    },


]

export const category: ICategory[] = [
    {
        "name": "Art",
        "img": "/images/categories/Art.png",
    },
    {
        "name": "Collectibles",
        "img": "/images/categories/Art.png",
    },
    {
        "name": "Music",
        "img": "/images/categories/Art.png",
    },
    {
        "name": "Photography",
        "img": "/images/categories/Art.png",
    },
    {
        "name": "Video",
        "img": "/images/categories/Art.png",
    },
    {
        "name": "Utility",
        "img": "/images/categories/Art.png",
    },
    {
        "name": "Sport",
        "img": "/images/categories/Art.png",
    },
    {
        "name": "Virtual Worlds",
        "img": "/images/categories/Art.png",
    }
]

export const faqData: IFaqCard[] = [
    {
        title: 'Setup Your wallet',
        desc: 'Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.',
        img: '/images/faq/1.png',
    },
    {
        title: 'Create Collection',
        desc: 'Upload your work and setup your collection. Add a description, social links and floor price.',
        img: '/images/faq/2.png',
    },
    {
        title: 'Start Earning',
        desc: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
        img: '/images/faq/3.png',
    }
]

export const collections: ICollectionType[] = [
    {
        name: 'DSGN Animals',
        creatorId: 'MrFox',
        creatorImg: '/images/icons/Keepitreal.png',
        creatorName: 'MrFox',
        previewItem: {
            name: 'hero',
            img: 'https://cdn.prod.www.spiegel.de/images/d2caafb1-70da-47e2-ba48-efd66565cde1_w996_r0.9975262832405689_fpx44.98_fpy48.86.jpg',
        },
        items: [
            {
                name: 'hero',
                img: 'https://absatzwirtschaft-1cf93.kxcdn.com/wp-content/uploads/2022/05/how-to-nft-c-Adidas-1-1024x676.jpg',
            },
            {
                name: 'hero',
                img: 'https://conteudo.imguol.com.br/c/noticias/74/2022/06/06/bored-ape-nft-que-integra-a-colecao-do-bored-ape-yacht-club-1654521934017_v2_1x1.jpg',
            },
            {
                name: 'hero',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsUmXYfPqpGmWg8b5aV0ngUfg-asRHlksHdDbiyvR9cPi6jTAdhb532oVp4sr_nQNg70&usqp=CAU',
            }
        ]
    },
    {
        name: 'Magic Mushroomss',
        creatorId: 'Shroomie',
        creatorName: 'Shroomie',
        creatorImg: '/images/icons/Keepitreal.png',
        previewItem: {
            name: 'hero',
            img: 'https://images.barrons.com/im-492408?width=700&height=1050',
        },
        items: [
            {
                name: 'hero',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_5kecXPxAW8xzwrsJr7XMovyjQqzq0Ww1VyMWTeEN6p9Zwbjm_TbCg-sGNAXPW7zJSc&usqp=CAU',
            },
            {
                name: 'hero',
                img: 'https://st.depositphotos.com/50978076/54046/v/600/depositphotos_540465052-stock-illustration-doodles-character-blue-woman-with.jpg',
            },
            {
                name: 'hero',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsUmXYfPqpGmWg8b5aV0ngUfg-asRHlksHdDbiyvR9cPi6jTAdhb532oVp4sr_nQNg70&usqp=CAU',
            }
        ]
    },
    {
        name: 'Disco Machines',
        creatorId: 'BeKind2Robots',
        creatorName: 'BeKind2Robots',
        creatorImg: '/images/icons/Keepitreal.png',
        previewItem: {
            name: 'hero',
            img: 'https://images.squarespace-cdn.com/content/v1/5e55383538da6e7b34219641/1623270212425-BKBOSVBQQ4YQJGHKQJXW/Vader24_0001_PINK_blue.jpg?format=1000w',
        },
        items: [
            {
                name: 'hero',
                img: 'https://images.squarespace-cdn.com/content/v1/5e55383538da6e7b34219641/1623270275631-XRJYE5W566361DWFUBMH/Vader24Black_006.jpg?format=1000w',
            },
            {
                name: 'hero',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsUmXYfPqpGmWg8b5aV0ngUfg-asRHlksHdDbiyvR9cPi6jTAdhb532oVp4sr_nQNg70&usqp=CAU',
            },
            {
                name: 'hero',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmsUmXYfPqpGmWg8b5aV0ngUfg-asRHlksHdDbiyvR9cPi6jTAdhb532oVp4sr_nQNg70&usqp=CAU',
            }
        ]
    }
]