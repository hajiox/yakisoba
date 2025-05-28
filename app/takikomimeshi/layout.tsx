import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "【簡単調理】本格炊き込みチャーシュー飯 | ラーメン屋の味を自宅で | 会津ブランド館",
  description:
    "本格ラーメン屋の贅沢チャーシューをたっぷり120g使用。創業100年「星醸造」の香ばしい醤油だれで炊き込むだけで喜多方ラーメンの味わいを再現。炊飯器に入れるだけの簡単調理で2〜3人前×2個セット、常温保存可能。",
  openGraph: {
    title: "ラーメン屋が作る本格炊き込みチャーシュー飯 | 炊飯器で簡単調理",
    description:
      "本格ラーメン屋のチャーシューたっぷり120g入り。創業100年「星醸造」の醤油だれで炊き込むだけで喜多方ラーメンの味わいを再現。炊飯器に入れるだけの簡単調理で、家族みんなで楽しめる一品。",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-7PEnf4iT9wSFEkWHQLHlFGxGHaz8pV.jpeg",
        width: 1200,
        height: 630,
        alt: "炊き込みチャーシュー飯 - チャーシューと煮卵がたっぷり入った贅沢な一品",
      },
    ],
    locale: "ja_JP",
    type: "website",
    siteName: "会津ブランド館",
  },
  twitter: {
    card: "summary_large_image",
    title: "ラーメン屋が作る本格炊き込みチャーシュー飯 | 炊飯器で簡単調理",
    description:
      "本格ラーメン屋のチャーシューたっぷり120g入り。星醸造の醤油だれで喜多方ラーメンの味わいを再現。炊飯器に入れるだけの簡単調理。",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-7PEnf4iT9wSFEkWHQLHlFGxGHaz8pV.jpeg",
    ],
  },
  keywords:
    "炊き込みチャーシュー飯,喜多方ラーメン,簡単調理,チャーシュー,炊き込みご飯,会津ブランド館,常温保存,備蓄食,ご飯の素",
  alternates: {
    canonical: "https://aizubrandhall.com/takikomimeshi",
  },
}

export default function TakikomimeshiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

