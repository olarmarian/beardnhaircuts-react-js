import React from "react"

export default function Schedule(){
    return(
        <div id="schedule" className="schedule">
            <h1>Orar</h1>
                <div className="schedule-content">
                <section>
                    <h1>LUNI-VINERI</h1>
                    <h3>10:00 - 20:00</h3>
                </section>
                <section>
                    <h1>SAMBATA</h1>
                    <h3>11:00 - 17:00</h3>
                </section>
                <section>
                    <h1>DUMINICA</h1>
                    <h3>INCHIS</h3>
                </section>
            </div>
        </div>
    );
}