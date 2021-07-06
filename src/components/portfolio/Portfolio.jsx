import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { useEffect, useState } from "react";
import {featuredPortfolio,webappPortfolio,mobileappPortfolio,
databasePortfolio,diversePortfolio} from "../../data"


function Portfolio() {
    const list = [
        {
          id: "featured",
          title: "All",
        },
        {
          id: "webapp",
          title: "Web",
        },
        {
          id: "mobileapp",
          title: "Mobile",
        },
        {
          id: "database",
          title: "Database",
        },
        {
          id: "diverse",
          title: "Diverse"
        }
      ];
      const [selected,setSelected]=useState(list[0].id);
      const [data,setData]=useState(featuredPortfolio);


      useEffect(()=>{
          if(selected === "mobileapp") setData(mobileappPortfolio);
          else if(selected === "webapp") setData(webappPortfolio);
          else if(selected === "database") setData(databasePortfolio);
          else if(selected === "diverse") setData(diversePortfolio);
          else setData(featuredPortfolio);


      },[selected]);
    
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            
            <ul>
                {list.map((item,index) =>(
                   <PortfolioList 
                    title={item.title}
                    active={selected===item.id} 
                    id={item.id}
                    key={index}
                    setSelected={setSelected} />

                ))}
                
            </ul>
            <div className="container">

                {
                    data.map((item,index)=>(
                        <div className="item" key={index}>
                        <img src={item.img} alt=""/>
                        <h3>{item.title}</h3>
                        </div>
    

                    ))
                }

            </div>
            
           



            
            
        </div>
    )
}

export default Portfolio
