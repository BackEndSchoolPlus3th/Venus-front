'use client'

import { Button } from '@/components/ui/button'

export default function ErrorBoundary({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      {error.message}
      <Button className="" onClick={reset}>
        Recover From Error
      </Button>
    </div>
  )
}
