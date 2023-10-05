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

  const [page, setPage] = useState(0)
  const [startPage, setStartPage] = useState(0)
  const [endPage, setEndPage] = useState(0)
  const [totalGeneratedPages, setTotalGeneratedPages] = useState(0)

  const generatePage = () => {
    const startAt = pagination.page - 2
    const endAt = pagination.page + 2

    setStartPage(startAt <= 0 ? 1 : pagination.page - 2)
    setEndPage(endAt >= pagination.total_page ? pagination.total_page : pagination.page + 2)

    setTotalGeneratedPages(endPage - startPage + 1)

    setPage(pagination.page)
  }

  useEffect(() => {
    generatePage()
  });

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
        startPage > 1 ?
          <Button variant="outline" disabled>
            ...
          </Button> :
          ''
      }

      {
        [...Array(totalGeneratedPages)].map((e, i) => <>
          <Button
            key={i}
            variant="outline"
            disabled={(i + startPage) == page}
            onClick={() => handleUpdatePage(i + startPage)}
          >
            {i + startPage}
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
