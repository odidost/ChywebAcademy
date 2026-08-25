"use client";

import { useState, useRef } from "react";
import { Search, Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const POSTS_PER_PAGE = 8;

export default function BlogPage({ initialPosts = [] }: { initialPosts?: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const articlesSectionRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Article", "SEO", "Web Design", "AI Productivity", "Digital Marketing", "Graphic Design"];

  const articles = initialPosts.map(post => {
    // Basic read time estimation (200 words per minute)
    const wordCount = post.content ? post.content.split(/\s+/).length : 0;
    const readTimeMins = Math.max(1, Math.ceil(wordCount / 200));

    // Format date
    const dateObj = new Date(post.published_at);
    const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      desc: post.excerpt || "Read this full article to learn more...",
      cat: "Article", // Default category
      date: dateStr,
      author: "Oko David",
      readTime: `${readTimeMins} min read`,
      featured_image: post.featured_image
    };
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (articlesSectionRef.current) {
      articlesSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filtered = articles.filter((a) => {
    const matchesCat = activeCategory === "All" || a.cat === activeCategory;
    const matchesQuery = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentArticles = filtered.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="relative min-h-screen bg-dot-grid bg-line-grid bg-noise bg-[#F5F4F0] pt-12">
      <section className="relative pt-24 pb-20 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-bold text-xs uppercase tracking-wider mb-6 inline-block">
            Chyweb Insights & Updates
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Digital Skills Knowledge Center</h1>
          <p className="text-slate-600 text-base md:text-lg">
            Stay ahead of the curve. Learn industry trends, professional strategies, and tutorials on SEO, Web Design, AI, Ads, and Branding.
          </p>
        </div>

        {/* Search & Filters */}
        <div ref={articlesSectionRef} className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 border-b border-slate-200 pb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat ? "bg-brand-emerald text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:text-brand-navy hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search articles..."
              className="w-full premium-input pl-10"
            />
          </div>
        </div>

        {/* Featured Hero Article (Shows only on Page 1 when not searching or filtering) */}
        {filtered.length > 0 && currentPage === 1 && searchQuery === "" && activeCategory === "All" && (
          <div className="premium-card rounded-2xl p-8 md:p-12 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] font-extrabold text-brand-emerald uppercase tracking-widest block mb-4 bg-brand-emerald/10 border border-brand-emerald/20 px-3 py-1 rounded-full w-fit">
                Featured Article
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">{articles[0].title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{articles[0].desc}</p>
              <div className="flex items-center gap-6 text-xs text-slate-500 mb-6">
                <span className="flex items-center gap-1.5"><User size={14} /> By {articles[0].author}</span>
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {articles[0].date}</span>
                <span>{articles[0].readTime}</span>
              </div>
              <Link href={`/blog/${articles[0].slug}`} className="inline-flex items-center gap-2 text-brand-emerald text-sm font-bold hover:gap-3 transition-all">
                Read Full Article
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 h-64 overflow-hidden flex justify-center items-center text-center font-sans text-slate-400 font-medium relative">
              {articles[0].featured_image ? (
                <img src={articles[0].featured_image} alt={articles[0].title} className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                "💻 Article Preview Display"
              )}
            </div>
          </div>
        )}

        {/* Article Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 mb-16 p-8">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
              We couldn&apos;t find any posts matching your search or category filter. Try using different keywords or resetting filters.
            </p>
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); setCurrentPage(1); }}
              className="px-5 py-2.5 bg-brand-emerald text-white rounded-lg text-sm font-semibold hover:bg-brand-emerald-hover transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {currentArticles.map((art, idx) => (
                <div key={art.id || idx} className="premium-card rounded-2xl p-5 flex flex-col justify-between hover:border-brand-emerald/30 hover:shadow-lg transition-all overflow-hidden relative group">
                  {art.featured_image && (
                    <div className="w-full h-44 -mx-5 -mt-5 mb-4 bg-slate-100 relative overflow-hidden">
                      <img src={art.featured_image} alt={art.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  )}
                  <Link href={`/blog/${art.slug}`} className="block flex-1">
                    <span className="text-[10px] font-bold text-brand-emerald bg-brand-emerald/10 py-0.5 px-2 rounded-full mb-3 block w-fit">{art.cat}</span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2 hover:text-brand-emerald transition-colors leading-snug line-clamp-2">{art.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">{art.desc}</p>
                  </Link>
                  <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-[10px] text-slate-500 mt-auto">
                    <span>By {art.author}</span>
                    <span>{art.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 px-6 bg-white rounded-2xl border border-slate-200 mb-20 shadow-sm">
                <div className="text-xs text-slate-500">
                  Showing <span className="font-semibold text-slate-900">{startIndex + 1}</span> to{" "}
                  <span className="font-semibold text-slate-900">
                    {Math.min(startIndex + POSTS_PER_PAGE, filtered.length)}
                  </span>{" "}
                  of <span className="font-semibold text-slate-900">{filtered.length}</span> articles
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous Page"
                    className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      currentPage === 1
                        ? "opacity-40 cursor-not-allowed bg-slate-100 text-slate-400"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    <ChevronLeft size={16} />
                    <span>Previous</span>
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          currentPage === pageNum
                            ? "bg-brand-emerald text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next Page / View More"
                    className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      currentPage === totalPages
                        ? "opacity-40 cursor-not-allowed bg-slate-100 text-slate-400"
                        : "bg-brand-emerald hover:bg-brand-emerald-hover text-white shadow-sm"
                    }`}
                  >
                    <span>View More / Next</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Newsletter Signup */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 text-center max-w-3xl mx-auto shadow-md">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Subscribe to Chyweb Digest</h2>
          <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">Get weekly SEO audits, web design checklists, and free templates directly in your inbox.</p>
          {subscribed ? (
            <div className="text-brand-emerald font-bold text-sm bg-brand-emerald/10 border border-brand-emerald/20 p-4 rounded-xl">
              Thank you for subscribing! Check your inbox soon.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full sm:flex-1 premium-input"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-emerald hover:bg-brand-emerald-hover text-white font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Join Newsletter
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

