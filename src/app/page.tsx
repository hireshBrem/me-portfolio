"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(-1);
  const [displayedTexts, setDisplayedTexts] = useState({
    title: "hiresh bremanand",
    // subtitle: "building tech",
    // storyTitle: "my story - not finished :)",
    storyItems: [
      "moved to England (age 5)",
      "started coding (age 13)",
      "started learning AI (age 18)",
      "applied to study mechanical engineering",
      "built an AI edtech tool (1000 users)",
      "built an AI tool to generate ai ugc ads (500 users)",
      "built prompt engineer mcp server",
      "currently working on something bigger, stay tuned!"
    ],
    contactTitle: "contact"
  });

  // const sections = [
  //   { key: "title", text: "hey i'm hiresh", speed: 100 },
  //   { key: "subtitle", text: "building AI apps", speed: 60 },
  //   { key: "storyTitle", text: "my story - not finished :)", speed: 80 },
  //   { key: "storyItems", texts: [
  //     "moved to England (age 5)",
  //     "started coding during Covid lockdown (age 13)",
  //     "freelancing on Fiverr",
  //     "started learning AI (age 18)",
  //     "applied to study mechanical engineering",
  //     "built an AI edtech tool (1000 users)",
  //     "built an AI tool to generate ai ugc ads (500 users)",
  //     "currently working on something bigger, stay tuned!"
  //   ], speed: 30 },
  //   { key: "contactTitle", text: "contact", speed: 100 }
  // ];

  // useEffect(() => {
  //   if (currentSection >= sections.length) return;
  //
  //   const section:any = sections[currentSection];
  //   
  //   if (section.key === "storyItems") {
  //     let itemIndex = 0;
  //     let charIndex = 0;
  //     const currentItems:any[] = [];
  //     
  //     const typeStoryItems = () => {
  //       if (itemIndex >= section.texts.length) {
  //         setCurrentSection(prev => prev + 1);
  //         return;
  //       }
  //       
  //       const currentText = section.texts[itemIndex];
  //       const interval = setInterval(() => {
  //         if (charIndex <= currentText.length) {
  //           currentItems[itemIndex] = currentText.slice(0, charIndex);
  //           setDisplayedTexts((prev:any) => ({
  //             ...prev,
  //             storyItems: [...currentItems]
  //           }));
  //           charIndex++;
  //         } else {
  //           clearInterval(interval);
  //           itemIndex++;
  //           charIndex = 0;
  //           setTimeout(typeStoryItems, 200);
  //         }
  //       }, section.speed);
  //     };
  //     
  //     typeStoryItems();
  //   } else {
  //     let currentIndex = 0;
  //     const interval = setInterval(() => {
  //       if (currentIndex <= section.text.length) {
  //         setDisplayedTexts(prev => ({
  //           ...prev,
  //           [section.key]: section.text.slice(0, currentIndex)
  //         }));
  //         currentIndex++;
  //       } else {
  //         clearInterval(interval);
  //         setTimeout(() => setCurrentSection(prev => prev + 1), 500);
  //       }
  //     }, section.speed);
  //   }
  // }, [currentSection]);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-5xl mx-auto">
      <main className="flex flex-col gap-8">
        {/* Hero Section */}
        <section className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {displayedTexts.title}
            {currentSection === 0 && <span className="animate-pulse">|</span>}
          </h1>
        </section>

        {/* Story Section */}
        {/* {displayedTexts.storyTitle && ( */}
          <section className="">
            <h2 className="text-2xl font-bold mb-6">
              {/* {displayedTexts.storyTitle} */}
              {currentSection === 2 && <span className="animate-pulse">|</span>}
            </h2>
            {displayedTexts.storyItems.length > 0 && (
              <ul className="list-disc pl-5 space-y-3">
                {displayedTexts.storyItems.map((item:any, index:any) => (
                  <li key={index}>
                    {typeof item === 'string' && item.includes("rejected by 4/5 colleges") ? (
                      <>
                        applied to study mechanical engineering{" "}
                        <span className="font-semibold">- rejected by 4/5 colleges</span>
                      </>
                    ) : (
                      item
                    )}
                    {currentSection === 3 && index === displayedTexts.storyItems.length - 1 && (
                      <span className="animate-pulse">|</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        {/* )} */}

        {/* Contact Section */}
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
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
