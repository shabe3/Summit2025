const sessions = [
    {
        id: "SK1",
        title: "SK1 Elevate and Empower Teams with Agentic AI for Exceptional Experiences",
        titleJa: "SK1 エージェントAIを活用したチームの強化と卓越した体験の実現",
        htmlFile: "html/SK1 Elevate and Empower Teams with Agentic AI for Exceptional Experiences.html",
        audioFile: "voice_mp3/SK1.mp3"
    },
    {
        id: "SK2",
        title: "SK2 Driving Marketing Agility and Scale Transforming your Content Supply Chain with AI",
        titleJa: "SK2 AIによるコンテンツサプライチェーンの変革でマーケティングの俊敏性とスケールを実現",
        htmlFile: "html/SK2 Driving Marketing Agility and Scale Transforming your Content Supply Chain with AI.html",
        audioFile: "voice_mp3/SK2.mp3"
    },
    {
        id: "SK3",
        title: "SK3 B2B Reimagined Transforming Go-to-Market Strategies for Profitable Growth",
        titleJa: "SK3 B2B再考：収益性の高い成長のための市場投入戦略の変革",
        htmlFile: "html/SK3 B2B Reimagined Transforming Go-to-Market Strategies for Profitable Growth.html",
        audioFile: "voice_mp3/SK3.mp3"
    },
    {
        id: "SK4",
        title: "SK4 Put the Customer at the Center and Build Relationships That Last a Lifetime",
        titleJa: "SK4 顧客を中心に据え、生涯続く関係性を構築する",
        htmlFile: "html/SK4 Put the Customer at the Center and Build Relationships That Last a Lifetime.html",
        audioFile: "voice_mp3/SK4.mp3"
    },
    {
        id: "OS115",
        title: "OS115 Adobe Analytics Using Advanced Metrics to Level Up Your Reporting",
        titleJa: "OS115 Adobe Analytics：高度なメトリクスを活用したレポーティングの強化",
        htmlFile: "html/OS115 Adobe Analytics Using Advanced Metrics to Level Up Your Reporting.html",
        audioFile: "voice_mp3/OS115.mp3"
    },
    {
        id: "OS213",
        title: "OS213 Cracking the Code Build and Scale B2B Buying Groups for Account Engagement",
        titleJa: "OS213 コードを解読：アカウントエンゲージメントのためのB2B購買グループの構築とスケーリング",
        htmlFile: "html/OS213 Cracking the Code Build and Scale B2B Buying Groups for Account Engagement.html",
        audioFile: "voice_mp3/OS213.mp3"
    },
    {
        id: "OS214",
        title: "OS214 Wrangling Data for Scalable Marketing Workflows with Marketo Engage",
        titleJa: "OS214 Marketo Engageを使用したスケーラブルなマーケティングワークフローのためのデータ管理",
        htmlFile: "html/OS214 Wrangling Data for Scalable Marketing Workflows with Marketo Engage.html",
        audioFile: "voice_mp3/OS214.mp3"
    },
    {
        id: "OS215",
        title: "OS215 Structuring Marketo Engage for Multiple Teams and Buyer Journeys",
        titleJa: "OS215 複数チームとバイヤージャーニーのためのMarketo Engageの構造化",
        htmlFile: "html/OS215 Structuring Marketo Engage for Multiple Teams and Buyer Journeys.html",
        audioFile: "voice_mp3/OS215.mp3"
    },
    {
        id: "OS216",
        title: "OS216 Omnichannel Marketo Magic Chat, Webinars, and Personalization That Converts",
        titleJa: "OS216 オムニチャネルMarketoの魔法：コンバージョンを生み出すチャット、ウェビナー、パーソナライゼーション",
        htmlFile: "html/OS216 Omnichannel Marketo Magic Chat, Webinars, and Personalization That Converts.html",
        audioFile: "voice_mp3/OS216.mp3"
    },
    {
        id: "OS217",
        title: "OS217 How Eptura Optimizes User Journeys with AI-Powered Chat",
        titleJa: "OS217 EpturaがAI搭載チャットでユーザージャーニーを最適化する方法",
        htmlFile: "html/OS217 How Eptura Optimizes User Journeys with AI-Powered Chat.html",
        audioFile: "voice_mp3/OS217.mp3"
    },
    {
        id: "OS218",
        title: "OS218 Global Consistency with Marketo Scale Across Workspaces, Languages & Teams",
        titleJa: "OS218 Marketoによるグローバルな一貫性：ワークスペース、言語、チーム間でのスケーリング",
        htmlFile: "html/OS218 Global Consistency with Marketo Scale Across Workspaces, Languages & Teams.html",
        audioFile: "voice_mp3/OS218.mp3"
    },
    {
        id: "OS219",
        title: "OS219 Supercharge B2B Marketing with Adobe GenStudio for Performance Marketing",
        titleJa: "OS219 Adobe GenStudioでパフォーマンスマーケティングのためのB2Bマーケティングを強化",
        htmlFile: "html/OS219 Supercharge B2B Marketing with Adobe GenStudio for Performance Marketing.html",
        audioFile: "voice_mp3/OS219.mp3"
    },
    {
        id: "OS309",
        title: "OS309 How AI Is Transforming the Commerce Landscape",
        titleJa: "OS309 AIがコマース領域をどのように変革しているか",
        htmlFile: "html/OS309 How AI Is Transforming the Commerce Landscape.html",
        audioFile: "voice_mp3/OS309.mp3"
    },
    {
        id: "S335",
        title: "S335 Beyond Personalization Creating Intent-Based Experiences at Scale",
        titleJa: "S335 パーソナライゼーションの先へ：インテントベースの体験をスケールで創出",
        htmlFile: "html/S335 Beyond Personalization Creating Intent-Based Experiences at Scale.html",
        audioFile: "voice_mp3/S335.mp3"
    },
    {
        id: "OS336",
        title: "OS336 Adobe Experience Manager Sites Top Innovations",
        titleJa: "OS336 Adobe Experience Manager Sitesのトップイノベーション",
        htmlFile: "html/OS336 Adobe Experience Manager Sites Top Innovations.html",
        audioFile: "voice_mp3/OS336.mp3"
    },
    {
        id: "OS337",
        title: "OS337 Rapid Feature Releases with AEM Cloud Telegraph Media Groups RDE Strategy",
        titleJa: "OS337 AEMクラウドによる迅速な機能リリース：Telegraph Media GroupのRDE戦略",
        htmlFile: "html/OS337 Rapid Feature Releases with AEM Cloud Telegraph Media Groups RDE Strategy.html",
        audioFile: "voice_mp3/OS337.mp3"
    },
    {
        id: "OS338",
        title: "OS338 The Future of Digital Asset Management",
        titleJa: "OS338 デジタルアセット管理の未来",
        htmlFile: "html/OS338 The Future of Digital Asset Management.html",
        audioFile: "voice_mp3/OS338.mp3"
    },
    {
        id: "OS339",
        title: "OS339 How EY Enhanced Regulatory Knowledge Management with Adobe Solutions",
        titleJa: "OS339 EYがAdobeソリューションで規制知識管理を強化した方法",
        htmlFile: "html/OS339 How EY Enhanced Regulatory Knowledge Management with Adobe Solutions.html",
        audioFile: "voice_mp3/OS339.mp3"
    },
    {
        id: "OS407",
        title: "OS407 Adobes Top 10 Generative AI Capabilities to Accelerate Your Content Supply Chain",
        titleJa: "OS407 コンテンツサプライチェーンを加速させるAdobeのトップ10生成AI機能",
        htmlFile: "html/OS407 Adobes Top 10 Generative AI Capabilities to Accelerate Your Content Supply Chain.html",
        audioFile: "voice_mp3/OS407.mp3"
    },
    {
        id: "OS408",
        title: "OS408 GenAI From Playground to Production with GenStudio for Performance Marketing",
        titleJa: "OS408 生成AI：パフォーマンスマーケティングのためのGenStudioで試作から本番へ",
        htmlFile: "html/OS408 GenAI From Playground to Production with GenStudio for Performance Marketing.html",
        audioFile: "voice_mp3/OS408.mp3"
    },
    {
        id: "OS417",
        title: "OS417 Michael Kors and Adobe Mix Modeler One Year Later",
        titleJa: "OS417 マイケル・コースとAdobe Mix Modeler：1年後の検証",
        htmlFile: "html/OS417 Michael Kors and Adobe Mix Modeler One Year Later.html",
        audioFile: "voice_mp3/OS417.mp3"
    },
    {
        id: "OS440",
        title: "OS440 The Future of Forms Experience Success Across the Enrollment Journey",
        titleJa: "OS440 フォームエクスペリエンスの未来：登録プロセス全体での成功",
        htmlFile: "html/OS440 The Future of Forms Experience Success Across the Enrollment Journey.html",
        audioFile: "voice_mp3/OS440.mp3"
    },
    {
        id: "OS441",
        title: "OS441 A Damn Good DAM Intel Blueprint for Enterprise-Wide Asset Management",
        titleJa: "OS441 素晴らしいDAM：企業全体のアセット管理のためのIntelのブループリント",
        htmlFile: "html/OS441 A Damn Good DAM Intel Blueprint for Enterprise-Wide Asset Management.html",
        audioFile: "voice_mp3/OS441.mp3"
    },
    {
        id: "OS511",
        title: "OS511 Data Collaboration in Today's Customer Experience Landscape",
        titleJa: "OS511 現代の顧客体験領域におけるデータコラボレーション",
        htmlFile: "html/OS511 Data Collaboration in Today's Customer Experience Landscape.html",
        audioFile: "voice_mp3/OS511.mp3"
    },
    {
        id: "OS512",
        title: "OS512 Drive Intelligent Activation and Effective Marketing at Scale with AI in Real-Time CDP",
        titleJa: "OS512 リアルタイムCDPのAIによるインテリジェントなアクティベーションと効果的なマーケティングをスケールで実現",
        htmlFile: "html/OS512 Drive Intelligent Activation and Effective Marketing at Scale with AI in Real-Time CDP.html",
        audioFile: "voice_mp3/OS512.mp3"
    },
    {
        id: "S530",
        title: "S530 AI-Powered Personalization Prudential's Secret to a 135% Engagement Boost",
        titleJa: "S530 AI搭載パーソナライゼーション：エンゲージメントを135%向上させたプルデンシャルの秘訣",
        htmlFile: "html/S530 AI-Powered Personalization Prudential's Secret to a 135% Engagement Boost.html",
        audioFile: "voice_mp3/S530.mp3"
    },
    {
        id: "OS532",
        title: "OS532 AMP Drives High-Impact Cross-Channel Journeys with Adobe Journey Optimizer",
        titleJa: "OS532 AMPがAdobe Journey Optimizerで高インパクトなクロスチャネルジャーニーを実現",
        htmlFile: "html/OS532 AMP Drives High-Impact Cross-Channel Journeys with Adobe Journey Optimizer.html",
        audioFile: "voice_mp3/OS532.mp3"
    },
    {
        id: "OS533",
        title: "OS533 Nordea Banks Journey to Power Customer Engagement",
        titleJa: "OS533 ノルデア銀行の顧客エンゲージメント強化への道のり",
        htmlFile: "html/OS533 Nordea Banks Journey to Power Customer Engagement.html",
        audioFile: "voice_mp3/OS533.mp3"
    },
    {
        id: "OS605",
        title: "OS605 Adobes New Tools Empowering Third-Party Developers",
        titleJa: "OS605 サードパーティ開発者を支援するAdobeの新ツール",
        htmlFile: "html/OS605 Adobes New Tools Empowering Third-Party Developers.html",
        audioFile: "voice_mp3/OS605.mp3"
    },
    {
        id: "OS606",
        title: "OS606 A Developers Guide Extending Adobe GenStudio for Performance Marketing",
        titleJa: "OS606 開発者ガイド：パフォーマンスマーケティングのためのAdobe GenStudioの拡張",
        htmlFile: "html/OS606 A Developers Guide Extending Adobe GenStudio for Performance Marketing.html",
        audioFile: "voice_mp3/OS606.mp3"
    },
    {
        id: "OS656",
        title: "OS656 Top Tips to Maximize Value with Adobe Experience Platform Data Distiller",
        titleJa: "OS656 Adobe Experience Platform Data Distillerで価値を最大化するためのトップヒント",
        htmlFile: "html/OS656 Top Tips to Maximize Value with Adobe Experience Platform Data Distiller.html",
        audioFile: "voice_mp3/OS656.mp3"
    },
    {
        id: "OS807",
        title: "OS807 The Future of Adobe Workfront",
        titleJa: "OS807 Adobe Workfrontの未来",
        htmlFile: "html/OS807 The Future of Adobe Workfront.html",
        audioFile: "voice_mp3/OS807.mp3"
    },
    {
        id: "OS808",
        title: "OS808 How Workfront Is Bringing Enterprise-Ready AI to Work Management",
        titleJa: "OS808 Workfrontがワーク管理にエンタープライズ対応AIをもたらす方法",
        htmlFile: "html/OS808 How Workfront Is Bringing Enterprise-Ready AI to Work Management.html",
        audioFile: "voice_mp3/OS808.mp3"
    },
    {
        id: "OS912",
        title: "OS912 Unlocking High-Quality Content to Fuel the Marketing Funnel",
        titleJa: "OS912 マーケティングファネルを促進する高品質コンテンツの活用",
        htmlFile: "html/OS912 Unlocking High-Quality Content to Fuel the Marketing Funnel.html",
        audioFile: "voice_mp3/OS912.mp3"
    },
    {
        id: "OS920",
        title: "OS920 Pitch Perfect Winning the Marketing Budget Conversation",
        titleJa: "OS920 完璧なピッチ：マーケティング予算の議論に勝つ",
        htmlFile: "html/OS920 Pitch Perfect Winning the Marketing Budget Conversation.html",
        audioFile: "voice_mp3/OS920.mp3"
    },
    {
        id: "OS921",
        title: "OS921 The True Cost of a Failed Implementation",
        titleJa: "OS921 失敗した実装の本当のコスト",
        htmlFile: "html/OS921 The True Cost of a Failed Implementation.html",
        audioFile: "voice_mp3/OS921.mp3"
    },
    {
        id: "OS922",
        title: "OS922 Maximizing Inbound Pipeline Generation with an AI SDR",
        titleJa: "OS922 AI SDRによるインバウンドパイプライン生成の最大化",
        htmlFile: "html/OS922 Maximizing Inbound Pipeline Generation with an AI SDR.html",
        audioFile: "voice_mp3/OS922.mp3"
    },
    {
        id: "OS923",
        title: "OS923 Beyond the Hype Reengineering Marketing for the Post-AI Enterprise",
        titleJa: "OS923 誇大広告を超えて：ポストAI企業のためのマーケティング再設計",
        htmlFile: "html/OS923 Beyond the Hype Reengineering Marketing for the Post-AI Enterprise.html",
        audioFile: "voice_mp3/OS923.mp3"
    },
    {
        id: "OS924",
        title: "OS924 Reach new audiences with Adobe Journey Optimizer and WhatsApp",
        titleJa: "OS924 Adobe Journey OptimizerとWhatsAppで新しいオーディエンスにリーチ",
        htmlFile: "html/OS924 Reach new audiences with Adobe Journey Optimizer and WhatsApp.html",
        audioFile: "voice_mp3/OS924.mp3"
    },
    {
        id: "S939",
        title: "S939 How a Global B2B Company Expanded Customer Engagement with Gen AI",
        titleJa: "S939 グローバルB2B企業が生成AIで顧客エンゲージメントを拡大した方法",
        htmlFile: "html/S939 How a Global B2B Company Expanded Customer Engagement with Gen AI.html",
        audioFile: "voice_mp3/S939.mp3"
    },
    {
        id: "S101",
        title: "S101 2025 Adobe Analytics Rockstars Top Tips and Tricks",
        titleJa: "S101 2025 Adobe Analyticsロックスター：トップのヒントとコツ",
        htmlFile: "html/add-1/S101 2025 Adobe Analytics Rockstars Top Tips and Tricks.html",
        audioFile: "voice_mp3/add-1/S101.mp3"
    },
    {
        id: "S103",
        title: "S103 8-Bit Insights The Customer Journey Analytics Tips and Tricks Arcade",
        titleJa: "S103 8ビットインサイト：Customer Journey Analyticsのヒントとコツアーケード",
        htmlFile: "html/add-1/S103 8-Bit Insights The Customer Journey Analytics Tips and Tricks Arcade.html",
        audioFile: "voice_mp3/add-1/S103.mp3"
    },
    {
        id: "S104",
        title: "S104 Distilling the Content Cocktail Discover Ingredients That Convert",
        titleJa: "S104 コンテンツカクテルの蒸留：コンバージョンを生み出す要素の発見",
        htmlFile: "html/add-1/S104 Distilling the Content Cocktail Discover Ingredients That Convert.html",
        audioFile: "voice_mp3/add-1/S104.mp3"
    },
    {
        id: "S105",
        title: "S105 Adobe Analytics Playoff Tips & Tricks for Winning It All!",
        titleJa: "S105 Adobe Analyticsプレーオフ：勝利するためのヒントとコツ！",
        htmlFile: "html/add-1/S105 Adobe Analytics Playoff Tips & Tricks for Winning It All!.html",
        audioFile: "voice_mp3/add-1/S105.mp3"
    },
    {
        id: "S106",
        title: "S106 AI-Vision for Customer Journey Analytics",
        titleJa: "S106 Customer Journey AnalyticsのためのAIビジョン",
        htmlFile: "html/add-1/S106 AI-Vision for Customer Journey Analytics.html",
        audioFile: "voice_mp3/add-1/S106.mp3"
    },
    {
        id: "S107",
        title: "S107 Practical Magic How AI Modeling Transforms Marketing Planning and Measurement",
        titleJa: "S107 実用的な魔法：AIモデリングがマーケティング計画と測定を変革する方法",
        htmlFile: "html/add-1/S107 Practical Magic How AI Modeling Transforms Marketing Planning and Measurement.html",
        audioFile: "voice_mp3/add-1/S107.mp3"
    },
    {
        id: "S108",
        title: "S108 Accelerate Your Revenue Marketing and Sales Cycle with Customer Journey Analytics B2B Edition",
        titleJa: "S108 Customer Journey Analytics B2B Editionで収益マーケティングと販売サイクルを加速",
        htmlFile: "html/add-1/S108 Accelerate Your Revenue Marketing and Sales Cycle with Customer Journey Analytics B2B Edition.html",
        audioFile: "voice_mp3/add-1/S108.mp3"
    },
    {
        id: "S109",
        title: "S109 Identity Twisters Become an Identity Wrangler Across Devices and Channels",
        titleJa: "S109 アイデンティティツイスター：デバイスとチャネル間のアイデンティティ管理者になる",
        htmlFile: "html/add-1/S109 Identity Twisters Become an Identity Wrangler Across Devices and Channels.html",
        audioFile: "voice_mp3/add-1/S109.mp3"
    },
    {
        id: "S111",
        title: "S111 Ctrl Alt Shift Evolving to Customer Journey Analytics",
        titleJa: "S111 Ctrl Alt Shift：Customer Journey Analyticsへの進化",
        htmlFile: "html/add-1/S111 Ctrl Alt Shift Evolving to Customer Journey Analytics.html",
        audioFile: "voice_mp3/add-1/S111.mp3"
    },
    {
        id: "S112",
        title: "S112 Amplify Your Customer Analytics From Chess with Pawns to Power Plays",
        titleJa: "S112 顧客分析を増幅：ポーンでチェスからパワープレイへ",
        htmlFile: "html/add-1/S112 Amplify Your Customer Analytics From Chess with Pawns to Power Plays.html",
        audioFile: "voice_mp3/add-1/S112.mp3"
    },
    {
        id: "S113",
        title: "S113 Move-in Ready Adobe Customer Journey Analytics Your Dream Implementation",
        titleJa: "S113 すぐに使える Adobe Customer Journey Analytics：理想的な実装",
        htmlFile: "html/add-1/S113 Move-in Ready Adobe Customer Journey Analytics Your Dream Implementation.html",
        audioFile: "voice_mp3/add-1/S113.mp3"
    },
    {
        id: "S201",
        title: "S201 Marketo Engage and Journey Optimizer B2B Edition Roadmap and Innovations",
        titleJa: "S201 Marketo EngageとJourney Optimizer B2B Editionのロードマップとイノベーション",
        htmlFile: "html/add-1/S201 Marketo Engage and Journey Optimizer B2B Edition Roadmap and Innovations.html",
        audioFile: "voice_mp3/add-1/S201.mp3"
    },
    {
        id: "S202",
        title: "S202 Journey Optimizer B2B Edition Roadmap The AI Future of Account Orchestration",
        titleJa: "S202 Journey Optimizer B2B Editionロードマップ：アカウントオーケストレーションのAIの未来",
        htmlFile: "html/add-1/S202 Journey Optimizer B2B Edition Roadmap The AI Future of Account Orchestration.html",
        audioFile: "voice_mp3/add-1/S202.mp3"
    },
    {
        id: "S203",
        title: "S203 Boost Webinar ROI with GenAI Innovations for Interactive Webinars",
        titleJa: "S203 インタラクティブウェビナーのための生成AIイノベーションでウェビナーのROIを向上",
        htmlFile: "html/add-1/S203 Boost Webinar ROI with GenAI Innovations for Interactive Webinars.html",
        audioFile: "voice_mp3/add-1/S203.mp3"
    },
    {
        id: "OS925",
        title: "OS925 Adobe Webflow How Marketers use AI to Build, Manage & Optimize Websites",
        titleJa: "OS925 Adobe Webflow：マーケターがAIを使用してウェブサイトを構築、管理、最適化する方法",
        htmlFile: "html/add-1/OS925 Adobe Webflow How Marketers use AI to Build, Manage & Optimize Websites.html",
        audioFile: "voice_mp3/add-1/OS925.mp3"
    },
    {
        id: "OS926",
        title: "OS926 Super charge Your Social Commerce with Adobe Meta",
        titleJa: "OS926 Adobe Metaでソーシャルコマースを強化",
        htmlFile: "html/add-1/OS926 Super charge Your Social Commerce with Adobe Meta.html",
        audioFile: "voice_mp3/add-1/OS926.mp3"
    },
    {
        id: "OS927",
        title: "OS927 Surviving the Go-to-Market Crisis Leveraging AI for Customer Loyalty",
        titleJa: "OS927 市場投入の危機を乗り切る：顧客ロイヤルティのためのAI活用",
        htmlFile: "html/add-1/OS927 Surviving the Go-to-Market Crisis Leveraging AI for Customer Loyalty.html",
        audioFile: "voice_mp3/add-1/OS927.mp3"
    },
    {
        id: "OS928",
        title: "OS928 A Proven Framework to Boost Campaign Creation Speed",
        titleJa: "OS928 キャンペーン作成速度を向上させるための実証済みフレームワーク",
        htmlFile: "html/add-1/OS928 A Proven Framework to Boost Campaign Creation Speed.html",
        audioFile: "voice_mp3/add-1/OS928.mp3"
    },
    {
        id: "GS1",
        title: "GS1 Day 1 Keynote 2025",
        titleJa: "GS1 2025年 1日目の基調講演",
        htmlFile: "html/add-2/GS1 Day 1 Keynote 2025.html",
        audioFile: "voice_mp3/add-2/GS1.mp3"
    },
    {
        id: "GS2",
        title: "GS2 Day 2 Keynote 2025",
        titleJa: "GS2 2025年 2日目の基調講演",
        htmlFile: "html/add-2/GS2 Day 2 Keynote 2025.html",
        audioFile: "voice_mp3/add-2/GS2.mp3"
    },
    {
        id: "S102",
        title: "S102 Too Hot for Main Stage Help Shape the Product",
        titleJa: "S102 メインステージでは語れない製品の形成を支援する",
        htmlFile: "html/add-2/S102 Too Hot for Main Stage Help Shape the Product.html",
        audioFile: "voice_mp3/add-2/S102.mp3"
    },
    {
        id: "S204",
        title: "S204 Accelerate Email Campaigns in Marketo Engage with the New Gen AI Powered Editor",
        titleJa: "S204 新しい生成AI搭載エディターでMarketo Engageのメールキャンペーンを加速",
        htmlFile: "html/add-2/S204 Accelerate Email Campaigns in Marketo Engage with the New Gen AI Powered Editor.html",
        audioFile: "voice_mp3/add-2/S204.mp3"
    },
    {
        id: "S205",
        title: "S205 The Power of Marketo Engage & Journey Optimizer B2B Edition Together",
        titleJa: "S205 Marketo EngageとJourney Optimizer B2B Editionの連携パワー",
        htmlFile: "html/add-2/S205 The Power of Marketo Engage & Journey Optimizer B2B Edition Together.mov.txt",
        audioFile: "voice_mp3/add-2/S205.mp3"
    },
    {
        id: "S206",
        title: "S206 ABM and Buying Group Orchestration with Journey Optimizer B2B Edition at AWS",
        titleJa: "S206 AWSにおけるJourney Optimizer B2B EditionでのABMと購買グループオーケストレーション",
        htmlFile: "html/add-2/S206 ABM and Buying Group Orchestration with Journey Optimizer B2B Edition at AWS.html",
        audioFile: "voice_mp3/add-2/S206.mp3"
    },
    {
        id: "S207",
        title: "S207 Marketo Engage Roadmap The Future of Marketing Automation",
        titleJa: "S207 Marketo Engageロードマップ：マーケティングオートメーションの未来",
        htmlFile: "html/add-2/S207 Marketo Engage Roadmap The Future of Marketing Automation.mov.txt",
        audioFile: "voice_mp3/add-2/S207.mp3"
    },
    {
        id: "S208",
        title: "S208 Marketo Engage Fundamentals Your Path to Marketing and Career Success​",
        titleJa: "S208 Marketo Engageの基礎：マーケティングとキャリアの成功への道",
        htmlFile: "html/add-2/S208 Marketo Engage Fundamentals Your Path to Marketing and Career Success​.html",
        audioFile: "voice_mp3/add-2/S208.mp3"
    },
    {
        id: "S209",
        title: "S209 Foundation to Future Advance Your B2B Marketing Measurement Strategy",
        titleJa: "S209 基盤から未来へ：B2Bマーケティング測定戦略の進化",
        htmlFile: "html/add-2/S209 Foundation to Future Advance Your B2B Marketing Measurement Strategy.html",
        audioFile: "voice_mp3/add-2/S209.mp3"
    },
    {
        id: "S210",
        title: "S210 Mastering the Maze of Data Unlock Clarity and Structure in Marketo Engage",
        titleJa: "S210 データの迷路をマスター：Marketo Engageで明確さと構造を解き放つ",
        htmlFile: "html/add-2/S210 Mastering the Maze of Data Unlock Clarity and Structure in Marketo Engage.html",
        audioFile: "voice_mp3/add-2/S210.mp3"
    },
    {
        id: "S211",
        title: "S211 Accelerating Lead Velocity How Okta Boosted Sync Time by 5x",
        titleJa: "S211 リード速度の加速：Oktaが同期時間を5倍に向上させた方法",
        htmlFile: "html/add-2/S211 Accelerating Lead Velocity How Okta Boosted Sync Time by 5x.mov.txt",
        audioFile: "voice_mp3/add-2/S211.mp3"
    },
    {
        id: "S212",
        title: "S212 Marketo Engage Data Hygiene Strategies",
        titleJa: "S212 Marketo Engageデータ衛生戦略",
        htmlFile: "html/add-2/S212 Marketo Engage Data Hygiene Strategies.html",
        audioFile: "voice_mp3/add-2/S212.mp3"
    },
    {
        id: "S250",
        title: "S250 B2B Transformation Series No Limits Digital Marketing at GE HealthCare",
        titleJa: "S250 B2Bトランスフォーメーションシリーズ：GEヘルスケアの制限のないデジタルマーケティング",
        htmlFile: "html/add-2/S250 B2B Transformation Series No Limits Digital Marketing at GE HealthCare.html",
        audioFile: "voice_mp3/add-2/S250.mp3"
    },
    {
        id: "S251",
        title: "S251 B2B Transformation Series Workday Customer Growth Engine",
        titleJa: "S251 B2Bトランスフォーメーションシリーズ：Workdayの顧客成長エンジン",
        htmlFile: "html/add-2/S251 B2B Transformation Series Workday Customer Growth Engine.html",
        audioFile: "voice_mp3/add-2/S251.mp3"
    },
    {
        id: "S252",
        title: "S252 B2B Transformation Series Adobe on Adobe Digital Marketing",
        titleJa: "S252 B2Bトランスフォーメーションシリーズ：AdobeのAdobeデジタルマーケティング",
        htmlFile: "html/add-2/S252 B2B Transformation Series Adobe on Adobe Digital Marketing.html",
        audioFile: "voice_mp3/add-2/S252.mp3"
    },
    {
        id: "S301",
        title: "S301 Adobe Commerce 2025 Product Roadmap Review",
        titleJa: "S301 Adobe Commerce 2025製品ロードマップレビュー",
        htmlFile: "html/add-2/S301 Adobe Commerce 2025 Product Roadmap Review.html",
        audioFile: "voice_mp3/add-2/S301.mp3"
    },
    {
        id: "S302",
        title: "S302 Adobe Commerce Rockstar Showcase",
        titleJa: "S302 Adobe Commerceロックスターショーケース",
        htmlFile: "html/add-2/S302 Adobe Commerce Rockstar Showcase.html",
        audioFile: "voice_mp3/add-2/S302.mp3"
    },
    {
        id: "S303",
        title: "S303 The B2B Commerce Revolution Maximizing Growth in a Digital World",
        titleJa: "S303 B2Bコマース革命：デジタル世界での成長の最大化",
        htmlFile: "html/add-2/S303 The B2B Commerce Revolution Maximizing Growth in a Digital World.mov.txt",
        audioFile: "voice_mp3/add-2/S303.mp3"
    },
    {
        id: "S304",
        title: "S304 Adobe Commerce Optimizer Transform your Commerce Experience without Replatforming",
        titleJa: "S304 Adobe Commerce Optimizer：リプラットフォームなしでコマース体験を変革",
        htmlFile: "html/add-2/S304 Adobe Commerce Optimizer Transform your Commerce Experience without Replatforming.mov.txt",
        audioFile: "voice_mp3/add-2/S304.mp3"
    },
    {
        id: "S305",
        title: "S305 Boost Storefront Performance with Edge Delivery as a Progressive Migration",
        titleJa: "S305 プログレッシブマイグレーションとしてのエッジデリバリーによるストアフロントパフォーマンスの向上",
        htmlFile: "html/add-2/S305 Boost Storefront Performance with Edge Delivery as a Progressive Migration.mov.txt",
        audioFile: "voice_mp3/add-2/S305.mp3"
    },
    {
        id: "S307",
        title: "S307 Creating Unified and Personalized Commerce Journeys",
        titleJa: "S307 統合されたパーソナライズされたコマースジャーニーの作成",
        htmlFile: "html/add-2/S307 Creating Unified and Personalized Commerce Journeys.mov.txt",
        audioFile: "voice_mp3/add-2/S307.mp3"
    },
    {
        id: "S308",
        title: "S308 Scaling Ecommerce and Personalization Sling TV's Peak Event Playbook",
        titleJa: "S308 Eコマースとパーソナライゼーションのスケーリング：Sling TVのピークイベントプレイブック",
        htmlFile: "html/add-2/S308 Scaling Ecommerce and Personalization Sling TV's Peak Event Playbook - .mov.txt",
        audioFile: "voice_mp3/add-2/S308.mp3"
    },
    {
        id: "S321",
        title: "S321 Adobe Experience Manager Assets Top DAM Innovations",
        titleJa: "S321 Adobe Experience Manager Assetsのトップ DAM イノベーション",
        htmlFile: "html/add-2/S321 Adobe Experience Manager Assets Top DAM Innovations.txt",
        audioFile: "voice_mp3/add-2/S321.mp3"
    },
    {
        id: "S322",
        title: "S322 Adobe Experience Manager Sites Top Innovations",
        titleJa: "S322 Adobe Experience Manager Sitesのトップイノベーション",
        htmlFile: "html/add-2/S322 Adobe Experience Manager Sites Top Innovations.txt",
        audioFile: "voice_mp3/add-2/S322.mp3"
    },
    {
        id: "S323",
        title: "S323 Adobe Experience Manager as a Cloud Service Top Innovations",
        titleJa: "S323 クラウドサービスとしてのAdobe Experience Managerのトップイノベーション",
        htmlFile: "html/add-2/S323 Adobe Experience Manager as a Cloud Service Top Innovations.txt",
        audioFile: "voice_mp3/add-2/S323.mp3"
    },
    {
        id: "S325",
        title: "S325 Elevate Experiences with AEM and the Power of Generative AI",
        titleJa: "S325 AEMと生成AIのパワーで体験を向上",
        htmlFile: "html/add-2/S325 Elevate Experiences with AEM and the Power of Generative AI.txt",
        audioFile: "voice_mp3/add-2/S325.mp3"
    },
    {
        id: "S326",
        title: "S326 Journey to Transformation by Leveraging DAM and Generative AI",
        titleJa: "S326 DAMと生成AIを活用した変革への旅",
        htmlFile: "html/add-2/S326 Journey to Transformation by Leveraging DAM and Generative AI.txt",
        audioFile: "voice_mp3/add-2/S326.mp3"
    },
    {
        id: "S327",
        title: "S327 Optimize Traffic, Engagement, and Conversion of Your Digital Experiences",
        titleJa: "S327 デジタル体験のトラフィック、エンゲージメント、コンバージョンの最適化",
        htmlFile: "html/add-2/S327 Optimize Traffic, Engagement, and Conversion of Your Digital Experiences.txt",
        audioFile: "voice_mp3/add-2/S327.mp3"
    },
    {
        id: "S328",
        title: "S328 Activate Content Faster with Adobe Experience Manager Assets",
        titleJa: "S328 Adobe Experience Manager Assetsでコンテンツを迅速に有効化",
        htmlFile: "html/add-2/S328 Activate Content Faster with Adobe Experience Manager Assets.txt",
        audioFile: "voice_mp3/add-2/S328.mp3"
    },
    {
        id: "S329",
        title: "S329 Transform Quality Content into Winning Experiences in Minutes using GenAI",
        titleJa: "S329 GenAIを使用して質の高いコンテンツを数分で勝利体験に変換",
        htmlFile: "html/add-2/S329 Transform Quality Content into Winning Experiences in Minutes using GenAI.txt",
        audioFile: "voice_mp3/add-2/S329.mp3"
    },
    {
        id: "S330",
        title: "S330 From Complexity to Clarity How UPS Modernized Its Global Website",
        titleJa: "S330 複雑さから明確さへ：UPSがグローバルウェブサイトを近代化した方法",
        htmlFile: "html/add-2/S330 From Complexity to Clarity How UPS Modernized Its Global Website Nikunj Merchant.txt",
        audioFile: "voice_mp3/add-2/S330.mp3"
    },
    {
        id: "S331",
        title: "S331 Content Meets Data How T-Mobile Unlocks Omnichannel Personalization",
        titleJa: "S331 コンテンツがデータと出会う：T-Mobileがオムニチャネルパーソナライゼーションを解き放つ方法",
        htmlFile: "html/add-2/S331 Content Meets Data How T-Mobile Unlocks Omnichannel Personalization.txt",
        audioFile: "voice_mp3/add-2/S331.mp3"
    }
];

// セッション名前順でソート
sessions.sort((a, b) => a.title.localeCompare(b.title)); 