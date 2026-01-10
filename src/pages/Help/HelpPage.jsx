import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  ChevronRight, 
  Search, 
  BookOpen, 
  User, 
  Heart, 
  Crown, 
  Shield, 
  Settings,
  MessageCircle,
  Mail,
  FileText,
  Users,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [supportForm, setSupportForm] = useState({
    email: '',
    issue: '',
    description: ''
  });
  const [supportStatus, setSupportStatus] = useState('idle');

  const categories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Getting Started",
      description: "Learn the basics of using WisdomVault",
      articles: 12,
      color: "bg-blue-500"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Account Management",
      description: "Manage your profile and settings",
      articles: 8,
      color: "bg-green-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sharing Lessons",
      description: "How to create and share your wisdom",
      articles: 15,
      color: "bg-red-500"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Premium Features",
      description: "Exclusive content and advanced tools",
      articles: 6,
      color: "bg-yellow-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy & Security",
      description: "Keep your data safe and secure",
      articles: 10,
      color: "bg-purple-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Troubleshooting",
      description: "Fix common issues and problems",
      articles: 9,
      color: "bg-gray-500"
    }
  ];

  const faqs = [
    {
      question: "How do I create my first life lesson?",
      answer: "To create your first lesson, click the 'Share Lesson' button in the top navigation. Fill out the form with your story, choose an emotional tag, and add any relevant details. Your lesson will be reviewed and published within 24 hours."
    },
    {
      question: "What are emotional tags and how do I use them?",
      answer: "Emotional tags help categorize lessons by the feelings they evoke. Choose from Motivational, Reflective, Sad, Gratitude, or Realization. This helps others find lessons that match their current emotional needs."
    },
    {
      question: "How do I upgrade to Premium?",
      answer: "You can upgrade to Premium from your account settings or by clicking 'Go Premium' in the navigation. Premium includes exclusive content, advanced search features, and priority support for $9.99/month."
    },
    {
      question: "Can I edit or delete my published lessons?",
      answer: "Yes, you can edit or delete your lessons anytime from your profile page. Click on any of your published lessons and select 'Edit' or 'Delete' from the options menu."
    },
    {
      question: "How do I report inappropriate content?",
      answer: "If you encounter inappropriate content, click the three dots menu on any lesson and select 'Report'. Our moderation team reviews all reports within 24 hours and takes appropriate action."
    },
    {
      question: "Why can't I see my lesson after publishing?",
      answer: "New lessons go through a brief review process to ensure quality and appropriateness. This usually takes 2-24 hours. You'll receive an email notification once your lesson is approved and live."
    },
    {
      question: "How do I change my email or password?",
      answer: "Go to your Account Settings from the profile menu. You can update your email, password, and other personal information there. You'll need to verify any email changes."
    },
    {
      question: "What happens if I cancel my Premium subscription?",
      answer: "If you cancel Premium, you'll retain access to Premium features until the end of your current billing period. After that, your account will revert to the free tier, but all your lessons and saved content remain intact."
    },
    {
      question: "How do I delete my account permanently?",
      answer: "Account deletion can be requested from Account Settings > Privacy > Delete Account. This action is permanent and cannot be undone. All your lessons and data will be permanently removed within 30 days."
    },
    {
      question: "Can I use WisdomVault for commercial purposes?",
      answer: "Personal stories and lessons shared on WisdomVault are for personal growth and community benefit. Commercial use of the platform or content requires explicit permission. Contact us for business inquiries."
    }
  ];

  const quickLinks = [
    { title: "Reset Password", href: "/reset-password", icon: <User className="w-5 h-5" /> },
    { title: "Contact Support", href: "/contact", icon: <Mail className="w-5 h-5" /> },
    { title: "Report Issue", href: "#report", icon: <AlertCircle className="w-5 h-5" /> },
    { title: "Community Guidelines", href: "/guidelines", icon: <FileText className="w-5 h-5" /> }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      status: "online",
      availability: "Mon-Fri, 9AM-6PM PST",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      status: "available",
      availability: "24/7 - Response within 24 hours",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "Community Forum",
      description: "Ask questions and help others",
      status: "active",
      availability: "Community-driven support",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      status: "available",
      availability: "Always up-to-date",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleSupportSubmit = async (e) => {
    e.preventDefault();
    setSupportStatus('loading');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSupportStatus('success');
      setSupportForm({ email: '', issue: '', description: '' });
    } catch (error) {
      setSupportStatus('error');
      console.log(error)
    }
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F2FAEF] dark:bg-gray-900 transition-colors duration-300">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-[#02A2A2] hover:text-[#028a8a] transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600 dark:text-gray-400">Help & Support</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              How can we help?
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 transition-colors duration-300">
              Find answers to common questions, browse our knowledge base, or get in touch with our support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[#02A2A2] focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="group bg-[#F2FAEF] dark:bg-gray-700 rounded-xl p-6 hover:bg-[#A0EBEB]/20 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-[#02A2A2] group-hover:text-[#028a8a] transition-colors duration-200">
                    {link.icon}
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    {link.title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#02A2A2] ml-auto transition-colors duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Browse Help Topics
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Explore our comprehensive guides organized by category
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${category.color} text-white p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                        {category.articles} articles
                      </span>
                      <ChevronRight className="w-5 h-5 text-[#02A2A2] group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Quick answers to the most common questions
            </p>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F2FAEF] dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#A0EBEB]/10 dark:hover:bg-gray-600 transition-colors duration-200 rounded-xl"
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-4 transition-colors duration-300">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#02A2A2] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#02A2A2] shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                No results found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Try searching with different keywords or browse our help categories above.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Get Support
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Choose the best way to get help based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-center">
                  <div className="bg-[#02A2A2]/10 dark:bg-[#02A2A2]/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-[#02A2A2]">
                      {channel.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    {channel.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors duration-300">
                    {channel.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className={`w-2 h-2 rounded-full ${
                      channel.status === 'online' ? 'bg-green-500' :
                      channel.status === 'available' ? 'bg-blue-500' :
                      'bg-yellow-500'
                    }`}></div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                      {channel.availability}
                    </span>
                  </div>
                  <button className="w-full bg-[#02A2A2] hover:bg-[#028a8a] text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
                    {channel.title === 'Live Chat' ? 'Start Chat' :
                     channel.title === 'Email Support' ? 'Send Email' :
                     channel.title === 'Community Forum' ? 'Visit Forum' :
                     'View Docs'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="report" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Still Need Help?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Send us a message and we'll get back to you as soon as possible
            </p>
          </div>

          <form onSubmit={handleSupportSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={supportForm.email}
                onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#02A2A2] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="issue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                Issue Type
              </label>
              <select
                id="issue"
                required
                value={supportForm.issue}
                onChange={(e) => setSupportForm({...supportForm, issue: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#02A2A2] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
              >
                <option value="">Select an issue type</option>
                <option value="account">Account Issues</option>
                <option value="technical">Technical Problems</option>
                <option value="billing">Billing Questions</option>
                <option value="content">Content Issues</option>
                <option value="feature">Feature Request</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                Description
              </label>
              <textarea
                id="description"
                required
                rows={6}
                value={supportForm.description}
                onChange={(e) => setSupportForm({...supportForm, description: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#02A2A2] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                placeholder="Please describe your issue in detail..."
              />
            </div>

            <button
              type="submit"
              disabled={supportStatus === 'loading'}
              className="w-full bg-[#02A2A2] hover:bg-[#028a8a] disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              {supportStatus === 'loading' ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {supportStatus === 'success' && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-green-800 dark:text-green-200">
                  Message sent successfully! We'll get back to you within 24 hours.
                </span>
              </div>
            )}

            {supportStatus === 'error' && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span className="text-red-800 dark:text-red-200">
                  Failed to send message. Please try again or contact us directly.
                </span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-[#02A2A2] to-[#028a8a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Share Your Wisdom?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of others sharing their life lessons and growing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/share-lesson"
              className="bg-white text-[#02A2A2] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Share Your Story
            </Link>
            <Link
              to="/lessons"
              className="border-2 border-white text-white hover:bg-white hover:text-[#02A2A2] px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore Lessons
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;