import { useState } from "react"
import Chat from "../components/Chat.jsx"

export default function Messages() {
  const threads = [
    {
      id: 1,
      name: "Acme Corp",
      lastMessage: "Hi, can you do this?",
      messages: [
        { id: 1, from: "Client", text: "Hi, can you do this?" },
        { id: 2, from: "You", text: "Yes, I can." },
      ],
    },
    {
      id: 2,
      name: "Rahul Devs",
      lastMessage: "Let’s start next week.",
      messages: [
        { id: 1, from: "Rahul", text: "Project timeline?" },
        { id: 2, from: "You", text: "2 weeks delivery." },
        { id: 3, from: "Rahul", text: "Let’s start next week." },
      ],
    },
    {
      id: 3,
      name: "ContentPro",
      lastMessage: "Waiting for your reply.",
      messages: [
        { id: 1, from: "ContentPro", text: "Need SEO article 1000 words." },
        { id: 2, from: "You", text: "Sure, delivery in 3 days." },
        { id: 3, from: "ContentPro", text: "Waiting for your reply." },
      ],
    },
  ]

  const [activeThread, setActiveThread] = useState(threads[0])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Messages</h1>

      <div className="grid grid-cols-12 gap-6">
        {/* Chat List */}
        <div className="col-span-4 card p-4 overflow-y-auto max-h-[600px]">
          <h2 className="text-lg font-semibold mb-3">Chats</h2>
          <ul className="space-y-2">
            {threads.map((t) => (
              <li
                key={t.id}
                onClick={() => setActiveThread(t)}
                className={`p-3 rounded-lg cursor-pointer hover:bg-gray-100 ${
                  activeThread.id === t.id ? "bg-gray-200" : ""
                }`}
              >
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-gray-500 truncate">
                  {t.lastMessage}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Box */}
        <div className="col-span-8 card p-4 flex flex-col max-h-[600px]">
          <Chat thread={activeThread} />
        </div>
      </div>
    </div>
  )
}
