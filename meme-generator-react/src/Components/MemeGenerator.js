import React, {useState, useEffect} from "react"

function MemeGenerator(){

    const [topText, updateTopText] = useState("")
    const [bottomText, updateBottomText] = useState("")
    const [randomImg, updateRandomImg] = useState("http://i.imgflip.com/1bij.jpg")
    const [allMemeImgs, updateAllMemeImgs] = useState([]);

    //fetch
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response =>{
                const {memes} = response.data
                updateAllMemeImgs(memes)
            })

    },[])

    const handleFormSubmit = (event)=>{
        event.preventDefault()
        //update randomImg with a random meme url from allMemeImgs
        const randomNum = Math.floor(Math.random()*allMemeImgs.length)
        const randomUrl = allMemeImgs[randomNum].url
        updateRandomImg(randomUrl)
    }

    return (
        <div>
            <form className="meme-form" onSubmit={handleFormSubmit}>
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
                <button>Gen</button>
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