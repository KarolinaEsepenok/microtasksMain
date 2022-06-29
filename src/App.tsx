import React, {useState} from 'react';
import {FullInput} from "./map/FullInput";
import {Button2} from "./map/Button2";
import {Input} from "./map/Input";


//export type FilterType = 'ALL' | 'RUBLS' | 'Dollars'


export function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])
   // let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])

    }

    // const [money, setMoney] = useState([
    //     {banknotes: 'Dollars', value: 1, number: ' a1234567890'},
    //    {banknotes: 'Dollars', value: 2, number: ' z1234567890'},
    //     {banknotes: 'RUBLS', value: 3, number: ' w1234567890'},
    //    {banknotes: 'Dollars', value: 4, number: ' e1234567890'},
    //     {banknotes: 'Dollars', value: 5, number: ' c1234567890'},
    //     {banknotes: 'RUBLS', value: 6, number: ' r1234567890'},
    //    {banknotes: 'Dollars', value: 7, number: ' x1234567890'},
    //    {banknotes: 'RUBLS', value: 8, number: ' v1234567890'},
    //   ])

    // const [filter, setFilter] = useState<FilterType>('ALL')
    const callbackButtonHandler = () => {
        addMessage(title)
        setTitle('')

    }

    return (
        <div className={'App'}>
            {/*     <FullInput addMessage={addMessage}/>*/}
            <Button2 name={'+'} callback={callbackButtonHandler}/>
            <Input title={title} setTitle={setTitle}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
            {/*   <ul>
                {money.filter((s) => {
                        if (filter === 'ALL') return true
                        if (filter === 'Dollars') return s.banknotes === 'Dollars'
                        if (filter === 'RUBLS') return s.banknotes === 'RUBLS'
                        else return 'ALL'
                    }
                )
                    .map((a, index) => {
                        return(
                        <li key={index}>
                            <span>{a.banknotes}</span>
                            <span>{a.value}</span>
                            <span>{a.number}</span>
                        </li>
                    )
                    })}
            </ul>
            <Button nameButton={'ALL'} callback={setFilter}/>
            <Button nameButton={'Dollars'} callback={setFilter}/>
            <Button nameButton={'RUBLS'} callback={setFilter}/>*/}

        </div>

    )
}