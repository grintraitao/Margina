---
title: "Giới thiệu: Holder Multiple"
subtitle: "Hãy nghĩ về hệ số này như tỷ lệ P/E dành cho token, nhưng đã được tinh chỉnh cho hai yếu tố khiến crypto trở nên khác biệt: sự pha loãng (dilution) trong tương lai, và thực tế là doanh thu (revenue) không tự động thuộc về bạn."
originalTitle: "Introducing: The Holder Multiple"
author: "blocmates"
sourceName: "blocmates (trên X)"
date: 2026-06-19
year: 2026
tags: ["Crypto", "DeFi", "Đầu tư"]
accent: "#2f6f6a"
---

:::box
Bản dịch đầy đủ phần chữ của bài; các thuật ngữ crypto được giữ nguyên tiếng Anh, chỉ chú thích ngắn khi cần. Hai công thức và bốn bảng số liệu được trình bày lại theo đúng bản gốc.
:::

Trước khi thực hiện bất kỳ lệnh (trade) nào, bạn phải luôn tự hỏi câu hỏi muôn thuở: "Ai sẽ là marginal buyer (người mua biên)[^1] tiếp theo?"

Ngày càng rõ ràng hơn, những marginal buyer cho các đồng coin của chúng ta là nhóm được mệnh danh là “dòng tiền thông minh” (sophisticated money): các quỹ đầu tư, văn phòng quản lý tài sản gia đình, hay các tổ chức phân bổ vốn...

Vì lý do này, chúng ta nên lùi lại một bước và phân tích xem nhóm nhà đầu tư đang ngày một mở rộng này thực sự tìm kiếm điều gì khi chọn token.

Nhìn chung, họ tìm kiếm những khoản đầu tư mà họ có thể giải trình một cách hợp lý với ban quản lý quỹ hoặc các LP (đối tác góp vốn): họ cần một câu chuyện thuyết phục để báo cáo với cấp trên.

Và dĩ nhiên, câu chuyện đó không thể là những lời hứa hẹn sáo rỗng hay chạy theo trend meme "chú chó đội mũ". Thứ thực sự thu hút họ là các yếu tố cơ bản (fundamentals) vững chắc mang tính truyền thống.

Vấn đề mà tôi, cũng như nhiều người khác, nhận ra là: việc áp dụng máy móc các chỉ số của Tài chính Truyền thống (TradFi) lên token là một cách tiếp cận quá khiên cưỡng. Token không phải là cổ phiếu (equity), do đó, khi bạn sử dụng hệ số Vốn hóa/Doanh thu (MCap/Revenue) tiêu chuẩn, bạn đang phớt lờ:

1. Áp lực nguồn cung (supply overhang) từ các đợt mở khóa token, đây là chuyện nhỏ đối với cổ phiếu nhưng lại là yếu tố sống còn định hình giá trị của token.
2. Quyền lợi của tokenholder đối với doanh thu, thứ mà không giống như cổ phiếu, hoàn toàn không được pháp luật bảo đảm và phải được "tạo ra" thông qua cơ chế mua lại (buyback) hoặc chia sẻ doanh thu (revshare).

Đúng là bạn có thể đào sâu nghiên cứu để xây dựng một mô hình định giá riêng biệt cho từng dự án, nhưng tôi muốn đề xuất một giải pháp trung hòa hơn.

Tôi gọi đó là Holder Multiple. Hệ số này nhằm mục đích làm dịu đi những tranh cãi cốt lõi xoay quanh hệ số MCap/Revenue thông thường, từ đó phản ánh chính xác hơn các đặc tính tinh tế của crypto.

:::box
**Holder Multiple** = MCap *(điều chỉnh, pha loãng 2 năm)* ÷ Real Capture *(thường niên hóa)*
:::

## Tinh chỉnh tử số: Vốn hóa thị trường có điều chỉnh (Adjusted Market Cap)

Để có được giá trị adjusted market cap, chúng ta sẽ nhìn về tương lai trong vòng hai năm tới. Ta lấy market cap hiện tại, cộng thêm phần lạm phát ước tính (emissions, bao gồm token trả cho investor/team, phần thưởng token, v.v.), rồi trừ đi toàn bộ lượng buyback dự kiến.

Có thể tính cho khung thời gian 10 năm không? Được chứ, nhưng dự phóng tương lai quá xa trong ngành này là một canh bạc rủi ro. Thế còn 6 tháng thì sao? Cũng được, nhưng trong nhiều trường hợp, bạn sẽ đánh giá quá thấp các rủi ro từ lượng token sắp unlock.

Cách tiếp cận này cho ta một hình dung tương đối về market cap trong trung hạn, với giả định giá token không đổi.

Lưu ý rằng ta đang đánh đồng mọi nguồn cung mới (VC unlocks, token trả dần cho team, phần thưởng staking) với nhau cho đơn giản, dù áp lực bán (sell pressure) thực tế của chúng có thể khác nhau. Ngoài ra, ta cũng không phân biệt giữa việc dự án dùng tiền buyback để đốt (burn), phân bổ lại, hay cất vào kho bạc (treasury).

## Không phải doanh thu nào cũng giống nhau

Bạn sẽ thấy rằng chúng ta không gộp chung toàn bộ mọi loại revenue vào mẫu số một cách mù quáng.

Trong một thế giới hoàn hảo, chúng ta sẽ để các dự án này hoạt động như những startup thực thụ: tự tái đầu tư để tăng trưởng từ bên trong, thay vì kỳ vọng nhận cổ tức từ một dự án non trẻ. Nhưng chúng ta không sống trong một thế giới hoàn hảo.

Việc dự án tích lũy tiền vào treasury về lý thuyết là có lợi cho tokenholder, nhưng quyền lợi này lại không hề được pháp luật bảo vệ. Đó đơn thuần chỉ là một lời hứa, nên ta sẽ bỏ qua nó cho đến khi ngành này có khung chuẩn mực rõ ràng hơn. Chừng nào tokenholder chưa được bảo vệ tương đương như các cổ đông truyền thống, thì sự chênh lệch quyền lợi (alignment) gay gắt này sẽ tiếp tục kéo tụt định giá của dự án.

Ta gọi mẫu số này là Giá trị Thực nhận (Real Capture). Ta sẽ xét hai nguồn chính cho chỉ số này:

1. Revenue được chuyển thẳng cho tokenholder hoặc staker.
2. Revenue dùng để mua lại token (buyback) từ thị trường (bất kể sau đó có đốt hay không).

Dưới đây là công thức hoàn chỉnh của Holder Multiple nếu bạn muốn tham khảo chi tiết.

:::box
**Holder Multiple** = (Current MCap + Emissions 2 năm - Buybacks 2 năm) ÷ (Revenue Share + Buybacks) *(thường niên hóa)*
:::

Xin lưu ý rằng trong các bài phân tích dưới đây, chúng tôi tính mức thường niên hóa (annualized) dựa trên dữ liệu 30 ngày gần nhất, nhưng bạn hoàn toàn có thể tự điều chỉnh thiết kế theo ý mình.

## Đưa vào thực chiến

Để minh họa cách các số liệu này hỗ trợ nhà đầu tư trong thực tế ra sao, hãy cùng đi qua vài ví dụ:

1. SKY vs AAVE: Cuộc đua tranh ngôi vương ngân hàng của DeFi.
2. HYPE vs LIT: Liệu một tân binh có thể làm lu mờ vị vua perp DEX?

## Trận đấu hạng nặng 1: SKY vs AAVE

Nên bắt đầu bằng một cặp dự án DeFi kỳ cựu (OG) đang trên đà khẳng định mình là nền tảng cốt lõi của toàn hệ sinh thái.

Dành cho những ai chưa theo dõi: cả hai đang đua nhau trở thành "ngân hàng trung ương" của không gian crypto. Aave đang tự định vị là kẻ dẫn đầu mảng cho vay/đi vay (lending/borrowing), còn Sky bắt đầu từ vị thế của một nhà phát hành stablecoin.

Theo thời gian, mỗi giao thức đã dần lấn sân sang lãnh địa của đối phương: Aave ra mắt stablecoin CDP riêng tên là GHO, còn Sky thì giới thiệu mảng lend/borrow thông qua Spark. Hai bên cũng dần tích hợp thêm các cơ chế gắn kết quyền lợi token (token alignment).

Sky đi đầu với Smart Burn Engine, một cơ chế buyback token tự động, cố định dựa trên quy tắc có sẵn. Kết hợp với cơ chế chia sẻ doanh thu (revenue share) cho token SKY, họ đã tạo ra thế đứng vững chắc trong trào lưu "revenue meta". Trái lại, Aave chọn hướng tiếp cận linh hoạt hơn: thực hiện buyback token AAVE theo kiểu chiến lược tùy nghi, như một phần của chiến lược quản lý treasury rộng lớn hơn của DAO.

### Sky

| # | Hạng mục | Giá trị | Ghi chú |
|---|---|---|---|
| 1 | Giá token | $0,08 | Giữ cố định |
| 2 | Vốn hóa lưu hành hiện tại | $1,892b | 23,21 tỷ SKY × $0,0815 |
| 3 | + Lượng unlock trong 24 tháng | $0 | 98,9% đã lưu hành; không còn lịch trả token |
| 4 | + Lạm phát SKY trong 24 tháng | $0 | Lợi suất staking trả bằng USDS, không phát hành thêm SKY |
| 5 | − Lượng buyback trong 24 tháng | $0 | Phase 1: SBE bị ngưng cho đến khi lấp đầy ABC |
| 6 | Vốn hóa có điều chỉnh (Adjusted MCap) | $1,892b | Dòng 2 + 3 + 4 − 5 |
| 7 | Buyback hàng năm | $0 | SBE bị ngưng trong Phase 1 |
| 8 | Lợi suất dòng tiền thực cho stkSKY | $72m/năm | 40% × $180,73m doanh thu ròng trả bằng USDS cho staker |
| 9 | Tổng giá trị thực nhận (Total Real Capture) | $72m/năm | Dòng 7 + 8 |
| 10 | Holder Multiple (HM) | 26,3x | Dòng 6 ÷ dòng 9 |

*Nguồn: DeFiLlama, Skyeco dashboard, tài liệu và diễn đàn governance của Sky.*

### Aave

| # | Hạng mục | Giá trị | Ghi chú |
|---|---|---|---|
| 1 | Giá token | $93,61 | Giữ cố định |
| 2 | Vốn hóa lưu hành hiện tại | $1,421b | 15,18m AAVE × $93,61 |
| 3 | + Lượng unlock trong 24 tháng | $0 | Không có lịch trả cho team; 99,9% đã lưu hành |
| 4 | + Lạm phát AAVE trong 24 tháng | +$26,7m | 285k AAVE/24 tháng (Safety module + trả thưởng SP) |
| 5 | − Lượng buyback trong 24 tháng | −$60m | $30m/năm × 2 (ngân sách ARFC) |
| 6 | Vốn hóa có điều chỉnh (Adjusted MCap) | $1,388b | Dòng 2 + 3 + 4 − 5 |
| 7 | Buyback hàng năm | $30m | Ngân sách ARFC, khớp với tốc độ giải ngân thực tế 2026 |
| 8 | Lợi suất dòng tiền thực cho AAVE holder | $0 |  |
| 9 | Tổng giá trị thực nhận (Total Real Capture) | $30m/năm | Dòng 7 + 8 |
| 10 | Holder Multiple (HM) | 46,3x | Dòng 6 ÷ dòng 9 |

*Nguồn: DeFiLlama, TokenLogic dashboard, tài liệu và governance của Aave.*

Vài điểm đáng chú ý riêng cho các phân tích này:

1. Chúng tôi giả định Sky đang ở "Phase 1" theo khuôn khổ (framework) do chính họ đề xuất gần đây. Ở giai đoạn này, Smart Burn Engine (SBE) sẽ bị bỏ qua cho đến khi quỹ dự phòng Aggregate Backstop Capital (ABC) được lấp đầy. Theo tính toán của chúng tôi, ABC sẽ đầy trong khoảng 15 tháng. Nếu giả định trạng thái ổn định của Sky là "Phase 3", dòng tiền đổ vào SBE sẽ nhiều hơn, và hệ số HM lúc đó sẽ rơi vào khoảng ~13x.
2. Chúng tôi cũng giả định Aave giữ mức ngân sách buyback cố định là $30m/năm cho phân tích này, nhưng con số đó có thể là quá thận trọng hoặc hơi lạc quan, tùy thuộc vào đánh giá của bạn về chiến dịch "Aave Will Win" (AWW) cũng như hệ lụy từ vụ exploit rsETH. Nếu thay bằng mức giới hạn ARFC ban đầu là $50m/năm (điều có thể xảy ra vì AWW chuyển 100% doanh thu về DAO, và một số nhà cung cấp dịch vụ đã rời đi), thì HM của Aave sẽ tiệm cận với kịch bản cơ sở của SKY, tức khoảng 27x.

Bỏ qua những phân tích số liệu này, tôi cho rằng lộ trình giảm hệ số HM của Sky mang tính chắc chắn và minh bạch hơn Aave. Bản chất tự động (mechanical) trong hệ thống quản trị của Sky có thể giúp nhà đầu tư tự tin hơn vào đường lối của họ, so với những cú "quay xe" quản trị đột ngột gần đây của Aave.

## Trận đấu hạng nặng 2: HYPE vs LIT

Hyperliquid chắc chắn là cái tên nảy ra trong đầu bạn khi nhắc đến từ khóa "buyback", vậy nên hãy đặt nó lên bàn cân với Lighter, một tân binh đang đi đúng theo công thức này.

Hiển nhiên là Lighter đã "học hỏi" khá nhiều từ thiết kế token của Hyperliquid, ngoại trừ việc họ có gọi vốn từ quỹ VC để phát triển giao thức. Đâu phải ai cũng giàu nứt vách từ trước khi bắt tay làm dự án, nên ta cũng không nên quá khắt khe với họ về điểm này.

Về cơ bản, cả hai dự án đều chia lại gần như toàn bộ doanh thu cho token holder: Hyperliquid hiện dùng 99% doanh thu để tài trợ cho các đợt buyback HYPE tự động, còn Lighter dùng 99,5% doanh thu sau LLP[^2] (Lighter Liquidity Pool, nơi thu phí thanh lý) để thực hiện buyback LIT theo thuật toán. Rất ấn tượng.

### Hyperliquid

| # | Hạng mục | Giá trị | Ghi chú |
|---|---|---|---|
| 1 | Giá token | $44,00 | Giữ cố định |
| 2 | Vốn hóa lưu hành hiện tại | $13,13b | 298,4m HYPE × $44 |
| 3 | + Lượng unlock trong 24 tháng | +$9,17b | 208,3m HYPE × $44 |
| 4 | + Lạm phát staking trong 24 tháng | +$0,30b |  |
| 5 | − Lượng buyback trong 24 tháng | −$1,24b | $619m/năm × 2 |
| 6 | Vốn hóa có điều chỉnh (Adjusted MCap) | $21,36b | Dòng 2 + 3 + 4 − 5 |
| 7 | Buyback hàng năm | $619m |  |
| 8 | Lợi suất dòng tiền thực cho HYPE holder | $0 |  |
| 9 | Tổng giá trị thực nhận (Total Real Capture) | $619m/năm | Dòng 7 + dòng 8 |
| 10 | Holder Multiple (HM) | 34,5x | Dòng 6 ÷ dòng 9 |

*Nguồn: DeFiLlama, website/tài liệu của Hyperliquid.*

### Lighter

| # | Hạng mục | Giá trị | Ghi chú |
|---|---|---|---|
| 1 | Giá token | $0,91 | Giữ cố định |
| 2 | Vốn hóa lưu hành hiện tại | $227,5m | 250m LIT × $0,91 (Float lúc TGE) |
| 3 | + Lượng unlock trong 24 tháng | +$196,56m | 216m LIT × $0,91 (54% năm 1 + 162m năm 2; cliff từ 22/12/2026, unlock 13,5m/tháng trả dần trong 36 tháng) |
| 4 | + Lạm phát staking trong 24 tháng | +$20,27m | 22,27m LIT × $0,91 |
| 5 | − Lượng buyback trong 24 tháng | −$51,06m | $25,53m/năm × 2 |
| 6 | Vốn hóa có điều chỉnh (Adjusted MCap) | $393,27m | Dòng 2 + 3 + 4 − 5 |
| 7 | Buyback hàng năm | $25,53m |  |
| 8 | Lợi suất dòng tiền thực | $0 |  |
| 9 | Tổng giá trị thực nhận (Total Real Capture) | $25,53m/năm | Dòng 7 + dòng 8 |
| 10 | Holder Multiple (HM) | 15,4x | Dòng 6 ÷ dòng 9 |

*Nguồn: DeFiLlama, website/tài liệu của Lighter.*

Tính theo con số tuyệt đối, Hyperliquid thu về nhiều giá trị hơn hẳn (>$600M so với $25,5M), nhưng lại được tính trên một market cap khổng lồ hơn rất nhiều. Với áp lực nguồn cung (supply headwinds) khoảng ~$9B đang trực chờ phía trước, lượng buyback của HYPE chỉ bù đắp được một tỷ lệ cực kỳ nhỏ giọt so với quy mô market cap của nó.

Hệ số 15,4x so với 34,5x cho thấy LIT đang "rẻ hơn", nhưng bù lại bạn đang phải đặt cược vào một dự án có lợi thế cạnh tranh (moat) nhỏ hơn nhiều, thời gian hoạt động ngắn hơn, và chuẩn bị đón đợt xả token (unlock cliff)[^3] từ VC bắt đầu vào tháng 12. Liệu có "đáng" hay không thì quyết định nằm ở bạn.

Điểm ưu việt của Holder Multiple là nó đã tính toán sẵn hai năm unlock sắp tới. Tuy nhiên, nếu ngoại suy dựa trên cách đội ngũ Hyperliquid xử lý các đợt phát hành token (họ mới chỉ unstake một phần nhỏ so với lượng phân bổ thực tế mỗi tháng), thì số liệu ở mục unlock của team (hàng #3) có thể đang bị phóng đại quá mức.

## Cách sử dụng Holder Multiple và những hạn chế

Tương tự mọi hệ số (multiple) khác, lợi thế thực sự (alpha) nằm ở tính tương đối chứ không phải tuyệt đối. Nói cách khác, hãy dùng nó làm thước đo để so sánh một dự án này với một dự án khác.

Đúng là nhiều giao thức không thích công khai chi tiết lịch trình unlock của họ, nhưng chỉ số này được thiết kế đủ trực quan để bạn không cần phải nhắn tin hỏi từng team chỉ để tự lập một bảng tính cho riêng mình.

Tuy vậy, suy cho cùng đây cũng chỉ là một công cụ và nó hoàn toàn không hoàn hảo.

:::box
**Chỉ số này hiệu quả nhất với các dự án đã trưởng thành (established)**, có tokenomics rõ ràng và bề dày hoạt động đủ vững để làm cơ sở dự phóng cho tương lai. Đối với các giao thức vừa mới ra mắt, chỉ số này sẽ bị nhiễu.

**Nếu đội ngũ chứng minh được sự gắn kết lợi ích bằng cách khác**, thì Giá trị Thực nhận (Real Capture) có thể được thay thế bằng "Doanh thu" (Revenue) thông thường. Morpho (và hy vọng là cả MetaDAO) có thể đang minh chứng cho điều này trong thời gian thực.

**Có một góc nhìn phản biện khá hợp lý** cho rằng doanh thu chảy về LP/trader sẽ củng cố vòng lặp tăng trưởng (flywheel) của giao thức, qua đó gián tiếp mang lại lợi ích cho tokenholder. Tôi cho rằng điều này chỉ đúng ở một chừng mực nào đó, vì một flywheel nếu không chuyển hóa thành revshare hay buyback thì rốt cuộc cũng chỉ là một câu chuyện đồn thổi, và mục đích tối thượng của HM là giúp ta nhìn thấu qua những câu chuyện đó.
:::

Holder Multiple cung cấp cho bạn một con số để so sánh hai token trên đúng khía cạnh cốt lõi mà holder thực sự quan tâm: với mỗi đô-la vốn hóa, giao thức mang lại bao nhiêu giá trị thực. Hãy dùng nó để tìm ra những điểm chênh lệch định giá, rồi tiếp tục đào sâu xem nguyên nhân thực sự là gì.

Đôi khi thị trường đúng, còn trực giác của bạn sai. Đôi khi bạn lại "đãi cát tìm vàng" được một token có dòng tiền (cashflow) tuyệt vời nhưng đang bị đè giá bởi áp lực xả (unlock cliff). Dù là trường hợp nào, bạn cũng đã loại bỏ được yếu tố cảm tính để chuyển sang một con số cụ thể, thứ mà bạn thực sự có thể dùng để thuyết phục các đối tác đầu tư (LP), và suy cho cùng, đó mới là mục đích quan trọng nhất.

[^1]: **Marginal buyer** (người mua biên): Nhà đầu tư tiếp theo sẵn sàng mua ở mức giá hiện tại; chính nhóm này quyết định liệu giá có động lực để tăng tiếp được hay không.
[^2]: **LLP** (Lighter Liquidity Pool): Pool thanh khoản của nền tảng Lighter, nơi chuyên thu các khoản phí thanh lý; "doanh thu sau LLP" là phần lợi nhuận còn lại sau khi đã trích thưởng cho pool này.
[^3]: **Unlock cliff**: Thời điểm một lượng lớn token (thường là của team phát triển hoặc nhà đầu tư VC) đột ngột được mở khóa và có thể bán ra thị trường, tạo áp lực cung lên giá.
