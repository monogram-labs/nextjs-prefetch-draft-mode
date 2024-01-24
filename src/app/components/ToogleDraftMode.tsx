import { draftMode } from 'next/headers'
import Link from 'next/link'

export default function ToogleDraftMode() {
	const { isEnabled: draftModeIsEnabled } = draftMode()

	return (
		<Link
			href="/api/draft"
			className="fixed bottom-4 right-4 z-50 rounded-lg bg-orange-500 px-8 py-4 text-xl font-bold text-white-950 hover:bg-orange-600 hover:text-white-950"
			prefetch={false}
		>
			<div>{draftModeIsEnabled ? 'Disable' : 'Enable'} Draft Mode</div>
		</Link>
	)
}
