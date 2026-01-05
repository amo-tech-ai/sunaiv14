
import React from 'react';

const MVPUseCases: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900">What Can You Build in 8 Weeks?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
                { title: "Document Analyzer", desc: "Upload PDFs, extract key data points, and chat with documents.", icon: "📄" },
                { title: "Content Generator", desc: "SEO blog post writer, social media scheduler, or email drafter.", icon: "✍️" },
                { title: "Specialized Chatbot", desc: "Customer support bot trained on your specific knowledge base.", icon: "💬" },
                { title: "Prediction Engine", desc: "Simple regression models to forecast sales or inventory needs.", icon: "📈" }
            ].map((useCase, i) => (
                <div key={i} className="flex items-start p-6 rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-2xl mr-4 shrink-0">
                        {useCase.icon}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-1">{useCase.title}</h4>
                        <p className="text-slate-500 text-sm">{useCase.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MVPUseCases;
