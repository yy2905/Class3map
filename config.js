var config = {
    style: 'mapbox://styles/mapboxmax/ck4qzh38n02ok1cp7jjzb6n4s',
    accessToken: 'pk.eyJ1IjoibWFwYm94bWF4IiwiYSI6ImNqbnY4MHM3azA2ZmkzdnBnMThvNzRoZ28ifQ.IffqPZGkhcdPjnZ2dmSO6w',
    showMarkers: true,
    theme: 'light',
    alignment: 'center',
    title: 'COVID-19 Case Report in China',
    subtitle: '(until 2020.02.19)',
    byline: 'By Yinan',
    footer: 'Source: Dingxiang Doctor',
    chapters: [
        {
            id: 'Q-id',
            title: 'Situation Summary',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/2019-nCoV-CDC-23312_without_background.png/440px-2019-nCoV-CDC-23312_without_background.png',
            description: 'COVID-19, formerly known as 2019-nCoV disease, is an infectious disease happened in Wuhan, capital city of Hubei province, P.R.China in December 2019. Until February 19, 2020, over 2,000 people who got infected have been reported death in China mainland. Now, please follow me to see more details.',
            location: {
                center: [108.55, 34.32],
                zoom: 3.83,
                pitch: 6.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Q1-id',
            title: 'Confirmed Case in Hubei Province',
            image: '1_hubei_province.png',
            description: 'Until February 19, 2020, Hubei has reported 61,682 confirmed cases, and around 72% patients are confirmed and now under treatment in Wuhan.',
            location: {
                 center: [114.2484635, 30.5981059], // wuhan latitude https://www.google.com/maps/search/%E6%AD%A6%E6%B1%89%E5%B8%82%E4%BA%BA%E6%B0%91%E6%94%BF%E5%BA%9C/@30.5981059,114.2484635,12z/data=!3m1!4b1
                 zoom: 7.26,
                 pitch: 60.00,
                 bearing: 28.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'Q2-id',
            title: 'Confirmed Cases in Hong Kong and Macao',
            image: '2_HM.png',
            description: 'As two Special Administrative Regions, Hong Kong and Macao also reported 63 and 10 cases, respectively.',
            location: {
               center: [114.1786515, 22.2825256],
               zoom: 8.01,
               pitch: 60.00, //pitch: gradient, inclinced
               bearing: -41.62 //軸
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Q3-id',
            title: 'Confirmed Cases in China',
            image: '3_China.png',
            description: 'We devided China into several regions as follows: Central China Region (Henan, Hubei and Hunan); East China Region (Shandong, Jiangsu, Anhui, Zhejiang, Fujian, Shanghai, Jiangxi and Taiwan); South China Region (Guangdong, Guangxi, Hainan, Hong Kong and Macao); Southwest China Region(Yunnan, Guizhou, Sichuan and Tibet); North China Region (Hebei, Shanxi, Inner Mongolia, Beijing and Tianjin); Northeast China Region (Liaoning, Jilin and Heilongjiang); Northwest China Region (Xinjiang, Shaanxi, Ningxia, Qinghai and Gansu).',
            location: {
                center: [116.413384,39.910925],
                zoom: 5.00,
                pitch: 51.50,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
               id: 'Q4-id',
               title: '2020.02.19 Epidemic Situation Map',
               image: '4_Situation.png',
               description: 'Behind every death figure is a broken family. We hope that this disaster will pass as soon as possible.',
               location: {
                   center: [102.81520, 35.03368],
                   zoom: 1,
                   pitch: 51.50,
                   bearing: 0.00
               },
               onChapterEnter: [],
               onChapterExit: []
           },
           {
             id: 'F-id',
             title: 'Please scan the QR code here to see the COVID-2019 Case Report in the US',
             image: '5_US.jpeg', 
             location: {
                 center: [-115.8016529, 33.8138344],
                 zoom: 2,
                 pitch: 51.50,
                 bearing: 0.00
           }, 
               onChapterEnter:[],
               onChapterExit:[]
           }
       ]
   };
