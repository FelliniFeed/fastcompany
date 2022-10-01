import React, {useState}from "react";
import Counter from "./Counter";

const CountersList = () => {
    const initialState = [
        {id:0, value:1, name: 'Ненужная вещь'}, 
        {id:1, value:0, name: 'Ложка'}, 
        {id:2, value:0, name: 'Вилка'},
        {id:3, value:2, name: 'Тарелка'}, 
        {id:4, value:0, name: 'Намбор минималиста'},
    ];
 
    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        const newCounters = counters.filter(counter => counter.id !== id);
        setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialState) 
    }

    const handleIncrement = (id) => {
        const counterIncrement = counters.map((counter) => ({
            ...counter,
            value: id === counter.id ? counter.value + 1 : counter.value}));
        setCounters(counterIncrement);
        
    }

    const handleDecrement = (id) => {
        const counterIncrement = counters.map((counter) => ({
            ...counter,
            value: id === counter.id && counter.value > 0 ? counter.value - 1 : counter.value}
            ));
        setCounters(counterIncrement);
    }

    return (
        <>
            {counters.map(count => (
                <Counter 
                key = {count.id}  
                onDelete = {handleDelete} 
                onIncrement = {handleIncrement} 
                onDecrement = {handleDecrement} 
                {...count}/> 
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
           
        </>
    )   
}

export default CountersList;