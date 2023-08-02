import React from 'react';
import {Data2Type} from "../App";

type MessagesPropsType = {
    data2: Data2Type[]
}

export const Messages = (props: MessagesPropsType) => {
    return (
        <>
            <h1> Messages</h1>
            <div>
                {props.data2.map(el => {
                    return (
                        <div key={el.id} style={{display:'flex', justifyContent:'space-around'}}>
                            <li>{el.name}</li>
                            <li>{el.message}</li>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

