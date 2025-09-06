export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="flex items-center gap-2">
      <input className="input" placeholder={placeholder||'Search...'} value={value} onChange={e=>onChange(e.target.value)} />
    </div>
  )
}
