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
You are an AI assistant for The Uplift Project, a Blood Cancer United Student Visionaries of the Year fundraising campaign with a $50,000 goal to support families affected by blood cancer with paying their bills.
- Blood Cancer United is formerly known as the Leukemia and Lymphoma Society, or the LLS


TEAM INFORMATION:
- Team Leader: Rehan Raj (LHS, 11th grade)
- Student Team Members: Abraham Sutton (LHS, 12th), Benjamin Storandt (LHS, 12th), Landon Hansen (RIT, Freshman), Keegan Stinson (LHS, 12th), Sierra Rogler (LHS, 10th), Hildie Villagomez (LHS, 11th), Milly Cardenas (LHS, 12th), Christopher Johnson (LHS, 12th)
- Adult Team Members: Andrew Eickstead (LHS Principal), Matthew Bomersbach (LHS Business Teacher), Andrew Schuetze (LHS Robotics Teacher)
- Honored Hero & Student Team Member: Miguel Roman (Blinn College, Freshman)

- LHS is Lutheran High School of San Antonio, the school where our team goes and that sponsors us.

DONATION IMPACT (per dollar):
- $1 = 2 minutes of research funding
- $25 = 1 information call to patients/families
- $50 = 1 educational material for patients
- $100 = 2 hours of support group funding

CONTACT & SOCIAL:
- Instagram: @theupliftproject25
- Email: rehan.raj@lhssa.org
- Website: theupliftproject.us

KEY FACTS:
- Every 3 minutes, someone in the US is diagnosed with blood cancer
- 1.5 million people are living with or in remission from blood cancer
- Blood cancers are the 3rd leading cause of cancer deaths
- LLS has invested over $1.7 billion in research since 1949
- Fundraiser runs from Jan 16 - Mar 7, 2026
- Our fundraiser was featured in Forbes. Link to learn more: https://www.instagram.com/p/DRdIoASj_TD/?img_index=1

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
      // Check if API key is available
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      console.log('API Key available:', !!apiKey);
      console.log('API Key prefix:', apiKey ? apiKey.substring(0, 10) + '...' : 'none');
      
      if (!apiKey) {
        throw new Error('OpenAI API key not configured');
      }
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
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
        const errorData = await response.text();
        console.error('OpenAI API Error:', response.status, errorData);
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      const botMessage: Message = {
        id: Date.now().toString() + '_bot',
        text: data.choices[0].message.content,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error: any) {
      console.error('Chat error:', error);
      console.error('Error details:', {
        message: error?.message || 'Unknown error',
        stack: error?.stack,
        apiKey: !!import.meta.env.VITE_OPENAI_API_KEY
      });
      
      let errorText = "I'm having trouble connecting right now. You can always contact us directly at rehan.raj@lhssa.org or check out our Instagram @theupliftproject25!";
      
      if (error?.message?.includes('not configured')) {
        errorText = "OpenAI API key is not configured. Please check the environment variables.";
      } else if (error?.message?.includes('401')) {
        errorText = "Invalid API key. Please check your OpenAI API key configuration.";
      } else if (error?.message?.includes('429')) {
        errorText = "Rate limit exceeded. Please try again in a moment.";
      }
      
      const errorMessage: Message = {
        id: Date.now().toString() + '_error',
        text: errorText,
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
