import { draftMode } from "next/headers";
import Link from "next/link";

export default function NavLink() {
	draftMode().enable();
	
	return (
		<Link href={'/about'}>Link</Link>
	)
}
