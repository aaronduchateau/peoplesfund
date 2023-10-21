import { useState } from "react";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CampaignViewerModal from "./CampaignViewerModal";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorSecondary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#02a95c' : '#02a95c',
  },
}));

const sampleData = {
  "data": {
    "campaigns": [
      {
        "id": "1",
        "title": "Historic Grove Needs to be Saved",
        "descText": "This Historic grove of Valley oak in Simi valley might have a limited window of time to exist without your help. The foundation that preserves this space has a limited amount of time to raise funds to preserve this beautiful place before the lot will either be sold or repossessed by and repurposed as an apartment complex. With your help we can ensure a 20 year extension on this shared space.",
        "rewardText": "",
        "targetAmount": "100450",
        "raisedAmount": "40050",
        "photo": "./campaign6profile.jpeg",
        "contractName" : "20 year contract",
        "creatorItemFunding" : {"title":"Historic Grove Needs to be Saved ","description":"This historic grove of Valley Oak in Simi valley might have a limited window of time to exist without your help. The foundation that preserves this space has a limited amount of time to raise funds to preserve this beautiful place before the lot will either be sold or repossessed by and repurposed as an apartment complex. With your help we can ensure a 20 year extension on this shared space.","category":null,"fundingType":null,"totalAmount":"100450","startDate":"2023-10-28T22:40:25.000Z","numberOfItems":null,"imageUrl":""},
        "drawnMapData" : {"imageUrlEncoded":"./campaign1map.png","features":{"f281e8617e3ccbcec78e65315b8626cd":{"id":"f281e8617e3ccbcec78e65315b8626cd","type":"Feature","properties":{},"geometry":{"coordinates":[[[-118.80585893121342,34.23304304520096],[-118.80606277909843,34.232164897498194],[-118.80508645501698,34.231490757694885],[-118.80455001321423,34.23188104981722],[-118.80376680818175,34.23210280590017],[-118.80464657273856,34.23325592811388],[-118.80524738755784,34.23303417506767],[-118.80563362565607,34.23304304520096],[-118.80585893121342,34.23304304520096]]],"type":"Polygon"}},"315e7e23ac8f210b57564a372c78de2a":{"id":"315e7e23ac8f210b57564a372c78de2a","type":"Feature","properties":{},"geometry":{"coordinates":[[[-118.80504618061741,34.23307941273694],[-118.8052761078271,34.23296060410185],[-118.80439745741882,34.23201352355976],[-118.80416342436601,34.23207462585171],[-118.80447546843614,34.23246839511326],[-118.80490658195444,34.23294023688996],[-118.80504618061741,34.23307941273694]]],"type":"Polygon"}}},"location":{"result":{"id":"address.1042980073230180","type":"Feature","place_type":["address"],"relevance":1,"properties":{"accuracy":"interpolated","mapbox_id":"dXJuOm1ieGFkcjpjMmVlNjYyOC1iMmZlLTQ1ZDQtYTdmZC1kMzFiMGUwMmNjNTc"},"text_en-US":"Tree Hollow Court","place_name_en-US":"456 Tree Hollow Court, Simi Valley, California 93065, United States","text":"Tree Hollow Court","place_name":"456 Tree Hollow Court, Simi Valley, California 93065, United States","center":[-118.806331,34.231269],"geometry":{"type":"Point","coordinates":[-118.806331,34.231269],"interpolated":true},"address":"456","context":[{"id":"neighborhood.735948012","mapbox_id":"dXJuOm1ieHBsYzpLOTJzN0E","text_en-US":"Woodridge","text":"Woodridge"},{"id":"postcode.308948716","mapbox_id":"dXJuOm1ieHBsYzpFbW91N0E","text_en-US":"93065","text":"93065"},{"id":"place.303597804","mapbox_id":"dXJuOm1ieHBsYzpFaGlJN0E","wikidata":"Q323414","text_en-US":"Simi Valley","language_en-US":"en","text":"Simi Valley","language":"en"},{"id":"district.23676652","mapbox_id":"dXJuOm1ieHBsYzpBV2xHN0E","wikidata":"Q108127","text_en-US":"Ventura County","language_en-US":"en","text":"Ventura County","language":"en"},{"id":"region.419052","mapbox_id":"dXJuOm1ieHBsYzpCbVRz","wikidata":"Q99","short_code":"US-CA","text_en-US":"California","language_en-US":"en","text":"California","language":"en"},{"id":"country.8940","mapbox_id":"dXJuOm1ieHBsYzpJdXc","wikidata":"Q30","short_code":"us","text_en-US":"United States","language_en-US":"en","text":"United States","language":"en"}]}}},
        "campaignImageURL" : "./campaign6profile.jpeg"
      },
      {
        "id": "2",
        "title": "Shared Space with Iconic tree",
        "descText": "New York City (i.e. the concrete jungle), is one of the most important areas in the United States to preserve green space. The Derthmore property sports a historic tree that is in jeopardy of being eliminated along with other tree’s in the area if funding isn’t secured.",
        "rewardText": "Support this cause today!",
        "targetAmount": "32000",
        "raisedAmount": "17000",
        "photo": "./campaign5profile.jpeg",
        "contractName" : "20 year contract",
        "creatorItemFunding" : {"title":"Shared Space with Iconic tree","description":"New York City (i.e. the concrete jungle), is one of the most important areas in the United States to preserve green space. The Derthmore property sports a historic tree that is in jeopardy of being eliminated along with other tree’s in the area if funding isn’t secured","category":null,"fundingType":null,"totalAmount":"32000","startDate":"2023-10-07T18:12:23.280Z","numberOfItems":null,"imageUrl":""},
        "drawnMapData" : {"imageUrlEncoded":"./campaign2map.png","features":{"49df549f8c61d547d24ade7e8d3a3272":{"id":"49df549f8c61d547d24ade7e8d3a3272","type":"Feature","properties":{},"geometry":{"coordinates":[[[-73.91869498538588,40.871408273560235],[-73.92085251748323,40.86993099400706],[-73.91953223664726,40.86812899300736],[-73.91632277347871,40.869630663912574],[-73.91790067008691,40.87088067750361],[-73.91852324153736,40.871367689397374],[-73.91869498538588,40.871408273560235]]],"type":"Polygon"}},"68bb26d2ccec190443c4dd3e40003999":{"id":"68bb26d2ccec190443c4dd3e40003999","type":"Feature","properties":{},"geometry":{"coordinates":[[[-73.91924665175672,40.87099174503382],[-73.91905475145195,40.87080877734442],[-73.9193384301632,40.8703797476754],[-73.91903806446928,40.870360819831575],[-73.9187376987749,40.870461768267916],[-73.91831218070823,40.87072675718113],[-73.91739439664286,40.86996964318746],[-73.9179534105736,40.86964786711826],[-73.91738605315152,40.86918728296567],[-73.91924665175672,40.86832289035897],[-73.91978897870433,40.86912418899652],[-73.92010603138182,40.86903585733856],[-73.92077351070218,40.869938096583155],[-73.91924665175672,40.87099174503382]]],"type":"Polygon"}}},"location":{"result":{"id":"poi.17179976256","type":"Feature","place_type":["poi"],"relevance":1,"properties":{"foursquare":"59f0cbc6e679bc7814cd081e","landmark":true,"address":"2635 Sedgwick Ave Apt 3A","category":"natural, tree"},"text_en-US":"PADILLA TREE","place_name_en-US":"PADILLA TREE, 2635 Sedgwick Ave Apt 3A, New York City, New York 10468, United States","text":"PADILLA TREE","place_name":"PADILLA TREE, 2635 Sedgwick Ave Apt 3A, New York City, New York 10468, United States","matching_place_name":"PADILLA TREE, 2635 Sedgwick Ave Apt 3A, New York, New York 10468, United States","center":[-73.904758,40.869588],"geometry":{"coordinates":[-73.904758,40.869588],"type":"Point"},"context":[{"id":"neighborhood.333491436","mapbox_id":"dXJuOm1ieHBsYzpFK0NzN0E","wikidata":"Q6413137","text_en-US":"Kingsbridge Heights","language_en-US":"en","text":"Kingsbridge Heights","language":"en"},{"id":"postcode.26046188","mapbox_id":"dXJuOm1ieHBsYzpBWTF1N0E","text_en-US":"10468","text":"10468"},{"id":"locality.66603756","mapbox_id":"dXJuOm1ieHBsYzpBL2hLN0E","wikidata":"Q18426","text_en-US":"Bronx","language_en-US":"en","text":"Bronx","language":"en"},{"id":"place.233720044","mapbox_id":"dXJuOm1ieHBsYzpEZTVJN0E","wikidata":"Q60","text_en-US":"New York City","language_en-US":"en","text":"New York City","language":"en"},{"id":"district.2270956","mapbox_id":"dXJuOm1ieHBsYzpJcWJz","wikidata":"Q855974","text_en-US":"Bronx County","language_en-US":"en","text":"Bronx County","language":"en"},{"id":"region.107756","mapbox_id":"dXJuOm1ieHBsYzpBYVRz","wikidata":"Q1384","short_code":"US-NY","text_en-US":"New York","language_en-US":"en","text":"New York","language":"en"},{"id":"country.8940","mapbox_id":"dXJuOm1ieHBsYzpJdXc","wikidata":"Q30","short_code":"us","text_en-US":"United States","language_en-US":"en","text":"United States","language":"en"}]}}},
        "campaignImageURL" : "./campaign5profile.jpeg"
      },
      {
        "id": "3",
        "title": "In 7 months this could be gone",
        "descText": "My name is Bob and i just realized the tree’s on my property are worth nearly 500k in Timber sales. Instead of cutting them down, i’d prefer to keep the trees standing. Using the campaign builder on this website I realized my tree’s store nearly 903 tons of carbon per year! Before cutting them down, i thought i’d try to see if we could keep them standing, and with your help, maybe I can! ",
        "rewardText": "",
        "targetAmount": "120000",
        "raisedAmount": "104000",
        "photo": "./campaign3profile.jpeg",
        "contractName" : "40 year contract",
        "creatorItemFunding" : {"title":"In 7 months this could be gone","description":"My name is Bob and i just realized the tree’s on my property are worth nearly 500k in Timber sales. Instead of cutting them down, i’d prefer to keep the trees standing. Using the campaign builder on this website I realized my tree’s store nearly 903 tons of carbon per year! Before cutting them down, i thought i’d try to see if we could keep them standing, and with your help, maybe I can!","category":null,"fundingType":null,"totalAmount":"120000","startDate":"2023-10-07T18:52:34.110Z","numberOfItems":null,"imageUrl":""},
        "drawnMapData" : {"imageUrlEncoded":"./campaign3map.png","features":{"41424cf61b633faa9816b9aae0a6cc02":{"id":"41424cf61b633faa9816b9aae0a6cc02","type":"Feature","properties":{},"geometry":{"coordinates":[[[-79.61985520220189,43.83167858336512],[-79.62056430918946,43.83189396562017],[-79.63123823542617,43.82955164185515],[-79.63105162832439,43.824732088877454],[-79.62746877196504,43.82500134791002],[-79.6238485941857,43.82731692545255],[-79.62172127322246,43.82974010808735],[-79.61985520220189,43.83167858336512]]],"type":"Polygon"}},"36b74b5fa83f9f3e7b57db9760ae1f5b":{"id":"36b74b5fa83f9f3e7b57db9760ae1f5b","type":"Feature","properties":{},"geometry":{"coordinates":[[[-79.62653871398082,43.83053140420941],[-79.63111852141299,43.8295127135998],[-79.63092769610357,43.825795722032495],[-79.63006898220978,43.825754420826144],[-79.62987815689988,43.8274752802202],[-79.62684403447618,43.826456537450184],[-79.62636697120215,43.82586455731342],[-79.62440147051242,43.82703474494005],[-79.62199707161015,43.82966414168246],[-79.62251229994662,43.82992569837501],[-79.6243442229192,43.82962284315272],[-79.6251075241583,43.829388817609725],[-79.62424881026448,43.828507772043764],[-79.62577541274169,43.82718617930939],[-79.62739742787414,43.827585413532404],[-79.62777907849345,43.8281498435675],[-79.62655779651158,43.82865920267602],[-79.62653871398082,43.83053140420941]]],"type":"Polygon"}}},"location":{"result":{"id":"address.3182177562451890","type":"Feature","place_type":["address"],"relevance":1,"properties":{"accuracy":"interpolated","mapbox_id":"dXJuOm1ieGFkcjo3ZGRkMDZlOC0wNWU2LTQ2ODgtOGM0Mi03NzBhYTQ0M2E0Njg"},"text_en-US":"Treelawn Boulevard","place_name_en-US":"897 Treelawn Boulevard, Vaughan, Ontario L0J 1C0, Canada","text":"Treelawn Boulevard","place_name":"897 Treelawn Boulevard, Vaughan, Ontario L0J 1C0, Canada","center":[-79.630036,43.852075],"geometry":{"type":"Point","coordinates":[-79.630036,43.852075],"interpolated":true},"address":"897","context":[{"id":"postcode.3182177562451890","text_en-US":"L0J 1C0","text":"L0J 1C0"},{"id":"locality.140233255","mapbox_id":"dXJuOm1ieHBsYzpDRnZLSnc","wikidata":"Q4872637","text_en-US":"Kleinburg","language_en-US":"en","text":"Kleinburg","language":"en"},{"id":"place.83142695","mapbox_id":"dXJuOm1ieHBsYzpCUFNvSnc","wikidata":"Q44013","text_en-US":"Vaughan","language_en-US":"en","text":"Vaughan","language":"en"},{"id":"district.1345063","mapbox_id":"dXJuOm1ieHBsYzpGSVlu","wikidata":"Q18458","text_en-US":"Regional Municipality of York","language_en-US":"en","text":"Regional Municipality of York","language":"en"},{"id":"region.17447","mapbox_id":"dXJuOm1ieHBsYzpSQ2M","wikidata":"Q1904","short_code":"CA-ON","text_en-US":"Ontario","language_en-US":"en","text":"Ontario","language":"en"},{"id":"country.8743","mapbox_id":"dXJuOm1ieHBsYzpJaWM","wikidata":"Q16","short_code":"ca","text_en-US":"Canada","language_en-US":"en","text":"Canada","language":"en"}]}}},
        "campaignImageURL" : "./campaign3profile.jpeg"
      },
      {
        "id": "4",
        "title": "Community does not want to lose their Trees",
        "descText": "Time is running out! We’ve got just 6 months to get funding to save this important part of our community. Help us secure funding to ensure another 20-50 years of our trees, and help fight climate change!",
        "rewardText": "",
        "targetAmount": "20450",
        "raisedAmount": "5050",
        "photo": "./campaign4profile.jpeg",
        "contractName" : "20 year contract",
        "creatorItemFunding" : {"title":"Community does not want to lose their Trees","description":"Time is running out! We’ve got just 6 months to get funding to save this important part of our community. Help us secure funding to ensure another 20-50 years of our trees, and help fight climate change!","category":null,"fundingType":null,"totalAmount":"20450","startDate":"2023-10-28T22:40:25.000Z","numberOfItems":null,"imageUrl":""},
        "drawnMapData" : {"imageUrlEncoded":"./campaign1map.png","features":{"f281e8617e3ccbcec78e65315b8626cd":{"id":"f281e8617e3ccbcec78e65315b8626cd","type":"Feature","properties":{},"geometry":{"coordinates":[[[-118.80585893121342,34.23304304520096],[-118.80606277909843,34.232164897498194],[-118.80508645501698,34.231490757694885],[-118.80455001321423,34.23188104981722],[-118.80376680818175,34.23210280590017],[-118.80464657273856,34.23325592811388],[-118.80524738755784,34.23303417506767],[-118.80563362565607,34.23304304520096],[-118.80585893121342,34.23304304520096]]],"type":"Polygon"}},"315e7e23ac8f210b57564a372c78de2a":{"id":"315e7e23ac8f210b57564a372c78de2a","type":"Feature","properties":{},"geometry":{"coordinates":[[[-118.80504618061741,34.23307941273694],[-118.8052761078271,34.23296060410185],[-118.80439745741882,34.23201352355976],[-118.80416342436601,34.23207462585171],[-118.80447546843614,34.23246839511326],[-118.80490658195444,34.23294023688996],[-118.80504618061741,34.23307941273694]]],"type":"Polygon"}}},"location":{"result":{"id":"address.1042980073230180","type":"Feature","place_type":["address"],"relevance":1,"properties":{"accuracy":"interpolated","mapbox_id":"dXJuOm1ieGFkcjpjMmVlNjYyOC1iMmZlLTQ1ZDQtYTdmZC1kMzFiMGUwMmNjNTc"},"text_en-US":"Tree Hollow Court","place_name_en-US":"456 Tree Hollow Court, Simi Valley, California 93065, United States","text":"Tree Hollow Court","place_name":"456 Tree Hollow Court, Simi Valley, California 93065, United States","center":[-118.806331,34.231269],"geometry":{"type":"Point","coordinates":[-118.806331,34.231269],"interpolated":true},"address":"456","context":[{"id":"neighborhood.735948012","mapbox_id":"dXJuOm1ieHBsYzpLOTJzN0E","text_en-US":"Woodridge","text":"Woodridge"},{"id":"postcode.308948716","mapbox_id":"dXJuOm1ieHBsYzpFbW91N0E","text_en-US":"93065","text":"93065"},{"id":"place.303597804","mapbox_id":"dXJuOm1ieHBsYzpFaGlJN0E","wikidata":"Q323414","text_en-US":"Simi Valley","language_en-US":"en","text":"Simi Valley","language":"en"},{"id":"district.23676652","mapbox_id":"dXJuOm1ieHBsYzpBV2xHN0E","wikidata":"Q108127","text_en-US":"Ventura County","language_en-US":"en","text":"Ventura County","language":"en"},{"id":"region.419052","mapbox_id":"dXJuOm1ieHBsYzpCbVRz","wikidata":"Q99","short_code":"US-CA","text_en-US":"California","language_en-US":"en","text":"California","language":"en"},{"id":"country.8940","mapbox_id":"dXJuOm1ieHBsYzpJdXc","wikidata":"Q30","short_code":"us","text_en-US":"United States","language_en-US":"en","text":"United States","language":"en"}]}}},
        "campaignImageURL" : "./campaign4profile.jpeg"
      },
      {
        "id": "5",
        "title": "229 (Tons Carbon/yr) can be stored",
        "descText": "Hi There! My name is Erin and i just realized the tree’s on my property are worth nearly 200k in Timber sales. Instead of cutting them down, i’d prefer to keep the trees standing. Using the campaign builder on this website realized how much carbon my tree’s store. Before cutting them down, i thought i’d try to see if we could keep them standing, and with your help, maybe we can do this!",
        "rewardText": "",
        "targetAmount": "200000",
        "raisedAmount": "124000",
        "photo": "./campaign2profile.jpeg",
        "contractName" : "20 year contract",
        "creatorItemFunding" : {"title":"229 (Tons Carbon/yr) can be stored","description":"Hi There! My name is Erin and i just realized the tree’s on my property are worth nearly 200k in Timber sales. Instead of cutting them down, i’d prefer to keep the trees standing. Using the campaign builder on this website realized how much carbon my tree’s store. Before cutting them down, i thought i’d try to see if we could keep them standing, and with your help, maybe we can do this!","category":null,"fundingType":null,"totalAmount":"200000","startDate":"2023-10-07T18:12:23.280Z","numberOfItems":null,"imageUrl":""},
        "drawnMapData" : {"imageUrlEncoded":"./campaign2map.png","features":{"49df549f8c61d547d24ade7e8d3a3272":{"id":"49df549f8c61d547d24ade7e8d3a3272","type":"Feature","properties":{},"geometry":{"coordinates":[[[-73.91869498538588,40.871408273560235],[-73.92085251748323,40.86993099400706],[-73.91953223664726,40.86812899300736],[-73.91632277347871,40.869630663912574],[-73.91790067008691,40.87088067750361],[-73.91852324153736,40.871367689397374],[-73.91869498538588,40.871408273560235]]],"type":"Polygon"}},"68bb26d2ccec190443c4dd3e40003999":{"id":"68bb26d2ccec190443c4dd3e40003999","type":"Feature","properties":{},"geometry":{"coordinates":[[[-73.91924665175672,40.87099174503382],[-73.91905475145195,40.87080877734442],[-73.9193384301632,40.8703797476754],[-73.91903806446928,40.870360819831575],[-73.9187376987749,40.870461768267916],[-73.91831218070823,40.87072675718113],[-73.91739439664286,40.86996964318746],[-73.9179534105736,40.86964786711826],[-73.91738605315152,40.86918728296567],[-73.91924665175672,40.86832289035897],[-73.91978897870433,40.86912418899652],[-73.92010603138182,40.86903585733856],[-73.92077351070218,40.869938096583155],[-73.91924665175672,40.87099174503382]]],"type":"Polygon"}}},"location":{"result":{"id":"poi.17179976256","type":"Feature","place_type":["poi"],"relevance":1,"properties":{"foursquare":"59f0cbc6e679bc7814cd081e","landmark":true,"address":"2635 Sedgwick Ave Apt 3A","category":"natural, tree"},"text_en-US":"PADILLA TREE","place_name_en-US":"PADILLA TREE, 2635 Sedgwick Ave Apt 3A, New York City, New York 10468, United States","text":"PADILLA TREE","place_name":"PADILLA TREE, 2635 Sedgwick Ave Apt 3A, New York City, New York 10468, United States","matching_place_name":"PADILLA TREE, 2635 Sedgwick Ave Apt 3A, New York, New York 10468, United States","center":[-73.904758,40.869588],"geometry":{"coordinates":[-73.904758,40.869588],"type":"Point"},"context":[{"id":"neighborhood.333491436","mapbox_id":"dXJuOm1ieHBsYzpFK0NzN0E","wikidata":"Q6413137","text_en-US":"Kingsbridge Heights","language_en-US":"en","text":"Kingsbridge Heights","language":"en"},{"id":"postcode.26046188","mapbox_id":"dXJuOm1ieHBsYzpBWTF1N0E","text_en-US":"10468","text":"10468"},{"id":"locality.66603756","mapbox_id":"dXJuOm1ieHBsYzpBL2hLN0E","wikidata":"Q18426","text_en-US":"Bronx","language_en-US":"en","text":"Bronx","language":"en"},{"id":"place.233720044","mapbox_id":"dXJuOm1ieHBsYzpEZTVJN0E","wikidata":"Q60","text_en-US":"New York City","language_en-US":"en","text":"New York City","language":"en"},{"id":"district.2270956","mapbox_id":"dXJuOm1ieHBsYzpJcWJz","wikidata":"Q855974","text_en-US":"Bronx County","language_en-US":"en","text":"Bronx County","language":"en"},{"id":"region.107756","mapbox_id":"dXJuOm1ieHBsYzpBYVRz","wikidata":"Q1384","short_code":"US-NY","text_en-US":"New York","language_en-US":"en","text":"New York","language":"en"},{"id":"country.8940","mapbox_id":"dXJuOm1ieHBsYzpJdXc","wikidata":"Q30","short_code":"us","text_en-US":"United States","language_en-US":"en","text":"United States","language":"en"}]}}},
        "campaignImageURL" : "./campaign2profile.jpeg"
      },
      {
        "id": "6",
        "title": "Save Heaven Grove",
        "descText": "Heaven grove is an important part of our community. Let’s work together to make sure it stays that way! ",
        "rewardText": "Please consider donating, we could really use your help!",
        "targetAmount": "84000",
        "raisedAmount": "50000",
        "photo": "./campaign1profile.jpeg",
        "contractName" : "40 year contract",
        "creatorItemFunding" : {"title":"Save Heaven Grove","description":"Heaven grove is an important part of our community. Let’s work together to make sure it stays that way! ","category":null,"fundingType":null,"totalAmount":"84000","startDate":"2023-10-07T18:52:34.110Z","numberOfItems":null,"imageUrl":""},
        "drawnMapData" : {"imageUrlEncoded":"./campaign3map.png","features":{"41424cf61b633faa9816b9aae0a6cc02":{"id":"41424cf61b633faa9816b9aae0a6cc02","type":"Feature","properties":{},"geometry":{"coordinates":[[[-79.61985520220189,43.83167858336512],[-79.62056430918946,43.83189396562017],[-79.63123823542617,43.82955164185515],[-79.63105162832439,43.824732088877454],[-79.62746877196504,43.82500134791002],[-79.6238485941857,43.82731692545255],[-79.62172127322246,43.82974010808735],[-79.61985520220189,43.83167858336512]]],"type":"Polygon"}},"36b74b5fa83f9f3e7b57db9760ae1f5b":{"id":"36b74b5fa83f9f3e7b57db9760ae1f5b","type":"Feature","properties":{},"geometry":{"coordinates":[[[-79.62653871398082,43.83053140420941],[-79.63111852141299,43.8295127135998],[-79.63092769610357,43.825795722032495],[-79.63006898220978,43.825754420826144],[-79.62987815689988,43.8274752802202],[-79.62684403447618,43.826456537450184],[-79.62636697120215,43.82586455731342],[-79.62440147051242,43.82703474494005],[-79.62199707161015,43.82966414168246],[-79.62251229994662,43.82992569837501],[-79.6243442229192,43.82962284315272],[-79.6251075241583,43.829388817609725],[-79.62424881026448,43.828507772043764],[-79.62577541274169,43.82718617930939],[-79.62739742787414,43.827585413532404],[-79.62777907849345,43.8281498435675],[-79.62655779651158,43.82865920267602],[-79.62653871398082,43.83053140420941]]],"type":"Polygon"}}},"location":{"result":{"id":"address.3182177562451890","type":"Feature","place_type":["address"],"relevance":1,"properties":{"accuracy":"interpolated","mapbox_id":"dXJuOm1ieGFkcjo3ZGRkMDZlOC0wNWU2LTQ2ODgtOGM0Mi03NzBhYTQ0M2E0Njg"},"text_en-US":"Treelawn Boulevard","place_name_en-US":"897 Treelawn Boulevard, Vaughan, Ontario L0J 1C0, Canada","text":"Treelawn Boulevard","place_name":"897 Treelawn Boulevard, Vaughan, Ontario L0J 1C0, Canada","center":[-79.630036,43.852075],"geometry":{"type":"Point","coordinates":[-79.630036,43.852075],"interpolated":true},"address":"897","context":[{"id":"postcode.3182177562451890","text_en-US":"L0J 1C0","text":"L0J 1C0"},{"id":"locality.140233255","mapbox_id":"dXJuOm1ieHBsYzpDRnZLSnc","wikidata":"Q4872637","text_en-US":"Kleinburg","language_en-US":"en","text":"Kleinburg","language":"en"},{"id":"place.83142695","mapbox_id":"dXJuOm1ieHBsYzpCUFNvSnc","wikidata":"Q44013","text_en-US":"Vaughan","language_en-US":"en","text":"Vaughan","language":"en"},{"id":"district.1345063","mapbox_id":"dXJuOm1ieHBsYzpGSVlu","wikidata":"Q18458","text_en-US":"Regional Municipality of York","language_en-US":"en","text":"Regional Municipality of York","language":"en"},{"id":"region.17447","mapbox_id":"dXJuOm1ieHBsYzpSQ2M","wikidata":"Q1904","short_code":"CA-ON","text_en-US":"Ontario","language_en-US":"en","text":"Ontario","language":"en"},{"id":"country.8743","mapbox_id":"dXJuOm1ieHBsYzpJaWM","wikidata":"Q16","short_code":"ca","text_en-US":"Canada","language_en-US":"en","text":"Canada","language":"en"}]}}},
        "campaignImageURL" : "./campaign1profile.jpeg"
      },
    ]
  }
};

const FrontItems = () => {

  const [isCampaignDetailsModal, setIsCampaignDetailsModal] = useState<number | null>(null);



  return (
    <>
    <div className='w-full ml-6 items-center mt-4 mr-6'>
      <div>
        <div style={{ textAlign: 'center', width: '100%' }} className="my-6">
          <img src="./featured.png" style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto' }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 my-12">
          {sampleData.data.campaigns.map(function (object, i) {
            const styleFormatted = 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("' + object.photo + '")';
            return <div className="bg-slate-100 rounded-xl shadow-lg relative overflow-hidden btn-shadow" key={i + 'frontItems'} onClick={()=> {setIsCampaignDetailsModal(i)}}>
              <div className="hero-image-item rnd-shadow" style={{ 'backgroundImage': styleFormatted }}>
                <div className="p-4">
                  <div className="text-xl text-white mt-1 font-bold">{object.title}</div>
                  <div className="text-sm text-white mt-2">{object.descText}<br /><br />{object.rewardText}</div>
                </div>
                <div className="prog-text-holder">
                  <span className="text-green text-4xl text-bold">${object.raisedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                  <span className="text-sm text-light-green">&nbsp;of ${object.targetAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
                <div className="line-holder">
                  <BorderLinearProgress variant="determinate" value={parseInt(object.raisedAmount) / parseInt(object.targetAmount) * 100} color="success" />
                </div>
              </div>
              <div className="flex items-center mt-3 justify-center p-4">
                <div className="text-center btn-green pt-2 pb-2 pl-10 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" style={{width: '300px'}}>
                  <div className="justify-between">
                    <ArrowUpwardIcon fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                      &nbsp;Fund This Campaign</span>
                  </div>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
    <CampaignViewerModal isOpen={isCampaignDetailsModal} handleToggle={setIsCampaignDetailsModal} activeCampaign={sampleData.data.campaigns[isCampaignDetailsModal || 0]}/>
    </>
  );
}

export default FrontItems;
