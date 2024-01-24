import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export function GET() {
		if(draftMode().isEnabled) {
			draftMode().disable();
		} else {
			draftMode().enable();
		}

		const baseUrl = process.env.VERCEL_URL
		? `https://nextjs-prefetch-draft-mode.vercel.app`
		: 'http://localhost:3000'


		return NextResponse.redirect(baseUrl)
}
