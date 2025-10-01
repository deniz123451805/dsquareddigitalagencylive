import React, { useState } from 'react';
import { Search, Filter, Calendar, ArrowRight, TrendingUp, Users, Target, Bot, Zap } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact' | 
           'social-media' | 'seo-content' | 'paid-advertising' | 'marketing-automation' | 'brand-strategy' | 'analytics-reporting';

interface BlogProps {
  onNavigate?: (page: Page) => void;
}

const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Posts', count: 25 },
    { id: 'seo', name: 'SEO', count: 8 },
    { id: 'smm', name: 'Social Media Marketing', count: 6 },
    { id: 'sem', name: 'Search Engine Marketing', count: 5 },
    { id: 'ai-automation', name: 'AI Automation', count: 4 },
    { id: 'trends', name: 'Digital Marketing Trends', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Small Business Digital Marketing Strategies That Actually Work in 2024',
      excerpt: 'Learn the most effective digital marketing strategies that small businesses are using to compete with larger companies and achieve remarkable growth in 2024.',
      category: 'trends',
      date: '2024-01-20',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'Affordable Web Design for Local Businesses: Complete Guide',
      excerpt: 'A comprehensive guide showing local businesses how to create professional, conversion-focused websites on a budget, including tools, templates, and best practices.',
      category: 'seo',
      date: '2024-01-18',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 3,
      title: 'Social Media Management for Startups: Essential Tips and Tools',
      excerpt: 'Essential social media management strategies for startups, covering platform selection, content planning, engagement tactics, and the best free and paid tools to streamline your efforts.',
      category: 'smm',
      date: '2024-01-16',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 4,
      title: 'Content Marketing Tips for Small Companies on a Tight Budget',
      excerpt: 'Discover practical, budget-friendly content marketing strategies that small companies can implement in-house, including content planning, creation workflows, and distribution tactics.',
      category: 'sem',
      date: '2024-01-14',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 5,
      title: 'Local SEO for Small Businesses: Dominate Your Local Market',
      excerpt: 'Master local SEO with this comprehensive guide covering Google My Business optimization, local keyword research, citation building, and review management strategies.',
      category: 'ai-automation',
      date: '2024-01-12',
      readTime: '11 min read',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 6,
      title: 'Email Marketing for Small Business: Build Customer Loyalty on a Budget',
      excerpt: 'Build lasting customer relationships through strategic email marketing. Learn list building, segmentation, automation workflows, and how to create engaging campaigns using affordable tools.',
      category: 'trends',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  // Individual Blog Post Component
  const BlogPost: React.FC<{ postId: number }> = ({ postId }) => {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return null;

    return (
      <div className="min-h-screen bg-signal-white">
        {/* Blog Post Header */}
        <section className="section-padding bg-charcoal-ink">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="text-brass-accent hover:text-brass-600 mb-8 inline-flex items-center"
            >
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Blog
            </button>
            
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-4 text-ivory-mist/70">
                <span className="capitalize">{post.category.replace('-', ' ')}</span>
                <div className="w-1 h-1 bg-ivory-mist/50 rounded-full"></div>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <div className="w-1 h-1 bg-ivory-mist/50 rounded-full"></div>
                <span>{post.readTime}</span>
              </div>
              
              <h1 className="heading-primary text-brass-accent">
                {post.title}
              </h1>
              
              <p className="body-large text-ivory-mist max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Blog Post Content */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl mb-8"
              />
              
              {/* Sample blog content - in a real implementation, this would come from a CMS */}
              <div className="space-y-6 text-charcoal-ink/80 leading-relaxed">
                {/* Dynamic content based on post title */}
                {post.id === 1 && (
                  <>
                    <p className="body-large">
                      Small businesses face unique challenges in the digital marketing landscape. With limited budgets and resources, competing against larger corporations seems impossible. However, 2024 has brought new opportunities and strategies that level the playing field.
                    </p>
                    
                    <h2 className="heading-tertiary text-charcoal-ink mt-12 mb-6">The Small Business Advantage</h2>
                    <p className="body-regular">
                      Small businesses have inherent advantages that larger companies struggle to replicate: agility, personal relationships, and local market knowledge. The key is leveraging these strengths through strategic digital marketing.
                    </p>
                    
                    <h3 className="heading-tertiary text-charcoal-ink mt-8 mb-4">Proven Strategies for 2024</h3>
                    <ul className="space-y-3 body-regular">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brass-accent rounded-full mt-3 flex-shrink-0"></div>
                        <span><strong>Hyper-Local SEO:</strong> Dominate local search results by optimizing for "near me" searches and local keywords</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brass-accent rounded-full mt-3 flex-shrink-0"></div>
                        <span><strong>Micro-Influencer Partnerships:</strong> Partner with local influencers who have engaged, relevant audiences</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brass-accent rounded-full mt-3 flex-shrink-0"></div>
                        <span><strong>Video-First Content:</strong> Create authentic, behind-the-scenes content that showcases your business personality</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brass-accent rounded-full mt-3 flex-shrink-0"></div>
                        <span><strong>Customer Success Stories:</strong> Leverage testimonials and case studies to build trust and credibility</span>
                      </li>
                    </ul>
                  </>
                )}
                
                {post.id === 2 && (
                  <>
                    <p className="body-large">
                      Your website is often the first impression potential customers have of your local business. Creating a professional, conversion-focused website doesn't have to cost thousands of dollars or require technical expertise.
                    </p>
                    
                    <h2 className="heading-tertiary text-charcoal-ink mt-12 mb-6">Essential Elements of Local Business Websites</h2>
                    <p className="body-regular">
                      Local businesses need websites that not only look professional but also convert visitors into customers. Here are the must-have elements for your website.
                    </p>
                    
                    <h3 className="heading-tertiary text-charcoal-ink mt-8 mb-4">Budget-Friendly Website Solutions</h3>
                    <ul className="space-y-3 body-regular">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brass-accent rounded-full mt-3 flex-shrink-0"></div>
                        <span><strong>WordPress with Local Themes:</strong> Professional templates designed specifically for local businesses</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brass-accent rounded-full mt-3 flex-shrink-0"></div>
                        <span><strong>Squarespace for Service Businesses:</strong> Easy-to-use platform with built-in SEO and mobile optimization</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brass-accent rounded-full mt-3 flex-shrink-0"></div>
                        <span><strong>Wix for Retail Locations:</strong> Drag-and-drop builder with e-commerce capabilities</span>
                      </li>
                    </ul>
                  </>
                )}
                
                {/* Default content for other posts */}
                {![1, 2].includes(post.id) && (
                  <>
                    <p className="body-large">
                      {post.excerpt}
                    </p>
                    
                    <h2 className="heading-tertiary text-charcoal-ink mt-12 mb-6">Key Strategies</h2>
                    <p className="body-regular">
                      This comprehensive guide covers the essential strategies and tactics you need to succeed in today's competitive digital landscape.
                    </p>
                    
                    <h3 className="heading-tertiary text-charcoal-ink mt-8 mb-4">Implementation Steps</h3>
                    <ul className="space-y-3 body-regular">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brass-accent rounded-full mt-3 flex-shrink-0"></div>
                        <span><strong>Planning:</strong> Develop a comprehensive strategy aligned with your business goals</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brass-accent rounded-full mt-3 flex-shrink-0"></div>
                        <span><strong>Execution:</strong> Implement tactics systematically with proper tracking and measurement</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-brass-accent rounded-full mt-3 flex-shrink-0"></div>
                        <span><strong>Optimization:</strong> Continuously refine your approach based on data and results</span>
                      </li>
                    </ul>
                  </>
                )}
                
                <div className="bg-brass-accent/10 rounded-2xl p-8 my-8">
                  <h4 className="heading-tertiary text-charcoal-ink mb-4">Pro Tip</h4>
                  <p className="body-regular text-charcoal-ink/80">
                    Start with one or two strategies and master them before expanding. Consistency and quality always beat quantity in digital marketing.
                  </p>
                </div>
                
                <h2 className="heading-tertiary text-charcoal-ink mt-12 mb-6">Measuring Success</h2>
                <p className="body-regular">
                  Track the right metrics to ensure your efforts are driving real business results. Focus on conversions, customer acquisition cost, and lifetime value rather than vanity metrics.
                </p>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-16 p-8 bg-charcoal-ink rounded-2xl text-center">
              <h3 className="heading-tertiary text-brass-accent mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="body-regular text-ivory-mist mb-6">
                Let's discuss how we can help you implement these strategies for your business.
              </p>
              <button
                onClick={() => {
                  setSelectedPost(null);
                  onNavigate?.('contact');
                }}
                className="btn-primary"
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  };

  // If a post is selected, show the individual post
  if (selectedPost) {
    return <BlogPost postId={selectedPost} />;
  }

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'seo': return TrendingUp;
      case 'smm': return Users;
      case 'sem': return Target;
      case 'ai-automation': return Bot;
      case 'trends': return Zap;
      default: return Filter;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-primary text-brass-accent mb-6">
            Digital Marketing Insights
          </h1>
          <p className="body-large text-ivory-mist max-w-4xl mx-auto">
            Stay ahead of the curve with expert insights, proven strategies, and the latest trends in digital marketing
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-signal-white border-b border-charcoal-ink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-ink/50" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-10 rounded-full"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = getCategoryIcon(category.id);
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-brass-accent text-ivory-mist'
                        : 'bg-charcoal-ink/10 text-charcoal-ink hover:bg-charcoal-ink/20'
                    }`}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {category.name}
                    <span className="ml-2 text-xs bg-ivory-mist/20 px-2 py-0.5 rounded-full">
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && !searchTerm && (
        <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              <div className="lg:col-span-6 mb-12 lg:mb-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-brass-accent/20 rounded-3xl blur-3xl"></div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl border-2 border-brass-accent/30"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-brass-accent text-ivory-mist px-4 py-2 rounded-full text-sm font-bold">
                      Featured Article
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-charcoal-ink/70">
                    <span className="capitalize">{featuredPost.category.replace('-', ' ')}</span>
                    <div className="w-1 h-1 bg-charcoal-ink/50 rounded-full"></div>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <div className="w-1 h-1 bg-charcoal-ink/50 rounded-full"></div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <h2 className="heading-secondary text-charcoal-ink">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="body-large text-charcoal-ink/80">
                    {featuredPost.excerpt}
                  </p>
                  
                  <button 
                    onClick={() => setSelectedPost(featuredPost.id)}
                    className="btn-primary"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-padding bg-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="card-elevated group overflow-hidden hover:border-brass-accent/50">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-signal-white/90 backdrop-blur-sm text-charcoal-ink px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {post.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-charcoal-ink/70 text-sm mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <div className="w-1 h-1 bg-charcoal-ink/50 rounded-full"></div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="heading-tertiary text-charcoal-ink mb-3 group-hover:text-brass-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="body-regular text-charcoal-ink/80 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <button 
                    onClick={() => setSelectedPost(post.id)}
                    className="inline-flex items-center text-brass-accent font-semibold hover:text-brass-600 transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="body-large text-charcoal-ink/70">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="btn-primary mt-4"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-brass-accent mb-6">
            Stay Updated with Digital Marketing Insights
          </h2>
          <p className="body-large text-ivory-mist mb-8">
            Get weekly insights, strategies, and trends delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input flex-1 rounded-full"
            />
            <button className="btn-primary rounded-full whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          
          {/* Service Links */}
          <div className="mt-12 pt-8 border-t border-brass-accent/30">
            <h3 className="heading-tertiary text-brass-accent mb-6">Explore Our Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <button
                onClick={() => onNavigate?.('social-media')}
                className="text-ivory-mist/80 hover:text-brass-accent transition-colors duration-300 text-sm"
              >
                Social Media Management
              </button>
              <button
                onClick={() => onNavigate?.('seo-content')}
                className="text-ivory-mist/80 hover:text-brass-accent transition-colors duration-300 text-sm"
              >
                SEO & Content Marketing
              </button>
              <button
                onClick={() => onNavigate?.('paid-advertising')}
                className="text-ivory-mist/80 hover:text-brass-accent transition-colors duration-300 text-sm"
              >
                Paid Advertising
              </button>
              <button
                onClick={() => onNavigate?.('marketing-automation')}
                className="text-ivory-mist/80 hover:text-brass-accent transition-colors duration-300 text-sm"
              >
                Marketing Automation
              </button>
              <button
                onClick={() => onNavigate?.('brand-strategy')}
                className="text-ivory-mist/80 hover:text-brass-accent transition-colors duration-300 text-sm"
              >
                Brand Strategy
              </button>
              <button
                onClick={() => onNavigate?.('analytics-reporting')}
                className="text-ivory-mist/80 hover:text-brass-accent transition-colors duration-300 text-sm"
              >
                Analytics & Reporting
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;