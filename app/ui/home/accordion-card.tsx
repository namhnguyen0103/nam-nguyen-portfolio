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
            <div className='bg-white px-[20px] py-[16px] rounded-xl ring-[1.5px] ring-gray-200 ring-inset'>
                <div>{header}</div>
                <div className={expanded ? "block" : "hidden"}>{content}</div>
            </div>
        </button>
    );
}