import UserWindow from "./UserWindow"


export default function Header() {
  return (
    <div className="header">
      <label className="app_text header_text">Awesome Kanban Board</label>
      <UserWindow />
    </div>
  )
}