import { useState } from "react";

const signUp = () => {
    const [showForm, setSHowForm] = useState(false);
    const handleForm = ()=>{
        setSHowForm(true);
    }
    return ( <>
    <button onClick={handleForm}>Sign Up</button>
    {showForm &&

    <form >
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </form>
    }
    </> );
}
 
export default signUp;