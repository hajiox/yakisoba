import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "【業務用】極太麺焼きそば｜常温5ヶ月保存可能な本格太麺 | 会津ブランド館",
  description:
    "もちもち食感の極太麺焼きそば。常温5ヶ月保存可能で、飲食店やイベント出店に最適。1食あたり約86円の高コスパ、14時までの注文で即日発送。防災備蓄食としても人気の業務用焼きそば麺をお届けします。",
  openGraph: {
    title: "【業務用】極太麺焼きそば｜常温5ヶ月保存可能な本格太麺",
    description:
      "もちもち食感の極太麺焼きそば。常温5ヶ月保存可能で、飲食店やイベント出店に最適。1食あたり約86円の高コスパ、14時までの注文で即日発送。",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-v2ieQ8TFRLHC1MEzMEaMjXRgmv7uPZ.jpeg",
        width: 1200,
        height: 630,
        alt: "極太麺焼きそば",
      },
    ],
    locale: "ja_JP",
    type: "website",
    siteName: "会津ブランド館",
  },
  twitter: {
    card: "summary_large_image",
    title: "【業務用】極太麺焼きそば｜常温5ヶ月保存可能な本格太麺",
    description:
      "もちもち食感の極太麺焼きそば。常温5ヶ月保存可能で、飲食店やイベント出店に最適。1食あたり約86円の高コスパ。",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201.jpg-v2ieQ8TFRLHC1MEzMEaMjXRgmv7uPZ.jpeg",
    ],
  },
  keywords: "極太麺焼きそば,業務用焼きそば,常温保存,会津ブランド館,イベント用,防災備蓄,焼きそば麺",
  alternates: {
    canonical: "https://aizubrandhall.com/futomenyakisoba",
  },
}

export default function FutomenyakisobaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

