import Layout from "./components/Layout/Layout"
import TopNavBar from "./components/Navigation/topNavBar"
import { SignedOut, SignedIn } from "@clerk/clerk-react"


function App() {

  return (
    <>
      
      <SignedIn>
        <TopNavBar />
        <Layout />
      </SignedIn>

    </>
  )
}

export default App
