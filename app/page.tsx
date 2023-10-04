'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/store";
import {Button} from "@/components/ui/button";
import {getPoinData} from "@/features/poin/poinActions";

export default function Home() {
  const dispatch = useDispatch()

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(1)

  const poin = useAppSelector(state => state.poin.poin)

  useEffect(() => {
    dispatch(getPoinData(page, perPage))
  }, [])

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead>Nama Poin</TableHead>
            <TableHead>Deskripsi</TableHead>
            <TableHead>Tipe</TableHead>
            <TableHead>Kategori</TableHead>
            <TableHead>Poin</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            poin.map(function (item, key) {
              return <TableRow key={item.id}>
                <TableCell className="font-medium">{key + 1}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.poin}</TableCell>
              </TableRow>
            })
          }

        </TableBody>
      </Table>
    </div>
  )
}
