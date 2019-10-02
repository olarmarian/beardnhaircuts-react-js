import React from "react"
export default class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            showMenu:{},
            fontSize:{},
            displayed:false
        }
        this.displayMenu = this.displayMenu.bind(this);
    }
    componentDidMount(){
        this.setState({
            list:document.getElementById('list')
        })
    }
    displayMenu(){
        this.setState({
            displayed: !this.state.displayed
        });
        
        const display = {
            display:"block",
            position: "absolute",
            top:"60%",
            left: "70%",
            background:"#000",
        };
        const hidden = {
            display:"none"
        };

        if(!this.state.displayed){
            this.setState({showMenu : hidden});
            this.setState({
                fontSize : {fontSize:10}
            });
        }else{
            this.setState({showMenu : display});
        }
    }
    render() {
        return(
            <header>
                <nav className="navbar">
                    <div className="navbar-items">
                        <a href="#hero">beardnhaircuts</a>
                        <ul id="list" style={this.state.showMenu}>
                            <li><a style={this.state.fontSize} href="#about">Despre</a></li>
                            <li><a style={this.state.fontSize} href="#gallery">Galerie</a></li>
                            <li><a style={this.state.fontSize} href="#schedule">Orar si servicii</a></li>
                        </ul>   
                        <i className="fas fa-bars" onClick={this.displayMenu}></i>
                    </div>
                </nav>
            </header>
        );
    }
}