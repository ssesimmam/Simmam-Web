import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/participants')({
  component: EventsPage,
})

function EventsPage() {
  return <div>Events Page</div>
}