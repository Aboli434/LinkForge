import { useState, useEffect, useRef } from "react"

/**
 * Chat Component
 *
 * A simple chat UI component that:
 * - Renders a message thread (list of messages).
 * - Auto-scrolls to the bottom when new messages are added.
 * - Allows the user to send messages.
 *
 * Props:
 * @param {Object} thread - The chat thread object.
 * @param {Array} thread.messages - Initial array of messages.
 *   Each message object should have:
 *   {
 *     id: number | string,   // Unique identifier
 *     from: string,          // Sender name ("You" or others)
 *     text: string,          // Message content
 *     time: string           // Formatted timestamp
 *   }
 *
 * Behavior:
 * - Resets messages when `thread` changes.
 * - Scrolls to bottom automatically when messages update.
 * - Allows typing a message in an input and sending it by pressing Enter or clicking "Send".
 */

export default function Chat({ thread }) {
  // User's input text
  const [text, setText] = useState("")

  // Messages state (initialized from thread)
  const [messages, setMessages] = useState(thread?.messages || [])

  // Reference to the last message (used for auto-scroll)
  const messagesEndRef = useRef(null)

  // Reset messages when the thread changes
  useEffect(() => {
    setMessages(thread?.messages || [])
  }, [thread])

  // Auto-scroll to the bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  /**
   * Handles sending a new message
   */
  function send(e) {
    e.preventDefault()
    if (!text.trim()) return // Prevent empty messages

    // Construct a new message object
    const m = {
      id: Date.now(), // Unique ID (timestamp-based)
      from: "You", // Sender (hardcoded as "You" for now)
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    // Append new message to messages state
    setMessages((ms) => [...ms, m])

    // Reset input field
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
                  ? "bg-brand-accent text-white" // Your messages
                  : "bg-white border border-gray-200") // Others' messages
              }
            >
              <div className="text-sm">{m.text}</div>
              <div className="text-[10px] opacity-70">{m.time}</div>
            </div>
          </div>
        ))}
        {/* Empty div to anchor scroll-to-bottom */}
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
