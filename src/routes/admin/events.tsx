import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/events')({
  component: AdminEvents,
})

function AdminEvents() {
  return <div>Admin Events</div>
}
