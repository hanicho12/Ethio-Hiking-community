import {FaTelegram, FaYoutube, FaInstagramSquare, FaFacebookSquare, FaLinkedin, FaCheckCircle,FaWhatsappSquare  } from 'react-icons/fa';
import { BiLogoTiktok } from "react-icons/bi";
import {FaXTwitter} from 'react-icons/fa6';
import React from 'react';
const iconClass = 'icon';

export const icons = [
    {
        id: 1,
        url: 'https://t.me/Ethiohikingcommunity',
        icon: <FaTelegram className={iconClass} />
    },
    {
        id: 2,
        url: 'https://www.instagram.com/ethiohiking_community?igsh=OTNmM2QyMGNvM2li',
        icon: <FaInstagramSquare className={iconClass} />
    },
    {
        id: 3,
        url: 'https://www.facebook.com/profile.php?id=100068736610594',
        icon: <FaFacebookSquare className={iconClass} />
    },
    {
        id: 4,
        url: 'https://chat.whatsapp.com/KomueQ5l1j9I1LLo0T3VCb',
        icon: <FaWhatsappSquare   className={iconClass} />
    },
    {
        id: 5,
        url: 'https://www.youtube.com/@ethiohikingcampingcommunit446',
        icon: <FaYoutube className={iconClass} />
    },
    {
        id: 6,
        url: 'linkedin.com/in/ethio-hiking-community-1b9697259',
        icon: <FaLinkedin className={iconClass} />
    }, 
    {
        id: 7,
        url: 'https://x.com/HSebrato?t=rriPlMHZ9s8-5vLptSDghg&s=09',
        icon: <FaXTwitter   className={iconClass} />
    },
    {
        id: 8,
        url: 'https://www.tiktok.com/@ethiohikng',
        icon: <BiLogoTiktok   className={iconClass} />
    },
]

export const list = [
    {
        id: 1,
        url:'assets/one/main8.jpg'
    },
    {
        id: 2,
        url:'assets/one/main24.jpg'
    },
    {
        id: 3,
        url:'assets/one/main21.jpg'
    },
    {
        id:4,
        url:'assets/one/main25.jpg'
    },
    {
        id:5,
        url:'assets/one/main22.jpg'
    },
    {
        id:6,
        url:'assets/one/main23.jpg'
    },
    {
        id:7,
        url:'assets/one/main1.jpg'
    },
    {
        id:8,
        url:'assets/one/main2.jpg'
    },
    {
        id:9,
        url:'assets/one/main3.jpg'
    },
    {
        id:10,
        url:'assets/one/main5.jpg'
    },
    {
        id:11,
        url:'assets/one/main12.jpg'
    },
    {
        id:12,
        url:'assets/one/main18.jpg'
    },
    {
        id:13,
        url:'assets/one/main17.jpg'
    },
    {
        id:14,
        url:'assets/one/main14.jpg'
    },
    {
        id:15,
        url:'assets/one/main15.jpg'
    },
    {
        id:16,
        url:'assets/one/main16.jpg'
    },
    {
        id:17,
        url:'assets/one/main10.jpg'
    },
    {
        id:18,
        url:'assets/one/main9.jpg'
    },
    {
        id:19,
        url:'assets/one/main6.jpg'
    },    
]


const StrongText = ({ children }) => <strong>{children}</strong>;
const Activity = ({ title, description }) => (
    <>
        <FaCheckCircle /> <StrongText>{title}:</StrongText> {description} <br /><br />
    </>
);
export const dayHike = [
    {
        id: 1,
        title: 'Mount Barrek',
        desc: 'Mount Barrek (Monti Barrek) is a breathtaking natural wonder nestled within the Oromiya Region of Ethiopia.',
        mainDesc: `Mount Barrek (Monti Barrek) is a breathtaking natural wonder nestled within the Oromiya Region of Ethiopia. Also known as Barrec, Berek, Berek Terara, or Mount Rufi, this majestic mountain boasts an estimated terrain elevation of approximately 3100 meters above sea level, offering awe-inspiring panoramic views of the surrounding landscapes. Situated just 35 kilometers away from Addis Ababa,
\n The barrek mountain is surrounded by natural forests with a variety of plants, animal species, springs and wateralls.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'Barrek Mountain, located in the Oromia Region of Ethiopia, offers visitors a stunning natural landscape and a variety of activities to enjoy.',
        activity2:(
            <> 
        <StrongText>The activities we engage while visiting Barrek Mountains are:</StrongText> <br /><br />
                {[
                    { title: 'Hiking', description: ' Explore the mountain\'s trails and immerse yourself in its breathtaking vistas and challenging terrains.' },
                    { title: 'Photography', description: 'Capture the natural beauty of Mount Barrek, from sunrise vistas to the enchanting play of light and shadow amidst the forest canopy.' },
                    { title: 'Birdwatching', description: 'Barrak Mountain is home to a diverse array of bird species, making it a paradise for birdwatchers.' },
                    { title: 'Waterfall Exploration', description: 'Discover the abundant springs and cascading waterfalls that adorn the mountain\'s rugged terrain, offering moments of serenity amidst nature\'s splendor.' },
                    { title: ' Botanical Exploration', description: 'The forest is home to a wide variety of plant species, including many endemic to Ethiopia.' },
                    { title: 'Wildlife Viewing', description: 'Observe the indigenous wildlife that inhabits Mount Barrek\'s lush forests.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
        </>),
        url: ['assets/mountBerrek/barrak1.jpg','assets/mountBerrek/barrak2.jpg','assets/mountBerrek/barrak4.jpg','assets/mountBerrek/barrak3.jpg','assets/mountBerrek/barrak5.jpg','assets/mountBerrek/barrak8.jpg','assets/mountBerrek/barrak7.jpg','assets/mountBerrek/barrak6.jpg'],
        btn: 'Explore'
    },
    {
        id: 2,
        title: 'Mogle Mountain',
        desc: 'Mount Mogle or the Mogle hills are located some 19kms West of Addis Ababa. The hills contain a spectacularly diverse landscape.',
        mainDesc: `Nestled just 19 kilometers west of Addis Ababa, Mount Mogle, also known as the Mogle Hills, stands as a captivating natural wonder awaiting discovery. With an elevation reaching approximately 3015 meters above sea level, it proudly claims the title of the highest peak in the western vicinity of the capital city. The Mogle Hills boast a spectacularly diverse landscape that entices adventurers and nature enthusiasts alike.
\n Moreover, the Mogle Hills are a sanctuary for a rich variety of flora and fauna, further enhancing its appeal as an ultimate destination for nature lovers`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'Mogle Mountain, located 19 kilometers west of Addis Ababa, offers visitors a stunning natural landscape and a variety of activities to enjoy.',
        activity2:(
            <> 
        <StrongText>The activities we engage while visiting Mogle Mountain are:</StrongText> <br /><br />
                {[
                    { title: 'Hiking', description: 'Explore the diverse landscape of Mount Mogle by embarking on hiking adventures along its winding trails, offering varying levels of difficulty and breathtaking views.' },
                    { title: 'Birdwatching', description: ' Take advantage of the rich avian diversity found within the Mogle Hills, as the area serves as a sanctuary for numerous bird species' },
                    { title: 'Nature Photography', description: 'Capture the stunning scenery of Mount Mogle through photography, from sweeping panoramic views to close-up shots of the diverse flora and fauna that call the hills home.' },
                    { title: 'Wildlife Observation', description: 'Keep an eye out for the various wildlife species that inhabit Mount Mogle, including birds and small mammals' },
                    { title: ' Exploration', description: 'Take time to explore the nooks and crannies of Mount Mogle, from hidden valleys to cascading streams.' },
                    { title: 'Picnicking', description: 'Find a scenic spot amidst the beauty of Mount Mogle to enjoy a leisurely picnic. Whether atop a hill with panoramic views or beside a babbling brook, savoring a meal in nature adds to the overall experience of the mountain.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
        </>),
        url: ['assets/mogleMountain/mogle1.jpg','assets/mogleMountain/mogle8.jpg','assets/mogleMountain/mogle3.jpg','assets/mogleMountain/mogle4.jpg','assets/mogleMountain/mogle5.jpg','assets/mogleMountain/mogle6.jpg','assets/mogleMountain/mogle7.jpg','assets/mogleMountain/mogle1.jpg',],
        btn: 'Explore'
    },
    {
        id: 3,
        title: 'Portuguese Bridge',
        desc: 'The Portuguese Bridge, located 110 kilometers from Addis Ababa is a remarkable historical and architectural landmark.',
        mainDesc: `The Portuguese Bridge, also known as the Portuguese Bridge of Tis Issat, spans the Blue Nile River near the town of Debre Libanos.The view in this area is simply breathtaking, with a waterfall and a deep gorge leading down to the Jemma River valley. The bridge is a remarkable historical and architectural landmark, attracting tourists for its scenic beauty and historical significance.
\nThe Debre Libanos Monastery, situated nearby, is an important religious site in Ethiopia, founded in the 13th century. It is known for its ancient churches, as well as its stunning location overlooking the Blue Nile Gorge.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'The Portuguese Bridge, located 110 kilometers from Addis Ababa, offers visitors a stunning natural landscape and a variety of activities to enjoy.',
        activity2:(
            <> 
        <StrongText>The activities we engage while visiting Portuguese Bridge are:</StrongText> <br /><br />
                {[
                    { title: 'Scenic Viewing', description: 'Marvel at the majestic waterfall cascading into the deep gorge leading down to the Jemma River valley, creating a stunning natural spectacle.' },
                    { title: 'Birdwatching', description: 'Explore the area surrounding the Portuguese Bridge and keep an eye out for the numerous rare bird species that inhabit the region.' },
                    { title: ' Wildlife Observation', description: ' Observe the endemic Gelada baboons that call the area near the Portuguese Bridge home. Spend time watching these fascinating primates as they forage for food, socialize with one another, and navigate their natural habitat.' },
                    { title: 'Photography', description: ' Capture the scenic beauty and unique wildlife of the Portuguese Bridge area through photography.' },
                    { title: ' Historical Exploration', description: 'Learn about the historical significance of the Portuguese Bridge as a remarkable architectural landmark. Discover its origins and the role it has played in the region\'s history.' },
                    { title: 'Visit Debre Libanos Monastery', description: 'Visit the nearby Debre Libanos Monastery, an important religious site founded in the 13th century. Explore its ancient churches and stunning location overlooking the Blue Nile Gorge, gaining insight into Ethiopia\'s rich religious and cultural heritage.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
        </>),
        url: ['assets/portugueseBridge/portuguese1.jpg','assets/portugueseBridge/portuguese9.jpg','assets/portugueseBridge/portuguese3.jpg','assets/portugueseBridge/portuguese2.jpg','assets/portugueseBridge/portuguese5.jpg','assets/portugueseBridge/portuguese6.jpg','assets/portugueseBridge/portuguese7.jpg','assets/portugueseBridge/portuguese8.jpg',],
        btn: 'Explore'
    },

    {
        id:4,
        title: 'Yerer Mountain',
        desc: 'Yerer Mountain forest is one of the few remaining dry Afromontane forests found in the central highlands of Ethiopia.',
        mainDesc: `Yerer mountain, 12 kms north of Bishoftu town, is very near to Addis Ababa. Yerer Mountain forest is one of the few remaining dry Afromontane forests found in the central highlands of Ethiopia.
\nThe Yerer Mountain forest contains thirty-one indigenous woody specie. Juniperus procera, Pittosporum abyssinicum, Rhus retinorrhoea, Buddleja polystachya,Croton macrostachyus, Prunus africana and Acacia bussei are dominant tree species.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'yerer mountain, located in the Oromia Region of Ethiopia, offers visitors a stunning natural landscape and a variety of activities to enjoy.',
        activity2:(
        <> 
        <StrongText>The activities we engage while visiting yerer mountain are:</StrongText> <br /><br />
                {[
                    { title: 'Hiking and Trekking', description: 'Yerer Mountain offers opportunities for hiking and trekking through its diverse landscapes including deep canyons, gorges, caves, ridges, and forests.' },
                    { title: 'Birdwatching', description: 'The mountain is home to various bird species including the African Kingfisher, Blue Starling, Fantailed Raven, Pied Crow, Speckled Mousebird, Lappet-headed Vulture, and Striolated Bunting.' },
                    { title: ' Wildlife Viewing', description: ' Yerer Mountain is inhabited by various wildlife species such as Warthogs, Klipspringers, Velvet Monkeys, Baboons, and deer.' },
                    { title: 'Nature Walks', description: 'Taking leisurely walks along designated trails within the mountain forest allows visitors to immerse themselves in nature, observe the diverse flora and fauna, and appreciate the unique ecosystems of the area.' },
                    { title: 'Photography', description: 'The breathtaking scenery of Yerer Mountain, including its deep canyons, gorges, caves, and ridges, provides excellent opportunities for photography enthusiasts to capture stunning landscapes and wildlife.' },
                    { title: ' Botanical Exploration', description: 'With its diverse flora, including indigenous tree species such as Juniperus procera, Pittosporum abyssinicum, Rhus retinorrhoea, Buddleja polystachya, Croton macrostachyus, Prunus africana, and Acacia bussei, Yerer Mountain is an ideal destination for botanical enthusiasts interested in exploring unique plant species.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
        </>),
        url:['assets/yererM/yerer3.jpg','assets/yererM/yerer1.jpg','assets/yererM/yerer2.jpg','assets/yererM/yerer4.jpg','assets/yererM/yerer5.jpg','assets/yererM/yerer6.jpg','assets/yererM/yerer7.jpg','assets/yererM/yerer8.jpg',],
        btn: 'Explore'
    },
    {
        id:5,
        title: 'Dire Sokoru',
        desc: 'Dire Sokoru is a captivating destination nestled within the scenic landscapes of the Oromia region in Ethiopia.',
        mainDesc: `Dire Sokoru is a captivating destination nestled within the scenic landscapes of the Oromia region in Ethiopia. Blessed with picturesque farmlands, stunning vistas, and tranquil artificial lakes, Dire Sokoru offers visitors a serene retreat amidst nature's splendor. 
\nLocated just 35 kilometers away from the bustling city of Addis Ababa, this hidden gem boasts an elevation of 2950 meters above sea level, providing a refreshing escape from the urban hustle and bustle.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'Dire Sokoru, located in the Oromia Region of Ethiopia, offers visitors a stunning natural landscape and a variety of activities to enjoy.',
        activity2:(
        <> 
        <StrongText>The activities we engage while visiting Dire Sokoru are:</StrongText> <br /><br />
                {[
                    { title: 'Nature Walks:', description: 'Explore the picturesque landscapes of Dire Sokoru through leisurely strolls or guided nature walks. Discover the diverse flora and fauna that thrive in this scenic area, and soak in the tranquil ambiance of the Ethiopian highlands.' },
                    { title: 'Birdwatching', description: 'With its artificial lakes and lush surroundings, Dire Sokoru offers excellent opportunities for birdwatching.' },
                    { title: 'Photography', description: 'Capture the beauty of Dire Sokoru\'s landscapes, farmlands, and lakes through photography.' },
                    { title: 'Cultural Exploration', description: 'Learn about the local culture and heritage of the Oromia region by interacting with residents or visiting nearby villages.' },
                    { title: 'Wildlife Observation', description: 'Keep an eye out for wildlife such as small mammals, reptiles, and insects that inhabit the area surrounding Dire Sokoru. Observe their behavior and learn more about the ecological importance of these creatures.' },
                    { title: ' Relaxation', description: 'Simply sit back, relax, and unwind in the peaceful ambiance of Dire Sokoru.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
        </>),
        url:['assets/direSekoru/direSekoru1.jpg','assets/direSekoru/direSekoru2.jpg','assets/direSekoru/direSekoru3.jpg','assets/direSekoru/direSekoru4.jpg','assets/direSekoru/direSekoru5.jpg','assets/direSekoru/direSekoru6.jpg','assets/direSekoru/direSekoru7.jpg','assets/direSekoru/direSekoru8.jpg',],
        btn: 'Explore'
    },
    {
        id:6,
        title: 'Ensaro',
        desc: 'Ensaro is a beautiful place surrounded by waterfalls, farmlands and forests.',
        mainDesc: `Ensaro is a beautiful land surrounded by water! The surface of Ensaro is beautifully irrigated by the flowing Jema River, originating from Menze and Jiru. The lush greenery that blankets the city owes its vibrancy to this life-giving water source. 
\nEnsaro’s fertile lands provide a bountiful harvest, supporting a thriving agricultural community and ensuring a sustainable livelihood for its residents. The gentle sound of the river’s flow serves as a constant reminder of the interconnectedness between nature and the people of Ensaro, creating a serene and harmonious environment for all to enjoy.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'Ensaro, located in the Amhara Region of Ethiopia, offers visitors a stunning natural landscape and a variety of activities to enjoy.',
        activity2:(
            <> 
        <StrongText>The activities we engage while visiting Ensaro are:</StrongText> <br /><br />
                {[
                    { title: ' River Activities', description: 'Take advantage of the flowing Jema River for various water-based activities such as swimming, fishing, or simply relaxing by the riverside.' },
                    { title: 'Scenic Walks', description: 'Explore the beautiful landscape of Ensaro through leisurely walks or hikes. Wander through lush greenery, alongside the riverbanks, and enjoy the picturesque views of waterfalls and farmlands.' },
                    { title: 'Nature Photography', description: 'Capture the beauty of Ensaro\'s landscape through photography. From cascading waterfalls to vibrant farm fields, there are countless opportunities for stunning nature shots.' },
                    { title: 'Farm Visits', description: 'Experience rural life in Ensaro by visiting local farms and learning about traditional agricultural practices.' },
                    { title: 'Waterfall Exploration', description: 'Discover the beauty of Ensaro\'s waterfalls by embarking on a waterfall-hopping adventure.' },
                    { title: ' Birdwatching', description: 'Keep an eye out for the diverse bird species that inhabit Ensaro\'s riverside and forests.' },
                    { title: ' Cultural Immersion', description: ' Immerse yourself in the local culture of Ensaro by interacting with residents and learning about their way of life.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
        </>),
        url:['assets/ensaro/ensaro1.jpg','assets/ensaro/ensaro2.jpg','assets/ensaro/ensaro3.jpg','assets/ensaro/ensaro4.jpg','assets/ensaro/ensaro5.jpg','assets/ensaro/ensaro6.jpg','assets/ensaro/ensaro7.jpg','assets/ensaro/ensaro8.jpg',],
        btn: 'Explore'
    },
    {
        id:7,
        title: 'Green Lake',
        desc: ' Green Lake is a shallow lake encircled by a mountain ridge to the west and open on the eastern side. ',
        mainDesc: `Green Lake is one of a number of crater lakes near Debre Zeit in East Shewa Zone, 50 km west of the zonal capital, Nazaret. The green colour of the lake is because of the presence of algae in the lake.
\n Green Lake is a shallow lake encircled by a mountain ridge to the west and open on the eastern side. A lot of birds flock around the lake.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'Green Lake, located in the Oromia Region of Ethiopia, offers visitors a stunning natural landscape and a variety of activities to enjoy.',
        activity2:(
            <> 
        <StrongText>The activities we engage while visiting Green Lake are:</StrongText> <br /><br />
                {[
                    { title: ' Hiking and Exploration', description: 'Explore the surrounding mountain ridge and crater wall on foot. Hiking around Green Lake allows visitors to appreciate the natural beauty of the area while also providing opportunities for exercise and adventure.' },
                    { title: 'Birdwatching', description: 'Green Lake is known for attracting a diverse array of bird species, making it a paradise for birdwatchers. Visitors can observe waterfowl, waders, ducks, geese, and other avian species in their natural habitat.' },
                    { title: 'Nature Photography', description: 'Capture the beauty of Green Lake\'s landscape and wildlife through photography.' },
                    { title: 'Wildlife Observation', description: 'In addition to birdwatching, visitors can observe other wildlife species that inhabit the area surrounding Green Lake. Keep an eye out for native mammals, reptiles, and amphibians that may be present in the vicinity.' },
                    { title: ' Relaxation and Meditation', description: ' Allow the serene atmosphere of Green Lake to inspire relaxation and reflection.' },
                    { title: ' Botanical Exploration', description: 'Take a leisurely stroll around Green Lake to observe the diverse flora that thrives in the area. Look for native plants, shrubs, and trees that are adapted to the lake\'s alkaline waters and the surrounding crater environment.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
        </>),
        url:['assets/greenLake/greenLake1.jpg','assets/greenLake/greenLake9.jpg','assets/greenLake/greenLake3.jpg','assets/greenLake/greenLake4.jpg','assets/greenLake/greenLake5.jpg','assets/greenLake/greenLake11.jpg','assets/greenLake/greenLake11.jpg','assets/greenLake/greenLake10.jpg',],
        btn: 'Explore'
    },
    {
        id:8,
        title: 'Damocha Mountain',
        desc: 'Damocha peak is the highest mountain in the surroundings of Addis Ababa with an altitude of 3385 meters above sea level.',
        mainDesc: `Damocha peak is the highest mountain in the surroundings of Addis Ababa with an altitude of 3385 meters above sea level. The lower slopes of Mount Damocha are covered with plantation forests, which form a buffer zone for its natural forest, higher up the mountainside that featuring a wide variety of native tree species.
\nAll these provide a rich habitat for many animals, including the endemic Menelik’s bushbuck, anubis baboon, guereza (colobus monkey), bush pig, warthog, leopard, and serval cat, for example. Many different types of birds, including endemics and semiendemics, can also be seen.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'Damocha Mountain, located in the Oromia Region of Ethiopia, offers visitors a stunning natural landscape and a variety of activities to enjoy.',
        activity2:(
            <> 
        <StrongText>The activities we engage while visiting Damocha Mountain are:</StrongText> <br /><br />
                {[
                    { title: ' Hiking and Trekking', description: 'With its elevation and diverse ecosystems, Damocha Peak is likely to offer excellent hiking and trekking opportunities. Trails could range from easy walks through the plantation forests to more challenging hikes up the mountain slopes.' },
                    { title: 'Wildlife Watching', description: 'The rich biodiversity of Damocha Peak and its surroundings make it an ideal spot for wildlife watching. Visitors may have the chance to spot various animals such as Menelik’s bushbuck, anubis baboon, colobus monkeys, bush pigs, warthogs, leopards, and serval cats. Birdwatching enthusiasts can also enjoy observing a variety of bird species, including endemic and semi-endemic ones.' },
                    { title: 'Photography', description: 'The scenic beauty of the mountain and its diverse flora and fauna provide ample opportunities for photography enthusiasts to capture stunning images.' },
                    { title: 'Nature Walks', description: 'Exploring the lower slopes and plantation forests through nature walks can be a peaceful and immersive way to experience the natural beauty of Damocha Peak' },
                    { title: 'Picnicking', description: 'Enjoying a picnic amidst the natural surroundings can be a relaxing way to spend time with friends and family while taking in the beautiful views.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
        </>),
        url:['assets/damochaM/damocha1.jpg','assets/damochaM/damocha2.jpg','assets/damochaM/damocha3.jpg','assets/damochaM/damocha4.jpg','assets/damochaM/damocha5.jpg','assets/damochaM/damocha6.jpg','assets/damochaM/damocha7.jpg','assets/damochaM/damocha9.jpg',],
        btn: 'Explore'
    },
    {
        id:9,
        title: 'Aba Samuel reservoir',
        desc: 'Aba Samuel water reservoir is located 35 km. to the South of Addis Abeba, it drains water from the Big and Small Akaki Rivers.',
        mainDesc: `Aba Samuel water reservoir is located 35 km. to the South of Addis Abeba, it drains water from the Big and Small Akaki Rivers.
\nThe Akaki-Aba Samuel wetlands have been identified by the Birdlife international as a crucial staging ground for winter migratory bird species.The wetlands have been known to support as many as 20,000 water birds.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'Aba Samuel reservoir, located in the Oromia Region of Ethiopia, offers visitors a variety of activities to enjoy.',
        activity2:(
            <> 
        <StrongText>The activities we engage while visiting Aba Samuel reservoir are:</StrongText> <br /><br />
                {[
                    { title: 'Birdwatching', description: ' The reservoir and surrounding wetlands are home to a diverse array of bird species, including migratory birds. Birdwatchers can bring binoculars and bird guides to observe and identify different species, especially during the migratory season.' },
                    { title: 'Nature Walks', description: ' Exploring the wetlands and surrounding areas through nature walks can provide opportunities to appreciate the natural beauty of the landscape and observe wildlife, including birds, fish, and other animals.' },
                    { title: 'Photography', description: 'With the rich biodiversity and scenic views offered by the wetlands, photography enthusiasts can capture stunning images of birds, landscapes, and other natural elements' },
                    { title: 'Fishing', description: 'The presence of various fish species in the reservoir makes it a potential spot for fishing activities. Visitors can bring their fishing gear and enjoy angling in designated areas.'},
                    { title: 'Picnicking', description: 'Visitors can pack a picnic and enjoy a relaxing day by the reservoir, taking in the sights and sounds of nature while enjoying a meal with friends or family.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
        </>),
        url:['assets/abaSamuel/abasam1.jpg','assets/abaSamuel/abasam4.jpg','assets/abaSamuel/abasam3.jpg','assets/abaSamuel/abasam6.jpg','assets/abaSamuel/abasam5.jpg','assets/abaSamuel/abasam2.jpg','assets/abaSamuel/abasam7.jpg','assets/abaSamuel/abasam8.jpg',],
        btn: 'Explore'
    },
    {
        id:10,
        title: 'Kassem Gorge',
        desc: 'Kassem Gorge is a remarkably picturesque natural wonder located approximately 40 kilometers northeast of Addis Ababa, Ethiopia.',
        mainDesc: `Kassem Gorge is a remarkably picturesque natural wonder located approximately 40 kilometers northeast of Addis Ababa, Ethiopia. This captivating gorge boasts a rugged terrain characterized by steep rocky cliffs and a winding path that leads down to the serene riverbed below. At an elevation of 2514 meters above sea level, the gorge offers breathtaking panoramic views of the surrounding landscape.
\nOne of the most alluring features of Kassem Gorge is its stunning waterfall, which cascades gracefully amidst the dramatic rock formations, creating a mesmerizing spectacle that enchants visitors from far and wide. `.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'Kassem Gorge offers visitors a stunning natural landscape and a variety of activities to enjoy.',
        activity2:(
            <> 
        <StrongText>The activities we engage while visiting Kassem Gorge are:</StrongText> <br /><br />
                {[
                    { title: ' Hiking and Exploration', description: 'Embark on a thrilling adventure by hiking along the rocky path that descends to the riverbed. Explore the gorge\'s rugged terrain, winding trails, and hidden nooks, allowing you to immerse yourself in the breathtaking beauty of the natural surroundings.' },
                    { title: 'Photography', description: 'Capture the awe-inspiring landscapes, stunning waterfall, and diverse flora and fauna through photography. Whether you\'re an amateur enthusiast or a professional photographer, Kassem Gorge offers endless opportunities to capture mesmerizing images and create lasting memories.' },
                    { title: 'Nature Observation', description: ' Take time to appreciate the rich biodiversity of the area by observing the various plants, trees, and wildlife that call the gorge home. From colorful bird species to unique rock formations, there\'s no shortage of natural wonders to discover and admire.' },
                    { title: 'Waterfall Exploration', description: 'Get up close and personal with the captivating waterfall that graces Kassem Gorge. Feel the refreshing mist on your skin as you stand in awe of the cascading waters, or venture closer to experience the sheer power and beauty of this natural marvel.'},
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
        </>),
        url:['assets/kessem/kessem1.jpg','assets/kessem/kessem2.jpg','assets/kessem/kessem8.jpg','assets/kessem/kessem4.jpg','assets/kessem/kessem5.jpg','assets/kessem/kessem10.jpg','assets/kessem/kessem7.jpg','assets/kessem/kessem3.jpg',],
        btn: 'Explore'
    },
    {
        id:11,
        title: 'Keressa Mountain',
        desc: 'Keressa Mountain, nestled in the northeastern outskirts of Addis Ababa, Ethiopia, is a hidden gem waiting to be explored.',
        mainDesc: `Keressa Mountain, nestled in the northeastern outskirts of Addis Ababa, Ethiopia, is a hidden gem waiting to be explored. Rising majestically to an elevation of 3000 meters above sea level, this stunning natural wonder is situated approximately 37 kilometers from the bustling city center.
\nOne of the most captivating features of Keressa Mountain is its network of pristine rivers and natural springs. `.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'Keressa Mountain, located in the Oromia Region of Ethiopia, offers visitors a stunning natural landscape and a variety of activities to enjoy.',
        activity2:(
            <> 
        <StrongText>The activities we engage while visiting Keressa Mountain are:</StrongText> <br /><br />
                {[
                    { title: ' Hiking and Trekking', description: 'Explore the scenic trails of Keressa Mountain, immersing yourself in its breathtaking landscapes. Hiking opportunities allow visitors to discover hidden waterfalls, ancient rock formations, and diverse flora and fauna along the way.' },
                    { title: 'River and Spring Exploration', description: 'Follow the network of pristine rivers and natural springs that meander through Keressa Mountain. Take leisurely walks along the riverbanks, cool off with a refreshing dip in the crystal-clear waters, or simply relax and enjoy the peaceful ambiance of these tranquil oases.' },
                    { title: 'Photography', description: 'Capture the stunning vistas and natural beauty of Keressa Mountain through photography.' },
                    { title: 'Nature Observation', description: 'Observe the rich biodiversity of Keressa Mountain by keeping an eye out for native flora and fauna. Look for rare wildflowers, listen for the calls of birds and other wildlife, and take in the sights and sounds of this pristine wilderness.'},
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
        </>),
        url:['assets/kersaM/kersa2.jpg','assets/kersaM/kersa1.jpg','assets/kersaM/kersa3.jpg','assets/kersaM/kersa4.jpg','assets/kersaM/kersa5.jpg','assets/kersaM/kersa6.jpg','assets/kersaM/kersa7.jpg','assets/kersaM/kersa8.jpg',],
        btn: 'Explore'
    },
    {
        id:12,
        title: 'Wechecha Mountain',
        desc: 'Mount Wechecha, an extinct volcano located in the Mirab (West) Shewa Zone, stands as a majestic landmark west of Ethiopia\'s capital city, Addis Ababa.',
        mainDesc: `Mount Wechecha, an extinct volcano located in the Mirab (West) Shewa Zone, stands as a majestic landmark west of Ethiopia's capital city, Addis Ababa. This iconic mountain, boasting a peak elevation of 3,250 meters above sea level, commands attention as the tallest peak in the vicinity of Addis Ababa.
\n Situated approximately 25 kilometers southwest of Addis Ababa, Mount Wechecha is not only a geographical marvel but also a natural haven teeming with breathtaking landscapes and fertile farmland. `.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'Mount Wechecha, offers visitors a stunning natural landscape and a variety of activities to enjoy.',
        activity2:(
            <> 
        <StrongText>The activities we engage while visiting Mount Wechecha are:</StrongText> <br /><br />
                {[
                    { title: ' Hiking and Trekking', description: 'Explore the scenic trails and rugged terrain of Mount Wechecha by embarking on a hiking or trekking adventure. Ascend the slopes to enjoy breathtaking panoramic views of the surrounding landscapes and valleys below.' },
                    { title: 'Photography', description: 'Capture the stunning vistas and natural beauty of Mount Wechecha through photography. From sunrise to sunset, the changing light illuminates the landscape, offering countless opportunities to capture memorable images.' },
                    { title: 'Nature Observation', description: 'Observe the diverse flora and fauna that call Mount Wechecha home. From native plant species to birdlife and other wildlife, there are plenty of opportunities for nature enthusiasts to explore and discover.' },
                    { title: 'Picnicking', description: 'Pack a picnic and enjoy a relaxing meal amidst the natural beauty of Mount Wechecha.'},
                    { title: 'Exploring Farmland', description: 'Discover the fertile farmland surrounding Mount Wechecha and learn about traditional agricultural practices.'},
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
        </>),
        url:['assets/wechechaM/wechecha1.jpg','assets/wechechaM/wechecha2.jpg','assets/wechechaM/wechecha3.jpg','assets/wechechaM/wechecha4.jpg','assets/wechechaM/wechecha5.jpg','assets/wechechaM/wechecha1.jpg','assets/wechechaM/wechecha7.jpg','assets/wechechaM/wechecha8.jpg',],
        btn: 'Explore'
    },
]

export const campHike = [
    {
        id: 13,
        title: 'Wenchi',
        desc: 'Located about 150 km west of Addis Ababa in the Oromia region, the village of Wenchi is one of the most spectacular tourist destinations in Ethiopia.',
        mainDesc: `Wenchi Lake is a beautiful volcanic crater lake that is famed as “Africa Switzerland”, it is also home to natural forests, hot springs, and waterfalls, as well as a traditional village. there are two roads to get to Wenchi from Addis Ababa, Via Weliso and Via Ambo. Wenchi lake is located 155 km from Addis Ababa. 38 Km from Woliso or 28 KM from Ambo Total distance is similar either way. 
\nThe water of Lake Wonchi is used by locals for drinking, and a recent study from Ambo University shows that it can be used for drinking.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'Wenchi Lake, located in the Oromia Region of Ethiopia, offers visitors a stunning natural landscape and a variety of activities to enjoy.',
        activity2:( 
        <> 
        <StrongText>The activities we engage while visiting Wenchi Lake are:</StrongText> <br /><br />
                {[
                    { title: 'Hiking', description: 'Wenchi Crater is surrounded by beautiful hiking trails that offer stunning views of the lake and the surrounding countryside.' },
                    { title: 'Boat Rides', description: 'Rent a traditional papyrus boat or a modern boat and take a leisurely ride across the serene waters of Wenchi Lake.' },
                    { title: 'Birdwatching', description: 'Wenchi Lake is home to a diverse array of bird species, making it a paradise for birdwatchers.' },
                    { title: 'Camping', description: 'Camp overnight near Wenchi Lake for a more immersive experience in nature.' },
                    { title: 'Exploring Hot Springs', description: 'There are hot springs located near Wenchi Lake that are believed to have therapeutic properties.' },
                    { title: 'Visiting Monasteries and Churches', description: 'There are several monasteries and churches scattered around Wenchi Lake, offering insights into the region\'s rich cultural and religious heritage.' },
                    { title: 'Photography', description: 'With its breathtaking scenery and diverse wildlife, Wenchi Lake provides ample opportunities for photography enthusiasts to capture stunning shots.' }
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
        </>),
        url: ['assets/wenchi/wenchi21.jpg','assets/wenchi/wenchi3.jpg','assets/wenchi/wenchi4.jpg','assets/wenchi/wenchi5.jpg','assets/wenchi/wenchi6.jpg','assets/wenchi/wenchi7.jpg','assets/wenchi/wenchi1.jpg','assets/wenchi/wenchi8.jpg',],
        btn: 'Explore'
    },
    {
        id: 14,
        title: 'Danakil Depression',
        desc: 'Situated at the head of the African Rift Valley, in the Afar Triangle, the Danakil Depression constitutes one of the lowest places on earth.',
        mainDesc:`The Danakil Depression, also known as the Afar Depression, is a geological depression in the Afar Triangle, a part of the Great Rift Valley in East Africa. It lies within the borders of Ethiopia, Eritrea, and Djibouti. The depression is one of the hottest and lowest places on Earth, with temperatures often exceeding 50°C (122°F) and some areas lying more than 100 meters (328 feet) below sea level. \n\nThe region is known for its extreme and harsh environment, characterized by active volcanoes, geysers, hot springs, and salt flats. `.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
        activity1:'Visiting the Danakil Depression in Ethiopia offers a unique adventure in one of the hottest and most inhospitable places on Earth.',
        activity2:(
<>
<StrongText>The activities we engage while visiting Danakil Depression are:</StrongText> <br /><br />
                {[
                    { title: 'Visiting the Salt Flats', description: 'The Danakil Depression is home to vast salt flats where traditional salt mining has been practiced for centuries.' },
                    { title: 'Exploring the Sulphur Springs', description: 'The Danakil Depression is known for its otherworldly sulphur springs, such as the famed Dallol sulfur springs.' },
                    { title: 'Trekking to Erta Ale Volcano', description: 'Erta Ale is one of the few continuously active lava lakes in the world and a highlight of any visit to the Danakil Depression' },
                    { title: 'Camping under the Stars', description: 'Spend a night camping in the Danakil Depression to fully immerse in its surreal landscape. Sleep under the vast expanse of the desert sky and experience the tranquility of the remote wilderness.' },
                    { title: 'Visiting the Afar Villages', description: 'Learn about the nomadic way of life of the Afar people, their customs, and traditions, and gain insight into their resilience in harsh desert conditions.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
            </>),
        
        url: ['assets/danakilD/danakil2.jpg','assets/danakilD/danakil6.jpg','assets/danakilD/danakil3.jpg','assets/danakilD/danakil5.jpg','assets/danakilD/danakil9.jpg','assets/danakilD/danakil10.jpg','assets/danakilD/danakil9.jpg','assets/danakilD/danakil4.jpg',],
        btn: 'Explore'
    },
    {
        id: 15,
        title: 'Suba Menagesha Park',
        desc: 'Explore one of the largest remaining patches of indigenous montane forest in Ethiopia and is recognized as a UNESCO Biosphere Reserve.',
        mainDesc:`The Suba Menagesha Forest is a protected area located near the city of Addis Ababa in Ethiopia. It is commonly known as Menagesha Suba Forest or simply Menagesha Forest. This forest is one of the oldest and largest remaining patches of indigenous montane forest in Ethiopia and is recognized as a UNESCO Biosphere Reserve.\n\nThe Menagesha Suba Forest is renowned for its biodiversity, with a variety of plant and animal species found within its boundaries. `.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
    activity1:'Menagesha Suba Forest offers a tranquil escape into nature and a variety of activities for visitors to enjoy. ',
        activity2:(
            <>
<StrongText>The activities we engage while visiting Menagesha Suba Forest are:</StrongText> <br /><br />
                {[
                    { title: 'Hiking', description: 'The forest is crisscrossed with hiking trails that wind through its lush greenery. Lace up your hiking boots and explore the diverse flora and fauna of Menagesha Suba Forest while breathing in the fresh air.'},
                    { title: 'Picnicking', description: 'There are designated picnic areas where you can relax amidst the natural beauty of the surroundings.' },
                    { title: ' Birdwatching', description: 'Menagesha Suba Forest is home to a rich avian diversity, making it a paradise for birdwatchers. Keep an eye out for colorful species such as the Ethiopian Oriole, Abyssinian Woodpecker, and White-cheeked Turaco as you stroll through the forest.' },
                    { title: 'Botanical Exploration', description: 'The forest is home to a wide variety of plant species, including many endemic to Ethiopia.' },
                    { title: 'Visiting the Historic Church', description: 'Explore the Debre Libanos monastery\'s ancient architecture and learn about its significance in Ethiopian history and religious tradition.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
            </>
            ),
        url: ['assets/subaPark/suba31.jpg','assets/subaPark/suba1.jpg','assets/subaPark/suba2.jpg','assets/subaPark/suba4.jpg','assets/subaPark/suba6.jpg','assets/subaPark/suba7.jpg','assets/subaPark/suba6.jpg','assets/subaPark/suba5.jpg'],
        btn: 'Explore'
    },

    {
        id:16,
        title: 'Chebera Churchura National Park',
        desc: 'Is a must-visit for nature lovers, wildlife enthusiasts, and adventurers seeking an off-the-beaten-path experience in Ethiopia.',
        mainDesc:`Chebera Churchura National Park, located in Ethiopia's Southern Nations, Nationalities, and Peoples' Region, spans 1,215 square kilometers of diverse landscapes, including forests, grasslands, rivers, and wetlands. \n\nKnown for its biodiversity, the park is a haven for African elephants, big cats, primates, hippos, crocodiles, and numerous bird species. It also features scenic lakes and rivers like the Omo River, supporting rich ecosystems. Established for conservation, the park highlights the need for protecting its unique flora, fauna, and traditional human-nature relationships.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
    activity1:'Chebera Churchura National Park offers visitors a range of activities to enjoy amidst its rich biodiversity, scenic landscapes, and cultural significance.',
        activity2:(
            <>
<StrongText>Here are some activities we engage while visiting Chebera Churchura National Park:</StrongText> <br /><br />
                {[
                    { title: 'Wildlife Safari', description: 'Spot African elephants, lions, leopards, buffaloes, hippos, and other wildlife in their natural habitat.'},
                    { title: 'Birdwatching', description: 'Observe a variety of resident and migratory birds, including vultures, hornbills, and kingfishers.' },
                    { title: 'Hiking and Trekking', description: 'Explore the park’s diverse landscapes, from dense forests to open grasslands and rolling hills.' },
                    { title: 'Photography', description: 'Capture the park’s stunning wildlife, natural beauty, and unique ecosystems.' },
                    { title: 'Boat Trips and Fishing', description: 'Enjoy boat rides on rivers and lakes or try sustainable fishing in designated areas.' },
                    { title: 'Cultural Encounters:', description: 'Engage with nearby indigenous communities to learn about their traditions and sustainable practices.' },
                    { title: 'Camping', description: 'Spend the night in the wilderness at designated campsites, surrounded by the sounds of nature.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
            </>),
        url:['assets/chebera/chebera6.jpg','assets/chebera/chebera4.jpg','assets/chebera/chebera11.jpg','assets/chebera/chebera7.jpg','assets/chebera/chebera3.jpg','assets/chebera/chebera12.jpg','assets/chebera/chebera8.jpg','assets/chebera/chebera8.jpg'],
        btn: 'Explore'
    },

    {
        id:17,
        title: 'Awash Park & Doho Lodge',
        desc: 'Doho Lodge is a popular eco-lodge located near the Awash National Park. Awash National Park is located in the Afar Region of Ethiopia,',
        mainDesc:`The Awash National Park is a protected area located in the Afar Region of northeastern Ethiopia. It is one of the oldest and most established national parks in Ethiopia, established in 1966. The park encompasses diverse landscapes, including acacia woodlands, savannah plains, and the rugged Awash River gorge, which gives the park its name. \n\nDoho Lodge is a popular eco-lodge located near the Awash National Park in Ethiopia. It offers visitors a comfortable and serene accommodation option amidst the natural beauty of the area. The lodge is known for its unique architecture, which blends traditional Ethiopian design elements with modern amenities.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
    activity1:'Awash National Park, located in the Afar Region of Ethiopia, is a diverse and scenic park that offers visitors a range of activities to enjoy. Doho Lodge is a popular accommodation option within the park.',
        activity2:(
            <>
<StrongText>Here are some activities we engage while visiting Awash National Park and staying at Doho Lodge:</StrongText> <br /><br />
                {[
                    { title: 'Wildlife Safari', description: 'Awash National Park is home to a variety of wildlife, including East African oryx, Soemmering\'s gazelle, baboons, kudus, warthogs, and numerous bird species.'},
                    { title: 'Birdwatching', description: 'The park is a haven for birdwatchers, with over 450 species of birds recorded.' },
                    { title: 'Nature Walks', description: 'Embark on guided nature walks led by experienced park rangers to explore the park\'s scenic landscapes, including savannah plains, acacia woodlands, and the picturesque Awash River Gorge.' },
                    { title: 'Visit to the Awash Falls', description: 'Marvel at the majestic Awash Falls, where the Awash River plunges into a gorge, forming a beautiful waterfall.' },
                    { title: 'Relaxation at Doho Lodge', description: 'After a day of adventure in the park, unwind and relax at Doho Lodge, which offers comfortable accommodations amidst tranquil surroundings. Enjoy delicious meals at the lodge\'s restaurant, take a dip in the swimming pool, or simply soak in the serene ambiance of the lodge\'s grounds.' },
                    { title: 'Camping', description: 'Camping at designated campsites within Awash National Park for a more immersive experience in nature.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
            </>),
        url:['assets/dohoLodge/doho21.jpg','assets/dohoLodge/doho8.jpg','assets/dohoLodge/doho3.jpg','assets/dohoLodge/doho9.jpg','assets/dohoLodge/doho11.jpg','assets/dohoLodge/doho10.jpg','assets/dohoLodge/doho10.jpg','assets/dohoLodge/doho1.jpg'],
        btn: 'Explore'
    },
    {
        id:18,
        title: 'Bale Mountains',
        desc: 'The Bale Mountains National Park is a national park in the Oromia region of southeast Ethiopia.',
        mainDesc:`The Bale Mountains, also known as the Bale Mountains National Park, is a protected area located in the southeastern part of Ethiopia. It is one of the largest Afro-alpine habitats in Africa and is renowned for its stunning landscapes, diverse ecosystems, and rich biodiversity.\n\nThe Bale Mountains National Park encompasses a range of habitats, including montane forests, alpine moorlands, and grasslands. It is home to a wide variety of flora and fauna, including many endemic species. Some of the notable wildlife found in the park includes the Ethiopian wolf, the mountain nyala, the Bale monkey, and numerous bird species.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
    activity1:'The Bale Mountains National Park in Ethiopia offers visitors a range of activities to enjoy amidst its stunning landscapes and rich biodiversity.',
        activity2:(
            <>
<StrongText>Here are some activities we engage while visiting the Bale Mountains:</StrongText> <br /><br />
                {[
                    { title: 'Hiking and Trekking', description: 'The Bale Mountains are a hiker\'s paradise, with numerous trails that cater to different skill levels.'},
                    { title: 'Wildlife Viewing', description: 'Bale Mountains National Park is home to a variety of wildlife, including the endemic Ethiopian wolf, mountain nyala, Menelik\'s bushbuck, and numerous bird species.' },
                    { title: 'Horseback Riding', description: ' Explore the park\'s scenic trails on horseback for a unique perspective of the landscape.' },
                    { title: 'Birdwatching', description: 'The park boasts a rich avian diversity, with over 280 bird species recorded, including many endemic and migratory species. Birdwatchers can spot birds such as the Wattled Ibis, Blue-winged Goose, and Rouget\'s Rail while exploring the park\'s habitats.' },
                    { title: 'Camping', description: 'Spend a night under the stars by camping at designated campsites within the park.' },
                    { title: 'Cultural Encounters:', description: 'Take the opportunity to interact with local communities living around the park and learn about their traditional lifestyles, customs, and cultural heritage.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
            </>),
        url:['assets/baleM/bale1.jpg','assets/baleM/bale3.jpg','assets/baleM/bale2.jpg','assets/baleM/bale6.jpg','assets/baleM/bale9.jpg','assets/baleM/bale4.jpg','assets/baleM/bale4.jpg','assets/baleM/bale5.jpg',],
        btn: 'Explore'
    },
    {
        id:19,
        title: 'Omo Valley',
        desc: 'The Omo Valley is a captivating destination that offers a unique blend of cultural immersion, natural beauty, and anthropological intrigue.',
        mainDesc:`The Omo Valley is a region located in southwestern Ethiopia, known for its cultural diversity, traditional tribes, and stunning landscapes. The Omo Valley has become a popular destination for ethnographic tourism, attracting visitors from around the world who are interested in experiencing traditional tribal cultures firsthand. \n\nThe Omo Valley is home to numerous ethnic groups, each with its own distinct language, customs, and traditions. Some of the prominent tribes in the region include the Hamar, Mursi, Karo, Banna, Dassanech, and Arbore. These tribes have preserved their unique way of life for centuries, making the Omo Valley a fascinating destination for cultural exploration.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
    activity1:'The Omo Valley offers a wide range of activities for travelers seeking cultural immersion, adventure, and exploration in one of Africa\'s most culturally diverse and visually stunning regions.',
        activity2:(
            <>
<StrongText>Here are some activities we engage while visiting Omo Valley:</StrongText> <br /><br />
                {[
                    { title: 'Cultural Immersion', description: 'The Omo Valley is renowned for its diverse ethnic groups and traditional tribes. Visitors can immerse themselves in the rich cultural tapestry of the region by visiting villages, interacting with local communities, and participating in cultural ceremonies and rituals. This might include attending traditional dances, witnessing bull jumping ceremonies, or observing intricate body adornment practices.'},
                    { title: 'Photography', description: 'The vibrant cultures, colorful attire, and picturesque landscapes of the Omo Valley offer endless opportunities for photography enthusiasts. Visitors can capture stunning images of tribal people, traditional ceremonies, and the stunning natural scenery of the region.' },
                    { title: 'River Cruises and Wildlife Viewing', description: 'The Omo River, which flows through the valley, provides opportunities for boat cruises and wildlife viewing. Visitors can spot hippos, crocodiles, and a variety of bird species along the riverbanks while enjoying the scenic beauty of the surrounding landscape.' },
                    { title: 'Hiking and Trekking', description: 'The Omo Valley offers opportunities for hiking and trekking through its rugged terrain. Exploring the region on foot allows visitors to experience the natural beauty of the valley up close and enjoy panoramic views of the surrounding mountains and river valleys.' },
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
            </>),
        url:['assets/omoValley/omo2.jpg','assets/omoValley/omo1.jpg','assets/omoValley/omo3.jpg','assets/omoValley/omo9.jpg','assets/omoValley/omo11.jpg','assets/omoValley/omo6.jpg','assets/omoValley/omo7.jpg','assets/omoValley/omo5.jpg'],
        btn: 'Explore'
    },
    {
        id:20,
        title: 'Gheralta Mountains',
        desc: 'Explore the ancient rock-hewn churches carved into the cliffs and caves of the Gheralta Mountains.',
        mainDesc:`The Gheralta Mountains are a range located in the Tigray region of northern Ethiopia. They are renowned for their unique geological formations, historical significance, and religious heritage. \n\nThe Gheralta Mountains are characterized by their striking sandstone cliffs, spires, and rock towers, which have been sculpted by erosion over millions of years. The landscape is rugged and dramatic, with towering peaks and deep valleys, making it a popular destination for adventure seekers and rock climbers. The mountains are also considered sacred by the local community, who believe them to be inhabited by spirits and divine beings.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
    activity1:'The Gheralta Mountains offer a wide range of activities for travelers seeking adventure, cultural immersion, spiritual exploration, and appreciation of nature\'s beauty in Ethiopia.',
        activity2:(
            <>
<StrongText>The activities we engage while visiting Gheralta Mountains are:</StrongText> <br /><br />
                {[
                    { title: 'Visit Rock-Hewn Churches', description: ' Explore the ancient rock-hewn churches carved into the cliffs and caves of the Gheralta Mountains. These churches, adorned with intricate frescoes and carvings, offer a glimpse into Ethiopia\'s rich Christian heritage and are significant pilgrimage sites for Orthodox Christians.'},
                    { title: 'Hiking and Trekking', description: 'Embark on hiking and trekking adventures through the rugged terrain of the Gheralta Mountains. Discover scenic trails that lead to ancient churches, monasteries, panoramic viewpoints, and hidden valleys, offering unforgettable outdoor experiences and opportunities to appreciate the natural beauty of the region.' },
                    { title: ' Rock Climbing', description: 'For adventure enthusiasts, the Gheralta Mountains provide excellent rock climbing opportunities. Test your skills and challenge yourself on the sandstone cliffs, spires, and rock towers that characterize the landscape of the region.' },
                    { title: 'Cultural Encounters', description: ' Interact with the local community and learn about their customs, traditions, and way of life. Participate in cultural tours, visit villages, and engage with residents to gain insights into the rich cultural heritage of the Gheralta Mountains.'},
                    { title: 'Photography', description: ' Capture the stunning landscapes, ancient churches, and vibrant cultural scenes of the Gheralta Mountains through photography.'},
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
            </>),
        url:['assets/gheraltaMountain/gheralta3.jpg','assets/gheraltaMountain/gheralta2.jpg','assets/gheraltaMountain/gheralta8.jpg','assets/gheraltaMountain/gheralta12.jpg','assets/gheraltaMountain/gheralta14.jpg','assets/gheraltaMountain/gheralta5.jpg','assets/gheraltaMountain/gheralta7.jpg','assets/gheraltaMountain/gheralta11.jpg',],
        btn: 'Explore'
    },
    {
        id:21,
        title: 'Simien Mountains',
        desc: 'The Simien Mountains is renowned for its stunning landscapes, unique geological formations, and diverse wildlife.',
        mainDesc:`The Simien Mountains, also known as the Simien Mountains National Park, is a UNESCO World Heritage Site located in northern Ethiopia. It is renowned for its stunning landscapes, unique geological formations, and diverse wildlife. \n\nThe Simien Mountains are characterized by dramatic escarpments, deep valleys, and sharp peaks, including Ras Dashen, the highest peak in Ethiopia. The park is home to a variety of endemic species, including the Walia ibex, the Ethiopian wolf, and the Gelada baboon. It also supports a rich birdlife, with numerous bird species found within its boundaries.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
    activity1:' Simien Mountains National Park,  located in northern Ethiopia, is  known for its dramatic landscapes, diverse wildlife, and unique flora. ',
        activity2:(
            <>
<StrongText>The activities we engage while visiting Simien Mountains are:</StrongText> <br /><br />
                {[
                    { title: 'Trekking', description: 'The Simien Mountains are a hiker\'s paradise, offering a network of trails that wind through spectacular scenery. Embark on multi-day treks that take you to high mountain passes, deep valleys, and dramatic cliff faces.'},
                    { title: 'Wildlife Viewing', description: 'The Simien Mountains are home to several endemic species, including the iconic Walia ibex and the Gelada baboon.' },
                    { title: ' Birdwatching', description: ' The Simien Mountains are home to a variety of bird species, including several endemic and migratory birds.' },
                    { title: 'Camping', description: 'Spend a night under the stars by camping in designated campsites within the park. Camping allows you to fully immerse yourself in the wilderness and experience the sights and sounds of the Simien Mountains at night.'},
                    { title: 'Cultural Encounters', description: ' Take the opportunity to interact with local communities living around the park and learn about their traditional lifestyles, customs, and cultural heritage.'},
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
            </>),
        url:['assets/semienM/semien2.jpg','assets/semienM/semien3.jpg','assets/semienM/semien1.jpg','assets/semienM/semien4.jpg','assets/semienM/semien8.jpg','assets/semienM/semien6.jpg','assets/semienM/semien6.jpg','assets/semienM/semien7.jpg',],
        btn: 'Explore'
    },
    {
        id:22,
        title: 'Arba Minch',
        desc: 'Arba Minch is a growing resort town in Southern Ethiopia, situated by two large lakes that are separated by a land bridge.',
        mainDesc:`Arba Minch is a city located in the Southern Nations, Nationalities, and Peoples' Region (SNNPR) of Ethiopia. The name "Arba Minch" means "Forty Springs" in Amharic, referring to the numerous natural springs found in the area. The city is situated on the shores of Lake Abaya and Lake Chamo, two of the largest lakes in Ethiopia. \n\nArba Minch is known for its scenic beauty and rich biodiversity. The surrounding area is characterized by lush greenery, fertile farmland, and stunning landscapes. `.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
    activity1:'Arba Minch, located in the Southern Nations, Nationalities, and Peoples Region of Ethiopia, offers visitors a range of attractions and activities to enjoy.',
        activity2:(
            <>
<StrongText>The activities we engage while visiting Arba Minch are:</StrongText> <br /><br />
                {[
                    { title: 'Boat Safari on Lake Chamo', description: 'Take a boat safari on Lake Chamo, one of Ethiopia\'s largest lakes, to explore its scenic shores and observe wildlife. Keep an eye out for crocodiles, hippos, and a variety of bird species, including fish eagles and pelicans.'},
                    { title: ' Visit Nechisar National Park', description: 'Nechisar National Park, located near Arba Minch, is home to diverse wildlife, including zebras, gazelles, and numerous bird species.' },
                    { title: ' Visit Crocodile Ranch', description: 'Learn about crocodile conservation efforts at the Crocodile Ranch near Arba Minch.' },
                    { title: 'Explore Dorze Village', description: 'Take a day trip to nearby Dorze Village to experience the traditional way of life of the Dorze people.' },
                    { title: 'Hiking and Nature Walks', description: 'Explore the scenic landscapes surrounding Arba Minch on foot by hiking or taking nature walks.'},
                    { title: 'Camping', description: 'Spend a night under the stars by camping in designated campsites within the Arba Minch forest. Camping allows us to fully immerse in the wilderness and experience the sights and sounds of the Arba Minch at night.'},
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
            </>),
        url:['assets/arbaMinch/arba3.jpg', 'assets/arbaMinch/arba1.jpg','assets/arbaMinch/arba2.jpg','assets/arbaMinch/arba4.jpg','assets/arbaMinch/arba10.jpg','assets/arbaMinch/arba6.jpg','assets/arbaMinch/arba7.jpg','assets/arbaMinch/arba5.jpg',],
        btn: 'Explore'
    },
    {
        id:23,
        title: 'Lake Langano',
        desc: 'Lake Langano is a freshwater lake located in the Great Rift Valley of Ethiopia.',
        mainDesc:`Lake Langano is a freshwater lake located in the Great Rift Valley of Ethiopia, approximately 200 kilometers (124 miles) south of Addis Ababa, the capital city. It is one of the popular destinations for tourists and locals alike due to its natural beauty, recreational activities, and serene surroundings. \n\nLake Langano is known for its clear waters, sandy beaches, and scenic landscapes. The area around Lake Langano is also home to several resorts, lodges, and campsites, offering accommodation options ranging from basic camping facilities to luxury resorts.`.split('\n').map((line, index) => (
    <React.Fragment key={index}>
    {line}
    <br />
    </React.Fragment>
    )),
    activity1:'Lake Langano, located in the Great Rift Valley of Ethiopia, is a popular destination for travelers seeking relaxation and water-based activities.',
        activity2:(
        <>
<StrongText>The activities we engage while visiting Lake Langano are:</StrongText> <br /><br />
                {[
                    { title: 'Swimming', description: 'Lake Langano offers safe and clean swimming opportunities. The lake\'s waters are bilharzia-free, making it ideal for swimming.'},
                    { title: ' Boating and Canoeing', description: ' Explore the calm waters of Lake Langano. Paddle around the lake\'s perimeter and enjoy the tranquil surroundings.' },
                    { title: 'Fishing', description: ' Lake Langano is home to a variety of fish species, including tilapia and catfish. Fishing enthusiasts can try their luck from the shore or rent a boat for a more extensive fishing experience.' },
                    { title: 'Birdwatching', description: ' Keep an eye out for species such as African fish eagles, pelicans, herons, and kingfishers as you explore the lake\'s shores and nearby wetlands.' },
                    { title: 'Nature Walks and Hiking', description: 'Take leisurely walks along the lake\'s sandy shores or venture into the surrounding acacia woodlands for hiking opportunities.'},
                    { title: 'Sunbathing and Relaxation', description: ' Set up a beach towel or lounge chair by the lakeshore and soak up the sun.'},
                ].map((activity, index) => (
                    <Activity key={index} title={activity.title} description={activity.description} />
                ))}
            </>),
        url:['assets/langano/langano1.jpg','assets/langano/langano2.jpg','assets/langano/langano3.jpg','assets/langano/langano4.jpg','assets/langano/langano10.jpg','assets/langano/langano8.jpg','assets/langano/langano7.jpg','assets/langano/langano9.jpg'],
        btn: 'Explore'
    },    
]
export const next = [
    {
        id: 1,
        title: 'Kassem Gorge/Maru Waterfall',
        desc: 'Day hiking trip to Kassem Gorge/ Maru waterfall',
        mainDesc: dayHike.find(item => item.title === 'Kassem Gorge').desc,
        btn: 'Details',
        urls: ['/assets/main/next.jpg','/assets/main/dest1.jpg','/assets/main/dest3.jpg','/assets/main/dest4.jpg','/assets/main/dest5.jpg'],
        day: 'Sep 10, 2023',
        location: '40km North East of Addis Ababa',
        totalhike: '12Km',
        elevation: '2514 m.a.s.l',
        TechnicalDifficulty: '6/10',
        GoodFor: 'all level of hikers',
        cost: 1500,
        costDetail: '1500 ETB, which includes transportation by bus, lunch, tea, coffee, entrance fee, and a guide.',
        meetingLocation:'Megenagna at Kaldi\'s coffe',
        meetingtime: '7:30 AM',
        returnTime: '5:00 PM.',
        position: [9.153488, 39.196649],
        activity2: dayHike.find(item => item.title === 'Kassem Gorge').activity2,
        btn: 'Details'
    },
    {
        id: 2,
        title: 'arba minch',
        desc: 'Day Hiking trip to Yerer Mountains',
        urls: ['assets/arbaMinch/arba1.jpg', 'assets/arbaMinch/arba3.jpg','assets/arbaMinch/arba2.jpg','assets/arbaMinch/arba4.jpg','assets/arbaMinch/arba5.jpg'],
        day: 'Sep 10, 2023',
        location: '40km North East of Addis Ababa',
        totalhike: '12Km',
        elevation: '2514 m.a.s.l',
        TechnicalDifficulty: '6/10',
        GoodFor: 'all level of hikers',
        cost: 1500,
        costDetail: '1500 ETB, which includes transportation by bus, lunch, tea, coffee, entrance fee, and a guide.',
        meetingLocation:'Megenagna at Kaldi\'s coffe',
        meetingtime: '7:30 AM',
        returnTime: '5:00 PM.',
        position: [6.034995, 37.557309],
        btn: 'Details'
    },
    {
        id: 3,
        title: 'semien mountains',
        desc: 'Day Hiking trip to Yerer Mountains',
        urls: ['assets/semienM/semien1.jpg','assets/semienM/semien2.jpg','assets/semienM/semien1.jpg','assets/semienM/semien4.jpg','assets/semienM/semien5.jpg',],
        day: 'Sep 10, 2023',
        location: '40km North East of Addis Ababa',
        totalhike: '12Km',
        elevation: '2514 m.a.s.l',
        TechnicalDifficulty: '6/10',
        GoodFor: 'all level of hikers',
        cost: 1500,
        costDetail: '1500 ETB, which includes transportation by bus, lunch, tea, coffee, entrance fee, and a guide.',
        meetingLocation:'Megenagna at Kaldi\'s coffe',
        meetingtime: '7:30 AM',
        returnTime: '5:00 PM.',
        position: [8.890009, 38.958877],
        btn: 'Details'
    },
    {
        id: 4,
        title: 'langano lake',
        desc: 'Day Hiking trip to Yerer Mountains',
        urls: ['assets/langano/langano2.jpg','assets/langano/langano1.jpg','assets/langano/langano3.jpg','assets/langano/langano4.jpg','assets/langano/langano5.jpg'],
        day: 'Sep 10, 2023',
        location: '40km North East of Addis Ababa',
        totalhike: '12Km',
        elevation: '2514 m.a.s.l',
        TechnicalDifficulty: '6/10',
        GoodFor: 'all level of hikers',
        cost: 1500,
        costDetail: '1500 ETB, which includes transportation by bus, lunch, tea, coffee, entrance fee, and a guide.',
        meetingLocation:'Megenagna at Kaldi\'s coffe',
        meetingtime: '7:30 AM',
        returnTime: '5:00 PM.',
        position: [9.153631, 39.196590],
        btn: 'Details'
    },
]