'use client '
import { useState } from "react";
import styles from "@/app/page.module.css";
import { allArray, funk} from "@/app/types";

export default function Filter(
    { handleFilter, startArray }: {handleFilter: funk, startArray: allArray[]}) {
    const [value, setValue] = useState<string>('')
    const handleClick = () => {
        if (value) {
            const newArray = startArray.filter((item: any) =>  item.id === parseInt(value))
            handleFilter(newArray)
            setValue('')
        }
    }
   
    return (
        <div className={styles.input}>
            <input type="text" value={value} placeholder='enter id'
                onChange={(e) => { setValue(e.target.value) }} />
            
        <button className={styles.button} onClick={() => handleClick()}>filter</button>

        </div>
    );
}