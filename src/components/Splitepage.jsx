import React ,{useState} from 'react'
import './splitepage.css'

function Splitepage() {
  const [hoverleft , setHoverleft] = useState(false);
  const [hoverright , setHoverright] = useState(false);
  
 const handleLeft = () =>{
  console.log("left")

  setHoverleft(true)
  setHoverright(false)
  
 }
 const handleRight = () =>{
   console.log("right")
   setHoverright(true)
   setHoverleft(false)
 }
 const leaveMouse =()=>{
   setHoverleft(false)
   setHoverright(false)
 }
  return (
    <>
        <div className= {`container ${hoverleft ? ' hover-left' : hoverright ? 'hover-right' : ''}`} >
        {/* <div className= "container hover-right "> */}

            <div className='split left' onMouseEnter={handleLeft}  onMouseLeave={leaveMouse}>
                <h1>Playstation 5</h1>
                <a href="" className='btn'>Buy Now</a>
            </div>
            <div className="split right" onMouseEnter={handleRight} onMouseLeave={leaveMouse}> 
                <h1>XBox Series X</h1>
                <a href="" className='btn'>Buy Now</a>
            </div>
        </div>
    </>
  )
}

export default Splitepage