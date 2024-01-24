import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export function GET() {
		if(draftMode().isEnabled) {
			draftMode().disable();
		} else {
			draftMode().enable();
		}

		return NextResponse.json(
			{ draftMode: draftMode().isEnabled},
			{
				status: 200,
			}
		)
}
