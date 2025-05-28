"use client"

import Image from "next/image"
import { useEffect } from "react"
import * as gtag from "@/lib/gtag"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Star, Check, Heart, Clock, Utensils, PocketKnifeIcon as Knife } from "lucide-react"
import SharedLayout from "@/components/shared-layout"
import Link from "next/link"

export default function BasashiLP() {
  useEffect(() => {
    gtag.event({
      action: "view_basashi_lp",
      category: "engagement",
      label: "Basashi LP View",
    })
  }, [])

  const handlePurchaseClick = (marketplace: string) => {
    gtag.event({
      action: "click_purchase",
      category: "conversion",
      label: `Basashi Purchase Click - ${marketplace}`,
    })
  }

  const reviews = [
    {
      source: "Yahoo",
      comment:
        "柔らかくておいしいー！会津の馬刺しは絶対、会津畜産の馬刺しがよいです！とても柔らかく、旨みが強くてとてもすきです！",
      rating: 5,
    },
    {
      source: "Yahoo",
      comment:
        "すごく柔らかくて美味しかったです。今まで熊本の馬刺ししか食べたことがありませんでしたが、全く別物ですね。それぞれ違ったいいところがあります。ただ、味噌だれよりも私は生姜醤油で食べた方が好きなので、そうしました。",
      rating: 5,
    },
    {
      source: "Yahoo",
      comment:
        "お酒のお供。娘夫婦に送って見ました。二人で食べるには、丁度良い食べきれる量だと思い、からし味噌が付いていたので頼みました。",
      rating: 4,
    },
    {
      source: "楽天",
      comment: "義父へのお歳暮として購入しました。 喜んでいただけたので良かったです。",
      rating: 5,
    },
    {
      source: "楽天",
      comment: "お中元に使わせて頂きました。値段も手頃でまた機会がありましたら使わせて頂きます。",
      rating: 4,
    },
    {
      source: "楽天",
      comment:
        "この商品は、とっても柔らかくて、食べやすく、すごく美味しく頂きました。たれも美味しくて、とってもお得な買い物でした。",
      rating: 5,
    },
  ]

  return (
    <SharedLayout>
      {/* TOPページ（ヒーローセクション） */}
      <section className="relative h-screen">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01AmazonTOP-01.jpg-wQogjS2lbNY9rsiW7SF4GSzpEQIazr.jpeg"
          alt="会津馬刺しの特選盛り合わせ"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* タイトルセクション */}
      <section className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-3 sm:mb-4 text-sm sm:text-lg bg-red-600">会津ブランド認定</Badge>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            会津の至宝、
            <br className="sm:hidden" />
            口福の極み
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed">
            とろける食感、繊細な旨み。
            <br className="sm:hidden" />
            会津が誇る極上の馬刺し体験。
          </p>
        </div>
      </section>

      {/* ご購入はこちらから セクション（上部） */}
      <section className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">ご購入はこちらから</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Yahoo!ショッピング */}
            <div className="bg-[#ffdddd] p-4 sm:p-6">
              <Link
                href="https://store.shopping.yahoo.co.jp/aizubrandhall/b2f1c4c5a4.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("Yahoo")}
              >
                <div className="bg-white p-3 sm:p-4 mx-auto max-w-[160px] sm:max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yahoo%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-MEP8aX6vdnhkm0MalTPsgcj8jbQqA0.png"
                    alt="Yahoo!ショッピング"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mt-3 sm:mt-4 mb-1 sm:mb-2 text-center text-sm sm:text-base">
                Yahoo!ショッピング
              </h4>
              <p className="text-xs sm:text-sm text-center">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
            </div>

            {/* 楽天市場 */}
            <div className="bg-[#deeeff] p-4 sm:p-6">
              <Link
                href="https://item.rakuten.co.jp/aizubrandhall/c/0000000036/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("Rakuten")}
              >
                <div className="bg-white p-3 sm:p-4 mx-auto max-w-[160px] sm:max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-991Pc669KycdDKQBzO5S93EuS2I3kg.png"
                    alt="楽天市場"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mt-3 sm:mt-4 mb-1 sm:mb-2 text-center text-sm sm:text-base">楽天市場</h4>
              <p className="text-xs sm:text-sm text-center">
                楽天ポイントが使える国内最大級のショッピングモールはこちら
              </p>
            </div>

            {/* Amazon */}
            <div className="bg-[#e8ffdd] p-4 sm:p-6">
              {/* Amazonリンクを修正します */}
              <Link
                href="https://www.amazon.co.jp/stores/page/49E5D1DE-FB0F-45C3-9A3B-122DE97AF239"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("Amazon")}
              >
                <div className="bg-white p-3 sm:p-4 mx-auto max-w-[160px] sm:max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-mAXYlXivqE7kA5DfbJhHMDX5hkPVNJ.png"
                    alt="Amazon"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mt-3 sm:mt-4 mb-1 sm:mb-2 text-center text-sm sm:text-base">Amazon</h4>
              <p className="text-xs sm:text-sm text-center">世界最大のショッピングモールでのお買い物はこちら</p>
            </div>
          </div>
        </div>
      </section>

      {/* 商品情報セクション */}
      <section id="product" className="py-10 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">商品情報</h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="relative aspect-square max-w-2xl mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01AmazonTOP-01.jpg-wQogjS2lbNY9rsiW7SF4GSzpEQIazr.jpeg"
                alt="会津馬刺し - 新鮮な桜肉"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold">会津の馬刺し – 伝統と味わいが生きる極上の逸品</h3>
              <div className="text-sm sm:text-lg text-gray-700 space-y-3 sm:space-y-4">
                <h4 className="text-lg sm:text-xl font-semibold">日本が誇る馬刺しの名産地、会津</h4>
                <p className="leading-relaxed">
                  豊かな自然に恵まれた福島県会津地方。この地で育まれる馬肉は、全国でも屈指の品質を誇ります。会津の馬刺しは、400年以上の歴史を持ち、江戸時代には武士たちの滋養強壮食として愛されてきました。現在も、その伝統とこだわりは脈々と受け継がれ、全国の食通を唸らせる逸品となっています。
                </p>
                <p className="leading-relaxed">
                  別名「桜肉」とも呼ばれる会津の馬肉。会津が誇る極上の馬刺し体験をご家庭で。
                </p>
                <p className="leading-relaxed">
                  会津の馬刺しは他地域の馬刺しと比べ、国産の競走馬種を中心に使用している事から赤みが多く脂肪が少ないのが特徴です。2種類の特注飼料と牧草、圧偏大麦、一般麩、そば殻、エゴマを馬の状態を見極めながら配合する事で旨味が強く柔らかな触感の馬刺しを生み出しました。
                </p>
                <p className="leading-relaxed">
                  現在、会津の馬刺しは国産に拘っている事から肥育数が少ない為、非常に希少なものとなっております。
                </p>
                <p className="leading-relaxed">
                  また食べ方も独特で、にんにく辛子味噌をお醤油でといでお召し上がりいただきます。
                </p>
                <p className="leading-relaxed">
                  当商品は会津ブランド認定品の会津で肥育された国産馬肉のみを使用し、加工から最短で急速冷凍する事で鮮度抜群の馬刺しを皆様の食卓へお届けいたします。
                </p>
              </div>

              {/* Shipping and delivery banners in grid */}
              <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                <div className="relative aspect-[2/1]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-01.jpg-Cu0IOjGEKEB51dDMBnsffDMmo59Bx6.jpeg"
                    alt="送料無料 沖縄・離島地域除く"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-[2/1]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-01.jpg-wOKkqTWzDlls8YLUgTUIE8RN6gCKB0.jpeg"
                    alt="14時までのご注文で即日発送"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Product cards with new square images */}
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    size: "1kg",
                    title: "1kg(9〜11個入り)",
                    description: "ご家族でお楽しみいただけるお得なセット",
                    price: "¥12,800",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E4%BB%96TOP-01.jpg-7rxXvfvAQHn3znbFIaxq7T9saH7DfW.jpeg",
                  },
                  {
                    size: "200g",
                    title: "200g(ブロック2個)",
                    description: "お試しやギフトに最適なサイズ",
                    price: "¥3,800",
                    image:
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E4%BB%96TOP-01.jpg-PSj4a04Sbo0XtYlRmy7nfBO7jDiPMr.jpeg",
                  },
                ].map((product) => (
                  <Card key={product.size} className="overflow-hidden">
                    <div className="relative aspect-square w-full bg-gray-100">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={`会津馬刺し ${product.title}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl">{product.title}</CardTitle>
                      <CardDescription className="text-sm sm:text-base">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl sm:text-2xl font-bold mb-4">{product.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 商品詳細セクション */}
      <section id="details" className="py-10 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">商品詳細</h2>
          <div className="space-y-8 sm:space-y-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-2xl">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mr-2 sm:mr-3" />
                  会津ブランド認定品 – <br className="sm:hidden" />
                  確かな品質と伝統の証
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-1/3 sm:w-1/5 mx-auto sm:mx-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gEiWMhBVDN5Js67Ki1cfwySETRF8Ds.png"
                      alt="会津ブランド認定ロゴ"
                      width={200}
                      height={100}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="w-full sm:w-4/5">
                    <p className="text-sm sm:text-lg">
                      会津の豊かな食文化を支える「会津ブランド認定品」として、会津の馬刺しは厳格な基準をクリアし、その品質が認められています。
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-base sm:text-lg mb-2">会津ブランド認定とは？</h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    「会津ブランド認定品」とは、会津地方の誇る特産品の中でも、特に品質が高く、地域の伝統や特長を活かした優れた商品にのみ与えられる称号です。会津の馬刺しは、この認定を受けた逸品として、地域の誇りとともに全国へ届けられています。
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                    <span className="text-sm sm:text-base">国産高級もも肉使用</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                    <span className="text-sm sm:text-base">徹底した品質管理</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                    <span className="text-sm sm:text-base">伝統の製法</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-2xl">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mr-2 sm:mr-3" />
                  極上の味わい
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8690%EF%BC%88%E4%BF%AE%E6%AD%A3%EF%BC%89.jpg-cQM7S8nQwPe7hKmD1RdNB0aVqR7KjN.jpeg"
                      alt="会津馬刺しの盛り付け"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8748%EF%BC%88%E4%BF%AE%E6%AD%A3%EF%BC%89%E3%83%88%E3%83%AA%E3%83%9F%E3%83%B3%E3%82%B0.jpg-DexOgpQXRHtMNT8KKfw1yAYz858AZL.jpeg"
                      alt="にんにく味噌"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8686%EF%BC%88%E4%BF%AE%E6%AD%A3%EF%BC%89.jpg-YxphSASeboFP8rMzkwyQ11c8rrfktC.jpeg"
                      alt="会津馬刺しのスライス"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold">会津馬刺しの美味しさの秘密</h3>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">赤身ならではのさっぱりとした味わい</h4>
                    <p className="text-sm sm:text-base leading-relaxed">
                      会津の馬刺しは脂肪分が少なく、赤身のしっかりとした旨味が特徴です。甘みは控えめで、しつこさがなく、あっさりと食べられます。クセのない味わいなので、肉本来の風味を存分に楽しむことができます。
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">食べやすく、馬肉特有の匂いがない</h4>
                    <p className="text-sm sm:text-base leading-relaxed">
                      会津の馬肉は、丁寧な肥育と処理の工程により、馬肉特有の強い匂いがほとんどありません。そのため、初めて馬刺しを食べる方や、クセのある肉が苦手な方にもおすすめです。
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">力道山も愛した「にんにく味噌」で味わう</h4>
                    <p className="text-sm sm:text-base leading-relaxed">
                      会津では、馬刺しの食べ方として「にんにく醤油」が一般的ですが、もう一つの名物が「にんにく味噌」。実は、昭和の伝説的プロレスラー・力道山が会津を訪れた際、「にんにく味噌を馬刺しにつけて食べると美味しい」と言ったのが始まりとも言われています（諸説あります）。
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                      にんにく味噌のコクと香ばしさが、馬刺しのさっぱりとした旨味をさらに引き立て、より奥深い味わいを生み出します。
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                    <span className="text-sm sm:text-base">赤身の旨味を存分に楽しめる</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                    <span className="text-sm sm:text-base">クセがなく食べやすい</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2" />
                    <span className="text-sm sm:text-base">にんにく味噌との相性抜群</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-2xl">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mr-2 sm:mr-3" />
                  安心・安全
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-lg">
                  徹底した品質管理と最新の衛生基準に基づいた製造プロセスにより、安心して召し上がっていただけます。
                </p>

                <div className="border-t pt-4 sm:pt-6 mt-4 sm:mt-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">会津畜産 – 馬刺しの品質を支える匠の技</h3>
                  <p className="text-sm sm:text-lg mb-3 sm:mb-4 leading-relaxed">
                    会津の馬刺しを支えるのが、会津畜産。全国（主に北海道）の生産者から素馬を仕入れ、自社の牧場で3ヶ月から2年かけて丁寧に肥育。独自の配合飼料（遊離アミノ酸含有量を増やし旨味を引き出す）を与え、約400頭の馬を健康的に育てています。
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-bold text-base sm:text-lg mb-2">会津畜産のこだわり</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          <strong>肉質へのこだわり</strong> – 自社で格付けを行い、新鮮な赤身の旨味を追求
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          <strong>徹底した安全管理</strong> – 細菌検査室を設け、毎日無作為に自主検査を実施
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          <strong>専門機関のチェック</strong> – 江東微生物研究所による定期検査で安心・安全を確保
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="w-full sm:w-1/2 relative aspect-[4/3]">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0035%EF%BC%8F%E5%8E%A9%E8%88%8E%E5%86%85%E9%83%A8%E3%81%BC%E3%81%8B%E3%81%97.jpg-r6Dk1jveE1njdYQXFoEgPKPs0F7Ivh.jpeg"
                        alt="会津畜産の牧場"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 relative aspect-[4/3]">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E2%85%A9%E7%B7%9A%E6%A4%9C%E6%9F%BB.jpg-a7d9BMaDKI77aDrQIuP24sIiFB80Le.jpeg"
                        alt="会津畜産の品質管理施設"
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-2xl">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mr-2 sm:mr-3" />
                  馬肉の栄養価と健康・美容効果
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-full md:w-1/3">
                    <div className="relative aspect-square">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%A5%B3%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-AMNV5TS4uwUjR4n0HJtwnvySkKjwyd.jpeg"
                        alt="馬肉の栄養価と健康・美容効果を表す女性イラスト"
                        fill
                        className="rounded-lg object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">高たんぱく・低脂肪でヘルシー</h3>
                      <p className="text-sm sm:text-base leading-relaxed">
                        馬肉は、牛肉や豚肉に比べて低脂肪・高たんぱく・低カロリーなヘルシー食材です。不飽和脂肪酸が多く含まれ、体に脂肪として蓄積しにくいため、健康維持やダイエットにも適しています。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">鉄分が豊富で貧血予防に最適</h3>
                      <p className="text-sm sm:text-base leading-relaxed">
                        馬肉には、体に吸収されやすいヘム鉄が多く含まれ、貧血予防や冷え性改善に効果的です。ほうれん草やひじきよりも鉄分が豊富で、特に女性におすすめの食材です。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">グリコーゲンで疲労回復をサポート</h3>
                      <p className="text-sm sm:text-base leading-relaxed">
                        エネルギー源となるグリコーゲンが豊富に含まれ、筋肉の回復やスタミナ維持に役立ちます。スポーツをする人や、日々の疲れを感じる方にも最適です。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">美容効果にも優れた食材</h3>
                      <p className="text-sm sm:text-base leading-relaxed">
                        馬肉には、肌のハリや潤いを保つビタミンE、新陳代謝を促進するビタミンB群が豊富。血行を良くし、冷え性改善やアンチエイジングにも効果的です。
                      </p>
                    </div>

                    <p className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">
                      栄養価が高く、美容と健康の両方をサポートする馬肉。ぜひ、日々の食生活に取り入れてみてください。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-2xl">
                  <Utensils className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mr-2 sm:mr-3" />
                  お召し上がり方
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <div className="relative aspect-square w-full max-w-[400px] sm:max-w-[500px] mx-auto mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%8F%AC%E3%81%97%E4%B8%8A%E3%81%8C%E3%82%8A%E6%96%B91_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201-2OUs6voAf9GD9o7J4YUwnUuKW5ej99.png"
                        alt="氷水で10分解凍"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold flex items-center">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-2" />
                      解凍方法
                    </h3>
                    <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base">
                      <li>1. 未開封のパックを氷水に約10分つけて解凍します。氷はたっぷり入れてください。</li>
                      <li>
                        2.
                        急激な温度差で解凍を行うと、形が崩れや色味が悪くなる原因となりますので、ゆっくりと解凍します。
                      </li>
                      <li>3. 中心部にまだ硬さが残る半解凍状態まで解凍してください。</li>
                    </ul>
                    <div className="bg-amber-50 p-3 sm:p-4 rounded-lg mt-3 sm:mt-4">
                      <p className="text-xs sm:text-sm text-amber-800">
                        ※電子レンジ等での解凍は、旨みを損なうため、お控えください。
                      </p>
                      <p className="text-xs sm:text-sm text-amber-800">
                        ※解凍後ドリップが出ている場合は、キッチンペーパーまたは清潔な乾いた布巾等で拭き取ってください。
                      </p>
                      <p className="text-xs sm:text-sm text-amber-800">
                        ※冷蔵庫解凍でもおいしく解凍できますが、その場合も半解凍の状態で準備してください。
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="relative aspect-square w-full max-w-[400px] sm:max-w-[500px] mx-auto mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%8F%AC%E3%81%97%E4%B8%8A%E3%81%8C%E3%82%8A%E6%96%B92_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201-JrjpIlQXJeo6ZfYOYDY64VNAMZ7B3s.png"
                        alt="2-3mmの厚さでカット"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold flex items-center">
                      <Knife className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-2" />
                      カット方法
                    </h3>
                    <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base">
                      <li>1. 毎回必ず消毒した清潔な包丁とまな板をお使いください。</li>
                      <li>
                        2. ある程度の硬さが残る半解凍状態で切ることで、適度な薄さに加減してカットすることができます。
                      </li>
                      <li>3. 真空パックから馬肉を取り出し、肉の繊維の流れを断ち切る方向でカットします。</li>
                      <li>4. 繊維を断ち切ることで、口当たりがよく柔らかな食感でお召し上がりいただけます。</li>
                    </ul>
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mt-3 sm:mt-4">
                      <p className="text-xs sm:text-sm text-blue-800">
                        ※赤身肉は2～3mm程度のやや薄めが食べやすく、おいしさを感じやすい厚さです。
                      </p>
                      <p className="text-xs sm:text-sm text-blue-800">
                        ※馬肉は、空気に触れさせることにより10～15分ほどで発色して赤みを帯びた色になります。
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="relative aspect-square w-full max-w-[400px] sm:max-w-[500px] mx-auto mb-4">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%8A%E5%8F%AC%E3%81%97%E4%B8%8A%E3%81%8C%E3%82%8A%E6%96%B93_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201-mf3BopSL8cTl2jDrUfoZgfsdeP3DIi.png"
                        alt="美味しい食べ方"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold flex items-center">
                      <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-2" />
                      美味しい食べ方
                    </h3>
                    <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base">
                      <li>1. 馬刺しを皿に盛り付けます。</li>
                      <li>2. にんにく味噌を小皿に取り、醤油で少し溶いて馬刺し専用のタレを作ります。</li>
                      <li>3. 馬刺しをタレにつけて、お好みで生姜やネギを添えて召し上がります。</li>
                      <li>4. 新鮮な馬刺しは、わさびを添えて食べるのもおすすめです。</li>
                    </ul>
                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg mt-3 sm:mt-4">
                      <p className="text-xs sm:text-sm text-green-800">
                        ※馬刺しは新鮮なうちに召し上がるのが一番美味しいです。解凍後はなるべく早めにお召し上がりください。
                      </p>
                      <p className="text-xs sm:text-sm text-green-800">
                        ※お好みで、ポン酢やゆず胡椒などを使って、様々な味わいをお楽しみいただけます。
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section id="reviews" className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">お客様の声</h2>
          <div className="space-y-4 sm:space-y-6">
            {reviews.map((review, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%94%B7%E6%80%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88AI%EF%BC%89.jpg-ttKm2RSDD6WF3695NfaOOPkzBys4WA.jpeg"
                        alt={`お客様 ${i + 1} のアバター`}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <span>
                      お客様 {i + 1} （{review.source}）
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, index) => (
                      <Star key={index} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="italic text-sm sm:text-base">&quot;{review.comment}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ご購入はこちらから セクション（下部） */}
      <section className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">ご購入はこちらから</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Yahoo!ショッピング */}
            <div className="bg-[#ffdddd] p-4 sm:p-6">
              <Link
                href="https://store.shopping.yahoo.co.jp/aizubrandhall/b2f1c4c5a4.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("Yahoo")}
              >
                <div className="bg-white p-3 sm:p-4 mx-auto max-w-[160px] sm:max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yahoo%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-MEP8aX6vdnhkm0MalTPsgcj8jbQqA0.png"
                    alt="Yahoo!ショッピング"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mt-3 sm:mt-4 mb-1 sm:mb-2 text-center text-sm sm:text-base">
                Yahoo!ショッピング
              </h4>
              <p className="text-xs sm:text-sm text-center">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
            </div>

            {/* 楽天市場 */}
            <div className="bg-[#deeeff] p-4 sm:p-6">
              <Link
                href="https://item.rakuten.co.jp/aizubrandhall/c/0000000036/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("Rakuten")}
              >
                <div className="bg-white p-3 sm:p-4 mx-auto max-w-[160px] sm:max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A5%BD%E5%A4%A9%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-991Pc669KycdDKQBzO5S93EuS2I3kg.png"
                    alt="楽天市場"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mt-3 sm:mt-4 mb-1 sm:mb-2 text-center text-sm sm:text-base">楽天市場</h4>
              <p className="text-xs sm:text-sm text-center">
                楽天ポイントが使える国内最大級のショッピングモールはこちら
              </p>
            </div>

            {/* Amazon */}
            <div className="bg-[#e8ffdd] p-4 sm:p-6">
              <Link
                href="https://www.amazon.co.jp/stores/page/49E5D1DE-FB0F-45C3-9A3B-122DE97AF239?ingress=0&visitId=a745cc41-bff6-46a6-ac1d-8b13779a2692"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("Amazon")}
              >
                <div className="bg-white p-3 sm:p-4 mx-auto max-w-[160px] sm:max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon%E8%B3%BC%E5%85%A5%E3%83%9C%E3%82%BF%E3%83%B3-01-mAXYlXivqE7kA5DfbJhHMDX5hkPVNJ.png"
                    alt="Amazon"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mt-3 sm:mt-4 mb-1 sm:mb-2 text-center text-sm sm:text-base">Amazon</h4>
              <p className="text-xs sm:text-sm text-center">世界最大のショッピングモールでのお買い物はこちら</p>
            </div>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}

