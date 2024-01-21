'use client'

import { useEffect, useState } from 'react'
import styles from '@/app/page.module.css'
import { compaigns } from '@/app/data'
import { useRouter } from 'next/navigation'
import Pagination from "@/app/components/pagination/Pagination";
import { Icompaigns } from '@/app/types'
import Filter from '../components/filters/Filters'

export default function Campaigns() {
  const [data, setData] = useState<Icompaigns[]>([])
  const router = useRouter()

  //------------------PAGINATION
   const ITEM_PER_PEGE: number = 3
  function paginFunk(newArray: Icompaigns[]) { setData(newArray)}
  //----------------------------
  const setArray = () => {setData(compaigns?.slice(0, ITEM_PER_PEGE))}

  useEffect(() => { setArray() }, [])

  const passToItem = (id: number) => {router.push(`/item/${id}?slug=compaign`)}

  function handleFilter(newArray: Icompaigns[]) { setData(newArray) }

  const handleSkip = () => {setArray()}

  return (
    <div className={styles.container}>

      <h3>Compaigns</h3>

      <div className={styles.filter}>
        <Filter handleFilter={handleFilter} startArray={compaigns} />
        <button className={styles.button} onClick={() => handleSkip()}>Skip</button>
      </div>

      <table className={styles.table}>
        <thead >
          <tr >
            <th className={styles.th}>#</th>
            <th className={styles.th}>Id</th>
            <th className={styles.th}>Clicks</th>
            <th className={styles.th}>Cost</th>
            <th className={styles.th}>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tr: Icompaigns, i: number) => 
          <tr key={tr.id} onClick={() => passToItem(tr.id)}>
            <th >{i + 1}</th>
            <td className={styles.td} >item: {tr.id}</td>
            <td className={styles.td}>{tr.clicks}</td>
            <td className={styles.td}>{tr.cost}</td>
            <td className={styles.td}>{tr.date}</td>
          </tr>)}
        </tbody>
      </table>
      <Pagination paginFunk={paginFunk} startArray={compaigns} />

    </div>
  )
}

