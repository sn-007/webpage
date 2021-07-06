import { useState } from "react"
import "./works.scss"

function Works() {
    const [slide,setSlide] =useState(0);

    const data =[
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Dev",
            desc:
              "A Mern stack based web application desgined for Applicants and Recruiters. Focussed on the functionality rather than UI and UX ",
            img:
             "https://cdn.phpjabbers.com/files/templates_img/template133-list.jpg",

            ref:"https://github.com/sn-007/MERN_APP",
          },
          {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
              "A firebase powered react native Signal clone desgined by using clean interface provided by the official Signal App ",
            img:
              "https://techcrunch.com/wp-content/uploads/2016/12/gettyimages-597887642.jpg",
            ref:"https://github.com/sn-007/SignalClone"
          },

          {
            id: "3",
            icon: "./assets/writing.png",
            title: "Product Detection",
            desc:
              "As an extension of course project, worked with Perceptive Analytics for desgining a product detection  App prototype from Scratch",
            img:
              "https://www.perceptive-analytics.com/wp-content/uploads/2010/11/Perceptive_Analytics_logo.jpg",
          },

          {
            id: "4",
            icon: "./assets/writing.png",
            title: "DataBase Desgin",
            desc:
              "Constructed an optimised Database Desgin for a Secret Agency mini world, accessible by Command line Interface",
            img:
              "https://www.itpedia.nl/wp-content/uploads/2017/11/database2.jpg",

            ref:"https://github.com/sn-007/DataBase-Cli"
          },

          {
            id: "5",
            icon: "./assets/globe.png",
            title: "Web Scraping",
            desc:
              "Built archives for answering social questions like Farmer-protests, Vaccination conspirancies etc ",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6drPd6EJWCL6DnJS1XXjyHlIZyH2ztzTBw&usqp=CAU",
            ref:
            "https://github.com/sn-007/Scraping_FarmerProtests"
          },



    ];

    const clicked= (dir)=>{
        let current = slide
        dir==="left"? setSlide(current > 0 ? current-1:data.length -1)
        :(setSlide(current < data.length -1 ?current+1:0))

    }



    return (
        <div className="works" id="works">
          
            <div className="slider" 
            style={{transform:`translateX(-${slide * 100}vw)` }}
            >

                {data.map((item,index)=>(
                    <div className="container" key={index}>

                    <div className="item">

                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={item.icon} alt=""/>
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <span> <a href={item.ref} target="_blank" rel="noreferrer"  >Explore</a></span>
                                


                            </div>


                        </div>

                        <div className="right">
                            <img src={item.img} alt="" />
                            
                        </div>



                    </div>
                </div>


                ))}
                
            </div>
            <img src="assets/arrow.png" className="arrow left"  alt="" onClick={()=>clicked("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>clicked("right")} />
            
        </div>
    )
}

export default Works
