"use client"

import { useEffect } from "react"
import Layout from "@/components/layout"
import * as gtag from "@/lib/gtag"

export default function LP1() {
  useEffect(() => {
    gtag.event({
      action: "view_lp1",
      category: "engagement",
      label: "LP1 View",
    })
  }, [])

  const handleCTAClick = () => {
    gtag.event({
      action: "click_cta_lp1",
      category: "conversion",
      label: "LP1 CTA Click",
    })
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Landing Page 1</h1>
        <p className="text-xl mb-4">This is the first landing page. It's perfect for product A.</p>
        <button
          onClick={handleCTAClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Learn More About Product A
        </button>
      </div>
    </Layout>
  )
}

