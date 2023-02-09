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
      <input className="border" placeholder="Type here" {...register("userData")} />
      {userData?.length > 0 && <div className="w-[200px] h-[100px] bg-gray-300">{userData}</div>}
    </form>
    <BottomBar/>
    </>
  )
}

export default LayoutFile