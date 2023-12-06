import Chocolate from "./Chocolate";

const ChocolateList = ({chocolates, deleteChocolate}) => {

    const chocolateComponents = chocolates.map((chocolate)=>{
        return <Chocolate key={chocolate.id} chocolate = {chocolate} deleteChocolate={deleteChocolate} />
    })

    return (  
        <section>
            <h2>The Luxury Selection</h2>
            <div id = 'chocolates'>
                {chocolateComponents}
            </div>

        </section>
    );
}

export default ChocolateList;