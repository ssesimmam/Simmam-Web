import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/leaderboard')({
  component: EventsPage,
})

function EventsPage() {
  return <div>Events Page</div>
}