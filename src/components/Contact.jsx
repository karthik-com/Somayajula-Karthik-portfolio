import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show thank you message immediately
    setSubmitted(true);
    const form = e.target;
    form.submit();
    // Auto-redirect after 3 seconds
    setTimeout(() => {
      window.location.href = import.meta.env.BASE_URL; 
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Have a question or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="border border-green-500/20 rounded-lg p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Send a Message</h3>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm animate-pulse">
                ✓ Thank you! I'll get back to you soon.
              </div>
            )}

            {!submitted ? (
              <form 
                action="https://formsubmit.co/7e885db4377bfa10a086fbf074aea46c" 
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Hidden field to redirect back to portfolio after submission */}
                <input 
                  type="hidden" 
                  name="_next" 
                  value={window.location.href.split('#')[0] + ''}
                />

                {/* Optional: Disable FormSubmit.co's default page */}
                <input 
                  type="hidden" 
                  name="_captcha" 
                  value="false" 
                />

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800/50 border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800/50 border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 bg-slate-800/50 border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:border-green-500 focus:outline-none transition resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-500/20 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/30 transition font-semibold"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400 mb-4">Redirecting you back to the portfolio...</p>
                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {/* Email Card */}
            <div className="border border-green-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:border-green-500/50 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl">📧</span>
                <h3 className="text-lg font-bold text-green-400">Email</h3>
              </div>
              <p className="text-gray-300 break-all">
                somayajulakarthik97@gmail.com
              </p>
              <p className="text-sm text-gray-500 mt-2">I'll reply within 24 hours</p>
            </div>

            {/* WhatsApp Card */}
            <div className="border border-blue-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl">💬</span>
                <h3 className="text-lg font-bold text-blue-400">WhatsApp</h3>
              </div>
              <a
                href={`https://wa.me/917396252914?text=${encodeURIComponent("Hi Karthik! I'm impressed by your cybersecurity and full-stack development expertise. I'd like to discuss how we can collaborate to build more secure and reliable systems. When are you available for a quick chat?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition flex items-center gap-2"
              >
               Click to Chat
                <span className="text-sm text-gray-500">↗</span>
              </a>
              <p className="text-sm text-gray-500 mt-2">Quick chat</p>
            </div>

            {/* LinkedIn Card */}
            <div className="border border-blue-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl">💼</span>
                <h3 className="text-lg font-bold text-purple-400">LinkedIn</h3>
              </div>
              <a
                href ="https://www.linkedin.com/in/somayajula-karthik-b346821b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition flex items-center gap-2"
              >
               LinkedIn Profile
                <span className="text-sm text-gray-500">↗</span>
              </a>
              <p className="text-sm text-gray-500 mt-2">Connect with me on LinkedIn</p>
            </div>
          </div>
        </div>


        {/* Quick Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          <div className="border border-green-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 text-center hover:border-green-500/50 transition">
            <p className="text-3xl font-bold text-green-400 mb-2">24h</p>
            <p className="text-sm text-gray-400">Average Response Time</p>
          </div>
          <div className="border border-blue-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 text-center hover:border-blue-500/50 transition">
            <p className="text-3xl font-bold text-blue-400 mb-2">🌍</p>
            <p className="text-sm text-gray-400">Open to Opportunities</p>
          </div>
          <div className="border border-purple-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 text-center hover:border-purple-500/50 transition">
            <p className="text-3xl font-bold text-purple-400 mb-2">💡</p>
            <p className="text-sm text-gray-400">Always Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}