'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

type CopyEmailButtonProps = {
  email: string
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'unavailable'>('idle')

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setStatus('copied')
      window.setTimeout(() => setStatus('idle'), 2000)
    } catch {
      setStatus('unavailable')
    }
  }

  return (
    <>
      <button
        className="copy-email-button"
        type="button"
        onClick={copyEmail}
        aria-label={status === 'copied' ? 'Email address copied' : 'Copy email address'}
        title={status === 'copied' ? 'Copied' : 'Copy email address'}
      >
        {status === 'copied' ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      </button>
      <span className="sr-only" aria-live="polite">
        {status === 'copied' ? 'Email address copied.' : status === 'unavailable' ? 'Copy is unavailable. Select the email address to copy it.' : ''}
      </span>
    </>
  )
}
