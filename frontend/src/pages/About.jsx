import { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './about.css';

const About = () =>{

    useEffect(() => {
    window.scrollTo(0, 0); 
    }, []);

    return(
        <div className="about-page">
            <div className='about'>
            <section className="about-hero">
                <div>
                    <h1 className="main-heading">Ethio Hiking Community</h1>
                    <img className='main' src='assets/main/main2.jpg' alt="Detail Image" />
                </div>              
                <p className="hero-text">Ethio Hiking Community was born out of a passion for adventure and a deep love for nature. We aim to connect people with the beauty of Ethiopia’s diverse landscapes through immersive hiking and travel experiences. With over five years of experience in organizing unforgettable adventures, we've become a trusted name in the world of travel. Our community boasts more than 30,000 followers on social media, connecting hikers and travelers from all corners of the globe.</p>
                <p className="hero-text">At Ethio Hiking Community, we believe in the transformative power of travel. That's why we've curated a diverse range of experiences, spanning more than 20 breathtaking destinations across Ethiopia. From the towering peaks of the Semien Mountain to the lowest place on earth Danakil Depression, our trips are designed to inspire, challenge, and delight.</p>           
                <p className="hero-text">Come join us as we explore the great outdoors, forge lifelong friendships, and create memories that will last a lifetime. Together, we'll conquer mountains, traverse valleys, and discover the beauty of our Ethiopia, one step at a time.</p>
            </section>
    </div>
    <section className="guided-purpose">
    <h2 className="section-title">Guided by Purpose</h2>
    <p className="section-content">
    Our purpose goes beyond organizing hikes and travel experiences, we are passionate about connecting people to nature and inspiring a sense of adventure in every traveler. We believe that the beauty of Ethiopia’s diverse landscapes, from majestic mountains to untouched wilderness, deserves to be experienced in an authentic and sustainable way.
    </p>
    <p className="section-content">Our mission is to provide unforgettable journeys that immerse you in the natural wonders of Ethiopia while promoting eco-friendly travel. We aim to create experiences that not only take you off the beaten path but also leave a positive impact on the communities we visit and the environment we cherish.</p>
    <div >
        <p className="section-content">With a deep respect for nature and local cultures, we are committed to:</p> 
        <div className="section-content-list">
        <p className="section-content"><FaCheckCircle /> Offering safe, personalized adventures for all levels of hikers, from beginners to seasoned trekkers.</p>
        <p className="section-content"><FaCheckCircle /> Supporting sustainable tourism practices that preserve the beauty of Ethiopia for future generations.</p>
        <p className="section-content"><FaCheckCircle /> Encouraging cultural exchange by working closely with local guides and communities, allowing you to experience Ethiopia through the eyes of those who call it home.
        </p>
        </div>
    </div>
        <p className='section-content'>Through every adventure, we are guided by a simple yet profound purpose: to inspire exploration, foster a connection to the outdoors, and make a difference along the way.</p>
</section>
    <section className="core-values">
    <h2 className="section-title">Our Core Values</h2>
    <p className='hero-text center'>Our values define who we are and guide every adventure we create. These principles are at the heart of our mission and shape how we interact with our guests, the environment, and the communities we visit.</p>
    <div className="values-grid">
        <div className="value-item">
            <h3>Adventure with Purpose</h3>
            <p>We believe that every hike and travel experience should inspire curiosity and exploration. Whether you’re trekking through Ethiopia’s stunning landscapes or discovering hidden trails, our goal is to offer adventures that leave lasting memories. We create journeys that challenge you to step out of your comfort zone and embrace the spirit of adventure.
            </p>
        </div>
        <div className="value-item">
            <h3>Respect for Nature</h3>
            <p>The environment is our greatest asset, and we are committed to preserving it. Our eco-conscious approach ensures that we minimize our impact on the natural world, following sustainable travel practices that protect the ecosystems we explore. We believe in leaving no trace, and we educate our travelers on how to travel responsibly.</p>
        </div>
        <div  className="value-item">
            <h3>Empowering Local Communities</h3>
            <p>We partner with local guides and communities to create authentic travel experiences that benefit everyone involved. By working closely with those who know the land best, we support local economies and encourage cultural exchange. This allows us to showcase Ethiopia’s rich heritage while giving back to the people who make these adventures possible.</p>
        </div>
        <div  className="value-item">
            <h3>Safety First</h3>
            <p>Your safety is our top priority. We take every precaution to ensure that all of our hikes and tours are well-planned, with experienced guides who are trained in first aid and emergency response. We also provide detailed preparation advice, so you’re ready for the adventure ahead.</p>
        </div>
        <div  className="value-item">
            <h3>Excellence in Service</h3>
            <p>From the moment you book your trip to the time you complete your journey, we strive to offer the highest level of service. Our personalized approach means we tailor each adventure to your needs, ensuring that every traveler experiences the best that Ethiopia has to offer.</p>
        </div>
        <div  className="value-item">
            <h3>Community Engagement</h3>
            <p>We believe in the power of connection. Our experiences are about more than just travel; we strive to build a global community of adventurers who share our passion for the outdoors and for meaningful interactions with local cultures.</p>
        </div>
    </div>
    </section>
    <section className="safety-preparation">
    <h2 className="section-title">Safety and Preparation</h2>
    <p className='hero-text center'>We take every step to ensure that our tours and hikes are safe, well-organized, and enjoyable for all participants. Whether you’re an experienced hiker or a first-time adventurer, we equip you with the knowledge and support needed to confidently embark on your journey.</p>
    <div className='all-safety'>
        <div className='safety-list'>
        <h2>1. Experienced and Trained Guides</h2>
        <p>Our guides are highly experienced and trained in safety protocols, first aid, and emergency response. Each guide has an intimate knowledge of the trails and terrain, allowing them to lead you safely through Ethiopia’s diverse landscapes. In case of any unforeseen circumstances, they are prepared to handle emergencies swiftly and professionally.</p>
    </div>
    <div className='safety-list'>
        <h2>2. Health and Fitness Support</h2>
        <p>We encourage travelers to assess their fitness level before selecting a hike. For those new to hiking, we offer beginner-friendly tours that allow you to build your stamina at a comfortable pace. If you have any health concerns or special requirements, our team will work with you to ensure a safe and enjoyable experience.</p>
    </div>
    <div className='safety-list'>
        <h2>3. Detailed Preparation Guidelines</h2>
        <p>We provide every traveler with detailed preparation advice to ensure you are well-equipped for the adventure ahead. This includes:</p>
        <div className="safety-content-list">
            <p><FaCheckCircle /> <strong>What to Pack:</strong>A list of recommended gear and clothing based on the season, location, and difficulty level of your chosen tour.</p>
            <p><FaCheckCircle /> <strong>Physical Fitness Requirements:</strong> Each tour includes a description of the required fitness level. While some trails are suitable for beginners, others may require a higher level of endurance. </p>
        </div>
    </div>
    <div className='safety-list'>
        <h2>4. Emergency Preparedness</h2>
        <p>Before every hike or tour, we conduct a comprehensive safety briefing. This includes:</p>
        <div className="safety-content-list">
            <p><FaCheckCircle /> An overview of the route and what to expect.</p>
            <p><FaCheckCircle /> Emergency procedures and contact information.</p>
            <p><FaCheckCircle /> Weather updates and any necessary adjustments to the itinerary.
            </p>
        </div>
        <p>We also carry essential safety equipment such as first-aid kits, communication devices, and emergency shelters when necessary.</p>
    </div>
    <div className='safety-list'>
        <h2>5. Weather and Terrain Awareness</h2>
        <p>Ethiopia’s terrain and weather can vary greatly depending on the season and region. We provide updates on expected weather conditions for each tour and advise on how to dress and prepare accordingly. Whether you’re hiking in the dry highlands or the misty forests, our goal is to keep you comfortable and well-prepared.</p>
    </div>
    <div className='safety-list'>
        <h2>6. Permits and Regulations</h2>
        <p>We handle all necessary permits and follow local regulations to ensure compliance with conservation efforts and safety standards. This includes securing entry permits for protected areas and informing you about any guidelines regarding wildlife interactions, photography, and environmental preservation.</p>
    </div>
    </div>
</section>
        <section className="services">
        <h2 className="section-title">Services and Experiences</h2>
        <p className='hero-text center'>We offer a wide range of services designed to immerse you in the beauty and culture of Ethiopia. Whether you’re seeking adventure, relaxation, or cultural enrichment, our experiences are crafted to meet the needs of every traveler.</p>
        <div className="services-grid">
        <div className="service-item">
            <h3>Guided Hiking Tours</h3>
            <p>Explore Ethiopia’s diverse landscapes with our expert-guided hiking tours. Our hikes cater to all levels of experience:</p>
        <div className="service-content-list">
            <p><FaCheckCircle /> <strong>Beginner-friendly</strong>  hikes for those new to trekking.</p>
            <p><FaCheckCircle /> <strong>Intermediate trails</strong>  for those seeking a bit more challenge.</p>
            <p><FaCheckCircle /> <strong>Advanced expeditions</strong>  for seasoned hikers looking to conquer Ethiopia’s highest peaks.
            </p>
        </div>
        </div>
        <div className="service-item">
            <h3>Group and Private Tours</h3>
            <p>We offer both group tours and private expeditions:</p>
            <div className="service-content-list">
            <p><FaCheckCircle /> <strong>Group Tours:</strong> Join a small group of like-minded adventurers for a shared experience. Our group tours foster camaraderie and are a great way to meet fellow travelers.</p>
            <p><FaCheckCircle /> <strong>Private Tours:</strong> For those who prefer a more personalized experience, we offer private tours, allowing you to explore at your own pace and focus on what interests you most.</p>
        </div>
        </div>
        <div className="service-item">
            <h3>Cultural Immersion Experiences</h3>
            <p>Our tours go beyond just hiking. We give you the opportunity to connect with Ethiopia’s rich cultural heritage. Visit local villages, experience traditional cuisine, and engage with communities in a meaningful way. Our local guides will introduce you to the customs and stories that make Ethiopia unique.</p>
        </div>
        <div className="service-item">
            <h3>Custom Adventure Itineraries</h3>
            <p>Looking for a personalized adventure? We create custom itineraries based on your preferences. Whether you want to explore hidden trails, visit cultural landmarks, or combine hiking with other activities like birdwatching or camping, we design each trip to suit your interests and fitness level.</p>
        </div>
        <div className="service-item">
            <h3>Photography Expeditions</h3>
            <p>Ethiopia’s landscapes offer incredible opportunities for photographers. We offer specialized photography tours that focus on capturing the beauty of the country’s mountains, valleys, and wildlife. Whether you’re a professional photographer or just passionate about photography, our guides will take you to the best spots for breathtaking shots.</p>
        </div>
        <div className="service-item">
            <h3> Wildlife and Nature Tours</h3>
            <p>Ethiopia is home to an incredible array of wildlife, from rare species of birds to unique mammals like the Ethiopian wolf. Our wildlife tours offer you the chance to experience the country's rich biodiversity up close, guided by experts who know the best locations for wildlife viewing.</p>
        </div>
        </div>
    </section>
            <section className='common-activities'>
                <h1 className='section-title'>Common Activities</h1>
                <p className='hero-text center'>We believe in creating more than just unforgettable hiking experiences. We enjoy the simple pleasures of life, like sharing a cup of traditional Ethiopian coffee, preparing meals together, and bonding over stories around the campfire.</p>
                <div className='activities-img'>
                    <div className='left'>
                    <img className='' src='assets/main/main15.jpg' alt="Detail Image" />
                    <img className='' src='assets/main/main12.jpg' alt="Detail Image" />
                    <img className='' src='assets/main/main13.jpg' alt="Detail Image" />
                    <img className='' src='assets/main/main14.jpg' alt="Detail Image" />
                </div>
                <div className='right'>
                    <img className='type24' src={'assets/main/main10.jpg'} alt="Detail Image" />
                </div>
                </div>
            </section>
        </div>
    )

};
export default About;