import React, {useState, useEffect} from "react"

function MemeGenerator(){

    const [topText, updateTopText] = useState("")
    const [bottomText, updateBottomText] = useState("")
    const [randomImg, updateRandomImg] = useState("http://i.imgflip.com/1bij.jpg")
    const [allMemeImgs, updateAllMemeImgs] = useState([]);

    
    useEffect(()=>{

    })

    return (
        <div>
            <form className="meme-form">
                <input
                    type="text"
                    name="topText" 
                    placeholder="Top Text"
                    value={topText}
                    onChange={(e)=>{updateTopText(e.target.value)}}
                />
                <input
                    type="text"
                    name="bottomText" 
                    placeholder="Bottom Text"
                    value={bottomText}
                    onChange={(e)=>{updateBottomText(e.target.value)}}
                />
            </form>
            <div className="meme">
                <img src={randomImg} alt="" />
                <h2 className="top">{topText}</h2>
                <h2 className="bottom">{bottomText}</h2>
            </div>

        </div>
    )



}

export default MemeGenerator