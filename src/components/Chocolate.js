const Chocolate = ({chocolate, deleteChocolate}) => {

    const handleDelete = ()=>{
        deleteChocolate(chocolate)
    }

    return (  
        <article>
            <h4>{chocolate.name}</h4>
            <p>Estate: {chocolate.estate.name}</p>
            <p>Cocoa %: {chocolate.cocoaPercentage}</p>
            <button onClick={handleDelete}>Delete</button>
            <hr/>

        </article>
    );
}

export default Chocolate;