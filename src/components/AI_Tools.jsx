import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AI_Tools = () => {
  const navigate = useNavigate()
  const { user } = useUser()

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">Powerful AI Tools</h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Everything you need to create, enhance and optimize your content with cutting-edge AI technology.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => user && navigate(tool.path)}
          >
            {/* Icon */}
            <div
              className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            >
              <tool.Icon className="w-6 h-6 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-slate-800">{tool.title}</h3>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-2">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AI_Tools
