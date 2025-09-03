export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="mb-6 text-lg text-gray-500">
        Insights, tips, and news about AI in business and technology.
      </p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          How to Build an AI-Ready Team
        </h2>
        <p className="text-gray-400 mb-4">
          Practical steps for preparing your workforce for AI adoption.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          AI Ethics: What Every Leader Should Know
        </h2>
        <p className="text-gray-400 mb-4">
          A guide to responsible AI use and governance in modern organizations.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          The Future of AI in Industry
        </h2>
        <p className="text-gray-400">
          Emerging trends and opportunities for AI-driven innovation.
        </p>
      </div>
    </main>
  );
}
