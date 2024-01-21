'use client'

import { useEffect, useState } from 'react'
import styles from '@/app/page.module.css'
import { profiles } from '@/app/data'
import { useRouter } from 'next/navigation'
import Pagination from "@/app/components/pagination/Pagination";
import {Iprofiles} from '@/app/types'
import Filter from '../components/filters/Filters'

export default function Profiles() {
  const [data, setData] = useState<Iprofiles[]>([])
  const router = useRouter() 
  //------------------PAGINATION
  const ITEM_PER_PEGE: number = 3
  function paginFunk(newArray: Iprofiles[]) { 
    setData(newArray)
  }
  //----------------------------
  useEffect(() => {
    setData(profiles.slice(0, ITEM_PER_PEGE)) 
  }, [])

  const passToItem = (id: number) => {router.push(`/item/${id}?slug=profile`)}
  
  function handleFilter(newArray: Iprofiles[]) {setData(newArray)}
  
  const handleSkip = () => { setData(profiles.slice(0, ITEM_PER_PEGE)) }

  return (
    <div className={styles.container}>

      <h3>Profiles</h3>
     
      <div className={styles.filter}>
        <Filter handleFilter={handleFilter} startArray={profiles} />
        <button className={styles.button} onClick={() => handleSkip()}>Skip</button>
      </div>
      <table className={styles.table}>
        <thead >
          <tr >
            <th className={styles.th}>#</th>
            <th className={styles.th}>Id</th>
            <th className={styles.th}>Country</th>
            <th className={styles.th}>Marketplace</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tr: Iprofiles, i: number) => <tr key={tr.id}
          onClick={() => passToItem(tr.id)}>
            <th >{i + 1}</th>
            <td className={styles.td} >compaigns: {tr.id}</td>
            <td className={styles.td}>{tr.country}</td>
            <td className={styles.td}>{tr.marketplace}</td>
          </tr>)}
        </tbody>
      </table>
      <Pagination paginFunk={paginFunk} startArray={profiles} />
    </div>
  )
}

