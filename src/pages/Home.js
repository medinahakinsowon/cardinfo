
import newimage from '../images/receipt image.jpg'



const Home = ()=>{
  return(
  <div className='card'>
    <div className='imageone'>
       <img src={newimage} class="card-img-top" alt="..."/>
    </div>
    <div className='body_message'><p>Pull in Bootstrap’s source files into nearly any project with some of the most popular package managers. No matter the package manager, Bootstrap will require a Sass compiler and Autoprefixer for a setup that matches our official compiled versions. Some quick example text to build on the Ncard title and make up the bulk of the card's content.</p></div>
    <div className='skill_set'>
      <div class="card-title"><h5 >Skills</h5></div>
      <div className='skill'>
        <li>Mobile Developer</li>
        <li>Backend Developer</li>
        <li>Frontend Developer</li>
      </div>
    </div>
 </div>
  )
}

export default Home;