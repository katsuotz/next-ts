"use client"

import {Pagination} from "@/lib/interfaces/table";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon} from "@radix-ui/react-icons";

interface PaginationProps<> {
  pagination: Pagination
  handleUpdatePage: Function
}

export default function MyPagination(
  {
    pagination,
    handleUpdatePage
  }: PaginationProps) {

  const [page, setPage] = useState(1)
  const [startPage, setStartPage] = useState(1)
  const [endPage, setEndPage] = useState(1)
  const [totalGeneratedPages, setTotalGeneratedPages] = useState(1)

  useEffect(() => {
    setStartPage(pagination.page - 2)
    setEndPage(pagination.page + 2)

    if (startPage <= 0) setStartPage(1)
    if (endPage >= pagination.total_page) setEndPage(pagination.total_page)

    setTotalGeneratedPages(endPage - startPage + 1)

    setPage(pagination.page)
  }, [pagination])

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        disabled={page === 1}
        onClick={() => handleUpdatePage(1)}
      >
        <DoubleArrowLeftIcon/>
      </Button>
      <Button
        variant="outline"
        disabled={page === 1}
        onClick={() => handleUpdatePage(page - 1)}
      >
        <ChevronLeftIcon/>
      </Button>

      {
        [...Array(totalGeneratedPages)].map((e, i) => <>
          <Button
            key={i}
            variant="outline"
            disabled={(i + startPage) == page}
            onClick={() => handleUpdatePage(i + 1)}
          >
            {i + 1}
          </Button>
        </>)
      }

      {
        endPage < pagination.total_page ?
          <Button variant="outline" disabled>
            ...
          </Button> :
          ''
      }

      <Button
        variant="outline"
        disabled={page === pagination.total_page}
        onClick={() => handleUpdatePage(page + 1)}
      >
        <ChevronRightIcon/>
      </Button>
      <Button
        variant="outline"
        disabled={page === pagination.total_page}
        onClick={() => handleUpdatePage(pagination.total_page)}
      >
        <DoubleArrowRightIcon/>
      </Button>
    </div>
  )
}
