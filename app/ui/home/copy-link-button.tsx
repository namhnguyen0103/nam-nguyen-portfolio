'use client';

import clsx from 'clsx';
import { useState } from 'react';

type CopyLinkButtonProps = {
    link: string
}

export default function CopyLinkButton({ link }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Get the current URL or specify a custom link
      const currentUrl = link; 
      
      await navigator.clipboard.writeText(currentUrl);
      
      // Provide visual feedback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <button 
      onClick={handleCopy}
      className='active:scale-97 cursor-copy'
    >
        <div className={
            clsx("group flex items-center px-[8px] py-[2px] ring-inset ring-1 rounded gap-[4px]",
                {
                    "ring-gray-300": copied === false,
                    "ring-blue-300": copied === true
                }
            )
        }>
            <span className={clsx("material-symbols-rounded",
                {
                    "text-gray-800 group-hover:text-gray-900": copied === false,
                    "text-blue-700": copied === true
                }
            )} style={{ fontSize: '12px', fontVariationSettings: "'opsz' 24" }}>mail</span>
            <p className={
                clsx("text-label-S-general",
                    {
                        "text-gray-800 group-hover:text-gray-950": copied === false,
                        "text-blue-800": copied === true
                    }
                )}>namhnguyen0103@gmail.com</p>
            {
            copied 
            ?   <span className="material-symbols-rounded text-blue-700" style={{ fontSize: '12px', fontVariationSettings: "'opsz' 24" }}>check</span>
            :   <span className="material-symbols-rounded text-gray-700 group-hover:text-gray-900" style={{ fontSize: '12px', fontVariationSettings: "'opsz' 24" }}>content_copy</span>
            }
        </div>
    </button>
  );
}