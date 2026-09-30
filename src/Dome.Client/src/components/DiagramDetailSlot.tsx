import type { ReactNode, TransitionEvent } from 'react'

type DiagramDetailSlotProps = {
  open: boolean
  onCloseAnimationEnd: () => void
  children: ReactNode
}

export function DiagramDetailSlot({
  open,
  onCloseAnimationEnd,
  children,
}: Readonly<DiagramDetailSlotProps>) {
  function handleTransitionEnd(event: TransitionEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget || event.propertyName !== 'width') {
      return
    }

    if (!open) {
      onCloseAnimationEnd()
    }
  }

  return (
    <div
      className={`diagram-detail-slot${open ? ' diagram-detail-slot-open' : ''}`}
      aria-hidden={!open}
      inert={!open}
      onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </div>
  )
}
