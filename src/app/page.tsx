import QuoteGenerator from "../components/quote-generator";
import { ModeToggle } from "../components/toogle-dark-mode";


export default function Home() {
  return (
<div className="flex min-h-screen flex-col items-center justify-center p-4 ">       
  <div className="fixed left-10 top-10"><ModeToggle/></div>
  <QuoteGenerator />
    </div>
  )
}

