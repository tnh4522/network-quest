import type { Question } from '@/types';

export const advancedQuestions: Question[] = [
  {
    id: 'adv-dynamic-routing-001',
    level: 'advanced',
    topic: 'dynamic-routing',
    question: 'Trong mạng OSPF đa vùng (Multi-area OSPF), loại LSA (Link-State Advertisement) nào được sử dụng để quảng bá các tuyến đường giữa các vùng khác nhau và do router nào tạo ra?',
    options: {
      A: 'LSA Type 3, tạo bởi Area Border Router (ABR)',
      B: 'LSA Type 2, tạo bởi Designated Router (DR)',
      C: 'LSA Type 1, tạo bởi Internal Router',
      D: 'LSA Type 4, tạo bởi Autonomous System Boundary Router (ASBR)'
    },
    answer: 'A',
    explanation: 'LSA Type 3 (Summary LSA) được sử dụng để quảng bá mạng từ vùng này sang vùng khác. LSA này được tạo bởi ABR (Area Border Router). LSA Type 1 chỉ quảng bá trong nội bộ vùng. LSA Type 2 do DR tạo ra cho các mạng multi-access, cũng chỉ nằm trong nội bộ vùng. LSA Type 4 dùng để tìm đường đến ASBR chứ không chứa thông tin định tuyến mạng. Do đó, đáp án A là chính xác nhất.',
    tip: 'Nhớ quy tắc: Type 1 & 2 = Nội vùng; Type 3 = Liên vùng (ABR); Type 4 & 5 = Liên miền AS (ASBR).'
  },
  {
    id: 'adv-dynamic-routing-002',
    level: 'advanced',
    topic: 'dynamic-routing',
    question: 'Trong giao thức BGP, thuộc tính (attribute) nào được sử dụng đầu tiên để chọn đường đi tốt nhất khi một router nhận được nhiều tuyến đường đến cùng một đích từ các peer khác nhau?',
    options: {
      A: 'AS_PATH',
      B: 'Multi-Exit Discriminator (MED)',
      C: 'Local Preference',
      D: 'Weight'
    },
    answer: 'D',
    explanation: 'Trong tiến trình chọn đường của BGP (BGP Best Path Selection), thuộc tính Weight (độc quyền của Cisco) được kiểm tra đầu tiên. Đường đi nào có Weight cao nhất sẽ được chọn. Nếu Weight bằng nhau (hoặc không dùng Cisco), BGP sẽ xét đến Local Preference. AS_PATH được xét sau Local Preference. MED được xét ở những bước sau cùng. Vì vậy, Weight ưu tiên cao nhất.',
    tip: 'Tiến trình chọn đường BGP: We Love Oranges As Oranges Mean Pure Refreshment (Weight, Local Pref, Originate, AS_PATH, Origin, MED, eBGP>iBGP, Router ID).'
  },
  {
    id: 'adv-dynamic-routing-003',
    level: 'advanced',
    topic: 'dynamic-routing',
    question: 'Thuật toán SPF (Shortest Path First) của Dijkstra trong OSPF tính toán chi phí (cost) dựa trên băng thông như thế nào?',
    options: {
      A: 'Cost = Băng thông của liên kết (Mbps) / 100',
      B: 'Cost = 10^8 / Băng thông (bps)',
      C: 'Cost = 10^9 / Băng thông (bps)',
      D: 'Cost = Băng thông tham chiếu / Độ trễ (delay)'
    },
    answer: 'B',
    explanation: 'Theo mặc định trong OSPF, chi phí của một liên kết được tính bằng công thức Cost = Reference Bandwidth / Interface Bandwidth. Băng thông tham chiếu mặc định là 100 Mbps (tức là 10^8 bps). Do đó, một cổng FastEthernet (100Mbps) sẽ có cost = 1. Cổng GigabitEthernet cũng sẽ có cost = 1 nếu không thay đổi băng thông tham chiếu. Các công thức khác đưa ra đều sai hoặc thuộc về giao thức khác (như EIGRP).',
    tip: 'Để hỗ trợ đúng Gigabit và 10G, cần dùng lệnh `auto-cost reference-bandwidth`.'
  },
  {
    id: 'adv-dynamic-routing-004',
    level: 'advanced',
    topic: 'dynamic-routing',
    question: 'Trong RIPv2, cơ chế "Split Horizon with Poison Reverse" hoạt động như thế nào để ngăn chặn routing loop?',
    options: {
      A: 'Ngăn không cho router gửi lại thông tin định tuyến qua chính interface mà nó vừa nhận được.',
      B: 'Gửi gói tin ICMP Source Quench đến router nguồn để yêu cầu giảm tốc độ gửi cập nhật.',
      C: 'Tạm dừng toàn bộ quá trình cập nhật định tuyến trong 180 giây khi phát hiện loop.',
      D: 'Chỉ gửi lại tuyến đường qua interface đã nhận với số hop được đặt là 16 (unreachable).'
    },
    answer: 'D',
    explanation: 'Split Horizon thông thường sẽ không gửi ngược thông tin về cổng đã nhận. Tuy nhiên, khi kết hợp với "Poison Reverse", router sẽ vẫn gửi ngược thông tin tuyến đường qua cổng đã nhận nhưng đánh dấu cost là vô hạn (trong RIP là 16 hops). Điều này giúp các router kề cận lập tức biết tuyến đường đã sập thay vì phải đợi hết thời gian timeout. Đáp án A là Split Horizon cơ bản. C là Hold-down timer. B là cơ chế kiểm soát tắc nghẽn cũ.',
  },
  {
    id: 'adv-dynamic-routing-005',
    level: 'advanced',
    topic: 'dynamic-routing',
    question: 'Tình huống: Router chạy OSPF trên môi trường Broadcast (như Ethernet). Trong quá trình bầu chọn DR/BDR, hai router R1 (Priority 1, Router ID 192.168.1.1) và R2 (Priority 1, Router ID 10.0.0.1) được bật cùng lúc. Kết quả bầu chọn sẽ như thế nào?',
    options: {
      A: 'R1 trở thành DR, R2 trở thành BDR vì R1 có Router ID lớn hơn.',
      B: 'R2 trở thành DR, R1 trở thành BDR vì R2 khởi động nhanh hơn.',
      C: 'R1 trở thành DR, R2 trở thành BDR vì địa chỉ IP 192.168.1.1 thuộc lớp C lớn hơn.',
      D: 'Cả hai sẽ không thể bầu chọn nếu không có Loopback interface.'
    },
    answer: 'A',
    explanation: 'Quá trình bầu chọn DR/BDR trong OSPF dựa vào OSPF Priority trước tiên. Nếu Priority bằng nhau (mặc định là 1), router nào có Router ID (RID) lớn hơn sẽ thắng. R1 có RID 192.168.1.1 lớn hơn R2 có RID 10.0.0.1. Do đó R1 sẽ làm DR và R2 làm BDR. Lớp mạng không liên quan đến so sánh giá trị tuyệt đối của IP, chỉ giá trị thập phân của IP được xét. Không bắt buộc phải có Loopback để bầu chọn.',
    tip: 'Thứ tự ưu tiên bầu DR/BDR: Priority cao nhất -> Router ID cao nhất (Loopback cao nhất -> Physical IP cao nhất).'
  },
  {
    id: 'adv-dynamic-routing-006',
    level: 'advanced',
    topic: 'dynamic-routing',
    question: 'Sự khác biệt chính giữa iBGP và eBGP là gì liên quan đến việc chuyển tiếp thông tin định tuyến (route propagation)?',
    options: {
      A: 'iBGP thay đổi Next-Hop mặc định thành chính nó, trong khi eBGP giữ nguyên Next-Hop.',
      B: 'eBGP yêu cầu các router phải kết nối trực tiếp, trong khi iBGP không thể kết nối qua nhiều hop.',
      C: 'Tuyến đường học được từ một iBGP peer sẽ không bao giờ được gửi cho một iBGP peer khác.',
      D: 'iBGP sử dụng AS_PATH để chống loop, trong khi eBGP sử dụng Split Horizon.'
    },
    answer: 'C',
    explanation: 'Để ngăn chặn routing loop trong nội bộ mạng, iBGP áp dụng quy tắc split-horizon: một router sẽ không gửi (quảng bá) tuyến đường nhận từ một iBGP peer sang một iBGP peer khác. Do đó, các router iBGP phải thiết lập full-mesh hoặc sử dụng Route Reflector/Confederation. A sai vì eBGP mới thay đổi Next-Hop mặc định. D sai vì eBGP dùng AS_PATH để chống loop, còn iBGP dùng quy tắc không chuyển tiếp (iBGP split horizon).',
  },
  {
    id: 'adv-dynamic-routing-007',
    level: 'advanced',
    topic: 'dynamic-routing',
    question: 'Lệnh cấu hình nào sau đây sẽ khiến một interface OSPF không gửi các gói tin Hello ra ngoài nhưng vẫn cho phép mạng của interface đó được quảng bá?',
    options: {
      A: '`network 192.168.1.0 0.0.0.255 area 0`',
      B: '`passive-interface default`',
      C: '`ip ospf hello-interval 0`',
      D: '`no ip ospf network point-to-point`'
    },
    answer: 'B',
    explanation: 'Tính năng `passive-interface` trong OSPF ngăn chặn việc gửi các gói tin định tuyến (như Hello) ra cổng đó, do đó không thiết lập quan hệ láng giềng. Tuy nhiên, mạng gắn với cổng đó vẫn được OSPF đưa vào cơ sở dữ liệu định tuyến (LSDB) và quảng bá cho các router khác. A chỉ là lệnh kích hoạt OSPF. C không tồn tại lệnh này. D chỉ thay đổi loại mạng OSPF.',
    tip: 'Passive interface thường được dùng trên các cổng hướng về mạng LAN (end-users) để bảo mật và giảm tải.'
  },
  {
    id: 'adv-tcp-advanced-008',
    level: 'advanced',
    topic: 'tcp-advanced',
    question: 'Thuật toán điều khiển tắc nghẽn TCP CUBIC khác biệt với TCP Reno ở điểm mấu chốt nào trong pha Tránh tắc nghẽn (Congestion Avoidance)?',
    options: {
      A: 'CUBIC giảm một nửa kích thước cửa sổ tắc nghẽn khi gặp mất gói, Reno thì giảm về 1.',
      B: 'CUBIC sử dụng Fast Retransmit, Reno không hỗ trợ tính năng này.',
      C: 'CUBIC dựa trên đo lường độ trễ (delay-based), Reno dựa trên mất gói (loss-based).',
      D: 'CUBIC tăng kích thước cửa sổ theo hàm bậc 3 phụ thuộc vào thời gian kể từ lần tắc nghẽn cuối, Reno tăng tuyến tính.'
    },
    answer: 'D',
    explanation: 'TCP CUBIC tối ưu cho các mạng có băng thông cao và độ trễ lớn (BDP). Trong pha Congestion Avoidance, CUBIC tăng cửa sổ tắc nghẽn (cwnd) theo hàm bậc 3 (cubic function) của thời gian đã trôi qua từ lần mất gói trước đó. Nó giúp phục hồi nhanh chóng và hội tụ tốt. Ngược lại, TCP Reno tăng cwnd một cách tuyến tính. Cả CUBIC và Reno đều là thuật toán loss-based (dựa trên mất gói). Cả hai đều hỗ trợ Fast Retransmit.',
    tip: 'Hàm bậc 3 giúp TCP CUBIC nhanh chóng quay lại mức cwnd trước khi mất gói, sau đó từ từ tiến tới mức mới.'
  },
  {
    id: 'adv-tcp-advanced-009',
    level: 'advanced',
    topic: 'tcp-advanced',
    question: 'Tình huống: Một server có quá nhiều kết nối TCP đang kẹt ở trạng thái TIME_WAIT khiến nó không thể nhận thêm kết nối mới (cạn kiệt ephemeral ports). Đâu KHÔNG phải là giải pháp tiêu chuẩn để giảm thiểu vấn đề này?',
    options: {
      A: 'Bật tùy chọn TCP keepalive trên server để dọn dẹp các socket.',
      B: 'Sử dụng kỹ thuật tcp_tw_reuse để tái sử dụng cổng.',
      C: 'Giảm giá trị thời gian chờ (timeout) của trạng thái TIME_WAIT.',
      D: 'Thiết kế ứng dụng dùng Connection Pooling hoặc cấu hình tải cân bằng (Load Balancer).'
    },
    answer: 'A',
    explanation: 'Trạng thái TIME_WAIT xảy ra sau khi một kết nối TCP được chủ động đóng (active close) hoàn toàn hợp lệ, nhằm đảm bảo các gói tin cũ bị lạc trên mạng không gây nhiễu cho kết nối mới. TCP keepalive dùng để kiểm tra các kết nối đang MỞ (ESTABLISHED) nhưng bị "chết" (idle quá lâu), chứ không có tác dụng với TIME_WAIT. Các biện pháp tái sử dụng socket (tw_reuse), giảm timeout, hoặc dùng Connection pool để tránh đóng/mở liên tục đều là giải pháp hợp lý.',
  },
  {
    id: 'adv-tcp-advanced-010',
    level: 'advanced',
    topic: 'tcp-advanced',
    question: 'Mục đích chính của thuật toán Nagle trong TCP là gì và khi nào nên TẮT nó?',
    options: {
      A: 'Tăng cường bảo mật bằng cách mã hóa dữ liệu nhỏ; nên tắt khi cần băng thông cao.',
      B: 'Ngăn chặn mất gói tin khi tắc nghẽn; nên tắt trong mạng LAN ổn định.',
      C: 'Nhóm các payload nhỏ lại để gửi cùng lúc nhằm tối ưu màng; nên tắt với ứng dụng thời gian thực (như game online).',
      D: 'Quản lý cửa sổ nhận (Receive Window); nên tắt khi thiết bị có RAM lớn.'
    },
    answer: 'C',
    explanation: 'Thuật toán Nagle giúp tiết kiệm băng thông và giảm chi phí header bằng cách gom nhiều đoạn dữ liệu nhỏ (ví dụ các phím gõ trong Telnet/SSH) vào một phân đoạn TCP lớn hơn trước khi gửi đi, trừ khi đã nhận được ACK của gói trước. Tuy nhiên, điều này gây ra độ trễ. Do đó, với các ứng dụng yêu cầu độ trễ thấp theo thời gian thực (game online, VoIP, giao dịch tài chính), thuật toán Nagle cần được vô hiệu hóa (tùy chọn TCP_NODELAY).',
    tip: 'Nagle + Delayed ACK = Thảm họa về độ trễ. Luôn nhớ tắt Nagle cho ứng dụng real-time.'
  },
  {
    id: 'adv-tcp-advanced-011',
    level: 'advanced',
    topic: 'tcp-advanced',
    question: 'Cơ chế Fast Retransmit của TCP được kích hoạt trong điều kiện nào?',
    options: {
      A: 'Khi Retransmission Timeout (RTO) hết hạn mà chưa nhận được ACK.',
      B: 'Khi mạng hỗ trợ giao thức UDP thông qua cổng dự phòng.',
      C: 'Khi bộ đệm nhận (Receive Buffer) báo cáo Window Size bằng 0.',
      D: 'Khi bên gửi nhận được 3 gói tin Duplicate ACK liên tiếp cho cùng một số Sequence.'
    },
    answer: 'D',
    explanation: 'Fast Retransmit là một cải tiến giúp phát hiện mất gói sớm hơn mà không phải chờ timeout (RTO). Nếu bên nhận phát hiện một gói bị thiếu hoặc sai thứ tự, nó sẽ gửi lại bản sao (duplicate) của ACK gần nhất. Khi bên gửi nhận được 3 Duplicate ACKs liên tiếp (tổng cộng 4 ACKs cho cùng một sequence), nó kết luận gói tin tiếp theo đã bị mất và lập tức gửi lại ngay. A là cơ chế Retransmit cổ điển. C là sự kiện Zero Window.',
  },
  {
    id: 'adv-tcp-advanced-012',
    level: 'advanced',
    topic: 'tcp-advanced',
    question: 'Tùy chọn TCP Window Scaling được đưa ra để giải quyết vấn đề gì?',
    options: {
      A: 'Kích thước trường Window Size trong TCP Header bị giới hạn ở 16 bit (tối đa 65,535 byte), không đủ cho các mạng băng thông cao và độ trễ lớn.',
      B: 'Chia nhỏ dữ liệu thành các đoạn phù hợp với MTU (Maximum Transmission Unit).',
      C: 'Xử lý các gói tin ACK bị mất bằng cách đồng bộ lại kích thước cửa sổ của cả hai bên.',
      D: 'Ngăn chặn tin tặc thay đổi kích thước cửa sổ bằng cách sử dụng các bit bảo mật mở rộng.'
    },
    answer: 'A',
    explanation: 'TCP Header có một trường Window Size 16-bit, do đó kích thước cửa sổ tối đa chỉ là 65,535 bytes. Trong môi trường Long Fat Network (LFN) - băng thông cao, độ trễ lớn, mức tối đa này làm giảm tốc độ truyền tải vì không thể tận dụng hết đường truyền. Tùy chọn TCP Window Scaling (RFC 1323) sử dụng một hệ số nhân (shift count) để tăng kích thước cửa sổ tối đa lên tới 1 Gigabyte. Các đáp án khác sai chức năng.',
  },
  {
    id: 'adv-tcp-advanced-013',
    level: 'advanced',
    topic: 'tcp-advanced',
    question: 'Trong giai đoạn Slow Start của TCP, kích thước Cửa sổ Tắc nghẽn (Congestion Window - cwnd) phát triển như thế nào?',
    options: {
      A: 'Tăng gấp đôi sau mỗi RTT miễn là mọi gói tin đều được ACK thành công.',
      B: 'Tăng tuyến tính mỗi RTT (Round Trip Time) cho đến khi đạt ngưỡng.',
      C: 'Tăng 1 MSS (Maximum Segment Size) sau mỗi gói tin được gửi đi.',
      D: 'Tăng liên tục đến khi bằng Kích thước Cửa sổ Nhận (rwnd) thì dừng.'
    },
    answer: 'A',
    explanation: 'Bất chấp tên gọi "Slow Start" (khởi động chậm), ở giai đoạn này TCP gia tăng tốc độ rất nhanh (theo cấp số nhân). Cụ thể, cwnd tăng lên 1 MSS cho mỗi ACK hợp lệ nhận được. Kết quả là sau mỗi chu kỳ RTT, tổng số MSS sẽ tăng gấp đôi (1, 2, 4, 8...). Nó tiếp tục nhân đôi cho đến khi xảy ra mất gói hoặc đạt tới ngưỡng ssthresh (slow start threshold). Sau đó sẽ chuyển sang giai đoạn Congestion Avoidance (tăng tuyến tính).',
    tip: 'Slow Start là khởi đầu nhỏ (từ 1 hoặc 10 MSS) nhưng tăng rất nhanh (cấp số nhân).'
  },
  {
    id: 'adv-tcp-advanced-014',
    level: 'advanced',
    topic: 'tcp-advanced',
    question: 'Phát biểu nào sau đây ĐÚNG về chức năng của TCP Selective Acknowledgment (SACK)?',
    options: {
      A: 'SACK cho phép receiver mã hóa bảo mật các gói ACK gửi về.',
      B: 'SACK giúp receiver từ chối các gói tin không mong muốn dựa trên Source IP.',
      C: 'SACK cho phép receiver báo cáo chính xác các khối dữ liệu bị thiếu hoặc đã nhận không liên tục, tránh phải gửi lại toàn bộ từ điểm mất.',
      D: 'SACK ưu tiên gửi ACK cho các ứng dụng quan trọng trước (QoS cho TCP).'
    },
    answer: 'C',
    explanation: 'Trong TCP truyền thống (Cumulative ACK), nếu gói 2 bị mất nhưng gói 3, 4 đã tới, receiver chỉ gửi ACK cho gói 1. Sender sẽ phải gửi lại toàn bộ từ gói 2. TCP SACK (Selective Acknowledgment) cho phép receiver thông báo các khối (blocks) dữ liệu đã nhận được thành công, giúp sender chỉ truyền lại chính xác các gói bị mất. Các đáp án A, B, D đưa ra các tính năng bảo mật hoặc QoS không liên quan đến cơ chế SACK.',
  },
  {
    id: 'adv-ipv6-015',
    level: 'advanced',
    topic: 'ipv6',
    question: 'Trong IPv6, loại địa chỉ nào được sử dụng tương đương với địa chỉ APIPA (169.254.x.x) trong IPv4 để liên lạc trong phạm vi một phân đoạn mạng nội bộ duy nhất?',
    options: {
      A: 'Unique Local Address (ULA)',
      B: 'Link-Local Address',
      C: 'Global Unicast Address',
      D: 'Anycast Address'
    },
    answer: 'B',
    explanation: 'Địa chỉ Link-Local (bắt đầu bằng FE80::/10) được sử dụng để liên lạc giữa các thiết bị trên cùng một liên kết mạng vật lý (LAN segment) mà không cần qua router. Nó tương đương với tính năng APIPA trong IPv4 nhưng ở IPv6 nó là bắt buộc và tự động tạo trên mọi giao diện. Unique Local Address (ULA) dùng cho định tuyến nội bộ doanh nghiệp (giống Private IP IPv4). Global Unicast là IP công cộng. Anycast để trỏ đến thiết bị gần nhất.',
    tip: 'Link-Local luôn bắt đầu bằng FE80. ULA bắt đầu bằng FC00 hoặc FD00.'
  },
  {
    id: 'adv-ipv6-016',
    level: 'advanced',
    topic: 'ipv6',
    question: 'Giao thức Neighbor Discovery Protocol (NDP) của IPv6 sử dụng loại thông điệp ICMPv6 nào để tìm địa chỉ MAC của thiết bị khác trên cùng mạng (tương đương với ARP Request trong IPv4)?',
    options: {
      A: 'Router Solicitation (RS)',
      B: 'Router Advertisement (RA)',
      C: 'Neighbor Solicitation (NS)',
      D: 'Neighbor Advertisement (NA)'
    },
    answer: 'C',
    explanation: 'Trong IPv6, NDP thay thế cho ARP. Để tìm MAC (Link-Layer Address), thiết bị sẽ gửi một thông điệp Neighbor Solicitation (NS - ICMPv6 Type 135) đến địa chỉ Solicited-Node Multicast của thiết bị đích. Đích sẽ phản hồi bằng Neighbor Advertisement (NA - Type 136). RS và RA được dùng để tự động cấu hình địa chỉ SLAAC và tìm kiếm router mặc định.',
  },
  {
    id: 'adv-ipv6-017',
    level: 'advanced',
    topic: 'ipv6',
    question: 'Cấu trúc của IPv6 Header khác biệt căn bản so với IPv4 Header ở điểm nào dưới đây?',
    options: {
      A: 'IPv6 Header có kích thước biến đổi tùy theo độ dài tải trọng, không như IPv4 luôn là 20 bytes.',
      B: 'IPv6 có thêm trường Time to Live (TTL) hoạt động dựa trên miligiây thay vì số lượng hop.',
      C: 'IPv6 Header tích hợp thêm trường mã hóa IPsec mặc định bên trong header cơ bản.',
      D: 'IPv6 loại bỏ trường Checksum ở tầng IP, đẩy việc kiểm tra lỗi lên các giao thức tầng trên (TCP/UDP).'
    },
    answer: 'D',
    explanation: 'Để tăng tốc độ xử lý gói tin của router, IPv6 Header được thiết kế cố định 40 byte và đã loại bỏ hoàn toàn trường Header Checksum. Lỗi toàn vẹn dữ liệu giờ đây phụ thuộc vào tầng Data Link (FCS/CRC) và Checksum bắt buộc ở tầng Transport (TCP/UDPv6). A sai vì IPv6 Header cơ bản luôn cố định 40 byte. C sai vì IPsec dùng Extension Header. B sai vì TTL ở IPv4 được thay bằng Hop Limit ở IPv6, chức năng giữ nguyên tính theo hop.',
    tip: 'IPv6 Header: Đơn giản hơn, cố định 40 byte, không Checksum, không phân mảnh tại Router (Router Fragmentation).'
  },
  {
    id: 'adv-ipv6-018',
    level: 'advanced',
    topic: 'ipv6',
    question: 'Kỹ thuật NAT64 đóng vai trò gì trong quá trình chuyển đổi (transition) IPv4 sang IPv6?',
    options: {
      A: 'Gói gọn (Tunneling) gói tin IPv6 bên trong một payload IPv4 để đi qua mạng IPv4 cũ.',
      B: 'Dịch địa chỉ IP và giao thức để thiết bị chỉ dùng IPv6 có thể giao tiếp với server chỉ dùng IPv4.',
      C: 'Cung cấp cơ chế dự phòng (Dual-Stack) để thiết bị dùng song song cả hai giao thức.',
      D: 'Chuyển đổi một dải địa chỉ MAC 48-bit thành định dạng EUI-64 cho IPv6.'
    },
    answer: 'B',
    explanation: 'NAT64 là một cơ chế biên dịch trạng thái (stateful translation) cho phép các host mạng IPv6-only có thể truy cập các dịch vụ IPv4-only. Nó dịch gói tin IPv6 sang IPv4 và ngược lại, thường kết hợp với DNS64 (để tổng hợp các bản ghi AAAA từ bản ghi A). A mô tả cơ chế Tunneling (như 6to4, Teredo). C là cơ chế Dual-Stack. D là quy trình tự động sinh IP (SLAAC EUI-64).',
  },
  {
    id: 'adv-ipv6-019',
    level: 'advanced',
    topic: 'ipv6',
    question: 'Tình huống: Một máy tính được cấp IPv6 thông qua SLAAC. Làm thế nào máy tính có thể biết được địa chỉ DNS Server để phân giải tên miền?',
    options: {
      A: 'Máy tính lấy DNS trực tiếp từ 64 bit cuối của địa chỉ MAC.',
      B: 'SLAAC tự động kết nối qua giao thức ARPv6 để hỏi DNS.',
      C: 'Bằng cách sử dụng tính năng RDNSS trong thông điệp Router Advertisement hoặc DHCPv6 Stateless.',
      D: 'SLAAC mặc định gán DNS IPv6 toàn cầu của Google (2001:4860:4860::8888).'
    },
    answer: 'C',
    explanation: 'Theo chuẩn gốc, SLAAC chỉ cung cấp Prefix mạng, Prefix length và Default Gateway. Để có thông tin DNS, thiết bị dùng SLAAC phải lấy qua DHCPv6 Stateless (cấu hình cờ O trong RA = 1), hoặc sử dụng tính năng RDNSS (Recursive DNS Server) theo chuẩn RFC 8106, cho phép nhúng trực tiếp địa chỉ DNS vào thông điệp ICMPv6 Router Advertisement (RA).',
  },
  {
    id: 'adv-ipv6-020',
    level: 'advanced',
    topic: 'ipv6',
    question: 'Trong IPv6, loại địa chỉ Anycast có đặc điểm kỹ thuật nào đáng chú ý nhất?',
    options: {
      A: 'Nó sử dụng một dải prefix hoàn toàn riêng biệt (FF00::/8) để phân biệt với Unicast.',
      B: 'Địa chỉ Anycast không thể được sử dụng bởi các máy chủ DNS gốc (Root DNS Servers).',
      C: 'Nó bắt buộc thiết bị gửi phải phát tán gói tin đến toàn bộ các node có chung địa chỉ Anycast.',
      D: 'Một địa chỉ Anycast được gán cho nhiều giao diện; gói tin gửi đến đó sẽ được định tuyến đến giao diện "gần nhất" theo giao thức định tuyến.'
    },
    answer: 'D',
    explanation: 'Địa chỉ Anycast trong IPv6 (và cả IPv4) được cấp cho nhiều thiết bị khác nhau. Các router sẽ định tuyến gói tin gửi tới địa chỉ Anycast đến node có khoảng cách định tuyến gần nhất. Về mặt cú pháp, IP Anycast không khác biệt so với Unicast thông thường (không có dải prefix riêng biệt như Multicast FF00::/8). C mô tả Multicast. B sai vì Anycast đang là xương sống cho hệ thống Root DNS và CDN trên thế giới.',
  },
  {
    id: 'adv-ipv6-021',
    level: 'advanced',
    topic: 'ipv6',
    question: 'Cơ chế EUI-64 sinh ra 64-bit Interface ID của một địa chỉ IPv6 bằng cách nào?',
    options: {
      A: 'Lấy trực tiếp 48-bit địa chỉ MAC, sau đó thêm ngẫu nhiên 16-bit vào cuối.',
      B: 'Chèn chuỗi `FF:FE` vào giữa 48-bit địa chỉ MAC và đảo ngược bit thứ 7 (Universal/Local bit).',
      C: 'Sử dụng thuật toán băm SHA-1 lên địa chỉ MAC để tạo ra 64-bit an toàn hơn.',
      D: 'Yêu cầu DHCPv6 cấp phát 64-bit cuối cùng sau khi router cung cấp 64-bit đầu.'
    },
    answer: 'B',
    explanation: 'Trong quy trình SLAAC EUI-64, Interface ID 64-bit được tạo bằng cách lấy địa chỉ MAC 48-bit của thiết bị, tách làm hai nửa 24-bit. Chèn chuỗi Hex 16-bit là `FFFE` vào giữa. Sau đó, lật bit thứ 7 của byte đầu tiên (đếm từ trái sang, bit U/L) từ 0 thành 1 (hoặc ngược lại) để chỉ ra rằng địa chỉ này là duy nhất toàn cầu (Universal). Các phương án khác không mô tả đúng thuật toán EUI-64.',
    tip: 'Nhớ từ khóa EUI-64: Chèn FFFE vào giữa MAC, lật bit thứ 7.'
  },
  {
    id: 'adv-vpn-ipsec-022',
    level: 'advanced',
    topic: 'vpn-ipsec',
    question: 'Sự khác biệt cốt lõi giữa hai chế độ Transport Mode và Tunnel Mode trong IPsec là gì?',
    options: {
      A: 'Transport Mode sử dụng giao thức AH, trong khi Tunnel Mode sử dụng ESP.',
      B: 'Transport Mode mã hóa toàn bộ gói tin IP ban đầu, trong khi Tunnel Mode chỉ mã hóa phần payload (TCP/UDP).',
      C: 'Transport Mode chỉ mã hóa payload và giữ nguyên IP Header gốc, trong khi Tunnel Mode bọc toàn bộ gói tin IP gốc vào một IP Header mới.',
      D: 'Transport Mode chỉ dùng trong mạng LAN, còn Tunnel Mode bắt buộc dùng chuẩn kết nối SSL/TLS qua Internet.'
    },
    answer: 'C',
    explanation: 'Trong Transport mode (thường dùng host-to-host), IPsec chỉ bảo vệ phần dữ liệu (payload của tầng giao vận) và giữ nguyên IP header gốc, do đó không che giấu địa chỉ nguồn/đích thực sự. Trong Tunnel mode (dùng cho site-to-site VPN), toàn bộ gói IP ban đầu được mã hóa và đóng gói vào một IP header mới (của các router VPN), giúp che giấu cấu trúc mạng nội bộ. Cả hai mode đều có thể dùng AH hoặc ESP.',
  },
  {
    id: 'adv-vpn-ipsec-023',
    level: 'advanced',
    topic: 'vpn-ipsec',
    question: 'Giao thức IKE (Internet Key Exchange) trong IPsec có chức năng thiết lập các Security Associations (SA). Trong IKEv1 Phase 1, hai chế độ đàm phán chính là gì và đặc điểm của chúng?',
    options: {
      A: 'Main mode (bảo vệ danh tính peers nhưng chậm do qua 6 thông điệp) và Aggressive mode (nhanh hơn qua 3 thông điệp nhưng danh tính không được mã hóa).',
      B: 'Transport mode (nhanh) và Tunnel mode (chậm).',
      C: 'Diffie-Hellman mode (trao đổi khóa) và RSA mode (xác thực chữ ký).',
      D: 'Quick mode (thiết lập IPsec SA) và Informational mode (gửi lỗi).'
    },
    answer: 'A',
    explanation: 'IKEv1 Phase 1 dùng để thiết lập IKE SA (kênh an toàn để đàm phán tiếp). Main Mode sử dụng 6 thông điệp, danh tính của thiết bị (ID) được mã hóa trong các thông điệp cuối. Aggressive Mode chỉ sử dụng 3 thông điệp để thiết lập nhanh, nhưng thông tin danh tính (ID) truyền dưới dạng bản rõ (cleartext), dễ bị tấn công đánh hơi. D là đàm phán thuộc Phase 2 của IKEv1.',
  },
  {
    id: 'adv-vpn-ipsec-024',
    level: 'advanced',
    topic: 'vpn-ipsec',
    question: 'Trong kiến trúc IPsec, tại sao AH (Authentication Header) lại gặp vấn đề tương thích nghiêm trọng khi phải đi qua một bộ định tuyến thực hiện tính năng NAT?',
    options: {
      A: 'AH mã hóa TCP Header, làm cho bộ định tuyến NAT không thể đọc được Port nguồn/đích.',
      B: 'NAT yêu cầu các gói tin AH phải mở một cổng UDP ngẫu nhiên, gây ra lỗi tường lửa.',
      C: 'AH sử dụng thuật toán ESP nên bị các thiết bị NAT chặn theo mặc định.',
      D: 'NAT thay đổi địa chỉ IP Header, điều này làm hỏng chữ ký băm (Hash MAC) của AH vốn bảo vệ cả các trường thay đổi được trong IP Header gốc.'
    },
    answer: 'D',
    explanation: 'Giao thức AH cung cấp xác thực và tính toàn vẹn cho dữ liệu LẪN một số trường trong IP header ban đầu (như Source và Dest IP). Khi gói tin đi qua thiết bị NAT, địa chỉ IP hoặc Port bị thay đổi. Máy nhận sẽ tính toán lại mã hash và thấy không khớp với chữ ký của AH, dẫn đến việc gói tin bị loại bỏ. ESP khắc phục điều này bằng cách không bảo vệ IP header bên ngoài và có cơ chế NAT-Traversal (đóng gói qua UDP 4500).',
    tip: 'AH = Lỗi NAT. Muốn qua NAT phải dùng ESP kết hợp NAT-Traversal (UDP port 4500).'
  },
  {
    id: 'adv-vpn-ipsec-025',
    level: 'advanced',
    topic: 'vpn-ipsec',
    question: 'Tình huống: Một doanh nghiệp cấu hình đường hầm GRE (Generic Routing Encapsulation) qua Internet. Tuy nhiên, họ nhận ra GRE không mã hóa dữ liệu. Giải pháp tiêu chuẩn để bảo mật GRE là gì?',
    options: {
      A: 'Bọc gói tin GRE bên trong IPsec Transport Mode (GRE over IPsec).',
      B: 'Thay thế hoàn toàn GRE bằng OpenVPN vì GRE không tương thích với IPsec.',
      C: 'Kích hoạt cờ Encryption trong GRE Header để bật mã hóa AES-256.',
      D: 'Sử dụng cấu trúc MPLS thay cho GRE để mã hóa dữ liệu Layer 2.'
    },
    answer: 'A',
    explanation: 'GRE là giao thức tunneling rất linh hoạt (hỗ trợ định tuyến multicast, nhiều giao thức), nhưng không có cơ chế bảo mật/mã hóa nội tại. Để giải quyết, người ta kết hợp GRE với IPsec (gọi là GRE over IPsec). IPsec sẽ cung cấp mã hóa (ESP), còn GRE xử lý đóng gói và định tuyến. Thường IPsec sẽ được dùng ở Transport Mode để tiết kiệm kích thước header (vì GRE đã bọc IP header ban đầu rồi). C sai vì GRE không hỗ trợ mã hóa. D MPLS không mặc định mã hóa.',
  },
  {
    id: 'adv-vpn-ipsec-026',
    level: 'advanced',
    topic: 'vpn-ipsec',
    question: 'Trong công nghệ MPLS VPN, thành phần nào chịu trách nhiệm lưu trữ bảng định tuyến độc lập (VRF) và cách ly giao thông của các khách hàng (Customer) khác nhau?',
    options: {
      A: 'CE (Customer Edge) router',
      B: 'P (Provider core) router',
      C: 'PE (Provider Edge) router',
      D: 'Route Reflector'
    },
    answer: 'C',
    explanation: 'Trong kiến trúc MPLS L3 VPN, PE (Provider Edge) router là nơi trực tiếp cấu hình các VRF (Virtual Routing and Forwarding). PE duy trì nhiều bảng định tuyến ảo, phân cách hoàn toàn mạng của các khách hàng khác nhau dù có trùng lặp không gian IP. CE (Customer Edge) chỉ là router phía khách hàng, thường không biết đến MPLS. P router (nằm trong lõi mạng ISP) chỉ chuyển tiếp dựa trên nhãn (Label) và hoàn toàn không chứa thông tin định tuyến VPN khách hàng.',
  },
  {
    id: 'adv-vpn-ipsec-027',
    level: 'advanced',
    topic: 'vpn-ipsec',
    question: 'So với IPsec VPN, đặc điểm nổi bật khiến SSL/TLS VPN (như OpenVPN, AnyConnect) trở nên thuận tiện hơn cho người dùng cuối truy cập từ xa (Remote Access) là gì?',
    options: {
      A: 'SSL VPN cung cấp khả năng đóng gói ở Tầng 2 (Data Link), hỗ trợ truyền tải BPDU của Spanning Tree.',
      B: 'SSL VPN thường hoạt động qua cổng TCP 443, dễ dàng vượt qua hầu hết các tường lửa và NAT mà không cần cấu hình đặc biệt.',
      C: 'SSL VPN có tốc độ mã hóa dữ liệu nhanh gấp đôi so với IPsec do dùng thuật toán đối xứng DES.',
      D: 'SSL VPN tích hợp sẵn giao thức định tuyến BGP, giúp chia sẻ route tự động cho Client.'
    },
    answer: 'B',
    explanation: 'IPsec Remote Access VPN thường gặp khó khăn với các tường lửa nhà mạng, NAT, vì nó sử dụng các giao thức IKE (UDP 500), ESP (IP Protocol 50), NAT-T (UDP 4500) đôi khi bị chặn. SSL/TLS VPN hoạt động dựa trên TLS/TCP (hoặc DTLS qua UDP), giả lập giống như truy cập web HTTPS (Cổng 443). Điều này giúp SSL VPN đi qua hầu hết mọi mạng (công cộng, quán cafe, khách sạn) mà ít khi bị tường lửa cản lại.',
  },
  {
    id: 'adv-vpn-ipsec-028',
    level: 'advanced',
    topic: 'vpn-ipsec',
    question: 'Hoạt động Perfect Forward Secrecy (PFS) trong IPsec có ý nghĩa bảo mật gì?',
    options: {
      A: 'Ngăn chặn hacker đọc được dữ liệu quá khứ nếu trong tương lai khóa tĩnh (pre-shared key) bị lộ.',
      B: 'Loại bỏ hoàn toàn giai đoạn xác thực IKE, làm VPN kết nối lập tức.',
      C: 'Tăng kích thước MTU của kết nối lên tối đa để ngăn phân mảnh.',
      D: 'Sử dụng chung một khóa đối xứng cho mọi kết nối Phase 2 nhằm giảm tải CPU.'
    },
    answer: 'A',
    explanation: 'Perfect Forward Secrecy (PFS) đảm bảo rằng việc sinh ra các khóa đàm phán mã hóa ở Phase 2 độc lập hoàn toàn với Phase 1 (bắt buộc thực hiện Diffie-Hellman trao đổi khóa lại). Nếu kẻ tấn công thu thập toàn bộ dữ liệu mã hóa hiện tại và sau này trộm được Private Key/Pre-shared Key dài hạn, chúng cũng KHÔNG thể giải mã ngược lại các dữ liệu đã truyền trong quá khứ.',
    tip: 'PFS = Khóa mới sinh ra không bắt nguồn từ khóa cũ. Khóa tĩnh bị lộ, dữ liệu cũ vẫn an toàn.'
  },
  {
    id: 'adv-firewall-acl-029',
    level: 'advanced',
    topic: 'firewall',
    question: 'Điều gì là hạn chế lớn nhất của Tường lửa phi trạng thái (Stateless Firewall) khi cấu hình cho phép các kết nối Web (HTTP) nội bộ ra ngoài Internet?',
    options: {
      A: 'Nó không thể chặn các cuộc tấn công DDoS ở tầng ứng dụng.',
      B: 'Tốc độ xử lý của nó chậm hơn Stateful Firewall vì phải mở file cấu hình cho mỗi gói tin.',
      C: 'Nó chỉ có thể kiểm tra địa chỉ MAC, không thể lọc IP.',
      D: 'Người quản trị phải mở vĩnh viễn các cổng High Ports (từ 1024-65535) chiều Inbound để nhận gói tin phản hồi, gây ra rủi ro bảo mật lớn.'
    },
    answer: 'D',
    explanation: 'Stateless firewall (như Standard/Extended ACL cơ bản) xử lý từng gói tin độc lập và không nhớ trạng thái kết nối. Khi máy nội bộ (cổng ngẫu nhiên >1024) gửi request ra web server (cổng 80). Web server sẽ phản hồi từ cổng 80 về cổng ngẫu nhiên đó. Để phản hồi đi qua, người quản trị bắt buộc phải mở Inbound cho mọi cổng > 1024, tạo lỗ hổng cho hacker xâm nhập. Stateful Firewall giải quyết bằng cách tự động mở "lỗ" động cho gói tin phản hồi.',
  },
  {
    id: 'adv-firewall-acl-030',
    level: 'advanced',
    topic: 'firewall',
    question: 'Trong kiến trúc tường lửa, Application Layer Gateway (ALG) đóng vai trò quan trọng trong việc hỗ trợ giao thức nào sau đây đi qua NAT và Tường lửa trạng thái một cách trơn tru?',
    options: {
      A: 'HTTP / HTTPS',
      B: 'SSH / Telnet',
      C: 'FTP Active mode / SIP (VoIP)',
      D: 'ICMP / IGMP'
    },
    answer: 'C',
    explanation: 'Nhiều giao thức phức tạp như Active FTP hoặc SIP thương lượng việc mở các cổng ngẫu nhiên cho kênh truyền dữ liệu/âm thanh bằng cách truyền số Port bên trong "Payload" (Tầng 7) của gói tin. NAT/Firewall thông thường chỉ xem Tầng 3/4 nên không biết cổng ngẫu nhiên nào sẽ được dùng, dẫn đến chặn dữ liệu. ALG (Application Layer Gateway) đọc sâu vào tầng ứng dụng, hiểu giao thức, sửa địa chỉ IP trong payload và tự động mở các cổng cần thiết trên tường lửa.',
  },
  {
    id: 'adv-firewall-acl-031',
    level: 'advanced',
    topic: 'firewall',
    question: 'Tình huống: Bạn áp dụng một Extended ACL tại interface Gi0/0 hướng Inbound để chặn một IP xấu. Gói tin từ IP xấu đi tới Gi0/0 để vào Router nội bộ. Tại sao gói tin vẫn đi qua được?',
    options: {
      A: 'Vì Extended ACL chỉ hoạt động ở Outbound, không có tác dụng với Inbound.',
      B: 'Vì ACL thiếu một câu lệnh `permit ip any any` ở cuối nên bị lỗi xử lý.',
      C: 'Vì gói tin được mã hóa bằng IPsec nên ACL không thể đọc được IP nguồn.',
      D: 'Vì IP đích trong gói tin hướng tới một dịch vụ quản lý trên chính Router (Control Plane), mà ACL trên Interface thường không áp dụng trực tiếp lên giao thông sinh ra/gửi tới chính Router nếu không dùng tính năng Control Plane Policing.'
    },
    answer: 'D',
    explanation: 'Trong nhiều thiết bị mạng (như Cisco), một ACL áp dụng theo hướng "in" trên interface trung chuyển dữ liệu (Data Plane traffic) qua các cổng. Tuy nhiên đối với giao thông đi trực tiếp ĐẾN thiết bị (như Telnet/SSH/Routing vào chính Router - Control Plane traffic), đôi khi ACL trên interface trung chuyển bị bypass, hoặc cần cấu hình ACL riêng biệt gán vào dòng VTY, hoặc sử dụng Control Plane Policing (CoPP). Các phương án A, B, C đều có điểm sai kiến thức cơ bản.',
  },
  {
    id: 'adv-firewall-acl-032',
    level: 'advanced',
    topic: 'firewall',
    question: 'Sự khác biệt giữa Ingress Filtering và Egress Filtering trên Tường lửa / Router biên là gì, và kỹ thuật nào chủ yếu để chống giả mạo IP nguồn (IP Spoofing)?',
    options: {
      A: 'Ingress chặn traffic từ ngoài vào; Egress chặn traffic từ trong ra. Ingress Filtering kết hợp với kỹ thuật uRPF chống giả mạo IP nguồn.',
      B: 'Ingress lọc tầng 3; Egress lọc tầng 7. Cả hai không liên quan đến chống giả mạo.',
      C: 'Ingress lọc traffic nội bộ; Egress lọc kết nối VPN. Egress chống giả mạo bằng cách ghi đè MAC.',
      D: 'Ingress dùng cho DMZ; Egress dùng cho LAN. Egress chống giả mạo.'
    },
    answer: 'A',
    explanation: 'Ingress filtering là lọc các gói tin từ Internet/mạng ngoài đi VÀO mạng nội bộ. Egress filtering kiểm soát gói tin từ mạng nội bộ đi RA ngoài. Để chống giả mạo (IP Spoofing) và tấn công DDoS phản xạ (như Smurf), Ingress Filtering thường kiểm tra xem IP nguồn có phải là mạng LAN nội bộ (rất vô lý) hoặc IP Bogon. Kỹ thuật Unicast Reverse Path Forwarding (uRPF) tự động kiểm tra bảng định tuyến cho chiều Ingress để ngăn giả mạo.',
  },
  {
    id: 'adv-firewall-acl-033',
    level: 'advanced',
    topic: 'firewall',
    question: 'Cấu trúc mạng DMZ (Demilitarized Zone) tiêu chuẩn với 2 tường lửa (Dual Firewall Architecture) thường được thiết lập như thế nào?',
    options: {
      A: 'Một tường lửa đặt song song với Router biên, tường lửa còn lại đặt giữa LAN và DMZ.',
      B: 'Tường lửa Front-end ngăn cách Internet với DMZ; Tường lửa Back-end ngăn cách DMZ với mạng nội bộ LAN.',
      C: 'Cả hai tường lửa hoạt động ở chế độ High Availability chắn giữa Internet và LAN, DMZ nằm sau Switch Core.',
      D: 'Tường lửa L3 chắn bên ngoài, Tường lửa L2 chặn bên trong nội bộ LAN.'
    },
    answer: 'B',
    explanation: 'Kiến trúc Dual Firewall DMZ cực kỳ phổ biến để cách ly an toàn. Tường lửa bên ngoài (Front-end) nối với Internet, cho phép traffic web/mail đi vào vùng DMZ. Vùng DMZ chứa các public servers. Tường lửa bên trong (Back-end) ngăn cách DMZ và LAN nội bộ. Nó cấm (hoặc hạn chế cực kỳ nghiêm ngặt) mọi kết nối được khởi tạo từ DMZ xâm nhập vào LAN. Việc sử dụng hai Tường lửa từ hai hãng khác nhau càng tăng cường an ninh.',
  },
  {
    id: 'adv-firewall-acl-034',
    level: 'advanced',
    topic: 'firewall',
    question: 'Khi phân tích một rule trên Tường lửa (Firewall Policy), khái niệm "Shadowing Rule" có nghĩa là gì?',
    options: {
      A: 'Là rule sao lưu tự động chạy khi Tường lửa chính gặp sự cố (HA).',
      B: 'Là rule chuyển tiếp luồng dữ liệu sang một thiết bị IDS để phân tích.',
      C: 'Là rule bí mật do mã độc (rootkit) cài vào mà quản trị viên không thể nhìn thấy.',
      D: 'Là một rule tổng quát (rộng hơn) được đặt TRÊN một rule chi tiết, khiến rule chi tiết bên dưới không bao giờ được thực thi.'
    },
    answer: 'D',
    explanation: 'Trên Firewall và ACL, thứ tự các luật được xử lý từ trên xuống dưới (Top-Down). Nếu một rule khái quát (ví dụ: `Permit IP any any`) nằm trên một rule cụ thể (ví dụ: `Deny IP 192.168.1.0 to 10.0.0.0`), gói tin sẽ khớp rule trên và bị bỏ qua rule dưới. Hiện tượng rule dưới bị vô hiệu hóa hoàn toàn bởi rule trên được gọi là "Rule Shadowing". Quản trị viên cần sắp xếp rule từ cụ thể nhất (specific) xuống tổng quát nhất (general).',
    tip: 'Luôn nhớ: Rule xử lý theo thứ tự Top-Down, Khớp là dừng (First Match). Cụ thể lên đầu, tổng quát xuống đáy.'
  },
  {
    id: 'adv-firewall-acl-035',
    level: 'advanced',
    topic: 'firewall',
    question: 'Khái niệm UTM (Unified Threat Management) Firewall khác với Tường lửa kiểm tra trạng thái (Stateful Firewall) truyền thống ở điểm chính nào?',
    options: {
      A: 'UTM chỉ kiểm tra được địa chỉ IP và Port, không có khả năng theo dõi kết nối TCP.',
      B: 'UTM tích hợp nhiều tính năng an ninh Tầng 7 (như IDS/IPS, Anti-Virus, Web Filtering) trên cùng một thiết bị.',
      C: 'UTM không cần cấu hình, sử dụng trí tuệ nhân tạo để tự động quản lý mạng LAN.',
      D: 'UTM chỉ dành riêng cho môi trường ảo hóa đám mây (Cloud), không có thiết bị phần cứng.'
    },
    answer: 'B',
    explanation: 'Stateful Firewall (Tường lửa trạng thái) chỉ theo dõi vòng đời kết nối của Layer 3/Layer 4 (IP, Port, TCP Flag). UTM Firewall (hay Tường lửa thế hệ mới - NGFW) có khả năng kiểm tra sâu gói tin ở Tầng 7 (DPI), tích hợp Hệ thống ngăn chặn xâm nhập (IPS), quét virus, lọc URL, quản lý ứng dụng, chống thư rác... tất cả trong một thiết bị (Unified).',
  },
  {
    id: 'adv-network-security-036',
    level: 'advanced',
    topic: 'network-security',
    question: 'Tấn công ARP Spoofing/Poisoning lợi dụng điểm yếu cốt lõi nào của giao thức ARP?',
    options: {
      A: 'ARP không yêu cầu mã hóa gói tin, khiến bất kỳ ai cũng có thể đọc nội dung ở Tầng 3.',
      B: 'Giao thức ARP mặc định thiếu cơ chế xác thực. Một thiết bị sẽ tự động cập nhật bảng ARP của nó kể cả khi nhận được gói tin phản hồi (ARP Reply) không mong muốn (Gratuitous).',
      C: 'ARP sử dụng phát sóng Multicast thay vì Broadcast, gây tràn bộ nhớ đệm MAC.',
      D: 'ARP dựa dẫm vào máy chủ DNS để phân giải tên thành địa chỉ MAC.'
    },
    answer: 'B',
    explanation: 'Giao thức ARP (Address Resolution Protocol) được thiết kế từ thời kỳ đầu không có tư duy bảo mật (Trust-by-default). Khi một thiết bị nhận được một gói ARP Reply, nó lập tức cập nhật bảng ARP cache của mình mà không cần xác thực xem gói đó đến từ đâu, hoặc nó có từng gửi ARP Request hay không. Kẻ tấn công (Attacker) liên tục gửi giả mạo các ARP Reply, tuyên bố địa chỉ MAC của hắn là của Default Gateway để thực hiện tấn công Man-In-The-Middle.',
    tip: 'Để ngăn chặn ARP Spoofing, cần sử dụng tính năng Dynamic ARP Inspection (DAI) kết hợp DHCP Snooping trên Switch.'
  },
  {
    id: 'adv-network-security-037',
    level: 'advanced',
    topic: 'network-security',
    question: 'Cơ chế 802.1X hoạt động với 3 thành phần chính: Supplicant, Authenticator và Authentication Server. Thiết bị Switch đóng vai trò gì và giao thức nào được dùng để giao tiếp với Authentication Server?',
    options: {
      A: 'Switch là Supplicant, dùng giao thức EAPoL để nói chuyện với RADIUS server.',
      B: 'Switch là Supplicant, dùng giao thức LDAP nói chuyện với Active Directory.',
      C: 'Switch là Authentication Server, tự chứa cơ sở dữ liệu và xử lý trực tiếp.',
      D: 'Switch là Authenticator, dùng giao thức RADIUS (chứa bản tin EAP) để giao tiếp với Server (như ISE/ACS).'
    },
    answer: 'D',
    explanation: 'Trong chuẩn IEEE 802.1X (Port-based Network Access Control). Máy khách PC muốn truy cập mạng là Supplicant. Switch là cổng gác (Authenticator). Switch không trực tiếp xác thực mà chuyển tiếp thông điệp EAP từ Supplicant (qua EAPoL) và đóng gói vào giao thức RADIUS gửi lên Authentication Server (ví dụ Cisco ISE, Microsoft NPS). Khi Server trả về Accept, Switch mới mở port mạng.',
  },
  {
    id: 'adv-network-security-038',
    level: 'advanced',
    topic: 'network-security',
    question: 'Một cuộc tấn công DDoS sử dụng kỹ thuật DNS Amplification (Khuếch đại DNS) hoạt động theo nguyên lý nào?',
    options: {
      A: 'Gửi vô số truy vấn từ hàng triệu máy Botnet trực tiếp đến máy chủ đích, làm sập dịch vụ DNS của đích.',
      B: 'Kẻ tấn công lây nhiễm mã độc vào máy chủ DNS gốc (Root DNS), định tuyến sai toàn bộ traffic Internet.',
      C: 'Kẻ tấn công giả mạo (Spoof) IP nguồn là IP của nạn nhân, gửi truy vấn kích thước nhỏ tới các máy chủ Open DNS. Các máy chủ DNS này sẽ gửi gói tin phản hồi kích thước rất lớn dội vào mục tiêu (nạn nhân).',
      D: 'Kẻ tấn công vét cạn bảng trạng thái tường lửa bằng cách gửi gói tin DNS kèm cờ SYN liên tục.'
    },
    answer: 'C',
    explanation: 'DNS Amplification là dạng tấn công DDoS kiểu Phản xạ/Khuếch đại (Reflection/Amplification) thường dùng UDP. Attacker giả mạo IP nguồn là IP của nạn nhân (IP Spoofing) gửi truy vấn lệnh "ANY" cực ngắn (VD: 60 bytes) đến một DNS Resolver cấu hình lỏng lẻo. DNS server trả về kết quả truy vấn đầy đủ với kích thước có thể lên tới 4000 bytes (Khuếch đại ~70 lần). Lưu lượng khổng lồ này đập trực tiếp vào IP nạn nhân gây nghẽn mạng nghiêm trọng.',
  },
  {
    id: 'adv-network-security-039',
    level: 'advanced',
    topic: 'network-security',
    question: 'Tấn công SYN Flood là một loại tấn công cạn kiệt tài nguyên ở tầng Giao vận. Giải pháp kỹ thuật phổ biến nhất được triển khai trên Tường lửa/Router để đối phó với nó mà KHÔNG làm gián đoạn người dùng hợp pháp là gì?',
    options: {
      A: 'Chặn hoàn toàn các gói tin TCP mang cờ SYN.',
      B: 'Sử dụng SYN Cookies.',
      C: 'Tăng băng thông kết nối Internet lên mức tối đa.',
      D: 'Giảm thời gian TTL trong IP header của mọi gói tin gửi tới Server.'
    },
    answer: 'B',
    explanation: 'SYN Flood lợi dụng cơ chế TCP 3-way handshake, gửi SYN nhưng không bao giờ gửi ACK cuối cùng, khiến server cạn kiệt bộ nhớ duy trì "Half-open connections". SYN Cookies là kỹ thuật đối phó: Khi nhận SYN, Server/Firewall không phân bổ ngay tài nguyên bộ nhớ. Thay vào đó, nó tính toán mã hóa thông tin kết nối và giấu vào giá trị Initial Sequence Number (ISN) gửi trong gói SYN-ACK. Chỉ khi Client hợp pháp gửi lại ACK chứa dữ liệu đó, hệ thống mới chính thức tạo session bộ nhớ.',
  },
  {
    id: 'adv-network-security-040',
    level: 'advanced',
    topic: 'network-security',
    question: 'Kỹ thuật tấn công MITM (Man-in-the-Middle) SSL Stripping thao túng giao thông web như thế nào?',
    options: {
      A: 'Hacker bẻ khóa trực tiếp thuật toán RSA 2048-bit để đọc dữ liệu HTTPS.',
      B: 'Hacker giả mạo chứng chỉ số CA gốc trên máy tính nạn nhân.',
      C: 'Hacker can thiệp vào luồng dữ liệu, hạ cấp kết nối từ HTTPS xuống HTTP gốc, làm nạn nhân gửi thông tin dạng bản rõ.',
      D: 'Hacker gửi mã độc qua HTTP để thay đổi địa chỉ IP DNS của Server.'
    },
    answer: 'C',
    explanation: 'SSL Stripping (do Moxie Marlinspike giới thiệu) là một cuộc tấn công rất tinh vi. Hacker đứng giữa (qua ARP Spoofing). Khi nạn nhân truy cập một trang web không gõ hẳn "https://" (hoặc bấm link HTTP), hacker chặn kết nối này. Hacker tự thiết lập HTTPS với web server thay mặt nạn nhân, nhưng lại trả về nạn nhân bản web dạng HTTP không mã hóa (chặn lệnh chuyển hướng HTTPS). Nạn nhân tưởng an toàn sẽ gõ mật khẩu. Biện pháp phòng chống hiệu quả nhất là HSTS (HTTP Strict Transport Security).',
  },
  {
    id: 'adv-network-security-041',
    level: 'advanced',
    topic: 'network-security',
    question: 'Kỹ thuật quét cổng "TCP SYN Stealth Scan" (Half-open scan) thường được hacker sử dụng nhằm mục đích gì thay vì quét TCP Connect thông thường?',
    options: {
      A: 'Quét toàn bộ cổng nhanh hơn 100 lần so với Connect thông thường.',
      B: 'Lấy trực tiếp cơ sở dữ liệu mà không cần xác thực người dùng.',
      C: 'Để vượt qua hoàn toàn mọi Tường lửa kiểm tra trạng thái.',
      D: 'Để tránh bị ghi lại (log) trên ứng dụng đích, do kết nối TCP ba bước (3-way handshake) không bao giờ được hoàn thành.'
    },
    answer: 'D',
    explanation: 'Khi thực hiện TCP Connect Scan đầy đủ, hệ điều hành thực hiện hoàn tất 3 bước (SYN, SYN-ACK, ACK). Kết nối thành công, ứng dụng trên Server (VD: Apache, IIS) sẽ ghi log (Application logs). Với TCP SYN Scan (Nmap -sS), hacker gửi SYN, nhận SYN-ACK (biết cổng mở), sau đó lập tức gửi RST để phá bỏ kết nối trước khi hoàn tất. Ứng dụng đích thường không ghi log các kết nối nửa vời này, giúp hacker giấu hành tung.',
  },
  {
    id: 'adv-network-security-042',
    level: 'advanced',
    topic: 'network-security',
    question: 'Cơ chế BGP Flowspec (RFC 5575) trong quản lý mạng lõi (Core Network) chủ yếu cung cấp tính năng gì để hỗ trợ an ninh mạng?',
    options: {
      A: 'Phân phối các quy tắc lọc gói tin (Filtering/ACL/Rate limit) quy mô lớn và nhanh chóng qua giao thức BGP để ngăn chặn DDoS tức thì.',
      B: 'Tự động kiểm tra và khóa các tuyến BGP bị lỗi đường truyền.',
      C: 'Mã hóa hoàn toàn dữ liệu BGP payload trên Internet.',
      D: 'Cung cấp cơ chế dự phòng định tuyến đa luồng (Multi-path) tốc độ cao.'
    },
    answer: 'A',
    explanation: 'BGP Flowspec là một tính năng mạnh mẽ cho phép các nhà mạng truyền không chỉ thông tin định tuyến (IP prefix) mà cả các luồng quy tắc phân tích sâu (như Source IP, Dest Port, TCP flags...) và các hành động (như Rate-limit, Drop, Redirect) thông qua bản tin cập nhật BGP. Nó giúp triển khai các chính sách Mitigation DDoS siêu tốc đến tất cả các router vùng biên thay vì phải cấu hình ACL thủ công.',
  },
  {
    id: 'adv-http2-quic-043',
    level: 'advanced',
    topic: 'http2-quic',
    question: 'Trong HTTP/2, cơ chế "Multiplexing" (Đa hợp) giải quyết vấn đề Head-of-line (HOL) blocking ở mức độ nào?',
    options: {
      A: 'Giải quyết triệt để HOL blocking ở cả tầng Ứng dụng (HTTP) và tầng Giao vận (TCP).',
      B: 'Giải quyết HOL blocking ở tầng Ứng dụng (HTTP), nhưng vẫn chịu ảnh hưởng của HOL blocking ở tầng Giao vận (TCP).',
      C: 'Không giải quyết, tính năng này chỉ dùng để nén dữ liệu header.',
      D: 'Chỉ giải quyết khi kết hợp với Server Push.'
    },
    answer: 'B',
    explanation: 'HTTP/1.1 gặp vấn đề HOL blocking: request HTTP tiếp theo phải đợi request trước hoàn tất. HTTP/2 dùng Multiplexing cho phép gửi nhiều luồng (streams) request/response độc lập và không tuần tự trên CÙNG một kết nối TCP (giải quyết HTTP HOL blocking). Tuy nhiên, vì vẫn chạy trên nền TCP, nếu một gói TCP ở tầng giao vận bị mất, toàn bộ TCP connection sẽ phải tạm dừng để đợi truyền lại gói đó, gây tắc nghẽn toàn bộ luồng HTTP/2 bên trên (TCP HOL blocking). Đây là lý do HTTP/3 ra đời.',
  },
  {
    id: 'adv-http2-quic-044',
    level: 'advanced',
    topic: 'http2-quic',
    question: 'Giao thức QUIC (nền tảng của HTTP/3) chọn giao thức tầng giao vận nào để thay thế TCP, và tại sao lại chọn nó?',
    options: {
      A: 'SCTP, vì hỗ trợ multi-homing và luồng song song tốt hơn.',
      B: 'IPsec, để cung cấp mã hóa nhúng ở mức IP.',
      C: 'ICMP, để tận dụng tính năng định tuyến siêu tốc vượt qua tường lửa.',
      D: 'UDP, vì UDP cho phép triển khai các cơ chế kiểm soát tắc nghẽn và sửa lỗi tùy chỉnh ở không gian người dùng (user-space) mà không bị giới hạn bởi hạt nhân (Kernel) hệ điều hành hoặc thiết bị NAT cũ.'
    },
    answer: 'D',
    explanation: 'QUIC được xây dựng trên nền tảng UDP. TCP được tích hợp cứng vào nhân hệ điều hành (OS kernel) và các thiết bị phần cứng NAT/Middlebox Internet (TCP Ossification), khiến việc thay đổi/nâng cấp TCP cực kỳ khó và chậm chạp. Dùng UDP (rất đơn giản) cho phép các kỹ sư nhúng toàn bộ logic về kiểm soát mất gói, tắc nghẽn, mã hóa TLS 1.3 trực tiếp vào không gian ứng dụng (QUIC layer). Điều này giúp cải tiến QUIC diễn ra liên tục, vượt qua thiết bị trung gian.',
    tip: 'QUIC = UDP + Tính tin cậy của TCP + TLS 1.3 (Mã hóa nhanh).'
  },
  {
    id: 'adv-http2-quic-045',
    level: 'advanced',
    topic: 'http2-quic',
    question: 'Tính năng "0-RTT" (Zero Round Trip Time Resumption) trong QUIC / HTTP/3 mang lại lợi ích gì và có rủi ro bảo mật tiềm tàng nào?',
    options: {
      A: 'Cho phép truyền dữ liệu lớn vô hạn; Rủi ro là quá tải băng thông.',
      B: 'Cho phép bỏ qua kiểm tra chứng chỉ SSL; Rủi ro bị tấn công MITM.',
      C: 'Cho phép client gửi ngay dữ liệu ứng dụng ở chuyến bay (flight) đầu tiên nếu trước đó đã từng kết nối thành công; Rủi ro là tấn công gửi lại (Replay Attack).',
      D: 'Khôi phục kết nối khi đổi IP (Connection Migration); Rủi ro giả mạo IP.'
    },
    answer: 'C',
    explanation: 'Trong TCP/TLS truyền thống, cần nhiều RTT (bước) để Handshake, TLS key exchange trước khi truyền HTTP GET. QUIC kết hợp bắt tay TLS 1.3. Nếu client đã từng kết nối server trước đây, nó có thể dùng khóa chia sẻ lưu trữ tạm để mã hóa ngay dữ liệu (vd: HTTP GET) ở gói đầu tiên (0-RTT). Tuy nhiên, vì gói này có thể bị hacker chụp lại và gửi lại nhiều lần (Replay Attack), dữ liệu 0-RTT chỉ nên chứa các hành động an toàn (như GET, không phải POST chuyển tiền).',
  },
  {
    id: 'adv-http2-quic-046',
    level: 'advanced',
    topic: 'http2-quic',
    question: 'Công nghệ HPACK trong HTTP/2 dùng để nén các Header. Tại sao HTTP/2 không sử dụng thuật toán nén thông thường như GZIP cho Header?',
    options: {
      A: 'GZIP quá chậm đối với thiết bị di động.',
      B: 'GZIP gặp lỗ hổng bảo mật nghiêm trọng (CRIME/BREACH attacks) khi nén kết hợp với mã hóa dữ liệu nhạy cảm có độ dài đoán trước được.',
      C: 'GZIP không thể chạy trên các cổng bảo mật 443.',
      D: 'Chuẩn quốc tế cấm dùng GZIP cho Header.'
    },
    answer: 'B',
    explanation: 'Các lỗ hổng bảo mật CRIME và BREACH đã chứng minh rằng: nếu sử dụng nén (như Gzip hoặc Deflate) lên phần dữ liệu có thể đoán được do hacker chèn vào cùng khối lượng với thông tin bí mật (như Session Cookie) trước khi mã hóa TLS, hacker có thể phân tích kích thước gói tin thay đổi để đoán ngược ra Cookie. HPACK được thiết kế chuyên biệt cho HTTP/2, sử dụng bảng tra cứu tĩnh và động (Static/Dynamic Tables) kết hợp mã hóa Huffman an toàn hơn thay vì nén cửa sổ trượt như GZIP.',
  },
  {
    id: 'adv-http2-quic-047',
    level: 'advanced',
    topic: 'http2-quic',
    question: 'Khái niệm Connection Migration (Di trú kết nối) trong HTTP/3 (QUIC) dựa trên cơ chế nào để giữ kết nối không bị đứt khi người dùng chuyển từ Wifi sang 4G?',
    options: {
      A: 'Sử dụng địa chỉ MAC thay vì địa chỉ IP.',
      B: 'Sử dụng giao thức định tuyến BGP di động.',
      C: 'Tự động gửi gói ARP quảng bá IP cũ lên mạng 4G mới.',
      D: 'QUIC dựa vào Connection ID (CID) dài 64-bit nằm trong Header UDP thay vì chỉ dựa vào bộ 4 tham số IP/Port của Tầng 4.'
    },
    answer: 'D',
    explanation: 'Với TCP, một kết nối được định danh bằng một tuple 4 thông số: (IP nguồn, Port nguồn, IP đích, Port đích). Nếu đổi từ Wifi (IP A) sang 4G (IP B), tuple bị vỡ, TCP connection đứt gãy. QUIC vượt qua giới hạn này bằng cách sử dụng một chuỗi định danh kết nối riêng biệt (Connection ID - CID). Dù IP nguồn thay đổi, server nhận thấy CID không đổi, vẫn xác thực đó là kết nối cũ và tiếp tục gửi luồng dữ liệu một cách mượt mà.',
  },
  {
    id: 'adv-http2-quic-048',
    level: 'advanced',
    topic: 'http2-quic',
    question: 'So sánh giữa WebSockets và gRPC (chạy trên HTTP/2), ưu thế nổi bật của gRPC là gì khi phát triển hệ thống Microservices hiện đại?',
    options: {
      A: 'gRPC sử dụng Protocol Buffers dạng nhị phân, định kiểu chặt chẽ, tối ưu về tốc độ/băng thông hơn JSON, và hỗ trợ streaming 2 chiều mặc định trên HTTP/2.',
      B: 'gRPC dễ tiếp cận hơn vì không yêu cầu HTTP/2, có thể chạy trên HTTP/1.0.',
      C: 'gRPC chỉ dùng để kết nối với cơ sở dữ liệu (Database), không dùng giữa các services.',
      D: 'WebSockets được thiết kế riêng cho backend-to-backend, còn gRPC thiết kế cho trình duyệt UI.'
    },
    answer: 'A',
    explanation: 'WebSockets rất linh hoạt nhưng dữ liệu thường là dạng văn bản thô (JSON/XML), không có cấu trúc cố định và phải tự viết khung xử lý. gRPC (do Google phát triển) tận dụng triệt để HTTP/2 (streaming, multiplexing) kết hợp Protocol Buffers (cơ chế tuần tự hóa nhị phân cực nhanh, contract-first). Dữ liệu gRPC nhẹ hơn, xử lý nhanh hơn, phù hợp để các dịch vụ Microservices (backend-to-backend) giao tiếp tốc độ cao. Trình duyệt UI lại gặp khó với gRPC gốc (phải dùng gRPC-web).',
  },
  {
    id: 'adv-qos-sdn-049',
    level: 'advanced',
    topic: 'qos-sdn',
    question: 'Trong quản lý Chất lượng dịch vụ (QoS), sự khác biệt cơ bản giữa Traffic Shaping (Định hình lưu lượng) và Traffic Policing (Kiểm soát lưu lượng) là gì?',
    options: {
      A: 'Shaping chặn ngay lập tức dữ liệu vượt mức; Policing cố gắng nén gói tin lại nhỏ hơn.',
      B: 'Shaping giữ gói tin vượt mức trong hàng đợi (Buffer/Queue) để gửi dần, làm mượt lưu lượng. Policing hủy (Drop) ngay lập tức hoặc hạ cấp (Remark) các gói tin vượt qua giới hạn bằng thông.',
      C: 'Shaping chỉ áp dụng cho chiều Inbound, Policing chỉ áp dụng cho chiều Outbound.',
      D: 'Shaping dùng cho mạng cục bộ LAN, Policing dùng cho môi trường VPN (mã hóa).'
    },
    answer: 'B',
    explanation: 'Traffic Shaping (Định hình) sử dụng bộ đệm (buffers). Khi traffic vượt quá tốc độ cho phép (CIR - Committed Information Rate), gói tin sẽ xếp hàng trong bộ đệm và được đẩy ra từ từ. Nó có độ trễ lớn nhưng ít mất gói (thích hợp Outbound). Traffic Policing không sử dụng bộ đệm (hoặc bộ đệm cực bé để xử lý burst); vượt giới hạn là Drop (vứt bỏ) gói tin, hoặc đánh dấu giảm ưu tiên (markdown DSCP).',
    tip: 'Shaping = Hàng đợi (Buffer) -> Trễ. Policing = Cắt bỏ (Drop) -> Mất gói.'
  },
  {
    id: 'adv-qos-sdn-050',
    level: 'advanced',
    topic: 'qos-sdn',
    question: 'Trường DSCP (Differentiated Services Code Point) trong IP Header chiếm bao nhiêu bit, và giá trị DSCP thông dụng nào thường được khuyến nghị cho lưu lượng âm thanh chuẩn (Voice/VoIP RTP)?',
    options: {
      A: 'DSCP chiếm 8 bit. Khuyến nghị dùng giá trị CS3.',
      B: 'DSCP chiếm 3 bit. Khuyến nghị dùng giá trị IP Precedence 5.',
      C: 'DSCP chiếm 6 bit. Khuyến nghị dùng giá trị EF (Expedited Forwarding - 46).',
      D: 'DSCP chiếm 16 bit. Khuyến nghị dùng giá trị AF41.'
    },
    answer: 'C',
    explanation: 'Trường DSCP nằm trong IPv4 ToS byte (hoặc IPv6 Traffic Class), nhưng bản thân giá trị DSCP chỉ chiếm 6 bit (2 bit còn lại dùng cho ECN - Báo hiệu tắc nghẽn). 6 bit DSCP cung cấp tối đa 64 mức ưu tiên. Theo chuẩn (RFC 3246), giá trị EF (Expedited Forwarding) tương đương thập phân 46 (nhị phân 101110) được khuyến nghị toàn cầu làm chuẩn ưu tiên cao nhất, độ trễ thấp nhất dành riêng cho Voice (VoIP).',
  },
  {
    id: 'adv-qos-sdn-051',
    level: 'advanced',
    topic: 'qos-sdn',
    question: 'Trong cơ chế lập lịch hàng đợi (Queuing Disciplines), thuật toán CBWFQ (Class-Based Weighted Fair Queuing) khắc phục được điểm yếu gì của thuật toán FIFO và Priority Queuing (PQ)?',
    options: {
      A: 'Tăng cường bảo mật IPsec cho mọi luồng dữ liệu đi qua hàng đợi.',
      B: 'Nén toàn bộ các luồng vào chung một queue duy nhất với độ ưu tiên ngẫu nhiên.',
      C: 'Hỗ trợ định tuyến tĩnh nhanh hơn FIFO.',
      D: 'Ngăn tình trạng "Chết đói" (Starvation) của các luồng dữ liệu ưu tiên thấp (như FTP) mà PQ thường gây ra, bằng cách đảm bảo lượng băng thông tối thiểu (Bandwidth guarantee) cho từng lớp dữ liệu.'
    },
    answer: 'D',
    explanation: 'FIFO (First In First Out) không có ưu tiên. PQ (Priority Queuing) có 4 hàng đợi cứng: High luôn gửi trước, nếu High có lưu lượng liên tục thì các hàng đợi Low (thường chứa dữ liệu nền tảng FTP, Email) sẽ bị "chết đói" (không bao giờ được truyền). CBWFQ kết hợp sức mạnh phân loại của người dùng, phân chia thành các lớp (Classes), và gán băng thông được bảo đảm (ví dụ: Voice 10%, Web 40%, Data 20%). Điều này giúp mọi lưu lượng đều có cơ hội truyền trong môi trường tắc nghẽn.',
  },
  {
    id: 'adv-qos-sdn-052',
    level: 'advanced',
    topic: 'qos-sdn',
    question: 'Khái niệm "Southbound Interface" (Giao diện hướng Nam) trong kiến trúc mạng Software-Defined Networking (SDN) có chức năng gì?',
    options: {
      A: 'Là API cho phép các ứng dụng kinh doanh, giám sát ra lệnh cho SDN Controller.',
      B: 'Là kết nối mạng vật lý trực tiếp giữa các máy chủ (Servers) với nhau.',
      C: 'Là giao thức (như OpenFlow, NETCONF, OVSDB) mà SDN Controller dùng để giao tiếp, truyền đẩy chính sách, Flow table xuống các thiết bị mạng phần cứng/ảo hóa (Switch/Router).',
      D: 'Là cổng quản lý Out-of-band duy nhất dành cho người quản trị cấu hình thiết bị bằng cáp Console.'
    },
    answer: 'C',
    explanation: 'Kiến trúc SDN chuẩn chia làm 3 lớp: Application, Control, và Infrastructure (Data plane). \n- Northbound Interface (Hướng Bắc): Giao tiếp giữa Ứng dụng (App) và SDN Controller (thường dùng REST API).\n- Southbound Interface (Hướng Nam): Giao tiếp giữa Controller và hạ tầng chuyển mạch bên dưới (Switches) để đẩy các dòng xử lý (Flow entries) xuống. OpenFlow là giao thức Southbound nổi tiếng nhất.',
  },
  {
    id: 'adv-qos-sdn-053',
    level: 'advanced',
    topic: 'qos-sdn',
    question: 'Tình huống: Một bảng OpenFlow trong SDN Switch nhận được một gói tin. Gói tin này không khớp (no match) với bất kỳ Flow Entry (dòng lệnh) nào trong bảng. Hành vi mặc định tiêu chuẩn nhất của một OpenFlow Switch trong trường hợp này (Tùy thuộc phiên bản và cấu hình) là gì?',
    options: {
      A: 'Tự động quảng bá (flood) gói tin ra tất cả các cổng như một Switch truyền thống.',
      B: 'Drop (vứt bỏ) gói tin và khởi động lại Switch.',
      C: 'Đóng gói phần Header của gói tin vào thông điệp "Packet-In" và gửi lên SDN Controller để xin chỉ thị.',
      D: 'Chạy một giao thức Spanning Tree cục bộ để tìm đường đi mới.'
    },
    answer: 'C',
    explanation: 'Cốt lõi của SDN là Data Plane bị ngu ngốc hóa, không tự quyết định. Khi OpenFlow switch gặp gói tin mới (Table-miss), nó không tự học MAC như switch cũ. Nó sẽ tạo ra thông điệp `Packet-In` (gửi toàn bộ gói tin hoặc một phần header) qua kênh an toàn đưa lên Controller. Controller xử lý (nhờ có cái nhìn toàn cầu), sau đó gửi lệnh `Packet-Out` và `Flow-Mod` xuống Switch để hướng dẫn chuyển gói hiện tại và ghi nhớ cho các gói sau.',
  },
  {
    id: 'adv-qos-sdn-054',
    level: 'advanced',
    topic: 'qos-sdn',
    question: 'NFV (Network Functions Virtualization) thường được nhắc chung với SDN. Vậy NFV đóng vai trò khác biệt gì so với SDN?',
    options: {
      A: 'SDN phân tách Control Plane và Data Plane, NFV ảo hóa các thiết bị mạng truyền thống (Tường lửa, Load Balancer, Router) chạy như một phần mềm trên các máy chủ phần cứng tiêu chuẩn x86.',
      B: 'NFV quản lý cáp quang vật lý, SDN quản lý bộ định tuyến.',
      C: 'SDN chỉ dùng cho mạng WAN (SD-WAN), còn NFV chỉ dùng cho môi trường Data Center nội bộ.',
      D: 'NFV là một giao thức định tuyến nâng cấp của BGP, còn SDN là giao thức L2.'
    },
    answer: 'A',
    explanation: 'SDN giải quyết bài toán "kiểm soát định tuyến luồng dữ liệu trung tâm", trừu tượng hóa mạng lưới. NFV giải quyết bài toán "phần cứng chuyên dụng độc quyền". Thay vì mua thiết bị tường lửa cứng, IDS cứng (với chip ASIC đắt tiền), NFV đóng gói các chức năng đó thành các máy ảo (VM) hoặc Container (VNF - Virtual Network Function) chạy trên máy chủ x86 thương mại (COTS) giá rẻ. SDN và NFV thường kết hợp tạo nên hạ tầng viễn thông hiện đại (5G Core).',
    tip: 'SDN = Phân tách não (Control) và cơ bắp (Data). NFV = Thay phần cứng độc quyền bằng Phần mềm chạy trên máy chủ x86.'
  },
  {
    id: 'adv-load-balancing-055',
    level: 'advanced',
    topic: 'load-balancing',
    question: 'Sự khác biệt cốt lõi về hiệu năng và logic khi thiết lập bộ cân bằng tải (Load Balancer) ở Tầng 4 (Layer 4) so với Tầng 7 (Layer 7) là gì?',
    options: {
      A: 'L4 xử lý rất nhanh vì chỉ dựa vào IP/Port và không mở nội dung gói tin; L7 tốn CPU hơn nhưng có thể quyết định chuyển tiếp dựa trên HTTP Header, Cookies hoặc URL.',
      B: 'L7 nhanh hơn vì hoạt động ở cấp độ phần cứng quang học; L4 phải xử lý phần mềm.',
      C: 'L4 có thể đọc được chứng chỉ SSL/TLS, L7 chỉ có thể đọc giao thức UDP.',
      D: 'L7 không hỗ trợ Sticky Session (Session Persistence) trong khi L4 hỗ trợ hoàn hảo.'
    },
    answer: 'A',
    explanation: 'Layer 4 Load Balancer (ví dụ HAProxy L4, AWS Network LB) chỉ nhìn vào thông tin Transport (IP đích, Port). Nó thường không can thiệp kết nối TCP/TLS, tốc độ chuyển tiếp hàng triệu luồng mỗi giây siêu nhanh. Layer 7 LB (Nginx, AWS Application LB) đóng vai trò như một Proxy hoàn chỉnh, đứng ra giải mã SSL (SSL Termination), đọc nội dung HTTP GET (URL, Cookie, Host header), rồi đưa ra quyết định thông minh hơn (Routing dựa trên path, Rate limit API, chặn SQLi).',
  },
  {
    id: 'adv-load-balancing-056',
    level: 'advanced',
    topic: 'load-balancing',
    question: 'Thuật toán cân bằng tải "Least Connections" (Ít kết nối nhất) hoạt động tốt nhất trong trường hợp nào so với thuật toán "Round Robin" (Xoay vòng)?',
    options: {
      A: 'Khi số lượng server phía sau (Backend) ít hơn 3.',
      B: 'Khi các kết nối có thời lượng (session time) và mức tiêu thụ tài nguyên cực kỳ khác biệt nhau (ví dụ: file nhỏ vài KB và file lớn vài GB).',
      C: 'Khi các server Backend có cấu hình phần cứng hoàn toàn giống nhau và thời lượng kết nối giống nhau.',
      D: 'Chỉ hoạt động được với giao thức UDP.'
    },
    answer: 'B',
    explanation: 'Round Robin chia đều request mới tuần tự (1-2-3, 1-2-3). Nếu có 10 request tải file lớn vô tình rơi hết vào Server 1, Server 1 sẽ quá tải trong khi Server 2 rảnh rỗi. Least Connections khắc phục bằng cách Load Balancer đếm số kết nối TCP hiện ĐANG MỞ đến từng Backend. Request mới sẽ đẩy vào server nào đang gánh ít kết nối nhất ở thời điểm đó. Rất hữu ích cho các traffic hỗn loạn có kết nối sống lâu (long-lived) và ngắn đan xen.',
  },
  {
    id: 'adv-load-balancing-057',
    level: 'advanced',
    topic: 'load-balancing',
    question: 'Cơ chế "Direct Server Return" (DSR) trong cấu trúc Load Balancing có đặc điểm tối ưu luồng dữ liệu như thế nào?',
    options: {
      A: 'Client gửi request đến LB, LB đẩy qua Server, Server phản hồi lại LB, LB gửi lại Client.',
      B: 'Client gửi request đến LB, LB sử dụng ARP Spoofing để lấy dữ liệu từ Client.',
      C: 'Client gửi request đến LB, LB chuyển tiếp (thường qua thay đổi MAC - L2) đến Backend Server. Backend Server đóng gói phản hồi bằng IP của LB và trả TRỰC TIẾP về cho Client bỏ qua LB.',
      D: 'Direct Server Return bỏ qua hoàn toàn Load Balancer ở cả hai chiều In/Out.'
    },
    answer: 'C',
    explanation: 'Thông thường trong Proxy LB, luồng dữ liệu Inbound và Outbound đều đi qua LB, gây ra nút thắt cổ chai (bottleneck) tại LB vì lượng Outbound (ví dụ: video streaming, file download) thường lớn gấp nhiều lần Inbound. Với DSR (hoạt động ở L4 / thay đổi L2 MAC), Load Balancer nhận Inbound (vài bytes request), chuyển cho Server. Server sẽ cấu hình Loopback IP bằng IP của Load Balancer, nên nó có thể phản hồi khối dữ liệu Outbound khổng lồ thẳng ra Router Internet về phía người dùng. Load balancer được giải phóng băng thông cực lớn.',
    tip: 'DSR: Request vào Load Balancer, Response ra thẳng Internet (Bypass LB).'
  },
  {
    id: 'adv-load-balancing-058',
    level: 'advanced',
    topic: 'load-balancing',
    question: 'Tình huống: Một ứng dụng thương mại điện tử yêu cầu người dùng phải luôn được duy trì trạng thái đăng nhập (Giỏ hàng được lưu tạm trên RAM của Server đó). Cấu hình "Session Persistence" (Sticky Session) nào ở tầng Layer 7 là tốt nhất để đảm bảo LB luôn đẩy user đó vào đúng server đã lưu session?',
    options: {
      A: 'Sử dụng kỹ thuật Cookie-based Persistence (LB tự chèn cookie đánh dấu server).',
      B: 'Sử dụng thuật toán Source IP Hashing (Băm IP nguồn).',
      C: 'Cấu hình SSL Passthrough.',
      D: 'Bật cơ chế NAT tĩnh (Static NAT).'
    },
    answer: 'A',
    explanation: 'Mặc dù IP Hashing (băm IP người dùng) có thể dùng làm Sticky session, nhưng nó dễ hỏng (khi người dùng dùng 3G đổi IP liên tục hoặc hệ thống nhiều người dùng chung 1 IP public của cty). Ở Layer 7, giải pháp tốt nhất là Cookie-based. Khi người dùng truy cập lần đầu, LB chọn 1 backend (ví dụ Server A) và trả về trình duyệt một HTTP Cookie (vd: `ROUTEID=ServerA`). Lần sau request lên có chứa Cookie đó, LB đọc và điều hướng thẳng vào Server A bất kể IP người dùng thay đổi.',
  },
  {
    id: 'adv-load-balancing-059',
    level: 'advanced',
    topic: 'load-balancing',
    question: 'Trong kiến trúc Global Server Load Balancing (GSLB), công nghệ nào đóng vai trò cốt lõi trong việc điều hướng người dùng (từ các quốc gia khác nhau) đến Trung tâm dữ liệu (Data Center) gần nhất?',
    options: {
      A: 'BGP Anycast và DNS độ phân giải địa lý (Geo-DNS).',
      B: 'OSPF Multi-area giữa các lục địa.',
      C: 'Hệ thống cáp quang biển mã hóa lượng tử.',
      D: 'NAT Port Forwarding toàn cầu.'
    },
    answer: 'A',
    explanation: 'GSLB phân bổ tải trên phạm vi toàn cầu. Để làm được, hệ thống dựa vào Geo-DNS (DNS Resolver thông minh phân tích IP nguồn của người hỏi để trả về IP của Data Center gần vị trí địa lý đó nhất). Kỹ thuật thứ hai là mạng Anycast BGP: Một dải IP (như 8.8.8.8) được quảng bá ở mọi Data Center trên thế giới; router Internet tự động định tuyến gói tin đến Data Center có số Hop/đường truyền tối ưu nhất.',
  },
  {
    id: 'adv-load-balancing-060',
    level: 'advanced',
    topic: 'load-balancing',
    question: 'Tình huống: Trong cấu hình HAProxy, bạn thiết lập cơ chế Health Check tới Backend Server. Mặc dù Server vừa sập nhưng trong vài giây đầu tiên, LB vẫn liên tục gửi user vào gây ra lỗi. Thuộc tính cấu hình nào kiểm soát hành vi chuyển trạng thái nhanh/chậm này?',
    options: {
      A: 'Maxconn (Số kết nối tối đa)',
      B: 'Rise, Fall và Inter (Interval)',
      C: 'Timeout client và Timeout server',
      D: 'Weight parameter'
    },
    answer: 'B',
    explanation: 'Health Check được điều khiển bởi các tham số thời gian và ngưỡng thử. `inter` là khoảng thời gian giữa 2 lần check (vd: 2000ms). `fall` (hoặc retries) là số lần check thất bại liên tiếp trước khi Load Balancer chính thức đánh dấu Server là DOWN (tránh tình trạng rớt mạng cục bộ trong vài mili giây làm sập cả hệ thống). `rise` là số lần kiểm tra thành công để xác nhận Server UP trở lại. Điều chỉnh giảm `fall` và `inter` sẽ giúp phát hiện lỗi nhanh hơn (nhưng dễ nhiễu mạng).',
    tip: 'Nhớ bộ 3 thần thánh: Inter (Chu kỳ check), Fall (Ngưỡng báo sập), Rise (Ngưỡng báo phục hồi).'
  }
];
