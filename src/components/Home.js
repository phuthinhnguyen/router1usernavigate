import { useParams } from "react-router-dom";

function Home(){
    const params = useParams()
    return(
        <h2>Login successfull. Welcome account {params.id}</h2>
    )
}
export  default Home;