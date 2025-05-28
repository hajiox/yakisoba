import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "【会津ブランド認定】極上会津馬刺し｜伝統の味と品質をご家庭で | 会津ブランド館",
  description:
    "創業400年以上の歴史を誇る会津の馬刺し。国産馬肉のみを使用し、独自の肥育方法で育てた極上の馬刺しを産地直送でお届け。常温保存可能で贈り物にも最適。会津ブランド認定の確かな品質をご堪能ください。",
  openGraph: {
    title: "【会津ブランド認定】極上会津馬刺し｜伝統の味と品質をご家庭で",
    description:
      "創業400年以上の歴史を誇る会津の馬刺し。国産馬肉のみを使用し、独自の肥育方法で育てた極上の馬刺しを産地直送でお届け。常温保存可能で贈り物にも最適。",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-rTE9QZVEYbZZDZlXLB5kKEXoQsQgmD.jpeg",
        width: 1200,
        height: 630,
        alt: "会津馬刺しの特選盛り合わせ",
      },
    ],
    locale: "ja_JP",
    type: "website",
    siteName: "会津ブランド館",
  },
  twitter: {
    card: "summary_large_image",
    title: "【会津ブランド認定】極上会津馬刺し｜伝統の味と品質をご家庭で",
    description:
      "創業400年以上の歴史を誇る会津の馬刺し。国産馬肉のみを使用し、独自の肥育方法で育てた極上の馬刺しを産地直送でお届け。",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-rTE9QZVEYbZZDZlXLB5kKEXoQsQgmD.jpeg",
    ],
  },
  keywords: "会津馬刺し,馬刺し,桜肉,会津ブランド認定,会津ブランド館,馬肉,グルメ,お取り寄せ,ギフト",
  alternates: {
    canonical: "https://aizubrandhall.com/basashi",
  },
}

export default function BasashiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

