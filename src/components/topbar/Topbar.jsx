import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

function Topbar({menuOpen,setMenuOpen}) {
    console.log(menuOpen&&"active")
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">

                        <img src="assets/logo.png" alt="" />
                    
                    </a>

                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+91 9918888288</span>
                    </div>

                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>swamynaidu.ch@research.iiit.ac.in</span>
                    </div>

                </div>
                    
                

                <div className="right">

                    <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen)}}>
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                    </div>


                </div>
            </div>
            
        </div>
    )
}

export default Topbar
