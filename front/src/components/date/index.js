import React from 'react';
import { useParams } from "react-router-dom";

export function AddDate() {
    const { date } = useParams();
    const addDate = new Date(date);
    const currentDate = new Date();
    const isDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
    
    if (isDate.test(date) && addDate<currentDate.setHours(0,0,0,0)) {
        return (
        <div> The date is {addDate.toString()}</div>
        );
    }
    else if (isDate.test(date)) {
        return (
        <div>The format right, but date is current</div>
        );
    }
    else 
    return (
        <div>Error date format. Must be "yyyy-mm-dd"}</div>
    );
}