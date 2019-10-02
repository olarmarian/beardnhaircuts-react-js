import React from "react"
import gallery from "../gallery.js"
import Picture from "./Picture.js"
export default class Gallery extends React.Component{
    constructor(){
        super();
        this.state = {
            loading: false,
            gallery:[]
        };
    }
    componentDidMount(){
        this.setState({gallery:gallery});   
    }
    render() {
        const body = this.state.gallery.map(item =><Picture key={item.id} image={item.image}/>);
        return (
            <div id="gallery" className="gallery">
                <h1>Galerie</h1>
                <div className="gallery-grid">
                    {body}
                </div>
            </div>
        )
    }
}