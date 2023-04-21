"use client";
import Navbar from "@/Navbar"
import { useRouter } from "next/navigation"



export default function Search() {
  const router = useRouter();

  return (
    <div>
      <Navbar></Navbar>

      <br/>
      <br/>
      <br/>
      
      <button onClick={() => router.push('/search?name=ㄱㄴㄷㄹ')}>Move1</button>
      <button onClick={() => router.push('/search?name=' + encodeURIComponent('ㄱㄴㄷㄹ'))}>Move2</button>
      
    </div>
  )
}


