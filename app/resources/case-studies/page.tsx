export default function CaseStudiesPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
      <p className="mb-6 text-lg text-gray-500">
        Explore how we've helped businesses across industries achieve success
        with AI.
      </p>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Manufacturing: Predictive Maintenance
        </h2>
        <p className="text-gray-400 mb-4">
          Reduced downtime by 37% and maintenance costs by 28% for a global
          manufacturer using AI-powered predictive maintenance.
        </p>
        <h2 className="text-xl font-semibold mb-2">Finance: Fraud Detection</h2>
        <p className="text-gray-400 mb-4">
          Improved fraud detection accuracy by 62% and reduced false positives
          for a leading financial group.
        </p>
        <h2 className="text-xl font-semibold mb-2">
          Healthcare: Diagnostic Assistance
        </h2>
        <p className="text-gray-400">
          Enhanced diagnostic accuracy by 28% and reduced time to diagnosis for
          a healthcare provider with AI tools.
        </p>
      </div>
    </main>
  );
}
