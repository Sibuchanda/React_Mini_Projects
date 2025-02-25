import { useContext } from "react";
import { BioContext } from ".";



const About = ()=>{

    const {myName, myAge } = useContext(BioContext);

return (
    <>
     <h1> This is About section and My name is {myName} and I am {myAge} years old </h1>
    </>
)
}

export default About;