export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="h-9 w-9 rounded-xl bg-brand-accent text-white grid place-items-center font-bold">FM</div>
          <p className="mt-3 text-sm text-gray-600">Empowering freelancers, simplifying hiring.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Platform</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/services">Services</a></li>
            <li><a href="/post-project">Post Project</a></li>
            <li><a href="/orders">Orders</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/about">About</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-gray-500">© 2025 FreelanceMarket</div>
    </footer>
  )
}
