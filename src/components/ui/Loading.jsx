import { Loader2 } from 'lucide-react'
export default function Loading() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Loader2 className="animate-spin text-theme-1" />
        </div>
    )
}
