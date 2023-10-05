import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {Pagination} from "@/lib/interfaces/table";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const countPaginationNumber = (pagination: Pagination, n: number) => {
  return pagination.per_page * (pagination.page - 1) + n + 1
}
