import "./test.scss"

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Anime",
      title: "My Daily Routine",
      img:
        "https://cache.desktopnexus.com/thumbseg/193/193301-bigthumbnail.jpg",
      
      desc:
        "I watch anime like hell. The philosophical analysis, character sketch, emotions; seen and experieced while watching anime hits different.   ",
    },
    {
      id: 2,
      name: "Cricket",
      title: "A Passion?",
      img:
        "https://media.gettyimages.com/vectors/cricket-logo-vector-id467029165",
      
      desc:
        "No Questions asked!",
      
    },
    {
      id: 3,
      name: "Dogs",
      title: "Don't be tricked",
      img:
        "https://i.pinimg.com/originals/e8/e8/73/e8e873576c9c1ce771ce07066c1adb87.png",
      icon: "assets/linkedin.png",
      desc:
        "I always dreamt of raising a well trained intelligent dog. But the truth is i am half scared of dogs, #phobia",
    },
    
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>More About Me</h1>
      <div className="container">
        {data.map((d,index) => (
          <div className={d.featured ? "card featured" : "card"} key={index}>
            <div className="top">
              <img
                className="user"
                src={d.img}
                alt=""
              />
              
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}