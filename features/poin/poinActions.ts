import api from "@/lib/api";
import {updatePoinData, updatePoinPagination} from "@/features/poin/poinSlice";

export const getPoinData = (page: number, per_page: number): any => {
  return (dispatch: any) => {
    api.get('/data-poin', {
      params: {
        page,
        per_page,
      }
    }).then((res: any) => {
      dispatch(updatePoinData(res.data))
      dispatch(updatePoinPagination(res.pagination))
    }).catch(err => {
      console.log(err)
    })
  }
}
