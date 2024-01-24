import NavLink from "@/app/components/NavLink";
import ToogleDraftMode from "./components/ToogleDraftMode";

export default function Home() {
	
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
				<NavLink />

				<ToogleDraftMode />
      
    </main>
  );
}
