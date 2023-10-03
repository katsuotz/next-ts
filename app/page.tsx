'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import api from "@/lib/api";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { decrement, increment } from '@/features/counter/counterSlice'
import {useAppSelector} from "@/store";
import {Button} from "@/components/ui/button";

export default function Home() {
  const dispatch = useDispatch()
  const slice = useAppSelector((state) => state.counter.value)

  useEffect(() => {
    api.get('/data-poin', {
      params: {
        page: 1,
        per_page: 10,
      }
    }).then((res: any) => {
      console.log('result')
      // console.log('result', res)
    }).catch((err: any) => {
      // console.log('err', err)
    })

  }, [])

  return (
    <div>
      {slice}

      <br/>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>

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
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
