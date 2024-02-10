import lotto from "../../assets/lotto.png"

const Lotto =()=>{

    return(
        <section id="lotto">
        <div className="lotto-body">
            <img className="lotto-image" alt="lotto-game" src={lotto} />
        </div>
        </section>
    );
}
export default Lotto;