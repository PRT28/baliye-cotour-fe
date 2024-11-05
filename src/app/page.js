import styles from "./page.module.css";

// import { useSession, signIn, signOut } from "next-auth/react";


// function Component() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn("google", {redirect: false})}>Sign in</button>
//     </>
//   )
// }

export default function Home() {
  return (
    <div className={styles.page}>
    </div>
  );
}
