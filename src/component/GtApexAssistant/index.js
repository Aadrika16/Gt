import {useState} from 'react'
import {MessageCircle, Send, X} from 'lucide-react'
import './index.css'

const GTApexAssistant = () => {
  const [showChat, setShowChat] = useState(false)

  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: '👋 Welcome to GT Apex Marketing. How can we help grow your business today?',
    },
  ])

  const [input, setInput] = useState('')

  const quickReplies = [
    'SEO Services',
    'Website Development',
    'Social Media Marketing',
    'Paid Ads',
  ]

  const generateReply = text => {
    const message = text.toLowerCase()

    if (message.includes('seo')) {
      return 'We provide advanced SEO services to improve your Google rankings, traffic, and online visibility 🚀'
    }

    if (message.includes('website')) {
      return 'GT Apex builds modern, responsive, high-converting websites for businesses and brands 💻'
    }

    if (message.includes('social')) {
      return 'Our social media marketing helps businesses grow faster through Instagram, Facebook, and paid campaigns 📈'
    }

    if (message.includes('paid')) {
      return 'We run high-performance Google Ads and Meta Ads campaigns for lead generation and sales 🎯'
    }

    return 'Thank you for contacting GT Apex Marketing ✨ Our team will get back to you shortly.'
  }

  const sendMessage = value => {
    const messageText = value || input

    if (messageText.trim() === '') {
      return
    }

    const userMessage = {
      type: 'user',
      text: messageText,
    }

    const botReply = {
      type: 'bot',
      text: generateReply(messageText),
    }

    setMessages(prev => [...prev, userMessage, botReply])

    setInput('')
  }

  return (
    <div>
      {!showChat && (
        <button
          className="gt-floating-btn"
          onClick={() => setShowChat(true)}
        >
          <MessageCircle size={28} />
        </button>
      )}

      {showChat && (
        <div className="gt-chat-card">
          <div className="gt-chat-header">
            <div className="gt-header-left">
              <div className="gt-bot-logo">GT</div>

              <div>
                <h1 className="gt-title">GT Apex AI</h1>
                <p className="gt-status">Online</p>
              </div>
            </div>

            <button
              className="gt-close-btn"
              onClick={() => setShowChat(false)}
            >
              <X size={20} />
            </button>
          </div>

          <div className="gt-chat-body">
            {messages.map((each, index) => (
              <div
                key={index}
                className={
                  each.type === 'user'
                    ? 'gt-user-container'
                    : 'gt-bot-container'
                }
              >
                <div
                  className={
                    each.type === 'user'
                      ? 'gt-user-message'
                      : 'gt-bot-message'
                  }
                >
                  {each.text}
                </div>
              </div>
            ))}

            <div className="gt-quick-replies">
              {quickReplies.map(each => (
                <button
                  key={each}
                  className="gt-reply-btn"
                  onClick={() => sendMessage(each)}
                >
                  {each}
                </button>
              ))}
            </div>
          </div>

          <div className="gt-input-section">
            <input
              type="text"
              className="gt-chat-input"
              placeholder="Ask GT Apex AI..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  sendMessage()
                }
              }}
            />

            <button
              className="gt-send-btn"
              onClick={() => sendMessage()}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default GTApexAssistant