import { Hash, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

const BlogTitles = () => {
  const blogCategories = [
    'General',
    'Technology',
    'Business',
    'Health',
    'Lifestyle',
    'Education',
    'Entertainment',
    'Food',
  ];

  const [selectedCategory, setSelectedCategory] = useState('General');
  const [input, setInput] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Your form submission logic will go here
    console.log({
        keyword: input,
        category: selectedCategory,
    });
  };

  return (
    <div>
      <div className="h-full overflow-y-scroll p-6 flex flex-col md:flex-row gap-6 text-slate-700">
        {/* Left Column (Form) */}
        <form
          onSubmit={onSubmitHandler}
          className="flex-1 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm self-start"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 text-[#8E37EB]" />
            <h1 className="text-xl font-semibold">AI Title Generator</h1>
          </div>

          {/* Topic Input */}
          <label className="block text-sm font-medium mb-2">Keyword</label>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            className="w-full p-2 px-3 mb-6 outline-none text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="The future of AI is..."
            required
          />

          {/* Category Selection */}
          <label className="block text-sm font-medium mb-2">Category</label>
          <div className="flex gap-3 flex-wrap">
            {blogCategories.map((item) => (
              <span
                onClick={() => setSelectedCategory(item)}
                className={`text-xs px-4 py-1.5 rounded-full border cursor-pointer transition ${
                  selectedCategory === item
                    ? 'bg-purple-50 text-purple-700 border-purple-200'
                    : 'text-gray-500 border-gray-300 hover:border-blue-300'
                }`}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#8E37EB] text-white px-4 py-2 mt-8 text-sm font-medium rounded-lg shadow hover:opacity-90 transition"
          >
            <Hash className="w-5" />
            Generate Title
          </button>
        </form>

        {/* Right Column (Results) */}
        <div className="flex-[2] p-6 bg-white rounded-2xl flex flex-col border border-gray-200 shadow-sm min-h-[500px] max-h-[700px]">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <Hash className="w-5 h-5 text-[#8E37EB]" />
            <h1 className="text-xl font-semibold">Generated Titles</h1>
          </div>

          {/* Empty State / Results Area */}
          <div className="flex-1 flex justify-center items-center">
            <div className="text-sm flex flex-col items-center gap-4 text-gray-400">
              <Hash className="w-10 h-10" />
              <p>Enter a Topic and Click "Generate Title" to get started.</p>
            </div>
            {/* You would map over your generated titles here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitles;
