import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function GitHubPagesChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        text: "Hi! I'm here to help you learn about The Uplift Project. Ask me about our team, donations, or our mission to fight blood cancer!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const campaignContext = `
You are an AI assistant for The Uplift Project, a Leukemia & Lymphoma Society Student Visionaries of the Year fundraising campaign with a $50,000 goal to support blood cancer research.

TEAM INFORMATION:
- Team Leader: Rehan Raj (LHS, 11th grade)
- Co-Leader: Alexis Holmes (LHS, 12th grade)
- Team Members: Abraham Sutton (LHS, 12th), Benjamin Storandt (LHS, 12th), Landon Hansen (RIT, Freshman), Keegan Stinson (LHS, 12th), Sierra Rogler (LHS, 10th), Hildie Villagomez (LHS, 11th)
- Adult Sponsors: Andrew Eickstead (LHS Principal), Matthew Bomersbach (LHS Finance Teacher), Meagan Rikard (LLS Biology Teacher), Andrew Schuetze (LHS Robotics Teacher)
- Honored Hero: Miguel Roman (Blinn College, Freshman)

DONATION IMPACT (per dollar):
- $1 = 2 minutes of research funding
- $25 = 1 information call to patients/families
- $50 = 1 educational material for patients
- $100 = 2 hours of support group funding

CONTACT & SOCIAL:
- Instagram: @theupliftproject25
- Email: rehanraj0911@gmail.com
- Website: theupliftproject.us

KEY FACTS:
- Every 3 minutes, someone in the US is diagnosed with blood cancer
- 1.5 million people are living with or in remission from blood cancer
- Blood cancers are the 3rd leading cause of cancer deaths
- LLS has invested over $1.7 billion in research since 1949

Be helpful, encouraging, and focused on the mission. Keep responses concise and direct visitors to donate or get involved.
`;

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString() + '_user',
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Note: In production, you'll need to add your OPENAI_API_KEY
      // For GitHub Pages, this would need to be handled differently (see instructions below)
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.VITE_OPENAI_API_KEY || 'your-api-key-here'}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: campaignContext },
            { role: "user", content: inputMessage }
          ],
          max_tokens: 200,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const botMessage: Message = {
        id: Date.now().toString() + '_bot',
        text: data.choices[0].message.content,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: Date.now().toString() + '_error',
        text: "I'm having trouble connecting right now. You can always contact us directly at rehanraj0911@gmail.com or check out our Instagram @theupliftproject25!",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-uplift-red hover:bg-red-800 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-80 sm:w-80 bg-white rounded-lg shadow-2xl border border-gray-200">
          {/* Header */}
          <div className="bg-uplift-red text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Uplift Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-red-700 p-1 h-auto w-auto"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="h-64 sm:h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.isUser
                      ? 'bg-uplift-red text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about our campaign..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-uplift-red focus:border-transparent text-sm"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-uplift-red hover:bg-red-800 text-white px-3 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                size="sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}