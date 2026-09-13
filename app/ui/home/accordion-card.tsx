'use client'

import clsx from 'clsx';
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
        <button className='w-full group cursor-pointer active:scale-99' onClick={userClick}>
            <div className={clsx('relative bg-white px-[20px] py-[16px] ring-[1.5px] rounded-xl ring-inset',
                expanded ? "ring-blue-300" : "ring-gray-200"
            )}>
                <div>{header}</div>
                <div className={expanded ? "block" : "hidden"}>{content}</div>
                <span className="absolute material-symbols-rounded text-gray-700 leading-[16px] top-[16px] right-[20px]" style={{ fontSize: '20px', fontVariationSettings: "'opsz' 20" }}>{expanded ? "collapse_all" : "expand_all"}</span>
            </div>
        </button>
    );
}