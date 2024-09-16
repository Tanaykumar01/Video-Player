'use client';

// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
export default function Search({ placeholder }) {
  return (
    <div className="relative flex justify-end w-[40vw] h-[50px]">
      {/* Input Field */}
      <input
        type="text"
        className="w-full px-4 py-2 text-lg text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder={placeholder}
      />
      <button className="absolute text-gray-700 px-4 bg-purple-600 h-[50px] rounded-r-2xl">
      🔍
      </button>
    </div>
  );
}
