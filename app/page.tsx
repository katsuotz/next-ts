'use client'

import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/store";
import {getPoinData} from "@/features/poin/poinActions";
import {DataTable} from "@/app/data-table";
import {columns} from "@/app/columns";

export default function Home() {
  const dispatch = useDispatch()

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)

  const poin = useAppSelector(state => state.poin.poin)
  const pagination = useAppSelector(state => state.poin.pagination)

  useEffect(() => {
    dispatch(getPoinData(page, perPage))
  }, [])

  const handleUpdatePage = (value: number) => {
    setPage(value)
    dispatch(getPoinData(value, perPage))
  }

  return (
    <div>
      <DataTable columns={columns} data={poin} pagination={pagination} handleUpdatePage={handleUpdatePage}/>
    </div>
  )
}
