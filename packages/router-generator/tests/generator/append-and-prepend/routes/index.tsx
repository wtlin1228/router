import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: () => ({
    indexSearch: 'indexSearch',
  }),
})

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}
