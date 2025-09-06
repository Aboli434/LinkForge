import { useState, useEffect, useRef } from "react"

export default function Chat({ thread }) {
  const [text, setText] = useState("")
  const [messages, setMessages] = useState(thread?.messages || [])
  const messagesEndRef = useRef(null)

  // Reset when thread changes
  useEffect(() => {
    setMessages(thread?.messages || [])
  }, [thread])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function send(e) {
    e.preventDefault()
    if (!text.trim()) return
    const m = {
      id: Date.now(),
      from: "You",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }
    setMessages((ms) => [...ms, m])
    setText("")
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto space-y-3 p-2 bg-gray-50 rounded-lg">
        {messages.map((m) => (
          <div key={m.id} className={m.from === "You" ? "text-right" : "text-left"}>
            <div
              className={
                "inline-block px-4 py-2 rounded-2xl max-w-xs md:max-w-md " +
                (m.from === "You"
                  ? "bg-brand-accent text-white"
                  : "bg-white border border-gray-200")
              }
            >
              <div className="text-sm">{m.text}</div>
              <div className="text-[10px] opacity-70">{m.time}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={send} className="mt-3 flex gap-2">
        <input
          className="input flex-1"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn-primary px-5" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}
