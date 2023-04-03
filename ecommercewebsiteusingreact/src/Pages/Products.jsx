import {Box,Heading,Text,SimpleGrid,Image,Divider, Button, Select,} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { gettingData } from '../AxiosApi/Axios';
// import { filteredData } from '../AxiosApi/Axios';
import { useReducer } from 'react';
const Actions={
    LOADING:"LOADING",
    SUCCESS:"SUCCESS",
    FAILURE:"FAILURE",
    SORT:"SORT",
    // RESET:"RESET"
    BRAND:"BRAND",
    }
const initState={
    loading:false,
    data:[],
    error:false,
    name:"",
    filteredBrand:""
}
const reducer=(state,{type,payload})=>{
  switch(type){
    case "LOADING":{
        return {...state,loading:true}
    }
    case "SUCCESS":{
        return {...state,loading:false,data:payload}
    }
    case "FAILURE":{
        return {...state,error:true}
    }
    case "SORT":{
            const sortedArr=payload==='asc'?state.data.sort((a,b)=>a.price-b.price):state.data.sort((a,b)=>b.price-a.price)
        return {...state,data:sortedArr}
    }
    case "BRAND":{
        // const filterArr=state.data.filter((el)=>el.brand===payload)
        return{...state,filteredBrand:payload}
    }
    case "RESET":{
        return {...state,name:"",loading:false,error:false,data:[]}
    }
    // case "RESET":{
    //     return {...state,name:"",error:false,loading:false}
    // }
    default :{
        throw new Error("something went wrong")
    }
  }
}
export default function Products(){
    const [state,dispatch]=useReducer(reducer,initState)
    // const [filteredGenre,setBrand]=useState("")
    const {loading,data,error,name,filteredBrand}=state
    const gettingData=async()=>{
      let res =await axios.get(`https://weary-frog-jodhpurs.cyclic.app/data?brand=${filteredBrand}`)
      console.log(res,'is res')
        return res.data
    }
    async function fullData(){
        let res=await axios.get(`https://weary-frog-jodhpurs.cyclic.app/data`)
        return res.data
    }
    function fetchAndUpdateData(name,filteredBrand){
        dispatch({type:Actions.LOADING})
        if(filteredBrand===""){
            fullData()
            .then(res=>dispatch({type:Actions.SUCCESS,payload:res}))
        .catch(err=>dispatch({type:Actions.FAILURE}))
        }else{
            gettingData()
            .then(res=>dispatch({type:Actions.SUCCESS,payload:res}))
            .catch(err=>dispatch({type:Actions.FAILURE}))
        }
    }
    useEffect(()=>{
        fetchAndUpdateData(name,filteredBrand)
    },[name,filteredBrand])
    console.log(filteredBrand)
    // const {loading,data,error,name}=state
    console.log(data,"is")
    console.log("I selected",name,filteredBrand)
    return <Box>
        <Select w="10%" name="name" value={name} onChange={(e)=>dispatch({type:Actions.SORT,payload:e.target.value})} >
            <option value="">Select</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
        </Select>
        <Select w="10%" filteredBrand="filteredBrand" value={filteredBrand} onChange={(e)=>{dispatch({type:Actions.BRAND,payload:e.target.value})}}>
            <option value={""}>Select Brand</option>
            <option value={"BOSS"}>BOSS</option>
            <option value={"Theory"}>Theory</option>
            <option value={"The Men's Store at Bloomingdale's"}>The Men's Store at Bloomingdale's</option>
            <option value={"Vince"}>Vince</option>
            <option value={"Canali"}>Canali</option>
            <option value={"Helmut Lang"}>Helmut Lang</option>
            <option value={"To Boot New York"}>To Boot New York</option>
        </Select>
    {loading?<Heading>...Loading</Heading>:error?<Heading>Something went wrong</Heading>:(
        <SimpleGrid columns={{base:1,sm:1,md:2,lg:3}} spacing={10} ml="100px">
            {data.map(({img,price,productDescription,productReviewsCount,brand},i)=>{
                return(
                    <Box key={i+1}>
                        <Image src={img} alt={i+1} />
                        <Heading fontSize={"14px"} color="#000000" fontFamily={'Bold'}>{brand}</Heading>
                        <Divider orientation='horizontal'/>
                        <Text>{productDescription}</Text>
                       {productReviewsCount?<Text color="green">Left In Stock:{productReviewsCount}</Text>:<Text color="red">Not Available</Text>}
                        <Text>Price:{price}</Text>
                    </Box>
                )
            })}
        </SimpleGrid>
    )}
    </Box>
}