import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/houses')({
  component: AdminHouses,
})

function AdminHouses() {
  return <div>Admin Houses</div>
}
