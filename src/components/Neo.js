import neo from "../../assets/neo.png"
import gem from "../../assets/gem.png"
import line from "../../assets/line.png"

const Neo =()=>{

    return(
        <section id="neo">
        <div className="neo-body">
            <div  className="neo-text">
                <span className="incubated">INCUBATED BY:</span>
                <span className="backers">BACKERS</span>
            </div>
            <div className="neo-pic">
            <a href="https://www.neocortexai.xyz/">
            <img  className="neo-image" alt="NeoCortex" src={neo} /></a>
            <img  className="line-image" alt="Line" src={line} /> 
            <a href="https://www.triplegem.capital/">
            <img className="gem-image" alt="TripleGem" src={gem} /> </a>
            </div>
            
        </div>
        </section>
    );
}
export default Neo;