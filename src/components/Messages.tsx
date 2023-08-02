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
                        <div key={el.id} className={'messagesContainer'}>
                            <div>{el.name}</div>
                            <div>{el.message}</div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

