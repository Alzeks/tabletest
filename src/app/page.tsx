'use client'

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { accounts } from './data'
import { useRouter } from 'next/navigation'
import Pagination from "@/app/components/pagination/Pagination";
import Filter from '@/app/components/filters/Filters'
import { Iaccounts } from '@/app/types'

export default function Home() {
  const [data, setData] = useState<Iaccounts[]>([])
  const router = useRouter()
  //------------------ Costom PAGINATION 
  const ITEM_PER_PEGE: number = 3
  function paginFunk(newArray: Iaccounts[]) { setData(newArray) }
  //-----------------------------------------
  useEffect(() => {
    setData(accounts.slice(0, ITEM_PER_PEGE))
  }, [])

  const passToItem = (id: number) => {router.push(`/item/${id}?slug=account`)}

  function handleFilter(newArray: Iaccounts[]) { setData(newArray) }

  const handleSkip = () => { setData(accounts.slice(0, ITEM_PER_PEGE)) }

  return (
    <div className={styles.container}>

      <h3>Accounts</h3>
      <div className={styles.filter}>
        <Filter handleFilter={handleFilter} startArray={accounts} />
        <button className={styles.button} onClick={() => handleSkip()}>Skip</button>
      </div>
      <table className={styles.table}>
        <thead >
          <tr >
            <th className={styles.th}>#</th>
            <th className={styles.th}>Id</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>AuthToken</th>
            <th className={styles.th}>CreationDate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tr: Iaccounts, i: number) =>
            <tr key={tr.id} onClick={() => passToItem(tr.id)}>
              <th >{i + 1}</th>
              <td className={styles.td} >profile: {tr.id}</td>
              <td className={styles.td}>{tr.email}</td>
              <td className={styles.td}>{tr.authToken}</td>
              <td className={styles.td}>{tr.creationDate}</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination paginFunk={paginFunk} startArray={accounts} />

    </div>
  )
}

