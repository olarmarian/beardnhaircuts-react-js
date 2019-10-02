import React from "react"


export default function Description(){
    return(
        <div id="about" className="description">
            <div className="description-content">
                <h1> John Doe </h1>  
                <div className="description-grid">
                    <div className="text-section">
                        <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                        <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p> But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="contact-section">
                        <p><i className="fas fa-phone"></i> 0752222222</p>
                        <p><i className="fas fa-map-marker"></i> Nr. x, Strada Y, Oras Z</p>
                        <p><i className="far fa-envelope"></i> email@gmail.com</p>
                        <a href="https://beardnhaircuts.netlify.com/"><i className="fab fa-chrome"></i> www.beardnhaircuts.netlify.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}