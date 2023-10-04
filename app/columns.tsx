import { ColumnDef } from "@tanstack/react-table"
import {Poin} from "@/lib/interfaces/data-poin";
import {Button} from "@/components/ui/button";

export const columns: ColumnDef<Poin>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({row}) => {
      return <>{row.index + 1}</>
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
    cell: ({row}) => {
      return <div className="flex gap-2">
        <Button variant="outline">Edit</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    }
  },
]
