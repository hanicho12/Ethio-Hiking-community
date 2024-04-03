import './about.css'

const About = () =>{
    return(
        <div className="about-container">
            <div className='about'>
                <h1>About Ethio Hiking Community</h1>
                <img className='main' src={`${import.meta.env.BASE_URL}assets/main/main2.jpg`} alt="Detail Image" />
            <p>Embark on a journey of exploration and camaraderie with Ethio Hiking Community. With over five years of experience in organizing unforgettable adventures, we've become a trusted name in the world of travel. Our community boasts more than 15,000 followers on social media, connecting hikers and travelers from all corners of the globe.</p>
    <p>At Ethio Hiking Community, we believe in the transformative power of travel. That's why we've curated a diverse range of experiences, spanning more than 20 breathtaking destinations across Ethiopia. From the towering peaks of the Semien Mountain to the lowest place on earth Danakil Depression, our trips are designed to inspire, challenge, and delight.</p>
    <p>But what truly sets us apart is our unwavering commitment to excellence. We're proud to have been rated 5 stars by all travelers on Google, a testament to our dedication to providing exceptional service and unforgettable experiences. Whether you're a seasoned hiker or a first-time adventurer, you'll find a warm welcome and a world of opportunities with Ethio Hiking Community.</p>
    <p>Come join us as we explore the great outdoors, forge lifelong friendships, and create memories that will last a lifetime. Together, we'll conquer mountains, traverse valleys, and discover the beauty of our Ethiopia, one step at a time.</p>
            </div>
            
    <div className='trip-type'>
    <h1>Trip Types</h1>
    <p className='types-desc'>Commence your next adventure with our diverse range of trip types, tailored to suit every explorer's preferences and experience level. We offer two common types of trips: </p>
    
    <div className='types'>
        <div className='type1'>
            <h3>Day Hike</h3>
            <p>Experience the beauty of nature on our exhilarating day hikes. Perfect for those seeking a quick escape into the wilderness, our day hikes offer stunning views, refreshing outdoor experiences, and the opportunity to explore breathtaking landscapes without the need for overnight accommodations. Whether you're a seasoned hiker or a beginner looking to dip your toes into outdoor adventure, our day hikes promise unforgettable experiences and cherished memories.</p>
            {/* <div class="image-grid">
                <img className='type11' src={`${import.meta.env.BASE_URL}assets/main/main6.jpg`} alt="Detail Image" />
                <img className='type12' src={`${import.meta.env.BASE_URL}assets/main/main7.jpg`} alt="Detail Image" />
                <img className='type13' src={`${import.meta.env.BASE_URL}assets/main/main8.jpg`} alt="Detail Image" />
                <img className='type14' src={`${import.meta.env.BASE_URL}assets/main/main9.jpg`} alt="Detail Image" />
            </div>                */}
        </div>
        
        <div className='type2'>
            <h3>Camp Hike/Backpacking Hike</h3>
            <p>Unleash your adventurous spirit with our immersive camp hikes and backpacking adventures. Dive deep into the heart of nature as you embark on multi-day journeys, camping under the stars and forging unforgettable memories along the way. Our expert guides will lead you through rugged terrains, remote wilderness areas, and hidden gems, ensuring a safe and rewarding experience from start to finish. Whether you're scaling mountain peaks, trekking through dense forests, or traversing expansive landscapes, our camp hikes promise the ultimate outdoor adventure.</p>
            {/* <div className='image-gird'>
                <img className='type21' src={`${import.meta.env.BASE_URL}assets/main/main1.jpg`} alt="Detail Image" />
                <img className='type22' src={`${import.meta.env.BASE_URL}assets/main/main3.jpg`} alt="Detail Image" />
                <img className='type23' src={`${import.meta.env.BASE_URL}assets/main/main4.jpg`} alt="Detail Image" />
                <img className='type24' src={`${import.meta.env.BASE_URL}assets/main/main5.jpg`} alt="Detail Image" />
            </div>                   */}
        </div>
    </div>
</div>

            <div className='common-activities'>
                <h1>common activities</h1>
                <p>we love enjoying coffee and making food</p>
                <div className='activities-img'>
                    <div className='left'>
                    <img className='' src={`${import.meta.env.BASE_URL}assets/main/main15.jpg`} alt="Detail Image" />
                    <img className='' src={`${import.meta.env.BASE_URL}assets/main/main12.jpg`} alt="Detail Image" />
                    <img className='' src={`${import.meta.env.BASE_URL}assets/main/main13.jpg`} alt="Detail Image" />
                    <img className='' src={`${import.meta.env.BASE_URL}assets/main/main14.jpg`} alt="Detail Image" />
                </div>
                <div className='right'>
                    <img className='type24' src={`${import.meta.env.BASE_URL}assets/main/main10.jpg`} alt="Detail Image" />
                </div>
                </div>
            </div>
            <div className="last-container">
          <div className="title-container">
            <h1>WHY TRAVEL WITH US</h1>
            <p>When you choose to embark on a journey with us, you're not just booking a trip – you're stepping into a world of unparalleled adventure and discovery. With years of expertise and a deep passion for exploration, our team is dedicated to curating experiences that transcend the ordinary and leave a lasting impression. At the heart of everything we do lies a commitment to excellence. From the moment you reach out to us, we're here to tailor every aspect of your journey to your unique desires and preferences.</p>
            <br />
        <p> Whether you dream of trekking through ancient forests, basking on sun-drenched beaches, or delving into vibrant cultural experiences, we'll work tirelessly to turn your vision into reality. But our dedication to your satisfaction doesn't stop there. We understand that every traveler is different, which is why we go above and beyond to ensure that your adventure is as seamless and stress-free as possible. From expertly crafted itineraries to luxurious accommodations and attentive service, we leave no stone unturned in our quest to provide you with the ultimate travel experience.</p>
          </div>
        </div>
        </div>
    )

};
export default About;