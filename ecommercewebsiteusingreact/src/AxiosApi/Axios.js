import axios from 'axios';
export function gettingData(params={}){
return axios.get('https://weary-frog-jodhpurs.cyclic.app/data',{
    params:{
     _sort:params.sort,
     _order:params.order,
    //  brand:params.filteredBrand
    }
})

}
export const filteredData=(params={})=>{
    return axios.get('https://weary-frog-jodhpurs.cyclic.app/data',{
        params:{
            brand:params.filteredBrand
        }
    })
}