export default function Events()
{
    const Cfunc=()=>{
        return(   document.write("I clicked"));
    }
    return(<div><button onClick={Cfunc}>Clicking</button></div>);
}