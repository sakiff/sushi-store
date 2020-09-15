import React from 'react'
import img2 from '../img/img2.jpeg'

export const About = () => {
    return (
        <section className="about" id="about">
            <div className="aboutSection">
                <h1>About Us</h1>
                <h2 className="about-headline">Dedicated to Authentic Japanese Cuisine & Hospitality</h2>
                <div className="container innerAbout row">
                    <div className="column">
                        <br></br><br></br><br></br>
                        <p>It’s always been chic, in New York’s high-end sushi circles, to trace your lineage back to the old masters in Tokyo, but few restaurants have ever managed this confidence trick in quite such a theatrical, convincing way as this polished little atelier on the Upper East Side. Full kimono is the uniform worn by women on the waitstaff, and the hushed little rooms are adorned with slats of bamboo and cedarwood fit together without nails, in the ancient “Sukiya” style. </p>
                        <br></br><br></br>
                        <p>The young, ascetic looking chef Nozomu has worked at various high-end sushi palaces around the city, but what separates this pricey new omakase palace from the rest of the gilded herd is chef Nozomu’s expertly presented menu, which in sourcing, execution, and traditional flair (cod milt soup, anyone?) is about as close as you’ll come in this sushi-saturated town to some semblance of the real thing, short of hopping on a flight out to Tokyo. If you don’t have $300 to throw around, you can book a seat at the sushi-only “Ash Room” for $175, which, by Tokyo standards, is almost a bargain.</p>   
                    </div>
                    <div className="column">
                        <img src={img2} alt=''></img>
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default About
