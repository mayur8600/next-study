'use client'
import { useForm, useWatch } from "react-hook-form";
import BottomBar from '../../components/BottomBar.jsx'
function LayoutFile() {
    const { register, control } = useForm({
        userData: "test"
      });

      const userData = useWatch({
        control,
        name: "userData",
      });
  return (
    <>
    <form>
      <input className="w-full md:w-[300px] h-[50px] border-b-4 border-b-indigo-500 my-1 ml-2 pl-5" placeholder="Type here" {...register("userData")} />
      {userData?.length > 0 && <div className="w-[200px] h-[100px] bg-gray-300 ml-2">{userData}</div>}
    </form>
    <BottomBar/>
    </>
  )
}

export default LayoutFile