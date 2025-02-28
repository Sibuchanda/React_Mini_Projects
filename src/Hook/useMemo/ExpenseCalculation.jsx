import React, { useMemo } from 'react'


const ExpenseCalculation = () => {

    const sum = () => {
        console.log("Calculating sum .....");
        let i = 0;
        for (i = 0; i <= 1000000000; i++) i = i + 1;

        return i;
    }

    const total = useMemo(()=> sum(), [])

    // const total = sum();

    return <h1>Total expense : {total} </h1>

}

export default ExpenseCalculation;
