import React from "react"
import hero from "../images/hero-2.jpeg"
import Description from "./Description"
import Services from './Services';
import Gallery from './Gallery';
import Schedule from './Schedule';

export default function Content() { 
    return(
        <main>
        <div id="hero" className="hero">
            <img src={hero} alt="hero"/>
            <section className="details-section">
                <p className="intro">"To make a fine gentleman, several trades are required, but chiefly a barber." ~ Oliver Goldsmith</p>
                <h3 className="title">Locul perfect pentru a deveni un gentleman !</h3>
                <h2 className="subtitle">Vino si alatura-te familiei noastre</h2>
            </section>
            </div>
            <Description />
            <Gallery />
            <Schedule/>
            <Services />
        </main>
    );
}