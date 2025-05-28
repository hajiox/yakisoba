"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import * as gtag from "@/lib/gtag"
import SharedLayout from "@/components/shared-layout"

export default function FutomenyakisobaPage() {
  useEffect(() => {
    gtag.event({
      action: "view_futomenyakisoba_lp",
      category: "engagement",
      label: "Futomenyakisoba LP View",
    })
  }, [])

  // handlePurchaseClick 関数を修正
  const handlePurchaseClick = (marketplace: string) => {
    // イベントを同期的に送信
    gtag.event({
      action: "click_purchase",
      category: "conversion",
      label: `Futomenyakisoba Purchase Click - ${marketplace}`,
    })
  }

  return (
    <SharedLayout>
      {/* メインビジュアル */}
      <div className="relative w-full overflow-hidden" style={{ height: "calc(100vh - 89px)" }}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8488%EF%BC%88%E4%BF%AE%E6%AD%A3%EF%BC%89.jpg-5GEV98thFaficFwoQByoVzbUZPvuaL.jpeg"
          alt="極太麺ソース焼きそば"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* キャッチコピー */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-2 sm:px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-12 leading-relaxed">
            食べ応え満点の
            <br className="sm:hidden" />
            極太焼きそば麺！
            <br className="mb-8 sm:mb-16" />
            常温で5ヶ月保存可能！
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-700">
            飲食店やイベント出店、
            <br className="sm:hidden" />
            防災備蓄など幅広く活躍中！
          </h2>
          <p className="text-sm sm:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            極太麺ソース焼きそばセットは、もちもちの食感と食べ応え抜群の極太麺が特徴。午後2時までの注文で即日発送、しかも常温で5ヶ月間保存可能なので飲食店やイベント運営時の在庫管理も容易です。一食あたり約86円（税込・送料込み※一部地域・離島除く）という経済性も魅力で、利益率アップにも貢献します。調理が簡単なのに本格的な味わいが楽しめるため、店舗の看板メニューやイベントの即戦力として幅広くご活用いただけます。
          </p>
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sato_shouhiko_Stylish_yet_soft_i.jpg-sD97s4oqfmWUZw2yODHBDmeW5I55ES.jpeg"
              alt="イベントでの焼きそば調理シーン"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* 商品紹介 */}
      <section className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">商品紹介</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-12 mb-8 sm:mb-12 items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-01.jpg-tqWq2bQMR4UI7vN7hHGV9v0vMSnxPh.jpeg"
              alt="送料無料"
              width={300}
              height={100}
              className="rounded-lg"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-01.jpg-kBSdiXrb7XdKMy8JKqWSLDGUZpmCNl.jpeg"
              alt="即日発送"
              width={300}
              height={100}
              className="rounded-lg"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* 業務用80個セット */}
            <div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%80%90%E6%A5%BD%E5%A4%A9%E4%BB%96%E3%80%91%E3%83%A1%E3%82%A4%E3%83%B3%E7%94%BB%E5%83%8F2-01.jpg-yakmBMQnsHNhKcUtrsWyGZ4VyVHmN9.jpeg"
                  alt="極太麺ソース焼きそば 業務用"
                  width={400}
                  height={400}
                  className="rounded-lg mb-4"
                />
                <h4 className="text-base sm:text-lg font-bold mb-2">【業務用】焼きそば麺（太麺）</h4>
                <p className="text-sm sm:text-base mb-2">150g × 80個</p>
                <p className="text-sm sm:text-base mb-2">常温長期保存5ヶ月</p>
                <p className="text-sm sm:text-base mb-4">飲食店・イベント向け業務用セット</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl sm:text-2xl font-bold">¥6,900</p>
                  <p className="text-xl sm:text-2xl font-bold">送料無料</p>
                </div>
              </div>
            </div>

            {/* 4食セット */}
            <div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E4%BB%96TOP-01.jpg-gPO8K6Bp7gNnbWbT3FbfC2QTNK1A63.jpeg"
                  alt="極太焼きそば&ソース4食セット"
                  width={400}
                  height={400}
                  className="rounded-lg mb-4"
                />
                <h4 className="text-base sm:text-lg font-bold mb-2">【お試しに！】極太焼きそば&ソース4食セット</h4>
                <p className="text-sm sm:text-base mb-2">常温5ヶ月保管可能</p>
                <p className="text-sm sm:text-base mb-2">非常食・備蓄食にも</p>
                <p className="text-sm sm:text-base mb-4">ご家庭用おためしセット</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl sm:text-2xl font-bold">¥980</p>
                  <p className="text-xl sm:text-2xl font-bold">送料無料</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 商品情報 */}
      <section className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">商品特徴</h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Point 1 */}
            <div className="text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8488%EF%BC%88%E4%BF%AE%E6%AD%A32%EF%BC%89.jpg-sRyu7dokv6ybB5ZIOB9ScbI71eDJ4d.jpeg"
                alt="極太麺の圧倒的な食べ応えと品質"
                width={250}
                height={250}
                className="mx-auto mb-4 rounded-lg object-cover h-[200px] sm:h-[250px]"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Point 1：極太麺の圧倒的な食べ応えと品質</h3>
              <p className="text-xs sm:text-sm text-left mx-1 leading-relaxed">
                常温で保存できる極太焼きそば麺。他にはないもちもち食感が楽しめる特製麺です。茹で済みなのでほぐれやすく、さっと炒めるだけで簡単に調理が可能。しっかり炒めることで、より香ばしく仕上がり、時間が経ってものびにくいのも大きな特徴です。飲食店やイベント出店者の方にも長年リピートされ続けている実績のある麺で、食べ応えのある本格焼きそばを求める方に最適です。
              </p>
            </div>
            <div className="text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%84%BC%E3%81%8D%E3%81%9D%E3%81%B0%E9%BA%BA%EF%BC%88%E8%83%8C%E6%99%AF%E7%84%A1%E3%81%97%EF%BC%89-uDyUn4kY0rnbMUycinVcEqGH0fVNVI.png"
                alt="常温で5ヶ月の長期保存可能"
                width={250}
                height={250}
                className="mx-auto mb-4 rounded-lg object-contain bg-white h-[200px] sm:h-[250px]"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Point 2：常温で5ヶ月保存＆即日発送対応</h3>
              <p className="text-xs sm:text-sm text-left mx-1 leading-relaxed">
                冷蔵庫での保存が不要で、賞味期限は常温で約5ヶ月と長期間保存可能なため、仕入れ管理が非常に簡単です。飲食店のストックとしても優れ、急な仕入れにも対応できるよう午後2時までのご注文で即日発送対応。さらに、災害時の備蓄食としても活躍し、非常時でも手軽に美味しい焼きそばを提供できます。保存性と即時対応の利便性を兼ね備えた、業務用としても非常に扱いやすい商品です。
              </p>
            </div>
            <div className="text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sato_shouhiko_A_stylish_and_dyna.jpg-fA4BqNf6OdUsVrdhMxUHwdX4wRoLuP.jpeg"
                alt="イベント・防災備蓄にも最適"
                width={250}
                height={250}
                className="mx-auto mb-4 rounded-lg object-cover h-[200px] sm:h-[250px]"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Point 3：高利益率＆簡単調理で業務用に最適</h3>
              <p className="text-xs sm:text-sm text-left mx-1 leading-relaxed">
                業務用の80食セットでは、1食あたり約86円（税込み）と非常にコストパフォーマンスが高く、飲食店やイベント出店の際にも高い利益率を確保できます。焼きそばは回転率が高く、多くの来客に短時間で提供できるため、屋台や露店営業でも人気のメニューです。さらに、茹で済み麺なので調理時間が短縮され、忙しい時間帯でもスムーズなオペレーションが可能になります。手軽に本格的な焼きそばを提供できることから、多くのプロの現場で導入されています。
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <tbody>
                  <tr className="border-b">
                    <th className="text-left p-3 sm:p-4 bg-gray-50 w-1/4 text-sm sm:text-base">名称</th>
                    <td className="p-3 sm:p-4 text-sm sm:text-base">焼きそば麺</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-left p-3 sm:p-4 bg-gray-50 w-1/4 text-sm sm:text-base">原材料名</th>
                    <td className="p-3 sm:p-4 text-xs sm:text-sm">
                      小麦粉（国内製造）、小麦たん白、卵白（卵を含む）、植物油脂、食塩／乳化剤（大豆由来）、酸味料、クチナシ色素、かんすい、（一部に小麦・卵・大豆を含む）
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-left p-3 sm:p-4 bg-gray-50 w-1/4 text-sm sm:text-base">内容量</th>
                    <td className="p-3 sm:p-4 text-sm sm:text-base">150ｇ×80食</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-left p-3 sm:p-4 bg-gray-50 w-1/4 text-sm sm:text-base">賞味期限</th>
                    <td className="p-3 sm:p-4 text-sm sm:text-base">
                      常温5ヶ月
                      <br />
                      ※4ヶ月以上の賞味期限のものをお送りいたします。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 作り方動画 - New section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-16">作り方動画</h2>
          <div style={{ maxWidth: "800px" }} className="mx-auto px-2">
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/Ij3L7qt_Z8I"
                title="極太麺焼きそばの作り方"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">お客様の声</h2>
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {/* お客様1 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-ttKm2RSDD6WF3695NfaOOPkzBys4WA.jpeg"
                  alt="お客様アバター"
                  width={48}
                  height={48}
                  className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">お客様1（楽天）</h3>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-xs sm:text-sm">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                「太麺の焼きそばが気になっていたので購入しました。食べごたえがあり、ソースの味も良く、麺に絡んで美味しかったです。リピートしたいです。」
              </p>
            </div>

            {/* お客様2 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-ttKm2RSDD6WF3695NfaOOPkzBys4WA.jpeg"
                  alt="お客様アバター"
                  width={48}
                  height={48}
                  className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">お客様2（楽天）</h3>
                  <div className="flex text-yellow-400">
                    {"★★★★☆".split("").map((star, i) => (
                      <span key={i} className="text-xs sm:text-sm">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                「もちもちで食べ応えのある麺が美味しかったです。
                ソース味でしたのですが、今度は塩味でも合いそうなのでしてみようかなて思ってます(^^)」
              </p>
            </div>

            {/* お客様3 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-ttKm2RSDD6WF3695NfaOOPkzBys4WA.jpeg"
                  alt="お客様アバター"
                  width={48}
                  height={48}
                  className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">お客様3（楽天）</h3>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-xs sm:text-sm">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                「腰がある太麺で美味しい楽天を覗いていたら長期の常温保存が出来るこの焼きそばが目に留まりました。まずはお試しで4玉入りを注文、食べてみたら美味しくて驚きました。次はまとめてのを買おうと思うけどタレが付いていなくて悩み中です」
              </p>
            </div>

            {/* お客様5 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-ttKm2RSDD6WF3695NfaOOPkzBys4WA.jpeg"
                  alt="お客様アバター"
                  width={48}
                  height={48}
                  className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">お客様5（楽天）</h3>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-xs sm:text-sm">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                「美味しいモチモチの麺を探していたので大変満足しています。常温保存可能なのも魅力ですね。ソースセットで使いやすいのでリピート確実です。」
              </p>
            </div>

            {/* お客様6 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-ttKm2RSDD6WF3695NfaOOPkzBys4WA.jpeg"
                  alt="お客様アバター"
                  width={48}
                  height={48}
                  className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">お客様6（楽天）</h3>
                  <div className="flex text-yellow-400">
                    {"★★★★☆".split("").map((star, i) => (
                      <span key={i} className="text-xs sm:text-sm">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                「太麺はあまり食べる機会がありませんでしたが、長期常温保存できるので買ってみました。うどんかと思うほど太麺でしたね。もちもちはしているのですが、やはり太すぎました。少し脂っこいので、油少なめの調理方法が良いと思います。でも5ヶ月間常温保存出来るのは魅力的なのでリピートしようと思います。」
              </p>
            </div>

            {/* お客様7 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-ttKm2RSDD6WF3695NfaOOPkzBys4WA.jpeg"
                  alt="お客様アバター"
                  width={48}
                  height={48}
                  className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">お客様7（Yahoo）</h3>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-xs sm:text-sm">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                「26日に届くのが解っていたので、今晩の献立は太焼そばを食します。届いた品物を見て以前にも一度購入してました。太麺と他具材で食べ後耐えがあり普通に美味しかったと思います。」
              </p>
            </div>

            {/* お客様8 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-ttKm2RSDD6WF3695NfaOOPkzBys4WA.jpeg"
                  alt="お客様アバター"
                  width={48}
                  height={48}
                  className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">お客様8（Yahoo）</h3>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-xs sm:text-sm">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                「コ・ス・パ的にも、納得出来るかな～ 太麺の焼きそばは、珍しく&中々歯ごたえ有って
                もちもちが、癖になるかなぁ→ 飽きるまでは、リピートするかなぁ→ やはり、オタフクソースは、外せない!
                味の決めてだよねぇ!」
              </p>
            </div>

            {/* お客様9 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-ttKm2RSDD6WF3695NfaOOPkzBys4WA.jpeg"
                  alt="お客様アバター"
                  width={48}
                  height={48}
                  className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">お客様9（Yahoo）</h3>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-xs sm:text-sm">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                「商品説明の通り極太麺でしたが、ほんとに太く肉や野菜をいれて炒めますが、年齢に依りますが一人前食べると、満腹感で一服しないと動けませんでした。味は濃い方です。普通に美味しかったです。」
              </p>
            </div>

            {/* お客様10 */}
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-ttKm2RSDD6WF3695NfaOOPkzBys4WA.jpeg"
                  alt="お客様アバター"
                  width={48}
                  height={48}
                  className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h3 className="font-bold text-sm sm:text-base">お客様10（Yahoo）</h3>
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-xs sm:text-sm">
                        {star}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                「太麺にハマり、こちらの商品を購入。野菜たっぷりのホルモン焼きそばにしてみました。美味しかったです。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ランキング */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            おかげさまで各ECサイトで
            <br className="sm:hidden" />
            高評価をいただいています
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-8 px-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10000030.jpg-898G8atBJaJoWQv8h1qNU1tuzOD99s.jpeg"
              alt="楽天市場ランキング堂々1位獲得"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rs_pc_4571318634011.jpg-p1hfC3eBjIaqNTyjxKKJQANzPAcuIY.jpeg"
              alt="Yahoo!ショッピングカテゴリランキング入賞"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 購入セクション（下部） */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">ご購入はこちらから</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Yahoo!ショッピング */}
            <div className="bg-red-50 rounded-lg p-4 sm:p-6 text-center">
              <Link
                href="https://store.shopping.yahoo.co.jp/aizubrandhall/c4b9b4fcca.html"
                className="block"
                onClick={() => handlePurchaseClick("Yahoo")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yahoo%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-imFWL7twOiLwhAatTKpaAYhCdJCFgd.png"
                  alt="Yahoo!ショッピング"
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
              </Link>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Yahoo!ショッピング</h3>
              <p className="text-xs sm:text-sm text-gray-600">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
            </div>

            {/* 楽天市場 */}
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 text-center">
              <Link
                href="https://item.rakuten.co.jp/aizubrandhall/c/0000000044/"
                className="block"
                onClick={() => handlePurchaseClick("Rakuten")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-eQbaS15sorotO5Ua5axjU3dBeyc2NU.png"
                  alt="楽天市場"
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
              </Link>
              <h3 className="font-bold mb-2 text-sm sm:text-base">楽天市場</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                楽天ポイントが使える国内最大級のショッピングモールはこちら
              </p>
            </div>

            {/* Amazon */}
            <div className="bg-green-50 rounded-lg p-4 sm:p-6 text-center">
              <Link
                href="https://www.amazon.co.jp/stores/page/392ABC1B-5C98-4250-838A-20AFF7A3AEA8"
                className="block"
                onClick={() => handlePurchaseClick("Amazon")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-jefzhkr0PAuJ3k0pHiY6TsdtLDakys.png"
                  alt="Amazon"
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
              </Link>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Amazon</h3>
              <p className="text-xs sm:text-sm text-gray-600">世界最大のショッピングモールでのお買い物はこちら</p>
            </div>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}

