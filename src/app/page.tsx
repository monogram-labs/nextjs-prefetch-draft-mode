import NavLink from "@/app/components/NavLink";

export default function Home() {
	
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
				<NavLink />

				<a href="/api/draft" target="_blank">Toggle Draft Mode</a>
      
    </main>
  );
}
