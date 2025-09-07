import { useState } from 'react'
import { getAuth } from '../data/test'

/**
 * PostProject Component
 *
 * Purpose:
 * - Provides clients (or guests) with a form to post new projects.
 * - Collects project details such as title, description, budget, and required skills.
 * - Displays a mock alert with submitted project details (demo mode).
 *
 * Features:
 * - Uses local state to manage form input.
 * - Clears the form after submission.
 * - Includes a fallback for guests (unregistered users).
 *
 * Props: None
 *
 * Future Enhancements:
 * - Integrate with backend API to save posted projects.
 * - Add validation for budget (numeric, min/max values).
 * - Enhance skills input with multi-select tags instead of plain text.
 */
export default function PostProject() {
  const auth = getAuth() // Current logged-in user (null if guest)

  // Local state for project form
  const [form, setForm] = useState({
    title: '',
    description: '',
    budget: '',
    skills: ''
  })

  /**
   * Handles form submission
   * - Prevents page reload
   * - Shows a mock alert with project details
   * - Resets the form
   */
  function submit(e) {
    e.preventDefault()

    // Simulate saving project (demo mode)
    alert(
      'Project posted (mock)\n' +
      JSON.stringify(
        { ...form, postedBy: auth?.email || 'guest' },
        null,
        2
      )
    )

    // Reset form fields
    setForm({ title: '', description: '', budget: '', skills: '' })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Post a Project</h1>

      {/* Project Posting Form */}
      <form onSubmit={submit} className="card p-4 grid gap-3">
        {/* Project Title */}
        <input
          className="input"
          placeholder="Project title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          required
        />

        {/* Budget */}
        <input
          className="input"
          placeholder="Budget"
          value={form.budget}
          onChange={e => setForm({ ...form, budget: e.target.value })}
        />

        {/* Skills */}
        <input
          className="input"
          placeholder="Skills needed (comma separated)"
          value={form.skills}
          onChange={e => setForm({ ...form, skills: e.target.value })}
        />

        {/* Description */}
        <textarea
          className="input"
          placeholder="Describe the project"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        {/* Submit Button */}
        <button className="btn-primary">Publish Project</button>
      </form>
    </div>
  )
}
