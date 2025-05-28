"use client"

import Image from "next/image"
import { useEffect } from "react"
import * as gtag from "@/lib/gtag"
import { Badge } from "@/components/ui/badge"
import SharedLayout from "@/components/shared-layout"
import ProductCarousel from "./components/product-carousel"

export default function GyoumuyouchasiuPage() {
  useEffect(() => {
    gtag.event({
      action: "view_gyoumuyouchasiu_lp",
      category: "engagement",
      label: "Gyoumuyouchasiu LP View",
    })
  }, [])

  const handlePurchaseClick = (marketplace: string) => {
    gtag.event({
      action: "click_purchase",
      category: "conversion",
      label: `Gyoumuyouchasiu Purchase Click - ${marketplace}`,
    })
  }

  // Replace the existing reviews array with the new customer reviews
  const reviews = [
    {
      comment:
        "凄く美味しいです。家でラーメンを作る時はなんちゃってチャーシューを作って入れてるんですが、やっぱり全然違いますね。お店やさんのチャーシューです。ただ意外とカットするのが難しくて、せっかく綺麗なチャーシューなのに大きさバラバラにしてしまったので、私のような下手くそにはカット済みの方が有難いかもです。子供は分厚いの喜んでいましたが笑",
      rating: 5,
      source: "楽天",
      gender: "女性",
      age: "40代",
    },
    {
      comment:
        "ボリュームはあります。普通のチャーシューに比べて一回り大きいです。薄くスライスするのが難しく、どうしても厚めになってしまいます。味は薄めなのでもう少し味が付いてたらと思います。",
      rating: 4,
      source: "Yahoo",
    },
    {
      comment:
        "複数回の購入です。毎回美味しくいただいています。「本物のチャーシュー」「プロ仕様」は伊達ではありません。肉の部分と脂の部分のバランスがとてもよく味も良く臭みもなく焼いてもボイルしても美味しいです。厚めにカットしてごま油ネギをのせてオーブントースターで温めて食べる方法が気に入っています。",
      rating: 5,
      source: "Yahoo",
      gender: "男性",
      age: "60代",
    },
    {
      comment: "やわらかくてトロトロ とても美味しかったです。",
      rating: 4,
      source: "楽天",
    },
    {
      comment:
        "ラーメン屋さんのチャーシューと同じ感覚でとても美味しく頂きました！ついてきたタレに漬けて食べても良し。チャーシュー丼にしても！ジューシーで脂身も甘く、醤油ラーメンのスープに最適！柔らかく食べ応えがある美味しいチャーシューです！",
      rating: 5,
      source: "Yahoo",
    },
    {
      comment: "脂身の量がやや多いものの、許容範囲です。何よりコスパが良いのがありがたいです。",
      rating: 4,
      source: "楽天",
      gender: "男性",
      age: "60代",
    },
    {
      comment:
        "迅速なご対応ありがとうございました。遅れましたが、チャーシューを頂きました。今まで幾つかのチャーシューを取り寄せて頂きましたが、御社のチャーシューが一番美味しかったです。チャーシュー麺にして頂きましたが最高でした。",
      rating: 5,
      source: "楽天",
      gender: "男性",
      age: "60代",
    },
    {
      comment:
        "確かにラーメン店で出るチャーシューです。本格的と言ったら失礼ですが、チャーシューにこだわったラーメン店と同じレベルではなかったかなぁと思いました。どデカい塊のチャーシューが一本でパックせずに二本でパックされてるのは家庭用として気遣いがされてます。味と食感で言うと、下味が薄いかなぁ。チャーシューダレが付いてるのはツマミとして食べる物なんだとラーメンに入れて食べたとき思いました。厚切りにしたら余計に感じましたし、トロっとした食感ではなくホロホロっと脂が抜けてしまったような硬くはありませんが硬さを感じます。",
      rating: 4,
      source: "Yahoo",
    },
    {
      comment:
        "想像していたよりも大きく、想像していたよりも相当軟らかく、味がしっかりしていて美味しかったです。通販でチャーシューを頼んだのが初めてだったので、他のものも試してみたいと思いますが、リピートは「あり」です。",
      rating: 5,
      source: "Yahoo",
    },
    {
      comment:
        "そのままおつまみとして食べた場合、想像してたよりあっさりして食べやすかったです。次の日、ラーメンに乗せてみたところ脂身の部分がふわふわにとろけてとても美味しかったです。チャーシューは主人が好きで低温調理器まで購入して自作していたのですが、これなら購入した方がいいなと言ってます（笑）。",
      rating: 5,
      source: "楽天",
    },
    {
      comment:
        "リピートです。肉の柔らかさと脂の旨味、さっぱり目の味付け、とても気に入っています。ラーメンには欠かせない程美味しいと感じています。73の母が絶賛していて、ちょっと贅沢だけどやめられない完成度だと思います。",
      rating: 5,
      source: "Yahoo",
    },
    {
      comment:
        "肉厚でジューシーなチャーシューでした。一緒についていたタレもチャーシューに良く合い、とても惜しかったです。ただ注文として４００ｇ×２だったので、一回で食べきるにはちょっと多かったですね。もう少し小分けにしてくれると、自分的にはよかったかな。",
      rating: 5,
      source: "Yahoo",
    },
    {
      comment:
        "前回買って美味しかったのでリピしました。タレ付きのブロックは文句なしに美味しかった。訳ありの端っこも色々使えて重宝しました。味がついているので、チャーハンや辛ネギおつまみにして食べています。ブロックはボイルもやしに乗せてタレを少しかければ贅沢な１品になりますよね。なくなったらまたリピします！",
      rating: 5,
      source: "楽天",
      gender: "女性",
      age: "60代",
    },
    {
      comment:
        "ラーメン屋のチャーシューは美味しいですよね。バラを丸めて煮たタイプが好きです。こちらはタレを別添してくれるので味の調整が出来て便利です。ボイルしたモヤシの上にチャーシューを乗せて辛ネギをトッピングしたおつまみチャーシューが美味しい！",
      rating: 5,
      source: "楽天",
      gender: "女性",
      age: "60代",
    },
  ]

  // carouselImagesの配列を今回アップロードされた6枚の画像だけに更新します

  const carouselImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01%E6%A5%BD%E5%A4%A9%E4%BB%96TOP-01.jpg-rGMW2ztZOhUD7ojBolnd04wEzdTZCO.jpeg",
      alt: "業務用チャーシュー 16kg (400g×40個) パッケージ",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02%E7%B4%AF%E8%A8%8810%E4%B8%87%E3%82%BB%E3%83%83%E3%83%88-01.jpg-IC7PzMlv0giVxn9qVeS29vooFIsfKc.jpeg",
      alt: "累計10万セット販売の実績あるチャーシュー",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03%E4%B8%AD%E8%BA%AB-01.jpg-UA1ono1yvpXHUpf8JoKRyZl5eJr5Fs.jpeg",
      alt: "400gのブロックが40個 合計16kg",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04%E5%80%8B%E5%8C%85%E8%A3%85-01.jpg-FOb5UVm5YaMhit59hDLyLknSwTxE1V.jpeg",
      alt: "400gの完全真空冷凍個包装",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/05Amazon%E7%94%BB%E5%83%8F%EF%BC%88%E8%A3%BD%E6%B3%95%EF%BC%89-01.jpg-FZOye6y9AJyvPcJ9qeUyIUwWG34yse.jpeg",
      alt: "厳選された素材を使いラーメン店と同じ製法で手作り",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07%E7%AE%B1%E5%A4%96%E8%A6%B3-01.jpg-G9uNkruKPjW3pKNNvJSkQER8Ri3zBm.jpeg",
      alt: "クロネコ冷凍便にて発送 最短1日でお届け",
    },
  ]

  return (
    <SharedLayout>
      {/* TOPページ（ヒーローセクション） */}
      <section className="relative h-[calc(100vh-89px)] mt-[89px]">
        {/* PC用画像 - md以上の画面サイズで表示 */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%95%E3%83%88%EF%BC%88%E3%83%A1%E3%82%A4%E3%83%B3%EF%BC%89.jpg-1DTMbPKyhjFhqStoXaA6VZJdgcGIq8.jpeg"
            alt="業務用チャーシュー"
            fill
            className="object-cover object-center"
            style={{ objectPosition: "center", transform: "scale(1.1)" }}
            priority
          />
        </div>

        {/* スマホ用画像 - md未満の画面サイズで表示 */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%95%E3%83%88%EF%BC%88%E3%83%A1%E3%82%A4%E3%83%B3%EF%BC%89.jpg-1DTMbPKyhjFhqStoXaA6VZJdgcGIq8.jpeg"
            alt="業務用チャーシュー"
            fill
            className="object-cover object-center"
            style={{ objectPosition: "center" }}
            priority
          />
        </div>
      </section>
      {/* タイトルセクション */}
      <section className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-3 sm:mb-4 text-sm sm:text-lg bg-red-600">
            ラーメン屋が作る本物のチャーシューシリーズ
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            ネット累計10万セット販売の実績
            <br />
            現場を支えるプロ仕様チャーシュー
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed">
            飲食店オーナー様、調理現場責任者様必見。
            <br className="sm:hidden" />
            手間と時間を削減しながら
            <br className="sm:hidden" />
            本物の味を提供。
          </p>
        </div>
      </section>
      {/* 商品情報セクション */}
      <section id="product" className="py-10 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">商品情報</h2>

          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3">
                  <Image
                    src="/images/ramen-chef-illustration.png"
                    alt="ラーメン職人がチャーシューを切るイラスト"
                    width={300}
                    height={300}
                    className="rounded-lg object-contain mx-auto"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                    飲食店経営者様の悩みを解決する業務用チャーシュー
                  </h3>
                  <p className="text-sm sm:text-base text-gray-800 mb-4 leading-relaxed">
                    人手不足、原材料費高騰、光熱費上昇…。そんな厳しい経営環境の中、品質を落とさず効率化できる食材をお探しではありませんか？
                  </p>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    2020年の発売開始以来、シリーズ累計10万セット以上販売の実績。「ラーメン屋が作る本物のチャーシュー」が、多くの飲食店様からのご要望にお応えし、ついに業務用サイズで登場しました。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 送料無料・即日発送バナー */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto mb-6 sm:mb-8">
            <div className="relative aspect-[2/1]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-01.jpg-iSNdD13PzyekHCpfg7RexGLgsgSB8A.jpeg"
                alt="送料無料 沖縄・離島地域除く"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[2/1]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-01.jpg-FwK4BcQFsPNQP35b6xjo2OkxvW0MYv.jpeg"
                alt="14時までのご注文で即日発送"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* 商品情報カード */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 sm:mb-12">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
                  【業務用】ラーメン屋が作る本物のチャーシュー 16kg
                </h3>

                {/* ProductCarouselコンポーネント */}
                <ProductCarousel images={carouselImages} />

                <div className="mt-6 sm:mt-8">
                  <div className="py-8 sm:py-12 bg-gray-50 rounded-xl">
                    <div className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto border border-gray-200">
                      <div className="text-center mb-6">
                        <div className="inline-block px-6 py-2 bg-gray-800 text-white font-bold rounded-lg text-lg">
                          商品仕様
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-md">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%AD%E8%BA%AB-01.jpg-9iAqie6OlijEzx9PVN9igFh1lqYsps.jpeg"
                            alt="400gのブロックが40個 合計16kg"
                            fill
                            className="object-contain"
                          />
                        </div>

                        <ul className="space-y-4 text-sm sm:text-base flex flex-col justify-center">
                          <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold">1</span>
                            </div>
                            <span className="font-medium text-gray-900">
                              400g（完全真空冷凍個包装）×40個入り 合計16kg
                            </span>
                          </li>
                          <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold">2</span>
                            </div>
                            <span className="font-medium text-gray-900">
                              20g換算で1枚原価60円という圧倒的コストパフォーマンス
                            </span>
                          </li>
                          <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold">3</span>
                            </div>
                            <span className="font-medium text-gray-900">
                              賞味期限：冷凍1年（10ヶ月以上の賞味期限の商品をお届け）
                            </span>
                          </li>
                          <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold">4</span>
                            </div>
                            <span className="font-medium text-gray-900">14時までのご注文で即日発送対応</span>
                          </li>
                          <li className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold">¥</span>
                            </div>
                            <span className="font-medium text-gray-900">48,000円 税込・送料無料（全国一律）</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-8 border-t pt-8">
                        <div className="text-center mb-6">
                          <div className="inline-block px-6 py-2 bg-gray-800 text-white font-bold rounded-lg text-lg">
                            職人技が光る至高のチャーシュー：こだわりの製法
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="flex flex-col">
                            <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/images/pork-belly-preparation.jpeg"
                                alt="豚バラ巻き製法のチャーシュー"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <p className="text-center text-sm font-medium mt-2">職人による手作り</p>
                          </div>
                          <div className="flex flex-col">
                            <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/images/defrost-machine.jpeg"
                                alt="最新の解凍専用設備"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <p className="text-center text-sm font-medium mt-2">最新の解凍専用マシン</p>
                          </div>
                          <div className="flex flex-col">
                            <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/images/secret-sauce.jpeg"
                                alt="秘伝のタレに漬け込まれたチャーシュー"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <p className="text-center text-sm font-medium mt-2">秘伝の漬けダレ</p>
                          </div>
                        </div>

                        <div className="space-y-4 text-sm sm:text-base">
                          <p className="text-gray-800 leading-relaxed">
                            当店のチャーシューは、伝統と革新が融合した究極の一品です。王道の「豚バラ巻き」製法を採用し、脂身がとろけるような柔らかさと豚本来の旨味を最大限に引き出しています。
                          </p>
                          <p className="text-gray-800 leading-relaxed">
                            赤身と脂身が層をなす「バラ巻き」は、しっかりとした食感とジューシーな肉汁を同時に楽しめる逸品です。手間と時間がかかるため、多くの店舗で敬遠されがちですが、当店では1本1本丁寧にタコ糸を巻き、手作りで仕込んでいます。
                          </p>
                          <p className="text-gray-800 leading-relaxed">
                            煮込み工程では、低温長時間調理に加え「炭酸」を使用。これにより豚の臭みを除去し、肉をしっとり柔らかく仕上げています。さらに、最新の解凍専用設備でドリップを抑え、最高品質を保っています。
                          </p>
                          <p className="text-gray-800 leading-relaxed">
                            秘伝の漬けダレも当店の誇りです。継ぎ足しで「育てた」濃厚なタレに熱々の状態で一晩漬け込むことで、他では味わえない深い味わいを実現しています。
                          </p>
                        </div>
                      </div>
                      <div className="mt-8 border-t pt-8">
                        <div className="text-center mb-6">
                          <div className="inline-block px-6 py-2 bg-gray-800 text-white font-bold rounded-lg text-lg">
                            世界が認める極上素材：スペイン産豚バラ肉
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-md">
                            <Image
                              src="/images/spanish-pork-farmer.jpeg"
                              alt="スペイン産豚バラ肉の生産者"
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="space-y-4 text-sm sm:text-base">
                            <p className="text-gray-800 leading-relaxed">
                              当チャーシューは、世界的に高品質で評価の高いスペイン産豚バラ肉を使用しています。
                            </p>
                            <p className="text-gray-800 leading-relaxed">
                              スペイン産豚肉は、世界第3位の生産国であり、欧州第1位の輸出国として、その品質と食品安全性で世界をリードしています。EUの厳格な基準に準拠した高水準の品質管理が特徴です。
                            </p>
                            <p className="text-gray-800 leading-relaxed">
                              この豚バラ肉は、赤身と脂身のバランスが絶妙で、ジューシーな食感と独特の風味を持ちます。脂肪分はオレイン酸を豊富に含み、健康的な脂質として注目されています。
                            </p>
                            <p className="text-gray-800 leading-relaxed">
                              日本市場でもスペイン産豚肉の評価は高く、2025年の最新データでは前年比8.69%増の輸入量を記録。特にラーメンのチャーシューとしての活用が広がり、その豊かな風味と柔らかな食感が日本の食文化と見事に調和しています。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 sm:mt-12 space-y-6">
                  {/* 商品パッケージ画像と完成品画像を横並びに配置 */}

                  {/* ProductFeaturesコンポーネント */}
                </div>
              </div>
            </div>

            {/* こんな店舗様におすすめ！差別化を図る本格チャーシュー */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 sm:mb-12">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="text-center mb-8">
                  <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-bold mb-2">
                    おすすめ
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                    こんな店舗様におすすめ！差別化を図る本格チャーシュー
                  </h3>
                  <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* フードコート運営様 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%95%E3%83%BC%E3%83%89%E3%82%B3%E3%83%BC%E3%83%88.jpg-zTbIE98ryf2ExHvTuRyoV1LEGPEPKn.jpeg"
                        alt="フードコート"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={100}
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">フードコート運営様</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        フードコートでは品質の良い食材で差別化が重要です。当チャーシューを使用することで、限られた調理スペースと人員でも本格的な味を提供可能。解凍するだけの手軽さと高品質な味わいで、「このフードコートには美味しいチャーシューメニューがある」と記憶される強みを作れます。
                      </p>
                    </div>
                  </div>

                  {/* カラオケ店様 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AB%E3%83%A9%E3%82%AA%E3%82%B1%E5%BA%97.jpg-etXjMK2HnawFNlxvRb2Rxf1sdiIkTi.jpeg"
                        alt="カラオケ店"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={100}
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">カラオケ店様</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        カラオケ店では幅広い食事メニューが求められています。当チャーシューを活用したラーメンやチャーシュー丼で、「歌うだけでなく美味しい食事も楽しめる場所」という付加価値を創出。調理工程の簡素化により、限られたスタッフでも本格的な味を提供でき、滞在時間延長と売上増加につながります。
                      </p>
                    </div>
                  </div>

                  {/* 宿泊施設様 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%AE%BF%E6%B3%8A%E6%96%BD%E8%A8%AD.jpg-4BEsSrsmxSmM7rfRFO5coo0nmKeJEB.jpeg"
                        alt="宿泊施設"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={100}
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">宿泊施設様</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        宿泊施設では、ルームサービスの質が差別化ポイントになります。当チャーシューを使用することで、専門の調理スタッフがいない時間帯でも高品質な食事提供が可能。「特別な食体験」を提供することで、宿泊者の満足度向上と口コミ効果が期待できます。
                      </p>
                    </div>
                  </div>

                  {/* ラーメン店様 */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E5%BA%97.jpg-2zz7FV1ZuqncUgjGMJsDSfJuVqGlLb.jpeg"
                        alt="ラーメン店"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={100}
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">ラーメン店様</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        ラーメン店にとってチャーシューは看板商品となる重要な具材です。当チャーシューは低温長時間調理で仕上げており、しっとり柔らかな食感と深い味わいが特徴。自家製チャーシュー作りの手間と時間を削減しながらも、いつも新鮮で美味しいチャーシューが、お店独自の強みとして差別化を図れます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 実績で証明！信頼の美味しさ！ */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 sm:mb-12">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-900">
                  実績で証明！信頼の美味しさ！
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-900 mb-6 sm:mb-8 leading-relaxed text-center">
                  ECサイトでお客様より高評価を頂いた「売れているチャーシュー」です。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* ブロック (Block) */}
                  <div className="flex flex-col gap-6">
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YAHOO%E7%94%A8TOP%E7%94%BB%E5%83%8F-01.jpg-DFw9GA1NzEeJVyV4VpdrsyoOHOAQD2.jpeg"
                        alt="ラーメン屋が作る本物のチャーシュー ブロックタイプ"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* ランキング画像（下） */}
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B01%E4%BD%8D%EF%BC%88%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%EF%BC%89.jpg-qvh14yRd9q6zDKVa32U94CFZHgEHIH.jpeg"
                        alt="楽天市場 ブロックタイプ ランキング1位"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* スライス (Slice) */}
                  <div className="flex flex-col gap-6">
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YAHOO%E7%94%A8TOP%E7%94%BB%E5%83%8F%EF%BC%88%E3%82%AB%E3%83%83%E3%83%88%E6%B8%88%E3%81%BF%EF%BC%89-01.jpg-HOOzK7stNuiEMedodtjBt36Prok8Rb.jpeg"
                        alt="ラーメン屋が作る本物のカット済みチャーシュー スライスタイプ"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B01%E4%BD%8D%EF%BC%88%E3%82%B9%E3%83%A9%E3%82%A4%E3%82%B9%EF%BC%89.jpg-20PtVxmMjJTsCqwLFtB8gor5qDErqe.jpeg"
                        alt="楽天市場 スライスタイプ ランキング1位"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* 訳あり (Imperfect) */}
                  <div className="flex flex-col gap-6">
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/YAHOO%E7%94%A8TOP%E7%94%BB%E5%83%8F%EF%BC%88%E8%A8%B3%E3%82%A2%E3%83%AA%EF%BC%89-01.jpg-Ue6EaOzHAS6gLt1GPDZVhL6SfkQLFC.jpeg"
                        alt="ラーメン屋が作る本物のチャーシュー 訳ありタイプ"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B01%E4%BD%8D%EF%BC%88%E8%A8%B3%E3%81%82%E3%82%8A%EF%BC%89.jpg-iBFFVbwHfUlWZ5qiER7Fgw9NlW3cZU.jpeg"
                        alt="楽天市場 訳ありタイプ ランキング1位"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 【経営メリット】飲食店様の課題を解決 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 sm:mb-12">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="text-center mb-8">
                  <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg text-lg font-bold mb-2">
                    経営メリット
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">飲食店様の課題を解決</h3>
                  <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">チャーシュー作りの人件費削減</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        調理担当者の作業時間を大幅に削減し、人件費コストを最大
                        <span className="font-bold text-red-600">30%カット</span>
                        。貴重な人材を他の重要業務に配置転換できます。
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">調理時間の大幅短縮</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        解凍するだけで使用可能なため、調理時間を
                        <span className="font-bold text-blue-600">ほぼゼロに</span>
                        。繁忙期や突発的な来客増加時にも柔軟に対応できます。
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">水道光熱費の節約</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        チャーシュー調理に関わる光熱費を月間約
                        <span className="font-bold text-green-600">15,000〜20,000円削減</span>
                        。昨今の光熱費高騰の中、固定費削減に直結します。
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">食材ロスの削減</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        必要な分だけ解凍して使用できるため、余剰在庫や品質劣化による廃棄を防止。月間廃棄ロス率を平均
                        <span className="font-bold text-yellow-600">8%削減</span>できます。
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">在庫管理の簡素化</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        賞味期限が冷凍で<span className="font-bold text-purple-600">1年</span>
                        と長く、適切な在庫計画が立てやすい。発注業務の時間と手間を週あたり約2〜3時間削減できます。
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">品質の均一化</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        常に<span className="font-bold text-indigo-600">同じ味・食感</span>
                        のチャーシューを提供できるため、お客様の満足度を安定させ、リピート率向上につながります。
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">メニュー展開の柔軟性向上</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        高品質なチャーシューをいつでも使用できるため、
                        <span className="font-bold text-pink-600">多彩なメニュー展開</span>
                        が容易になり、売上向上の機会を創出できます。
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">原価管理の明確化</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        20g換算で<span className="font-bold text-orange-600">1枚原価60円</span>
                        という明確なコスト把握が可能。原材料価格の変動に左右されず、適切な利益確保ができます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="reviews" className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">お客様の声</h2>
          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/男性イラスト（AI）.jpg-ttKm2RSDD6WF3695NfaOOPkzBys4WA.jpeg"
                    alt={`お客様 ${i + 1} のアバター`}
                    width={48}
                    height={48}
                    className="rounded-full w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">
                      {review.gender && review.age ? `お客様（${review.gender}${review.age}）` : "お客様"} 【
                      {review.source}】
                    </h3>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, index) => (
                        <span key={index} className="text-xs sm:text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">「{review.comment}」</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-square max-w-3xl mx-auto rounded-lg overflow-hidden shadow-md mb-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01AmazonTOP-01.jpg-C7mk50yBzKijwTZPKyRwnufultrUup.jpeg"
                    alt="業務用チャーシュー 16kg パッケージ"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    ラーメン屋が作る本物のチャーシュー 16kg
                  </h3>
                  <p className="text-xl sm:text-2xl font-bold text-red-600">48,000円 税込・送料無料（全国一律）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 sm:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">ご購入はこちらから</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {/* Yahoo!ショッピング */}
            <div className="bg-red-50 rounded-lg p-4 sm:p-6 text-center">
              <a
                href="https://store.shopping.yahoo.co.jp/aizubrandhall/4571318634820.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("Yahoo")}
                className="block"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yahoo購入ボタン-01-MEP8aX6vdnhkm0MalTPsgcj8jbQqA0.png"
                  alt="Yahoo!ショッピング"
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
              </a>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Yahoo!ショッピング</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                PayPayポイントが貯まる使えるショッピングモールはこちら
              </p>
              <div className="bg-red-600 text-white py-2 px-3 rounded-md font-bold mx-auto max-w-[250px] animate-pulse">
                <p className="text-sm">先着30セット限り。</p>
                <p className="text-sm">1000円クーポン発行中。</p>
                <p className="text-sm">48,000円→47,000円！</p>
                <p className="text-xs">(数量になり次第終了)</p>
              </div>
            </div>

            {/* 楽天市場 */}
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 text-center">
              <a
                href="https://item.rakuten.co.jp/aizubrandhall/4571318634820/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("Rakuten")}
                className="block"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/楽天購入ボタン-01-991Pc669KycdDKQBzO5S93EuS2I3kg.png"
                  alt="楽天市場"
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
              </a>
              <h3 className="font-bold mb-2 text-sm sm:text-base">楽天市場</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                楽天ポイントが使える国内最大級のショッピングモールはこちら
              </p>
              <div className="bg-blue-600 text-white py-2 px-3 rounded-md font-bold mx-auto max-w-[250px] animate-pulse">
                <p className="text-sm">先着30セット限り。</p>
                <p className="text-sm">1000円クーポン発行中。</p>
                <p className="text-sm">48,000円→47,000円！</p>
                <p className="text-xs">(数量になり次第終了)</p>
              </div>
            </div>

            {/* Amazon */}
            <div className="bg-green-50 rounded-lg p-4 sm:p-6 text-center">
              <a
                href="https://www.amazon.co.jp/dp/B0F27HF372"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePurchaseClick("Amazon")}
                className="block"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon購入ボタン-01-mAXYlXivqE7kA5DfbJhHMDX5hkPVNJ.png"
                  alt="Amazon"
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
              </a>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Amazon</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">世界最大のショッピングモールでのお買い物はこちら</p>
              <div className="bg-green-600 text-white py-2 px-3 rounded-md font-bold mx-auto max-w-[250px] animate-pulse">
                <p className="text-sm">先着30セット限り。</p>
                <p className="text-sm">1000円クーポン発行中。</p>
                <p className="text-sm">48,000円→47,000円！</p>
                <p className="text-xs">(数量になり次第終了)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SharedLayout>
  )
}

