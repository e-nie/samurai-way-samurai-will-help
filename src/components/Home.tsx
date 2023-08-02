import {Data1Type} from "../App";

type HomePropsType = {
 data1: Data1Type
}



export const Home = (props: HomePropsType) => {
    return (
        <div>
        <h1>
            Home
            <div>{props.data1.image}</div>
            <button>{props.data1.button}</button>
        </h1>
        </div>
    )
}
