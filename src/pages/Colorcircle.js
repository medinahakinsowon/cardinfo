


function Colorcircle(){
  return(
    <div>
      <CreatingColor/>
    </div>
  )
}

export default Colorcircle;


function CreatingColor(){
  return(
    <div style={{display:"flex", flexDirection: "row", margin:"20px", justifyContent : "space-between",}}>
      <div style={{height: "130px", width: "130px", borderRadius: "50%", backgroundColor: "#ff0000"}}></div>
      <div style={{height: "130px", width: "130px", borderRadius: "50%", backgroundColor: "#FF8552"}}></div>
      <div style={{height: "130px", width: "130px", borderRadius: "50%", backgroundColor: "#297373"}}></div>
      <div style={{height: "130px", width: "130px", borderRadius: "50%", backgroundColor: "#85FFC7"}}></div>
      <div style={{height: "130px", width: "130px", borderRadius: "50%", backgroundColor: "#A1D363"}}></div>
      <div style={{height: "130px", width: "130px", borderRadius: "50%", backgroundColor: "#393E41"}}></div>
      <div style={{height: "130px", width: "130px", borderRadius: "50%", backgroundColor: "#ff0000"}}></div>
      <div style={{height: "130px", width: "130px", borderRadius: "50%", backgroundColor: "#E94F37"}}></div>
      <div style={{height: "130px", width: "130px", borderRadius: "50%", backgroundColor: "#ff0000"}}></div>
      <div style={{height: "130px", width: "130px", borderRadius: "50%", backgroundColor: "#1C89BF"}}></div>  
    </div>
  )
}