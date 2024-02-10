import inscription from "../../assets/inscription.png"

const Inscription =()=>{

    return(
        <section id="inscription">
        <div className="inscription-body">
            <img className="inscription-image" alt="Inscription" src={inscription} />
        </div>
        </section>
    );
}
export default Inscription;