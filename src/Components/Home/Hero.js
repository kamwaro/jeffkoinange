import React from 'react'
import africaneyes from '../jeffkoinange/africaneyes.jpg';
import courage from '../jeffkoinange/courage.jpg'
import jeffcigar from '../jeffkoinange/jeffcigar.jpg'
import './Home.css'

const Items = [
    {
        name:"book",
        img1:africaneyes
    },
    {
        name:"courage",
        img2:courage
    },
    {
        name:"Jeff chilling",
        img3:jeffcigar
    }
]

const Hero = () => {
    return (
        <div style={{display:"flex"}}>
            <div className="book" style={{padding:"30px",marginLeft:"15px",borderTop:"1px solid #fff",borderLeft:"1px solid #fff"}}>
                <img className='mainImg' src={Items[0].img1} />
                <div style={{textAlign:"right"}}>
                     <h3>Buy Online</h3>
                     <ul style={{listStyleType:"circle !important"}}>
                        <li><a>Text Book Centre</a></li>
                        <li><a>Amazon/Kindle</a></li>
                    </ul>
                 </div>
            </div>
            <div style={{padding:"30px"}}>
                <h1 className="bookHeader">Through my African eyes</h1>
                <p >For readers of Room and The Girls, a dazzling, tenderhearted debut about healing, family, and the exquisite wisdom of children, narrated by a six-year-old boy who reminds us that sometimes the littlest bodies hold the biggest hearts, and the quietest voices speak the loudest.</p>
                <p className="fly" > Zach retreats into his super-secret hideout and loses himself in a world of books and art. Armed with his newfound understanding, and with the optimism and stubbornness only a child could have, Zach sets out on a captivating journey towards healing and forgiveness, determined to help the adults in his life rediscover the universal truths of love and compassion needed to pull them through their darkest hours</p>
                <p >
                Squeezed into a coat closet with his classmates and teacher, first grader Zach Taylor can hear gunshots ringing through the halls of his school. A gunman has entered the building, taking nineteen lives and irrevocably changing the very fabric of this close-knit community. While Zach's mother pursues a quest for justice against the shooter's parents, holding them responsible for their son's actions, Zach retreats into his super-secret hideout and loses himself in a world of books and art. Armed with his newfound understanding, and with the optimism and stubbornness only a child could have, Zach sets out on a captivating journey towards healing and forgiveness, determined to help the adults in his life rediscover the universal truths of love and compassion needed to pull them through their darkest hours.
                </p>
                <button  style={{backgroundColor:"rgb(94,191,101)", color:"#fff",padding:"10px 30px",fontSize:"1.2rem",border:"none",outline:"none",borderRadius:"3px",letterSpacing:"2px",margin:"10px 0"}}>Read Excerpt</button>
                
            </div> 
        </div>

        
    )
}

export default Hero


//  width="400px" height="450px" 