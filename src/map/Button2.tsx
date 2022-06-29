import React from 'react';

type Button2PropsType={
    name:string
    callback:()=>void
}
export const Button2 = (props:Button2PropsType) => {
    const onClickHandler = () => {
      props.callback()
    }
    return (

           <button onClick={onClickHandler}>{props.name}</button>

    );
};

