import Link from "next/link"
import { ReactNode } from "react"

type PillLinkProps = {
  href: string
  label: string
  icon: ReactNode
  external?: boolean
}

export default function PillLink({ href, label, icon, external = false }: PillLinkProps) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : "_blank"}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center px-[8px] py-[2px] ring-inset ring-[1px] ring-gray-300 rounded gap-[4px]"
    >
      {icon}
      <p className="text-label-S-general text-gray-800 group-hover:text-gray-950">
        {label}
      </p>
    </Link>
  )
}