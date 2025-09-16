"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [currentSection] = useState(-1);
  const [displayedTexts, setDisplayedTexts] = useState({
    title: "hiresh bremanand",
    storyItems: [
      { text: "started coding (age 13)", link: null },
      { text: "started learning AI (age 18)", link: null },
      { text: "applied to study mech engineering", link: null },
      { text: "built an AI edtech tool (1000 users)", link: "https://studiaai.com" },
      { text: "built an AI tool to generate ai ugc ads (500 users)", link: "https://meteorads.io" },
      { text: "built prompt engineer mcp server (20% less cursor usage)", link: "https://github.com/hireshBrem/prompt-engineer-mcp-server" },
    ],
    contactTitle: "contact"
  });


  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-5xl mx-auto">
      <main className="flex flex-col gap-8">
        <section className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {displayedTexts.title}
            {currentSection === 0 && <span className="animate-pulse">|</span>}
          </h1>
        </section>

          <section className="">
            <h2 className="text-2xl font-bold mb-6">
              {currentSection === 2 && <span className="animate-pulse">|</span>}
            </h2>
            {displayedTexts.storyItems.length > 0 && (
              <ul className="list-disc pl-5 space-y-3">
                {displayedTexts.storyItems.map((item:any, index:any) => (
                  <li key={index}>
                    {item.text.includes("rejected by 4/5 colleges") ? (
                      <>
                        applied to study mechanical engineering{" "}
                        <span className="font-semibold">- rejected by 4/5 colleges</span>
                      </>
                    ) : item.link ? (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      >
                        {item.text}
                      </Link>
                    ) : (
                      item.text
                    )}
                    {currentSection === 3 && index === displayedTexts.storyItems.length - 1 && (
                      <span className="animate-pulse">|</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        
        {displayedTexts.contactTitle && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">
              {displayedTexts.contactTitle}
              {currentSection === 4 && <span className="animate-pulse">|</span>}
            </h2>
            <div className="space-y-3">
            <Link 
              href="mailto:hbremanand2@gmail.com"
              className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 4-10 8L2 4"/>
              </svg>
              hbremanand2@gmail.com
            </Link>
            <Link 
              href="https://x.com/hiresh_b?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
              @hiresh_b (dm's open)
            </Link>
            <Link 
              href="https://github.com/hireshBrem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              hireshBrem
            </Link>
            <Link 
              href="https://www.linkedin.com/in/hiresh-bremanand-a78782224/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                hiresh-bremanand
            </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
