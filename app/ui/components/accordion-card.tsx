'use client'

import { useState } from 'react';

type AccordionCardProps = {
    header: React.ReactNode,
    content: React.ReactNode
}

export default function AccordionCard({ header, content } : AccordionCardProps) {
    const [expanded, setExpanded] = useState(false);

    function userClick() {
        setExpanded(() => !expanded);
    }
    
    return (
        <button className='w-full group cursor-pointer' onClick={userClick}>
            <div className='relative py-4 px-4 rounded-xl ring-2 ring-gray-50 ring-inset'>
                <div>{header}</div>
                <div className={expanded ? "block" : "hidden"}>{content}</div>
                <span className="absolute material-symbols-rounded text-gray-700 leading-4 top-4 right-5" style={{ fontSize: '20px', fontVariationSettings: "'opsz' 20" }}>{expanded ? "collapse_all" : "expand_all"}</span>
            </div>
        </button>
    );
}