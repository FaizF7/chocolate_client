import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChocolateForm = ({estates, postChocolate}) => {

    const navigate = useNavigate()

    const [stateChocolate, setStateChocolate] = useState(
        {
            name:"",
            cocoaPercentage:0,
            estateId: null
        }
    )

    const handleChange = (event)=>{
        let propertyName = event.target.name;
        let copiedChocolate = {...stateChocolate}
        copiedChocolate[propertyName] = event.target.value
        setStateChocolate(copiedChocolate)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        postChocolate(stateChocolate)
        setStateChocolate(
            {
                name:"",
                cocoaPercentage:0,
                estateId: null
            }
        )
        
        navigate("/chocolates");
    
    }

    const estateOptions = estates.map((estate)=>{
        return <option key={estate.id} value={estate.id}> {estate.name}</option>
    })
    return(
        <form id="chocolate-form" onSubmit={handleSubmit}>
            <h3>Add a new chocolate</h3>

            <label htmlFor="chocolate-name">Chocolate Name: </label>
            <input
                id="chocolate-name"
                name="name"
                type="text"
                placeholder="enter chocolate name" 
                onChange={handleChange}
                value={stateChocolate.name}
            />

            <label htmlFor="cocoa-percentage">Cocoa Percentage: </label>
            <input
                id="cocoa-percentage"
                name="cocoaPercentage"
                type="number"
                min={1}
                max={100}
                onChange={handleChange}
                value={stateChocolate.cocoaPercentage}
            />

            <label htmlFor="estate">Estate: </label>
            <select 
                id="estate" 
                name="estateId"
                defaultValue="select-estate"
                onChange={handleChange}
            >
                <option disabled-value="select-estate"></option>
                {estateOptions}
            </select>

            <input id="submit-button" type="submit" value="Add Chocolate"/>          
        </form>

    )

}

export default ChocolateForm;