import { createContext } from "react"
import SlidingOne from "../Images/SlidingOne.png";
import Slider2 from "../Images/Slider2.png"
import Slider4 from "../Images/Slider4.png"
import Slider5 from "../Images/Slider5.png"
import Slider6 from "../Images/Slider6.png"
import Slider7 from "../Images/Slider7.png"
import Slider8 from "../Images/Slider8.png"
import Slider9 from "../Images/Slider9.png"
import Slider11 from "../Images/Slider11.png"
import Slider12 from "../Images/Slider12.png"
import SecondSliderImage1 from "../Images/SecondSliderImage1.png"
import SecondSliderImage2 from "../Images/SecondSliderImage2.png"
import SecondSliderImage3 from "../Images/SecondSliderImage3.png"
import SecondSliderImage4 from "../Images/SecondSliderImage4.png"
import SecondSliderImage5 from "../Images/SecondSliderImage5.png"
import SecondSliderImage6 from "../Images/SecondSliderImage6.png"
import SecondSliderImage7 from "../Images/SecondSliderImage7.png"
import SecondSliderImage8 from "../Images/SecondSliderImage8.png"
import SecondSliderImage9 from "../Images/SecondSliderImage9.png"
import SecondSliderImage10 from "../Images/SecondSliderImage10.png"
import {useState} from "react"
const ObjContext=createContext()
const ObjContextProvider=({children})=>{
    const [isAuth,setAuth]=useState(false)
    const [token,setToken]=useState("")
    const arrOfObj1=[
        {img:SlidingOne},
        {img:Slider2},
        {img:Slider4},
        {img:Slider5},
        {img:Slider6},
        {img:Slider7},
        {img:Slider8},
        {img:Slider9},
        {img:Slider11},
        {img:Slider12},
    ]
    const arrOfObj2=[
        {img:SecondSliderImage1},
        {img:SecondSliderImage2},
        {img:SecondSliderImage3},
        {img:SecondSliderImage4},
        {img:SecondSliderImage5},
        {img:SecondSliderImage6},
        {img:SecondSliderImage7},
        {img:SecondSliderImage8},
        {img:SecondSliderImage9},
        {img:SecondSliderImage10},
    ]
    function login(){
        setAuth(true)
    }
    function logout(){
        setAuth(false)
    }
    return <ObjContext.Provider value={{arrOfObj1,arrOfObj2,login,logout,isAuth}}>{children}</ObjContext.Provider>
}
export  {ObjContext}
export default ObjContextProvider