import { ColumnDef } from "@tanstack/react-table"
import {Poin} from "@/lib/interfaces/data-poin";
import {Button} from "@/components/ui/button";
import {store} from "@/store";
import {countPaginationNumber} from "@/lib/utils";

export const columns: ColumnDef<Poin>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({row}) => {
      const state = store.getState()
      return <>{countPaginationNumber(state.poin.pagination, row.index)}</>
    }
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "poin",
    header: "Poin",
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => {
      return <div className="flex gap-2">
        <Button variant="outline">Edit</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    }
  },
]
