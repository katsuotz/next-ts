import api from "@/lib/api";
import {updatePoinData} from "@/features/poin/poinSlice";

export const getPoinData = (page: number, per_page: number): any => {
  return (dispatch: any) => {
    api.get('/data-poin', {
      params: {
        page,
        per_page,
      }
    }).then(res => {
      dispatch(updatePoinData(res.data))
    }).catch(err => {
      console.log(err)
    })
  }
}
