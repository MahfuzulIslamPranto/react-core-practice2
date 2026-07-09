import { use, useState } from 'react'
import './App.css'
export default function Counter(){
    const [count,setCount] = useState(0);
    const handleCount = (count) =>{
        const newCount = count + 1;
        setCount(newCount);
    }
    //cricket board
    const [runs,setRuns] = useState(0);
    function handleSingle(){
        const newSingle = runs+1;
        setRuns(newSingle);
    }
    function handleFour(){
        const newFour = runs+4;
        setRuns(newFour);
    }
    function handleSix(){
        const newSix = runs+6;
        setRuns(newSix);
    }
    const [wickets, setWicket] = useState(0);
    function handleWicket(){
        const newWicket = wickets+1;
        setWicket(newWicket);
    }
    const [nFour,setnFour] = useState(0);
    function handlenFour(){
        const newnFour = nFour+1;
        setnFour(newnFour);
    }
    const [nSix, setnSix] = useState(0);
    function handlenSix(){
        const newnSix = nSix+1;
        setnSix(newnSix);
    }
    return(
        <div>
            <h1>Cricket Score Board</h1>
            {
                runs >= 50 && runs < 100 && <p>Half Century : 50</p>
            }
            {
                runs >= 100 && <p>Century : 100</p>
            }
            <h3>Total Score: {runs}/{wickets}</h3>
            <p>Four: {nFour} Six: {nSix}</p>
            <button onClick={handleSingle} className='btn'>1</button>
            <button onClick={()=>{
                handleFour();
                handlenFour();
            }} className='btn'>4</button>
            <button onClick={()=>{
                handleSix();
                handlenSix();
            }} className='btn'>6</button>
            <button onClick={handleWicket} className='btn' style={{backgroundColor:"red", border:"2px solid red"}}>Wicket</button>
        </div>
    )
}