import {ArrowLeftIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function BackToHome() {
    return (
        <Link href="/" className="flex flex-row items-center absolute top-1 left-3 gap-2">
            <ArrowLeftIcon className="h-3 w-3 text-blue-500" />
            <span className="text-sm text-blue-500 hover:underline">Back to home</span>
        </Link>
    )
}
