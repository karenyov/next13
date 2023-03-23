'use client'

import { useState } from 'react';


// import { cookies, headers } from 'next/headers';

import Repo from "./Repo";

export default function User() {
  // const response = await fetch("https://api.github.com/users/karenyov", {
  //   cache: 'no-cache'
  // });
  // const user = await response.json();

  // const userCookies = cookies();
  // const userHeaders = headers();

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>User</h1>
      {/* {JSON.stringify(userCookies.getAll(), null, 2)}
      {JSON.stringify(userHeaders.entries, null, 2)} */}

      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}

       {/* @ts-expect-error Async Server Component */}
       <Repo />

       <h1>{count}</h1>
       <button onClick={() => setCount((state) => state + 1 )}>Increment</button>
    </div>
  )
}
