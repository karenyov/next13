import { Suspense } from "react";

import Repo from "@/components/Repo";
import User from "@/components/User";
import Link from "next/link";

export default async function Home() {


  // const [resp1, resp2] = await Promise.all([
  //   fetch(''),
  //   fetch('')
  // ])

  return (
    <div>
      <h1>Home</h1>

      <Link href="/app">Dashboard</Link>

      <Suspense fallback={<p>Carregando usuários...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>

      
    </div>
  )
}
