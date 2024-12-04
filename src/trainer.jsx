import Studdetails from "./student";
export function Trainerresp()
{
    const sname="Pavitra";
    const sage=14;
    return(<> <Studdetails name={sname} age={sage} > </Studdetails> </>);
}