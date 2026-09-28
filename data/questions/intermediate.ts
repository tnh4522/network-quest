import type { Question } from '@/types';

export const intermediateQuestions: Question[] = [
  // --- TOPIC 1: SUBNETTING (8 Questions) ---
  {
    id: 'inter-subnetting-001',
    level: 'intermediate',
    topic: 'subnetting',
    question: 'Với địa chỉ IP 192.168.10.0 và Subnet Mask là /27, số lượng host khả dụng (usable hosts) tối đa trên mỗi mạng con là bao nhiêu?',
    options: {
      A: '30',
      B: '32',
      C: '14',
      D: '62'
    },
    answer: 'A',
    explanation: 'Công thức tính số host khả dụng là 2^h - 2, với h là số bit dành cho phần host. Prefix /27 mượn 27 bit cho phần mạng, còn lại 32 - 27 = 5 bit cho phần host. Do đó, số host khả dụng là 2^5 - 2 = 32 - 2 = 30 host. Đáp án B sai vì chưa trừ 2 địa chỉ đặc biệt (Network và Broadcast), các đáp án C và D sai vì sử dụng số bit host không chính xác.',
    tip: 'Luôn nhớ trừ đi 2 (Network ID và Broadcast ID) khi tính số host khả dụng.'
  },
  {
    id: 'inter-subnetting-002',
    level: 'intermediate',
    topic: 'subnetting',
    question: 'Địa chỉ mạng (Network Address) của máy trạm có IP 172.16.5.70/28 là địa chỉ nào dưới đây?',
    options: {
      A: '172.16.5.32',
      B: '172.16.5.64',
      C: '172.16.5.70',
      D: '172.16.5.0'
    },
    answer: 'B',
    explanation: 'Subnet mask /28 tương đương với 255.255.255.240, bước nhảy (block size) ở octet cuối là 256 - 240 = 16. Các dải mạng sẽ bắt đầu ở bội số của 16: 0, 16, 32, 48, 64, 80... Vì 70 nằm trong khoảng từ 64 đến 79, địa chỉ mạng là 172.16.5.64. Đáp án A, C, D sai vì không đúng quy tắc xác định bước nhảy của block size.',
    tip: 'Block size (bước nhảy) luôn bằng 256 trừ đi giá trị của octet thú vị (interesting octet).'
  },
  {
    id: 'inter-subnetting-003',
    level: 'intermediate',
    topic: 'subnetting',
    question: 'Hãy xác định địa chỉ Broadcast của mạng chứa địa chỉ IP 10.1.200.155/23.',
    options: {
      A: '10.1.200.255',
      B: '10.1.255.255',
      C: '10.1.201.255',
      D: '10.1.200.155'
    },
    answer: 'C',
    explanation: 'Prefix /23 tương đương mask 255.255.254.0, octet thứ 3 là octet thay đổi (interesting octet) với bước nhảy là 256 - 254 = 2. Các mạng con ở octet thứ 3 là 0, 2, 4... 200, 202. Mạng chứa 200.155 là mạng 10.1.200.0/23, trải dài đến 10.1.201.255. Vậy Broadcast address là 10.1.201.255. Các đáp án A, B, D xác định sai ranh giới của mạng /23.',
    tip: 'Prefix /23 mượn 7 bit ở octet thứ 3, tạo ra bước nhảy là 2. Mạng con sẽ bao phủ 2 octet liên tiếp (ví dụ 200 và 201).'
  },
  {
    id: 'inter-subnetting-004',
    level: 'intermediate',
    topic: 'subnetting',
    question: 'Bạn cần cấp phát một Subnet chứa ít nhất 500 host. Subnet mask (theo dạng CIDR) tối ưu nhất là gì để không lãng phí địa chỉ IP?',
    options: {
      A: '/24',
      B: '/25',
      C: '/22',
      D: '/23'
    },
    answer: 'D',
    explanation: 'Để hỗ trợ 500 host, ta cần giải phương trình 2^h - 2 >= 500. Giá trị nhỏ nhất của h thỏa mãn là 9 (vì 2^9 = 512, 512 - 2 = 510 host). Số bit dành cho phần mạng sẽ là 32 - 9 = 23 bit (tương đương /23). Đáp án A (/24) chỉ hỗ trợ 254 host, đáp án B (/25) chỉ hỗ trợ 126 host là không đủ, còn đáp án C (/22) hỗ trợ 1022 host gây lãng phí địa chỉ IP.',
  },
  {
    id: 'inter-subnetting-005',
    level: 'intermediate',
    topic: 'subnetting',
    question: 'Áp dụng VLSM cho dải mạng 192.168.1.0/24. Phòng Ban A cần 60 IP, Phòng Ban B cần 25 IP. Hai Subnet tối ưu nhất và nối tiếp nhau tương ứng cho A và B là:',
    options: {
      A: 'A: 192.168.1.0/26, B: 192.168.1.64/27',
      B: 'A: 192.168.1.0/25, B: 192.168.1.128/26',
      C: 'A: 192.168.1.0/26, B: 192.168.1.64/26',
      D: 'A: 192.168.1.0/24, B: 192.168.2.0/24'
    },
    answer: 'A',
    explanation: 'Phòng Ban A cần 60 IP, nên cần 6 bit host (2^6 - 2 = 62), subnet là /26. Mạng đầu tiên cho A là 192.168.1.0/26 (dải từ 0 đến 63). Mạng tiếp theo bắt đầu ở 192.168.1.64. Phòng Ban B cần 25 IP, cần 5 bit host (2^5 - 2 = 30), subnet là /27. Vậy mạng cho B là 192.168.1.64/27. Các đáp án khác hoặc gây lãng phí địa chỉ IP hoặc không nối tiếp chính xác theo quy tắc VLSM.',
    tip: 'Trong VLSM, luôn chia mạng cho yêu cầu lớn nhất trước, sau đó mới chia cho các yêu cầu nhỏ dần.'
  },
  {
    id: 'inter-subnetting-006',
    level: 'intermediate',
    topic: 'subnetting',
    question: 'Nếu công ty bạn được cấp dải mạng 10.0.0.0/8 và quyết định mượn thêm 5 bit từ phần host để chia mạng con (subnet), số lượng mạng con (subnets) tạo ra được là bao nhiêu?',
    options: {
      A: '16',
      B: '32',
      C: '64',
      D: '128'
    },
    answer: 'B',
    explanation: 'Số lượng mạng con (subnets) được tạo ra tính theo công thức 2^s, trong đó s là số bit mượn thêm từ phần host. Đề bài cho biết mượn 5 bit, vậy số lượng subnets tạo ra là 2^5 = 32 mạng con. Các đáp án A (2^4), C (2^6), D (2^7) đều tính sai số bit mượn hoặc sai công thức.',
  },
  {
    id: 'inter-subnetting-007',
    level: 'intermediate',
    topic: 'subnetting',
    question: 'Cho địa chỉ IP 192.168.10.135/26. Địa chỉ host khả dụng đầu tiên (First Usable Host) của mạng con này là gì?',
    options: {
      A: '192.168.10.1',
      B: '192.168.10.128',
      C: '192.168.10.129',
      D: '192.168.10.130'
    },
    answer: 'C',
    explanation: 'Subnet mask /26 có bước nhảy là 64 (256 - 192). Các subnet bao gồm 0, 64, 128, 192. IP 135 nằm trong subnet 192.168.10.128/26. Địa chỉ mạng là 128, do đó địa chỉ host đầu tiên là 128 + 1 = 129. Đáp án A sai vì là mạng 0, B sai vì là địa chỉ mạng (Network ID), D sai vì không phải IP đầu tiên.',
    tip: 'First Usable Host luôn luôn bằng Network Address cộng thêm 1 ở octet cuối cùng.'
  },
  {
    id: 'inter-subnetting-008',
    level: 'intermediate',
    topic: 'subnetting',
    question: 'Subnet mask 255.255.255.224 tương đương với ký hiệu Prefix (CIDR) nào sau đây?',
    options: {
      A: '/25',
      B: '/26',
      C: '/28',
      D: '/27'
    },
    answer: 'D',
    explanation: 'Subnet mask 255.255.255.224 khi chuyển sang nhị phân có dạng 11111111.11111111.11111111.11100000. Tổng cộng có 27 bit 1, do đó nó tương đương với /27. Đáp án A là /25 (128), B là /26 (192), C là /28 (240), do đó đều sai.',
  },

  // --- TOPIC 2: ARP & ICMP (7 Questions) ---
  {
    id: 'inter-arp-icmp-001',
    level: 'intermediate',
    topic: 'arp-icmp',
    question: 'Khi một thiết bị khởi động hoặc thay đổi IP, nó thường gửi một gói tin ARP đặc biệt mà không có ai yêu cầu, nhằm thông báo IP/MAC của nó cho mạng. Quá trình này gọi là gì?',
    options: {
      A: 'Gratuitous ARP',
      B: 'Reverse ARP (RARP)',
      C: 'Proxy ARP',
      D: 'Inverse ARP'
    },
    answer: 'A',
    explanation: 'Gratuitous ARP là bản tin ARP Request/Reply mà một thiết bị tự nguyện gửi đi dưới dạng Broadcast để cập nhật bảng ARP của các thiết bị khác hoặc kiểm tra xem IP có bị trùng lặp không. Reverse ARP (RARP) dùng để tìm IP từ MAC, Proxy ARP để router phản hồi thay thiết bị khác, Inverse ARP dùng trong Frame Relay. Do đó, chỉ A là đáp án chính xác.',
    tip: 'Gratuitous ARP thường xuất hiện khi cấu hình HA (High Availability) hoặc kiểm tra Duplicate IP Address (DAD).'
  },
  {
    id: 'inter-arp-icmp-002',
    level: 'intermediate',
    topic: 'arp-icmp',
    question: 'Giao thức ICMP sử dụng loại (Type) và mã (Code) để xác định các thông báo. Loại bản tin ICMP "Echo Request" (dùng trong lệnh ping) có giá trị Type là bao nhiêu?',
    options: {
      A: 'Type 0',
      B: 'Type 8',
      C: 'Type 3',
      D: 'Type 11'
    },
    answer: 'B',
    explanation: 'ICMP Echo Request sử dụng Type 8. Khi đích nhận được, nó sẽ trả lời bằng ICMP Echo Reply sử dụng Type 0. Type 3 là Destination Unreachable (Đích không thể tới), còn Type 11 là Time Exceeded (hết thời gian TTL, dùng trong traceroute). Vì vậy, B là câu trả lời đúng.',
  },
  {
    id: 'inter-arp-icmp-003',
    level: 'intermediate',
    topic: 'arp-icmp',
    question: 'Trong bảng ARP (ARP Table), một mục nhập (entry) có trạng thái "Dynamic" (Động) mang ý nghĩa gì?',
    options: {
      A: 'Mục này được lưu vĩnh viễn và không bị xóa khi khởi động lại',
      B: 'Mục này do người quản trị cấu hình thủ công',
      C: 'Mục này được học tự động thông qua quá trình ARP Request/Reply và sẽ hết hạn (timeout)',
      D: 'Mục này là địa chỉ MAC của chính router hoặc thiết bị đang sử dụng'
    },
    answer: 'C',
    explanation: 'Trạng thái "Dynamic" trong bảng ARP có nghĩa là thiết bị tự động học được thông tin mapping IP-MAC thông qua giao thức ARP. Các mục động này có thời gian sống (aging time) và sẽ bị xóa nếu không có lưu lượng giao tiếp nào sử dụng đến. Đáp án A và B mô tả cho mục ARP tĩnh (Static ARP). Đáp án D mô tả giao diện cục bộ.',
  },
  {
    id: 'inter-arp-icmp-004',
    level: 'intermediate',
    topic: 'arp-icmp',
    question: 'Tiện ích "traceroute" trên hệ thống Unix/Linux mặc định lợi dụng trường TTL và loại bản tin ICMP nào để vẽ sơ đồ đường đi?',
    options: {
      A: 'ICMP Redirect',
      B: 'ICMP Parameter Problem',
      C: 'ICMP Echo Request',
      D: 'ICMP Time Exceeded'
    },
    answer: 'D',
    explanation: 'Traceroute gửi các gói tin UDP (hoặc ICMP) với TTL tăng dần từ 1. Khi gói tin đến một router và TTL giảm xuống 0, router đó sẽ trả về bản tin ICMP Time Exceeded (Type 11). Nhờ các bản tin Time Exceeded này mà traceroute có thể ghi nhận lại danh sách các hop trên đường đi. Các bản tin ICMP khác không phục vụ chức năng chính này.',
    tip: 'Traceroute trên Windows (tracert) mặc định dùng ICMP Echo Request, trong khi Linux/Unix mặc định dùng UDP, nhưng cả hai đều dựa trên ICMP Time Exceeded để xác định hop.'
  },
  {
    id: 'inter-arp-icmp-005',
    level: 'intermediate',
    topic: 'arp-icmp',
    question: 'Bản tin ARP Request được truyền tải ở tầng Data Link với địa chỉ MAC đích là gì?',
    options: {
      A: 'FF:FF:FF:FF:FF:FF',
      B: '00:00:00:00:00:00',
      C: 'Địa chỉ MAC của Default Gateway',
      D: 'Địa chỉ MAC Multicast 01:00:5E:xx:xx:xx'
    },
    answer: 'A',
    explanation: 'Gói tin ARP Request là một bản tin Broadcast, vì thiết bị gửi chưa biết địa chỉ MAC của thiết bị đích. Do đó, địa chỉ MAC đích ở Frame header luôn là FF:FF:FF:FF:FF:FF để tất cả các thiết bị trong cùng miền Broadcast (LAN) đều nhận và xử lý. Các đáp án B, C, D đều không đại diện cho địa chỉ Broadcast của chuẩn Ethernet.',
  },
  {
    id: 'inter-arp-icmp-006',
    level: 'intermediate',
    topic: 'arp-icmp',
    question: 'Lỗi ICMP "Destination Unreachable" (Type 3) có một tham số Code đi kèm. Nếu Code = 3, nó báo hiệu điều gì?',
    options: {
      A: 'Network Unreachable (Không tìm thấy mạng)',
      B: 'Port Unreachable (Không tìm thấy cổng ứng dụng)',
      C: 'Host Unreachable (Không tìm thấy máy đích)',
      D: 'Protocol Unreachable (Giao thức không được hỗ trợ)'
    },
    answer: 'B',
    explanation: 'ICMP Type 3 có nhiều Code. Code = 0 là Network Unreachable, Code = 1 là Host Unreachable, Code = 2 là Protocol Unreachable, và Code = 3 là Port Unreachable (thường xảy ra khi ứng dụng đích sử dụng UDP không mở port để lắng nghe). Vì vậy B là đáp án chính xác.',
    tip: 'Port Unreachable rất phổ biến khi quét port UDP bằng Nmap, vì ứng dụng đích không phản hồi nên hệ điều hành gửi lại ICMP Type 3 Code 3.'
  },
  {
    id: 'inter-arp-icmp-007',
    level: 'intermediate',
    topic: 'arp-icmp',
    question: 'Khi thiết bị A muốn giao tiếp với thiết bị B nằm ở một mạng khác, quá trình phân giải ARP của thiết bị A sẽ hoạt động như thế nào?',
    options: {
      A: 'Thiết bị A sẽ gửi ARP Request hỏi trực tiếp MAC của thiết bị B và Router sẽ forward broadcast này',
      B: 'Thiết bị A không sử dụng ARP vì nó chỉ dùng ICMP để tìm đường đi',
      C: 'Thiết bị A sẽ gửi ARP Request để hỏi địa chỉ MAC của Default Gateway',
      D: 'Thiết bị A sẽ gửi ARP Request hỏi MAC của thiết bị B nhưng dùng địa chỉ Unicast'
    },
    answer: 'C',
    explanation: 'ARP chỉ hoạt động trong môi trường mạng LAN (cùng miền Broadcast). Khi thiết bị B ở một mạng khác, thiết bị A nhận thấy điều đó thông qua việc so sánh Subnet mask và IP đích. Để gửi gói tin ra khỏi mạng, A cần gửi dữ liệu đến Default Gateway. Do đó, A sẽ dùng ARP Request để hỏi MAC của IP Default Gateway (nếu chưa có trong ARP cache). Router không bao giờ forward gói tin ARP broadcast sang mạng khác.',
  },

  // --- TOPIC 3: TCP & UDP (7 Questions) ---
  {
    id: 'inter-tcp-udp-001',
    level: 'intermediate',
    topic: 'tcp-udp',
    question: 'Trong quá trình thiết lập kết nối (3-way handshake) của TCP, gói tin đầu tiên do Client gửi đi có cờ (flag) nào được bật lên?',
    options: {
      A: 'ACK',
      B: 'FIN',
      C: 'RST',
      D: 'SYN'
    },
    answer: 'D',
    explanation: 'Trong quá trình TCP 3-way handshake, bước 1 là Client gửi gói tin có cờ SYN (Synchronize) bật để yêu cầu kết nối và đồng bộ hóa Sequence Number. Bước 2 Server đáp lại bằng SYN-ACK. Bước 3 Client xác nhận bằng ACK. FIN dùng để ngắt kết nối, RST dùng để reset kết nối lỗi. Vì thế đáp án D là đúng.',
  },
  {
    id: 'inter-tcp-udp-002',
    level: 'intermediate',
    topic: 'tcp-udp',
    question: 'Kỹ thuật "Sliding Window" trong TCP được sử dụng với mục đích chính là gì?',
    options: {
      A: 'Kiểm soát luồng (Flow Control) để bên gửi không làm tràn bộ đệm bên nhận',
      B: 'Định tuyến gói tin nhanh hơn qua môi trường mạng WAN',
      C: 'Mã hóa dữ liệu trong quá trình truyền dẫn',
      D: 'Kiểm tra lỗi checksum ở tầng Data Link'
    },
    answer: 'A',
    explanation: 'Sliding Window là một cơ chế của TCP nhằm điều khiển luồng (Flow Control). Nó cho phép bên nhận báo cho bên gửi biết kích thước bộ đệm (Window Size) hiện tại còn trống là bao nhiêu, ngăn chặn bên gửi gửi dữ liệu quá nhanh làm tràn bộ đệm của người nhận. Các đáp án B, C, D không liên quan đến cơ chế windowing của TCP.',
    tip: 'Window size = 0 có nghĩa là bên nhận yêu cầu bên gửi ngừng ngay việc gửi dữ liệu cho đến khi nó xử lý kịp.'
  },
  {
    id: 'inter-tcp-udp-003',
    level: 'intermediate',
    topic: 'tcp-udp',
    question: 'Giao thức UDP thường được ứng dụng trong trường hợp nào dưới đây?',
    options: {
      A: 'Truyền tải tập tin quan trọng (FTP)',
      B: 'Phát trực tiếp video hoặc Voice over IP (VoIP)',
      C: 'Gửi và nhận email (SMTP/IMAP)',
      D: 'Duyệt web an toàn có chứng chỉ HTTPS'
    },
    answer: 'B',
    explanation: 'UDP là một giao thức "best-effort", không kết nối, không đảm bảo tính toàn vẹn hoặc thứ tự gói tin, nhưng lại rất nhanh và ít độ trễ (overhead nhỏ). Do đó, nó rất phù hợp cho ứng dụng thời gian thực như VoIP hay Video Streaming, nơi mất một vài frame có thể chấp nhận được nhưng độ trễ là tối kỵ. FTP, SMTP, và HTTPS bắt buộc dùng TCP vì cần độ tin cậy.',
  },
  {
    id: 'inter-tcp-udp-004',
    level: 'intermediate',
    topic: 'tcp-udp',
    question: 'Thuật toán TCP Slow Start thuộc cơ chế nào của giao thức TCP?',
    options: {
      A: 'Cơ chế kiểm soát lỗi (Error Recovery)',
      B: 'Cơ chế phân mảnh dữ liệu (Fragmentation)',
      C: 'Cơ chế kiểm soát tắc nghẽn (Congestion Control)',
      D: 'Cơ chế ghép kênh (Multiplexing)'
    },
    answer: 'C',
    explanation: 'TCP Slow Start là một phần của cơ chế kiểm soát tắc nghẽn (Congestion Control). Thuật toán này giúp TCP thăm dò khả năng của mạng bằng cách bắt đầu với lượng dữ liệu gửi đi (congestion window) nhỏ và tăng nhanh dần (thường theo cấp số nhân) cho đến khi phát hiện gói tin bị mất (dấu hiệu tắc nghẽn). Đáp án A, B, D sai vì mô tả các tính năng khác của mạng.',
  },
  {
    id: 'inter-tcp-udp-005',
    level: 'intermediate',
    topic: 'tcp-udp',
    question: 'Khi nhận được một phân đoạn TCP lỗi hoặc gói tin thuộc về một kết nối đã bị đóng, máy đích thường phản hồi bằng một thông báo mang cờ nào?',
    options: {
      A: 'SYN',
      B: 'URG',
      C: 'PSH',
      D: 'RST'
    },
    answer: 'D',
    explanation: 'Cờ RST (Reset) được sử dụng để từ chối ngay lập tức một kết nối (ví dụ: port bị đóng) hoặc kết thúc đột ngột một phiên kết nối khi phát hiện ra lỗi nghiêm trọng. URG báo hiệu dữ liệu khẩn, PSH yêu cầu đẩy dữ liệu lên ứng dụng mà không cần chờ buffer, SYN dùng để khởi tạo. Do đó, RST là đáp án chuẩn xác.',
  },
  {
    id: 'inter-tcp-udp-006',
    level: 'intermediate',
    topic: 'tcp-udp',
    question: 'Header của giao thức UDP có kích thước cố định là bao nhiêu byte?',
    options: {
      A: '8 bytes',
      B: '20 bytes',
      C: '32 bytes',
      D: '64 bytes'
    },
    answer: 'A',
    explanation: 'Header của UDP rất đơn giản và gọn nhẹ, có kích thước cố định là 8 bytes. Nó bao gồm 4 trường, mỗi trường 2 bytes: Source Port, Destination Port, Length, và Checksum. Ngược lại, TCP header mặc định tối thiểu là 20 bytes và có thể lớn hơn nếu có các Options. Do vậy, đáp án A đúng.',
  },
  {
    id: 'inter-tcp-udp-007',
    level: 'intermediate',
    topic: 'tcp-udp',
    question: 'Port ngẫu nhiên (Ephemeral Port) do hệ điều hành của client tự động sinh ra để kết nối đến server thường nằm trong khoảng giá trị nào theo tiêu chuẩn IANA?',
    options: {
      A: '0 - 1023',
      B: '49152 - 65535',
      C: '1024 - 49151',
      D: '80 - 443'
    },
    answer: 'B',
    explanation: 'Theo tiêu chuẩn của IANA, dải cổng Ephemeral (cổng động/tạm thời) dành cho client nằm trong khoảng từ 49152 đến 65535. Dải 0 - 1023 là các cổng hệ thống (Well-known ports) như 80 HTTP, 443 HTTPS. Dải 1024 - 49151 là các cổng đã đăng ký (Registered ports) cho các ứng dụng đặc thù. Vì vậy đáp án B chính xác.',
    tip: 'Lưu ý một số HĐH cũ (như Windows XP hoặc Linux nhân cũ) có thể sử dụng dải port từ 1024, nhưng theo chuẩn IANA hiện đại thì là 49152-65535.'
  },

  // --- TOPIC 4: NAT & PAT (7 Questions) ---
  {
    id: 'inter-nat-pat-001',
    level: 'intermediate',
    topic: 'nat-pat',
    question: 'Loại NAT nào tạo ra bản đồ tỷ lệ 1:1 (một đổi một) cố định giữa một địa chỉ IP Private và một địa chỉ IP Public?',
    options: {
      A: 'Dynamic NAT',
      B: 'PAT (Port Address Translation)',
      C: 'Static NAT',
      D: 'NAT Overload'
    },
    answer: 'C',
    explanation: 'Static NAT là cấu hình NAT theo kiểu 1:1, trong đó một địa chỉ Local (Private) luôn được biên dịch thành một địa chỉ Global (Public) cố định. Điều này thường dùng cho các Server nội bộ cần được truy cập trực tiếp từ Internet. Dynamic NAT dùng một Pool IP cấp phát động, trong khi PAT/NAT Overload dùng 1 IP Public cho nhiều IP Private bằng cách phân biệt qua Port.',
  },
  {
    id: 'inter-nat-pat-002',
    level: 'intermediate',
    topic: 'nat-pat',
    question: 'Trong thuật ngữ NAT của Cisco, địa chỉ IP của thiết bị bên trong mạng LAN (trước khi ra ngoài Internet) được gọi là gì?',
    options: {
      A: 'Inside Global',
      B: 'Outside Local',
      C: 'Outside Global',
      D: 'Inside Local'
    },
    answer: 'D',
    explanation: 'Theo thuật ngữ NAT của Cisco, "Inside Local" là địa chỉ IP Private thực tế gán trên card mạng của máy chủ/máy trạm ở mạng LAN nội bộ. "Inside Global" là địa chỉ Public mà router thay thế vào. "Outside Global" là địa chỉ Public thực sự của máy chủ trên Internet. "Outside Local" thường không phổ biến, là IP bên ngoài mà mạng nội bộ nhìn thấy. Do đó, D là đúng.',
    tip: 'Mẹo nhớ: "Inside" = Thiết bị thuộc mạng của bạn. "Local" = IP nhìn thấy trước khi qua NAT (thường là Private IP).'
  },
  {
    id: 'inter-nat-pat-003',
    level: 'intermediate',
    topic: 'nat-pat',
    question: 'Kỹ thuật PAT (Port Address Translation), hay còn gọi là NAT Overload, sử dụng thông tin gì để có thể map hàng ngàn IP Private ra một IP Public duy nhất?',
    options: {
      A: 'Số thứ tự cổng giao tiếp (Source Port) ở tầng Transport (Lớp 4)',
      B: 'Trường TTL trong IP Header (Lớp 3)',
      C: 'Địa chỉ MAC ở Frame Header (Lớp 2)',
      D: 'Số sequence number của giao thức ARP'
    },
    answer: 'A',
    explanation: 'PAT (NAT Overload) phân biệt các luồng dữ liệu (session) của nhiều máy Private đi chung 1 IP Public bằng cách thay đổi và theo dõi Source Port (TCP/UDP) lớp 4. Mỗi máy nội bộ được gán một Port duy nhất trên IP Public. MAC address bị lột bỏ tại Router (Lớp 3), còn TTL và ARP không liên quan đến việc định danh luồng NAT. Đáp án A là chính xác.',
  },
  {
    id: 'inter-nat-pat-004',
    level: 'intermediate',
    topic: 'nat-pat',
    question: 'Khi cấu hình Dynamic NAT trên thiết bị Cisco, thành phần nào định nghĩa danh sách các địa chỉ IP Public có sẵn để cấp phát?',
    options: {
      A: 'Access Control List (ACL)',
      B: 'NAT Pool',
      C: 'Route Map',
      D: 'DHCP Scope'
    },
    answer: 'B',
    explanation: 'Trong cấu hình Dynamic NAT, "NAT Pool" là danh sách (dải) các địa chỉ IP Global (Public) được cấp cho Router để sử dụng biên dịch dần. "Access Control List (ACL)" lại dùng để xác định (match) các IP Private nào được phép mang đi NAT. Route Map dùng cho PBR hoặc định tuyến nâng cao. Do đó B là thành phần định nghĩa IP Public để cấp phát.',
  },
  {
    id: 'inter-nat-pat-005',
    level: 'intermediate',
    topic: 'nat-pat',
    question: 'Nếu bảng NAT (NAT Table) trên Router đã lưu kín số lượng entry và hết dung lượng Port, điều gì sẽ xảy ra khi một IP Private mới cố gắng truy cập Internet qua PAT?',
    options: {
      A: 'Router sẽ giải phóng entry cũ nhất để nhường chỗ (FIFO)',
      B: 'Gói tin mới sẽ bị Router drop (loại bỏ) cho đến khi có entry cũ hết hạn (timeout)',
      C: 'Thiết bị tự động chuyển sang sử dụng Static NAT',
      D: 'Router sẽ gửi ICMP Source Quench đến tất cả các máy tính'
    },
    answer: 'B',
    explanation: 'Khi bảng NAT cạn kiệt IP hoặc Port (Port Exhaustion trong PAT), Router không thể tạo ra bản dịch (translation) mới. Các gói tin tạo session mới sẽ bị drop. Thiết bị sẽ không tự động FIFO xóa luồng cũ vì có thể gây ngắt kết nối đột ngột cho phiên đang hoạt động. ICMP Source Quench đã bị loại bỏ từ lâu. Vì vậy, máy mới không thể ra mạng (drop) cho tới khi các session cũ timeout.',
  },
  {
    id: 'inter-nat-pat-006',
    level: 'intermediate',
    topic: 'nat-pat',
    question: 'Khái niệm "Hairpinning" (hoặc NAT Loopback) thường được sử dụng để giải quyết vấn đề nào trong mạng nội bộ?',
    options: {
      A: 'Cho phép Router tự động chuyển đổi giữa IPv4 và IPv6',
      B: 'Ngăn chặn tấn công DDoS bằng cách giới hạn băng thông của NAT',
      C: 'Cung cấp cơ chế dự phòng (failover) giữa hai Router chạy NAT',
      D: 'Cho phép người dùng LAN truy cập Server nội bộ bằng địa chỉ Public IP của chính Server đó'
    },
    answer: 'D',
    explanation: 'NAT Hairpinning (NAT Loopback) là cấu hình trên Router cho phép thiết bị bên trong mạng LAN có thể kết nối tới một Server trong chính LAN đó thông qua địa chỉ IP Public (đã được Static NAT hoặc Port Forwarding) thay vì dùng IP Private. Nếu không có Hairpinning, gói tin đi từ LAN ra interface Public rồi vòng lại LAN sẽ bị drop. Các đáp án khác hoàn toàn sai ngữ cảnh.',
    tip: 'Hairpinning rất hữu ích khi hệ thống nội bộ dùng tên miền chung trỏ về IP Public mà không có DNS cục bộ riêng (Split-brain DNS).'
  },
  {
    id: 'inter-nat-pat-007',
    level: 'intermediate',
    topic: 'nat-pat',
    question: 'Theo tiêu chuẩn RFC 1918, dải IP nào dưới đây KHÔNG phải là dải địa chỉ Private IP cần phải dùng NAT để truy cập Internet?',
    options: {
      A: '100.64.0.0/10',
      B: '10.0.0.0/8',
      C: '172.16.0.0/12',
      D: '192.168.0.0/16'
    },
    answer: 'A',
    explanation: 'RFC 1918 quy định 3 dải mạng Private là 10.0.0.0/8, 172.16.0.0/12 và 192.168.0.0/16. Dải 100.64.0.0/10 (đáp án A) không thuộc RFC 1918, mà thuộc RFC 6598 dùng riêng cho kiến trúc Carrier-Grade NAT (CGNAT) của nhà mạng ISP, không phải IP Private truyền thống. Do đó A là đáp án đúng.',
  },

  // --- TOPIC 5: DHCP & DNS (7 Questions) ---
  {
    id: 'inter-dhcp-dns-001',
    level: 'intermediate',
    topic: 'dhcp-dns',
    question: 'Trong quy trình cấp phát IP động của DHCP (D.O.R.A), thông điệp nào dưới đây được gửi từ DHCP Client đến DHCP Server dưới dạng Broadcast để chấp nhận IP được đề xuất?',
    options: {
      A: 'DHCP Discover',
      B: 'DHCP Request',
      C: 'DHCP Offer',
      D: 'DHCP Ack'
    },
    answer: 'B',
    explanation: 'Quá trình D.O.R.A gồm 4 bước: Discover (Client tìm Server) -> Offer (Server đề xuất IP) -> Request (Client xin nhận IP đề xuất) -> Ack (Server xác nhận). Ở bước thứ 3, Client gửi bản tin DHCP Request dưới dạng Broadcast nhằm báo cho tất cả DHCP Server trong mạng biết rằng nó đã chọn IP từ một Server cụ thể, các Server khác rút lại Offer của họ. Do đó, B là đúng.',
  },
  {
    id: 'inter-dhcp-dns-002',
    level: 'intermediate',
    topic: 'dhcp-dns',
    question: 'Bản ghi (Record) DNS nào được sử dụng để ánh xạ một tên miền thành một địa chỉ IPv6?',
    options: {
      A: 'MX',
      B: 'CNAME',
      C: 'AAAA',
      D: 'PTR'
    },
    answer: 'C',
    explanation: 'Bản ghi AAAA (Quad-A record) được sử dụng để phân giải tên miền (domain name) sang địa chỉ IPv6. Bản ghi A dùng cho IPv4. MX dùng cho Mail Server, CNAME dùng để tạo bí danh (alias) cho tên miền khác, PTR dùng cho truy vấn ngược (phân giải từ IP sang tên miền). Vì vậy C là đáp án đúng.',
  },
  {
    id: 'inter-dhcp-dns-003',
    level: 'intermediate',
    topic: 'dhcp-dns',
    question: 'Giá trị TTL (Time To Live) cấu hình trong một bản ghi DNS mang ý nghĩa gì đối với hệ thống mạng?',
    options: {
      A: 'Số lượng Router tối đa gói tin truy vấn có thể đi qua',
      B: 'Xác định thời gian máy chủ DNS dự phòng phải chờ trước khi takeover',
      C: 'Mã hóa thời gian sống của session TCP port 53',
      D: 'Thời gian bộ nhớ cache lưu trữ kết quả phân giải trước khi phải truy vấn lại'
    },
    answer: 'D',
    explanation: 'Trong DNS, TTL (Time To Live) chỉ định thời gian (thường tính bằng giây) mà một DNS Resolver hoặc thiết bị Client được phép cache (lưu tạm) bản ghi trước khi bản ghi đó hết hạn và phải hỏi lại Authoritative Name Server. Khái niệm này khác hoàn toàn với TTL trong IP Header (quy định số Router đi qua). Vậy D là đáp án xác đáng.',
    tip: 'Nếu bạn chuẩn bị chuyển IP của website sang Server mới, hãy giảm TTL của bản ghi DNS xuống thấp (vd: 300s) từ vài ngày trước đó để DNS cập nhật nhanh hơn.'
  },
  {
    id: 'inter-dhcp-dns-004',
    level: 'intermediate',
    topic: 'dhcp-dns',
    question: 'Nếu máy tính (Client) và máy chủ DHCP (Server) nằm ở hai subnet (VLAN) khác nhau, thành phần nào giúp Client gửi bản tin Broadcast đến được Server?',
    options: {
      A: 'DHCP Relay Agent (IP Helper)',
      B: 'DNS Forwarder',
      C: 'Proxy ARP',
      D: 'VLAN Trunking Protocol (VTP)'
    },
    answer: 'A',
    explanation: 'Bản tin DHCP Discover là Broadcast nên Router mặc định sẽ drop (không chuyển tiếp qua mạng khác). Để giải quyết, người ta cấu hình DHCP Relay Agent (trên Cisco là lệnh `ip helper-address`) trên cổng Default Gateway của Client. Nó sẽ chặn bắt bản tin Broadcast này, đóng gói lại thành Unicast và gửi trực tiếp đến IP của DHCP Server. Các tùy chọn B, C, D không có chức năng này.',
  },
  {
    id: 'inter-dhcp-dns-005',
    level: 'intermediate',
    topic: 'dhcp-dns',
    question: 'Trong hệ thống phân cấp DNS (DNS Hierarchy), máy chủ cao nhất nắm giữ thông tin trỏ tới các miền như .com, .net, .vn được gọi là gì?',
    options: {
      A: 'Authoritative Name Server',
      B: 'Root Name Server',
      C: 'TLD (Top-Level Domain) Name Server',
      D: 'Recursive Resolver'
    },
    answer: 'B',
    explanation: 'Root Name Server là cấp độ cao nhất trong hệ thống DNS (đại diện bằng dấu "."). Nhiệm vụ của Root Server là chỉ đường (delegate) truy vấn đến các TLD Name Server tương ứng với phần đuôi tên miền (.com, .org, .vn...). TLD Server sau đó mới chỉ đến Authoritative Name Server của domain cụ thể. Vì vậy, B (Root) là đỉnh của cây phân cấp DNS.',
  },
  {
    id: 'inter-dhcp-dns-006',
    level: 'intermediate',
    topic: 'dhcp-dns',
    question: 'Bản ghi CNAME (Canonical Name) trong DNS có đặc điểm hạn chế nào quan trọng nhất mà quản trị viên cần lưu ý?',
    options: {
      A: 'Không hỗ trợ cấu hình trên các tên miền quốc gia (ccTLD)',
      B: 'Dễ bị lộ IP thực qua các công cụ tìm kiếm',
      C: 'Không thể tạo bản ghi CNAME tại gốc tên miền (Root/Apex domain, vd: "domain.com")',
      D: 'Chỉ trỏ được đến IP nội bộ, không trỏ được ra Internet'
    },
    answer: 'C',
    explanation: 'Theo chuẩn RFC của DNS, một tên miền đã có các bản ghi khác (như SOA, NS - thường bắt buộc tồn tại ở cấp Root/Apex của domain) thì không được phép trỏ CNAME. Do đó, bạn không thể tạo CNAME cho "domain.com" (Apex), mà chỉ có thể tạo cho sub-domain như "www.domain.com". Các đáp án A, B, D sai vì CNAME không có giới hạn về tính public, ccTLD hay bảo mật theo mô tả.',
    tip: 'Nhiều nhà cung cấp DNS hiện đại (như Cloudflare, Route53) dùng kỹ thuật Alias hoặc CNAME Flattening để lách luật cho phép trỏ Apex domain sang một domain khác.'
  },
  {
    id: 'inter-dhcp-dns-007',
    level: 'intermediate',
    topic: 'dhcp-dns',
    question: 'Trên hệ điều hành Windows, câu lệnh nào trong CMD dùng để xóa và làm mới hoàn toàn bộ nhớ đệm (cache) DNS của Client?',
    options: {
      A: 'netsh winsock reset',
      B: 'ipconfig /release',
      C: 'nslookup -clear',
      D: 'ipconfig /flushdns'
    },
    answer: 'D',
    explanation: 'Lệnh `ipconfig /flushdns` được sử dụng để xóa bỏ bảng local DNS resolver cache của hệ điều hành Windows. Điều này ép máy tính phải truy vấn lại DNS Server khi truy cập web, hữu ích khi một website vừa đổi IP. `ipconfig /release` dùng để bỏ IP DHCP, `netsh winsock reset` dùng để reset mạng lớp socket. Đáp án D là chuẩn xác.',
  },

  // --- TOPIC 6: VLAN & TRUNKING (6 Questions) ---
  {
    id: 'inter-vlan-trunking-001',
    level: 'intermediate',
    topic: 'vlan-trunking',
    question: 'Trong chuẩn IEEE 802.1Q, thẻ Tag (VLAN Tag) được chèn vào vị trí nào của frame Ethernet truyền thống?',
    options: {
      A: 'Giữa trường Source MAC Address và trường EtherType/Length',
      B: 'Phía sau tải trọng dữ liệu (Payload) và trước FCS',
      C: 'Trước trường Destination MAC Address',
      D: 'Chèn trực tiếp vào bên trong IP Header Lớp 3'
    },
    answer: 'A',
    explanation: 'Chuẩn 802.1Q thực hiện "tagging" bằng cách chèn thêm 4 byte vào frame Ethernet Lớp 2. 4 byte này được chèn chính xác vào ngay sau trường địa chỉ MAC nguồn (Source MAC) và ngay trước trường EtherType. Cấu trúc này không chạm đến tầng mạng (Lớp 3) hay cuối Frame. Vì vậy A là đáp án duy nhất đúng.',
  },
  {
    id: 'inter-vlan-trunking-002',
    level: 'intermediate',
    topic: 'vlan-trunking',
    question: 'Cổng Access (Access Port) trên Switch có đặc điểm hoạt động như thế nào đối với các frame dữ liệu?',
    options: {
      A: 'Nó đóng gói nhiều thẻ VLAN để truyền đến Switch khác',
      B: 'Nó luôn bóc (strip) thẻ VLAN đi trước khi gửi frame ra khỏi cổng tới máy trạm',
      C: 'Nó chỉ cho phép các gói tin không có IP đi qua',
      D: 'Nó yêu cầu máy trạm phải hiểu được chuẩn 802.1Q để tự tag dữ liệu'
    },
    answer: 'B',
    explanation: 'Cổng Access thuộc duy nhất về một VLAN. Khi một frame đi từ Switch ra cổng Access để đến máy tính (PC), Switch sẽ gỡ bỏ thẻ VLAN (strip the tag) vì card mạng PC thông thường không hiểu cấu trúc tag 802.1Q. Ngược lại, khi PC gửi dữ liệu vào Access Port, Switch sẽ tự thêm thẻ VLAN của cổng đó. Đáp án A và D mô tả thuộc tính của cổng Trunk.',
  },
  {
    id: 'inter-vlan-trunking-003',
    level: 'intermediate',
    topic: 'vlan-trunking',
    question: 'Khái niệm "Native VLAN" trong đường trunk 802.1Q mang ý nghĩa đặc biệt nào?',
    options: {
      A: 'Đây là VLAN dành riêng cho quản trị bằng giao thức SSH/Telnet',
      B: 'Đây là VLAN ưu tiên được định tuyến nhanh nhất ở lớp 3',
      C: 'Traffic thuộc về Native VLAN sẽ gửi trên đường trunk mà không bị gắn thẻ (untagged)',
      D: 'Đây là VLAN tự động được cấu hình cho mọi port chưa sử dụng'
    },
    answer: 'C',
    explanation: 'Trong cấu hình Trunking chuẩn 802.1Q, Native VLAN quy định một VLAN duy nhất mà dữ liệu của nó truyền qua đường trunk dưới dạng untagged (không gắn thẻ 802.1Q). Điều này nhằm đảm bảo tính tương thích ngược với thiết bị Hub cũ. Nếu hai đầu link cấu hình sai (mismatched) Native VLAN, có thể gây ra hiện tượng rò rỉ dữ liệu (VLAN hopping).',
    tip: 'Mặc định trên Switch Cisco, Native VLAN luôn là VLAN 1. Để bảo mật, nên đổi Native VLAN sang một VLAN không sử dụng (dummy VLAN).'
  },
  {
    id: 'inter-vlan-trunking-004',
    level: 'intermediate',
    topic: 'vlan-trunking',
    question: 'Để các máy tính thuộc VLAN 10 và VLAN 20 có thể giao tiếp với nhau, bạn BẮT BUỘC phải trang bị thiết bị/tính năng nào?',
    options: {
      A: 'Một Hub chia cổng',
      B: 'Đường trunk 802.1Q dung lượng cao',
      C: 'Giao thức Spanning Tree (STP) để chống loop',
      D: 'Thiết bị định tuyến ở Lớp 3 (Router hoặc Layer 3 Switch)'
    },
    answer: 'D',
    explanation: 'Các VLAN phân chia mạng LAN ở Layer 2 thành các Broadcast domain độc lập. Frame Layer 2 không thể nhảy trực tiếp từ VLAN này sang VLAN khác. Để cho phép giao tiếp giữa chúng (Inter-VLAN Routing), bắt buộc phải có thiết bị định tuyến Layer 3 phân tích IP để route gói tin, có thể là Router-on-a-stick hoặc Multilayer (Layer 3) Switch. Các đáp án A, B, C đều chỉ hoạt động ở Layer 1-2.',
  },
  {
    id: 'inter-vlan-trunking-005',
    level: 'intermediate',
    topic: 'vlan-trunking',
    question: 'Trường VLAN ID (VID) bên trong thẻ 802.1Q có độ dài 12 bits. Điều này có ý nghĩa gì đối với hệ thống?',
    options: {
      A: 'Hỗ trợ tối đa lên tới 4096 VLAN',
      B: 'Dành 12 bits để mã hóa chất lượng dịch vụ (QoS)',
      C: 'Chỉ hỗ trợ tối đa 12 VLAN trên một switch',
      D: 'Yêu cầu mật khẩu dài tối thiểu 12 bit để kết nối'
    },
    answer: 'A',
    explanation: 'Với độ dài 12 bits, trường VLAN ID có thể mang 2^12 = 4096 giá trị khác nhau (từ 0 đến 4095). Do VLAN 0 và 4095 được dự trữ, không gian sử dụng thực tế là 1 đến 4094. QoS nằm ở trường Priority Code Point (3 bits) liền trước VID. Do đó A là đáp án đúng.',
  },
  {
    id: 'inter-vlan-trunking-006',
    level: 'intermediate',
    topic: 'vlan-trunking',
    question: 'Kỹ thuật "Router-on-a-Stick" giải quyết bài toán định tuyến Inter-VLAN bằng cách nào?',
    options: {
      A: 'Sử dụng cáp chéo kết nối tất cả Access port lại với nhau',
      B: 'Sử dụng một cáp vật lý duy nhất cấu hình Trunk nối từ Switch đến Router để truyền nhiều VLAN',
      C: 'Tích hợp Module định tuyến vào bên trong cấu trúc phần cứng của Switch',
      D: 'Sử dụng nhiều cáp nối từ Switch đến Router, mỗi cáp cho một VLAN riêng lẻ'
    },
    answer: 'B',
    explanation: 'Router-on-a-stick là mô hình kết nối Router với Switch qua một đường cáp vật lý duy nhất, cấu hình cổng này làm đường Trunk (802.1Q). Trên Router, người quản trị tạo ra nhiều cổng logic ảo (Sub-interface) tương ứng với mỗi VLAN. Việc này tiết kiệm cổng kết nối cứng của Router so với kiểu nối từng cáp cho từng VLAN (Đáp án D). Đáp án C mô tả Layer 3 Switch.',
  },

  // --- TOPIC 7: STP - Spanning Tree Protocol (6 Questions) ---
  {
    id: 'inter-stp-001',
    level: 'intermediate',
    topic: 'stp',
    question: 'Tiêu chí ĐẦU TIÊN mà thuật toán STP sử dụng để bầu chọn Root Bridge trong mạng là gì?',
    options: {
      A: 'Địa chỉ IP nhỏ nhất',
      B: 'Địa chỉ MAC nhỏ nhất',
      C: 'Giá trị Bridge Priority nhỏ nhất',
      D: 'Tốc độ cổng kết nối cao nhất'
    },
    answer: 'C',
    explanation: 'Trong STP (802.1D), Switch nào có Bridge ID (BID) nhỏ nhất sẽ trở thành Root Bridge. Bridge ID gồm 2 phần: Bridge Priority (mặc định 32768) và địa chỉ MAC. Khi bầu chọn, STP sẽ so sánh giá trị Bridge Priority trước, nếu hòa mới so sánh đến MAC address nhỏ nhất. IP hay tốc độ port không tham gia vào việc bầu Root Bridge. Vậy C là đúng nhất.',
    tip: 'Muốn ép một Switch làm Root, hãy đặt lệnh `spanning-tree vlan [id] root primary` trên Cisco, lệnh này thực chất là hạ thấp Bridge Priority.'
  },
  {
    id: 'inter-stp-002',
    level: 'intermediate',
    topic: 'stp',
    question: 'Một cổng trên Switch chạy chuẩn STP truyền thống (802.1D) phải trải qua những trạng thái nào trước khi bắt đầu chuyển tiếp dữ liệu (Forwarding)?',
    options: {
      A: 'Disabled -> Blocking -> Learning -> Forwarding',
      B: 'Blocking -> Listening -> Learning -> Forwarding',
      C: 'Listening -> Blocking -> Forwarding',
      D: 'Learning -> Listening -> Blocking -> Forwarding'
    },
    answer: 'B',
    explanation: 'Theo chuẩn 802.1D, khi cổng được bật lên, nó bắt đầu ở trạng thái Blocking (để nghe ngóng Root Bridge). Tiếp theo sang Listening (tham gia bầu chọn nhưng không học MAC). Kế đó sang Learning (học MAC nhưng chưa forward dữ liệu). Cuối cùng mới sang Forwarding. Tổng thời gian tiêu chuẩn cho quá trình này mất khoảng 30 đến 50 giây.',
  },
  {
    id: 'inter-stp-003',
    level: 'intermediate',
    topic: 'stp',
    question: 'Giao thức chuẩn IEEE 802.1w (Rapid Spanning Tree Protocol - RSTP) cải tiến đáng kể thời gian hội tụ bằng cách giới thiệu các trạng thái cổng mới. Trạng thái nào của STP cũ đã bị LOẠI BỎ trong RSTP?',
    options: {
      A: 'Listening',
      B: 'Forwarding',
      C: 'Learning',
      D: 'Discarding'
    },
    answer: 'A',
    explanation: 'Trong RSTP (802.1w), các trạng thái Blocking, Listening và Disabled của STP cũ được gộp chung thành một trạng thái duy nhất gọi là "Discarding". Trạng thái Learning và Forwarding được giữ lại. Do đó, "Listening" không còn tồn tại dưới dạng một trạng thái độc lập riêng biệt. Đáp án A là chính xác.',
  },
  {
    id: 'inter-stp-004',
    level: 'intermediate',
    topic: 'stp',
    question: 'Trong mô hình STP, một cổng (port) đóng vai trò "Alternate Port" mang ý nghĩa gì?',
    options: {
      A: 'Nó thay thế Root Bridge khi Root bị lỗi',
      B: 'Nó là cổng có đường đi ngắn nhất về Root Bridge',
      C: 'Nó là cổng dự phòng cho Designated Port trong cùng một phân đoạn mạng (segment)',
      D: 'Nó là cổng bị khóa (Blocking), đóng vai trò dự phòng cho Root Port'
    },
    answer: 'D',
    explanation: 'Trong RSTP và kiến trúc STP, "Alternate Port" là cổng dự phòng hướng về Root Bridge, tức là nó đóng vai trò thay thế cho Root Port hiện tại nếu Root Port bị đứt. Nó nằm ở trạng thái bị khóa (Discarding/Blocking). Khác với "Backup Port" (dự phòng cho Designated Port), "Alternate Port" dự phòng cho Root Port.',
  },
  {
    id: 'inter-stp-005',
    level: 'intermediate',
    topic: 'stp',
    question: 'Tính năng BPDU Guard thường được áp dụng kết hợp với cấu hình nào trên Switch Cisco nhằm bảo vệ mạng?',
    options: {
      A: 'Cổng Trunking',
      B: 'Tính năng PortFast',
      C: 'Định tuyến Layer 3',
      D: 'EtherChannel / LACP'
    },
    answer: 'B',
    explanation: 'PortFast giúp các cổng Access nối thẳng PC vào trạng thái Forwarding ngay lập tức (bỏ qua Listening/Learning). Tuy nhiên, nếu ai đó cắm nhầm Switch vào cổng này, có thể gây ra loop ngay tức thì. BPDU Guard thường bật cùng PortFast; nếu nhận được gói tin BPDU (nghĩa là có Switch cắm vào), port sẽ chuyển ngay về trạng thái err-disable để cắt đứt nguy cơ loop.',
  },
  {
    id: 'inter-stp-006',
    level: 'intermediate',
    topic: 'stp',
    question: 'Khi tính toán chi phí đường đi về phía Root Bridge (Root Path Cost), yếu tố nào sau đây là cơ sở để Switch quyết định giá trị cost của một cổng?',
    options: {
      A: 'Loại cáp (quang hay đồng)',
      B: 'Chiều dài đoạn cáp vật lý',
      C: 'Băng thông hoạt động (Bandwidth) của cổng',
      D: 'Độ trễ (Delay) của tín hiệu'
    },
    answer: 'C',
    explanation: 'Trong chuẩn Spanning Tree, Path Cost được quy định tỷ lệ nghịch với băng thông của cổng (Bandwidth). Ví dụ, theo chuẩn cũ, cổng 10 Mbps có cost là 100, 100 Mbps có cost là 19, 1 Gbps có cost là 4. Tốc độ càng cao, Cost càng thấp. Các yếu tố như chiều dài dây cáp, loại dây quang/đồng hay độ trễ không tham gia vào phép tính STP Path Cost.',
  },

  // --- TOPIC 8: STATIC ROUTING (6 Questions) ---
  {
    id: 'inter-static-routing-001',
    level: 'intermediate',
    topic: 'static-routing',
    question: 'Trên thiết bị Router Cisco, giá trị Administrative Distance (AD) mặc định của một định tuyến tĩnh (Static Route) là bao nhiêu?',
    options: {
      A: '1',
      B: '90',
      C: '110',
      D: '120'
    },
    answer: 'A',
    explanation: 'Administrative Distance (AD) là độ tin cậy của một nguồn định tuyến. Định tuyến tĩnh (Static route) do người quản trị cấu hình thủ công nên có mức độ tin cậy rất cao, mặc định AD = 1. Nếu Connected (gắn trực tiếp) AD = 0, EIGRP = 90, OSPF = 110, RIP = 120. Vì AD càng nhỏ càng ưu tiên nên A là đáp án đúng.',
    tip: 'Bạn có thể thay đổi AD của static route lớn hơn các giao thức khác để tạo Floating Static Route (định tuyến dự phòng).'
  },
  {
    id: 'inter-static-routing-002',
    level: 'intermediate',
    topic: 'static-routing',
    question: 'Để cấu hình một "Default Route" tĩnh hướng tất cả các gói tin không có trong bảng định tuyến ra IP trạm kế là 192.168.1.254 trên Router Cisco, lệnh nào sau đây là ĐÚNG?',
    options: {
      A: 'ip route 255.255.255.255 0.0.0.0 192.168.1.254',
      B: 'ip route 0.0.0.0 0.0.0.0 192.168.1.254',
      C: 'ip route default 192.168.1.254',
      D: 'route add 0.0.0.0 mask 0.0.0.0 192.168.1.254'
    },
    answer: 'B',
    explanation: 'Trong IOS của Cisco, Default Route được biểu diễn bằng địa chỉ mạng 0.0.0.0 và Subnet mask 0.0.0.0 (hay "quad zero"). Lệnh đầy đủ là `ip route 0.0.0.0 0.0.0.0 [Next_Hop_IP_hoặc_Interface]`. Đáp án D là lệnh trên cmd của hệ điều hành Windows, không phải Cisco Router. Đáp án A sai hoàn toàn. Vì vậy B chính xác.',
  },
  {
    id: 'inter-static-routing-003',
    level: 'intermediate',
    topic: 'static-routing',
    question: 'Khái niệm "Floating Static Route" (Định tuyến tĩnh thả nổi) được sử dụng nhằm mục đích gì?',
    options: {
      A: 'Cân bằng tải giữa nhiều đường kết nối bằng nhau',
      B: 'Định tuyến gói tin dựa trên địa chỉ nguồn thay vì địa chỉ đích',
      C: 'Tạo một tuyến dự phòng (backup) chỉ kích hoạt khi tuyến đường chính bị đứt',
      D: 'Chặn một dải mạng cụ thể không cho phép ra Internet'
    },
    answer: 'C',
    explanation: 'Floating Static Route là việc cấu hình một đường static route tĩnh với tham số Administrative Distance (AD) cao hơn giá trị AD của tuyến đường chính. Chừng nào đường chính (vd: OSPF có AD 110) còn hoạt động, tuyến backup tĩnh (vd: cấu hình AD 120) sẽ "nổi lơ lửng" không được nạp vào bảng định tuyến. Khi đường chính sập, đường tĩnh dự phòng mới được kích hoạt.',
  },
  {
    id: 'inter-static-routing-004',
    level: 'intermediate',
    topic: 'static-routing',
    question: 'Khi cấu hình Static Route trên Router, bạn có thể chỉ định Outbound Interface hoặc Next-Hop IP. Trong trường hợp nào việc sử dụng Outbound Interface gây ra vấn đề làm phình to bảng ARP của Router một cách nguy hiểm?',
    options: {
      A: 'Khi kết nối Point-to-Point cáp quang',
      B: 'Khi interface đầu ra là mạng Multi-access (ví dụ Ethernet)',
      C: 'Khi cấu hình Default Route trỏ về ISP',
      D: 'Khi giao thức mạng sử dụng IPv6 thay vì IPv4'
    },
    answer: 'B',
    explanation: 'Khi dùng Outbound Interface trên môi trường Ethernet (Multi-access), Router sẽ coi mọi đích đến đều được gắn trực tiếp. Nó sẽ liên tục gửi Proxy ARP request cho MỌI IP đích thay vì chỉ lấy MAC của Next-Hop. Điều này khiến bảng ARP phình to khổng lồ và ngốn tài nguyên bộ nhớ (ARP Exhaustion). Trong mạng Ethernet, luôn khuyên dùng Next-Hop IP thay vì chỉ định Outbound Interface.',
  },
  {
    id: 'inter-static-routing-005',
    level: 'intermediate',
    topic: 'static-routing',
    question: 'Nếu Router tra cứu bảng định tuyến và thấy một gói tin khớp (match) với cả Route tĩnh /24 và Default Route tĩnh /0. Router sẽ xử lý thế nào?',
    options: {
      A: 'Chuyển theo tuyến có Administrative Distance thấp hơn',
      B: 'Gửi gói tin qua cả 2 cổng để chia sẻ tải',
      C: 'Vứt bỏ (drop) gói tin vì xung đột',
      D: 'Luôn ưu tiên chuyển theo tuyến /24 do quy tắc Longest Prefix Match'
    },
    answer: 'D',
    explanation: 'Quy tắc "Longest Prefix Match" (Khớp bit dài nhất) là nguyên tắc cốt lõi của bảng định tuyến. Router sẽ luôn luôn ưu tiên chọn đường có Subnet Mask cụ thể nhất (có số prefix lớn nhất). /24 dài và chi tiết hơn /0, do đó gói tin sẽ được đưa đi theo đường tuyến /24 mà không màng tới Administrative Distance hay Metric. AD chỉ được dùng khi hai tuyến có cùng prefix length.',
  },
  {
    id: 'inter-static-routing-006',
    level: 'intermediate',
    topic: 'static-routing',
    question: 'Tham số Metric của một định tuyến tĩnh được Cisco thiết lập mặc định có giá trị bằng bao nhiêu?',
    options: {
      A: '0',
      B: '1',
      C: 'Tự động tính dựa trên băng thông giao diện',
      D: '255'
    },
    answer: 'A',
    explanation: 'Vì Static Route là đường dẫn do con người trực tiếp cấu hình, hệ điều hành (như Cisco IOS) coi nó là một đường tuyệt đối với không có rào cản chi phí động. Do vậy, thông số Metric (Cost) của nó mặc định là 0. Điều này giải thích tại sao trong bảng routing (lệnh `show ip route`), static route hiển thị dấu ngoặc kiểu [1/0] nghĩa là AD=1 và Metric=0.',
  },

  // --- TOPIC 9: HTTP & TLS (6 Questions) ---
  {
    id: 'inter-http-tls-001',
    level: 'intermediate',
    topic: 'http-tls',
    question: 'Phương thức (Method) nào của HTTP được thiết kế ĐẶC BIỆT để chỉ cập nhật/sửa đổi MỘT PHẦN nhỏ của tài nguyên đích thay vì thay thế toàn bộ?',
    options: {
      A: 'PUT',
      B: 'POST',
      C: 'PATCH',
      D: 'UPDATE'
    },
    answer: 'C',
    explanation: 'Trong RESTful API, phương thức HTTP PATCH được chuẩn hóa để áp dụng các thay đổi một phần đối với tài nguyên. Nghĩa là chỉ gửi các trường (fields) cần sửa. Phương thức PUT dùng để ghi đè/thay thế toàn bộ tài nguyên. POST dùng để tạo mới tài nguyên hoặc xử lý tự do. UPDATE không phải là một phương thức HTTP chuẩn. Nên C là đúng.',
  },
  {
    id: 'inter-http-tls-002',
    level: 'intermediate',
    topic: 'http-tls',
    question: 'Khi trình duyệt nhận được mã trạng thái (Status Code) HTTP "301", hệ thống đang báo hiệu điều gì?',
    options: {
      A: 'Tài nguyên đã bị xóa vĩnh viễn (Not Found)',
      B: 'Lỗi phát sinh từ phía máy chủ web (Internal Server Error)',
      C: 'Yêu cầu bị từ chối do không có quyền truy cập (Forbidden)',
      D: 'Tài nguyên đã được di chuyển vĩnh viễn sang một URL mới (Moved Permanently)'
    },
    answer: 'D',
    explanation: 'Mã HTTP 3xx biểu thị quá trình chuyển hướng (Redirect). Mã trạng thái 301 (Moved Permanently) cho biết URL yêu cầu đã thay đổi vị trí vĩnh viễn. Máy chủ sẽ đính kèm URL mới ở header "Location" và trình duyệt sẽ tự động tải URL mới. Tình huống A là mã 404, B là mã 500, và C là mã 403. Đáp án D chính xác.',
    tip: 'Dùng mã 301 khi đổi tên miền để giúp Google SEO chuyển thứ hạng trang cũ sang trang mới.'
  },
  {
    id: 'inter-http-tls-003',
    level: 'intermediate',
    topic: 'http-tls',
    question: 'Trong quy trình thiết lập TLS Handshake cho một phiên HTTPS, mục đích của thông điệp "Client Hello" là gì?',
    options: {
      A: 'Cung cấp danh sách các phiên bản TLS và Cipher Suites (bộ mã hóa) mà Client hỗ trợ để Server lựa chọn',
      B: 'Gửi chứng chỉ số (Certificate) của Client cho Server để xác thực danh tính 2 chiều',
      C: 'Trao đổi ngay lập tức khóa phiên mã hóa đối xứng',
      D: 'Thông báo kết thúc việc bắt tay TCP'
    },
    answer: 'A',
    explanation: 'Bước đầu tiên trong giao thức TLS là Client gửi gói tin "Client Hello". Gói này chứa phiên bản TLS lớn nhất Client hỗ trợ, một chuỗi dữ liệu ngẫu nhiên (random string) và đặc biệt là danh sách các thuật toán mã hóa (Cipher Suites) mà Client có khả năng sử dụng. Server nhận được sẽ xem xét và phản hồi qua "Server Hello" kèm Cipher Suite được chốt. Mọi việc mã hóa chỉ diễn ra ở các bước sau đó.',
  },
  {
    id: 'inter-http-tls-004',
    level: 'intermediate',
    topic: 'http-tls',
    question: 'Trong kiến trúc PKI để xác thực chứng chỉ TLS/SSL trên HTTPS, ai là người đóng vai trò cấp phát và ký chứng chỉ điện tử số (Digital Certificate) cho Website?',
    options: {
      A: 'Nhà cung cấp dịch vụ Internet (ISP)',
      B: 'Cơ quan chứng nhận - Certificate Authority (CA)',
      C: 'Chính trình duyệt web của người dùng (Browser)',
      D: 'Cơ quan quản lý tên miền quốc tế (ICANN)'
    },
    answer: 'B',
    explanation: 'Một chứng chỉ số của Server phải được cấp phát và ký xác nhận bảo chứng bởi một cơ quan được gọi là Certificate Authority (CA), ví dụ như Let\'s Encrypt, DigiCert, GlobalSign. Trình duyệt web có sẵn một kho khóa công khai Root CA để xác thực chữ ký của CA này. Các nhà cung cấp tên miền hay ISP không có nhiệm vụ tạo chứng chỉ kỹ thuật số bảo mật. B là câu trả lời chuẩn.',
  },
  {
    id: 'inter-http-tls-005',
    level: 'intermediate',
    topic: 'http-tls',
    question: 'Khi sử dụng giao thức HTTPS, tính bảo mật của luồng dữ liệu truyền đi (Data in transit) chủ yếu dựa trên kỹ thuật mã hóa nào sau khi quá trình bắt tay kết thúc?',
    options: {
      A: 'Mã hóa phi đối xứng bằng RSA (Asymmetric Encryption)',
      B: 'Băm dữ liệu bằng MD5 (Hashing)',
      C: 'Mã hóa đối xứng (Symmetric Encryption) sử dụng khóa phiên ngẫu nhiên',
      D: 'Mã hóa bằng Base64 (Encoding)'
    },
    answer: 'C',
    explanation: 'Giao thức TLS sử dụng mã hóa phi đối xứng (như RSA/ECC) TẠI quá trình Handshake để xác thực và trao đổi một khóa phiên bí mật (Session Key). Sau khi Handshake thành công, việc truyền dữ liệu tốc độ cao (Data in transit) hoàn toàn dùng Mã hóa đối xứng (Symmetric, vd AES-GCM) sử dụng chung cái Session Key đó, vì giải thuật đối xứng nhẹ và nhanh hơn nhiều. Hashing dùng toàn vẹn, Base64 không phải là mã hóa an toàn.',
  },
  {
    id: 'inter-http-tls-006',
    level: 'intermediate',
    topic: 'http-tls',
    question: 'Theo mô hình tham chiếu OSI, HTTPS kết hợp hoạt động của các giao thức nằm ở những tầng nào?',
    options: {
      A: 'Chỉ hoạt động thuần túy tại Tầng 7 (Application)',
      B: 'Tầng 7 (Application - HTTP) và Tầng 4 (Transport - TCP) thông qua bảo mật ở Tầng 5/6 (Session/Presentation - TLS)',
      C: 'Tầng 4 (Transport) và Tầng 3 (Network - IPsec)',
      D: 'Chỉ hoạt động ở Tầng 2 (Data Link) để chặn Sniffing'
    },
    answer: 'B',
    explanation: 'HTTPS thực chất là sự kết hợp của HTTP (Tầng 7 - Application) đóng gói dữ liệu và gửi xuống thông qua lớp bảo mật SSL/TLS. SSL/TLS về mặt kỹ thuật nằm ở Tầng 5 và 6 (Session và Presentation) thực hiện phiên và mã hóa, trước khi được chuyển xuống tầng 4 (Transport) gửi bởi TCP ở cổng 443. IPsec (Tầng 3) không liên quan tới HTTPS.',
  },

  // --- TOPIC 10: FIREWALL (8 Questions) ---
  {
    id: 'inter-firewall-001',
    level: 'intermediate',
    topic: 'firewall',
    question: 'Tường lửa lọc gói tin phi trạng thái (Stateless Packet Filtering Firewall) đưa ra quyết định chặn hay cho phép gói tin dựa trên cơ chế nào?',
    options: {
      A: 'Kiểm tra từng gói tin một cách độc lập dựa trên thông tin Header (IP nguồn/đích, Port nguồn/đích, Protocol) mà không lưu lại ngữ cảnh phiên kết nối',
      B: 'Theo dõi toàn bộ chu trình bắt tay 3 bước TCP và duy trì bảng trạng thái phiên kết nối',
      C: 'Giải mã toàn bộ dữ liệu SSL/TLS ở Tầng 7 để phân tích nội dung gói tin',
      D: 'Kiểm tra sinh trắc học và chứng chỉ kỹ thuật số của người quản trị'
    },
    answer: 'A',
    explanation: 'Stateless Packet Filtering Firewall kiểm tra từng gói tin riêng rẽ và độc lập. Nó không theo dõi hay ghi nhớ trạng thái (context) của các gói tin trước đó trong cùng một phiên kết nối. Quyết định hoàn toàn phụ thuộc vào việc so khớp các trường trong IP Header và TCP/UDP Header với bảng quy tắc Access Control List (ACL).',
    tip: 'Stateless = Không lưu trạng thái, xét từng gói tin cô lập như người lạ.'
  },
  {
    id: 'inter-firewall-002',
    level: 'intermediate',
    topic: 'firewall',
    question: 'Thành phần cốt lõi nào giúp Tường lửa kiểm tra trạng thái (Stateful Inspection Firewall) nhận biết một gói tin đến là phản hồi hợp lệ của một kết nối nội bộ vừa gửi ra ngoài?',
    options: {
      A: 'Bảng định tuyến tĩnh (Static Routing Table)',
      B: 'Bảng trạng thái kết nối (State Table / Connection Tracking Table)',
      C: 'Bảng địa chỉ MAC (CAM Table) trên Switch',
      D: 'Bộ nhớ cache của máy chủ phân giải tên miền DNS'
    },
    answer: 'B',
    explanation: 'Stateful Firewall duy trì một "State Table" (Bảng trạng thái). Khi một thiết bị nội bộ khởi tạo kết nối ra ngoài (ví dụ gửi gói TCP SYN đến web server), tường lửa sẽ ghi nhận thông tin phiên (IP, Port, Sequence number, TCP Flags). Khi gói tin phản hồi (SYN-ACK) quay về, tường lửa tra cứu State Table; nếu thấy thuộc về phiên kết nối hợp lệ đã có, nó sẽ tự động cho phép qua mà không cần quy tắc Inbound tĩnh.',
    tip: 'State Table ghi nhớ ai đã chủ động gọi ra ngoài để mở cửa cho người đó nhận phản hồi.'
  },
  {
    id: 'inter-firewall-003',
    level: 'intermediate',
    topic: 'firewall',
    question: 'Vùng mạng DMZ (Demilitarized Zone - Vùng phi quân sự) trên tường lửa được thiết kế với mục đích cốt lõi nào sau đây?',
    options: {
      A: 'Chứa các máy tính cá nhân của ban giám đốc công ty để được ưu tiên băng thông cao nhất',
      B: 'Vô hiệu hóa toàn bộ cơ chế bảo mật của mạng để các thiết bị IoT hoạt động dễ dàng',
      C: 'Cách ly các máy chủ cung cấp dịch vụ công cộng (Web, Mail, DNS) khỏi mạng nội bộ LAN, giảm thiểu rủi ro khi máy chủ bị tấn công',
      D: 'Lưu trữ các bản sao lưu (backup) cơ sở dữ liệu quan trọng nhất của doanh nghiệp'
    },
    answer: 'C',
    explanation: 'DMZ là vùng mạng trung gian nằm giữa mạng nội bộ an toàn (LAN) và mạng ngoài không tin cậy (Internet). Các máy chủ phục vụ bên ngoài như Web Server, Mail Server được đặt tại DMZ. Tường lửa cho phép người ngoài Internet truy cập DMZ, nhưng ngăn chặn hoặc kiểm soát cực kỳ nghiêm ngặt việc DMZ khởi tạo kết nối vào LAN. Do đó, nếu một Web Server ở DMZ bị xâm nhập, kẻ tấn công vẫn bị tường lửa chặn không thể xâm nhập trực tiếp vào hệ thống LAN nội bộ.',
    tip: 'DMZ cách ly: Bên ngoài vào được DMZ, nhưng DMZ không được tự ý vào LAN.'
  },
  {
    id: 'inter-firewall-004',
    level: 'intermediate',
    topic: 'firewall',
    question: 'Tường lửa cổng ứng dụng (Application-Level Gateway / Proxy Firewall) hoạt động chủ yếu ở tầng nào của mô hình OSI và có đặc điểm gì nổi bật?',
    options: {
      A: 'Tầng 2 (Data Link), chỉ kiểm tra địa chỉ MAC và loại bỏ frame lỗi',
      B: 'Tầng 3 (Network), định tuyến gói tin theo thuật toán Dijkstra',
      C: 'Tầng 1 (Physical), khuếch đại điện áp của cáp xoắn đôi chống nhiễu',
      D: 'Tầng 7 (Application), đóng vai trò trung gian ngắt kết nối trực tiếp giữa Client và Server để kiểm tra sâu nội dung ứng dụng'
    },
    answer: 'D',
    explanation: 'Proxy Firewall (Application Gateway) hoạt động tại Tầng 7 (Application Layer). Khi Client gửi yêu cầu, Proxy Firewall nhận kết nối, chấm dứt phiên đó, kiểm tra tính hợp lệ và nội dung dữ liệu ứng dụng (HTTP, FTP, DNS), sau đó tự nó tạo một phiên kết nối mới đến Server đích thay mặt Client. Không có gói tin mạng trực tiếp nào đi thẳng giữa Client và Server, mang lại mức bảo mật ứng dụng rất cao.'
  },
  {
    id: 'inter-firewall-005',
    level: 'intermediate',
    topic: 'firewall',
    question: 'Khi một gói tin đi qua danh sách kiểm soát truy cập (ACL) của tường lửa có nhiều quy tắc được cấu hình từ trên xuống dưới, nguyên tắc khớp luật "First Match" hoạt động như thế nào?',
    options: {
      A: 'Gói tin sẽ được đối chiếu lần lượt từ trên xuống; ngay khi khớp với một luật đầu tiên, hành động (Permit/Deny) sẽ được thực thi ngay và bỏ qua toàn bộ các luật còn lại bên dưới',
      B: 'Tường lửa so sánh tất cả các luật, nếu có bất kỳ một luật nào cho phép thì luôn luôn cho phép gói tin qua',
      C: 'Tường lửa sẽ thực thi luật có số thứ tự lớn nhất ở đáy danh sách trước tiên',
      D: 'Gói tin luôn được gửi đến quản trị viên phê duyệt thủ công trước khi khớp luật'
    },
    answer: 'A',
    explanation: 'Hầu hết các ACL và Firewall rules đều tuân thủ nguyên tắc "Top-Down, First Match": Việc kiểm tra diễn ra tuần tự từ trên xuống dưới. Ngay khi gói tin thỏa mãn điều kiện của một luật (rule), tường lửa lập tức áp dụng hành động (Allow hoặc Deny) của luật đó và DỪNG kiểm tra, các luật nằm phía dưới sẽ không được xem xét. Do đó, các luật chi tiết phải đặt lên trên, luật tổng quát đặt xuống dưới.',
    tip: 'First Match: Khớp luật nào trước là xử lý ngay luật đó rồi dừng lại.'
  },
  {
    id: 'inter-firewall-006',
    level: 'intermediate',
    topic: 'firewall',
    question: 'Quy tắc "Implicit Deny" (từ chối ngầm định) nằm ở vị trí nào trong một Access Control List (ACL) tường lửa tiêu chuẩn?',
    options: {
      A: 'Luôn luôn nằm ở dòng đầu tiên của danh sách quy tắc',
      B: 'Nằm ở giữa danh sách để chia tách các quy tắc TCP và UDP',
      C: 'Chỉ xuất hiện khi tường lửa bị mất nguồn điện',
      D: 'Nằm ngầm định ở cuối cùng của danh sách quy tắc, tự động chặn mọi gói tin không khớp với bất kỳ quy tắc nào bên trên'
    },
    answer: 'D',
    explanation: 'Mọi ACL tiêu chuẩn (ví dụ trên Cisco IOS hoặc các hệ thống tường lửa) đều có một dòng ngầm định ở cuối cùng là "Implicit Deny All" (chặn tất cả). Nếu một gói tin đi qua toàn bộ danh sách mà không khớp với bất kỳ câu lệnh Permit nào ở phía trên, nó sẽ tự động bị tiêu hủy (drop) bởi quy tắc ngầm định này.',
    tip: 'Nếu không viết permit nào, Implicit Deny sẽ chặn sạch mọi thứ.'
  },
  {
    id: 'inter-firewall-007',
    level: 'intermediate',
    topic: 'firewall',
    question: 'Một máy tính trong mạng nội bộ truy cập một website HTTPS bên ngoài Internet. Tại sao gói tin phản hồi từ Web Server có thể đi xuyên qua Tường lửa trở lại máy tính đó dù quản trị viên KHÔNG mở bất kỳ cổng Inbound nào?',
    options: {
      A: 'Vì giao thức HTTPS sử dụng mã hóa nên Tường lửa không thể nhận dạng và để cho qua tự do',
      B: 'Vì Web Server từ xa đã gửi lệnh ghi đè cấu hình bảo mật của Tường lửa',
      C: 'Vì Tường lửa trạng thái (Stateful Firewall) nhận biết gói tin đến khớp với kết nối Outbound đã được ghi trong Bảng trạng thái (State Table)',
      D: 'Vì gói tin phản hồi chuyển hướng đi qua cáp âm thanh analog nên không bị kiểm soát'
    },
    answer: 'C',
    explanation: 'Đây là lợi thế then chốt của Stateful Inspection Firewall. Khi máy tính nội bộ gửi gói SYN ra ngoài, tường lửa tự động ghi nhận luồng giao tiếp này vào State Table. Khi gói phản hồi từ đúng IP/Port của Web Server gửi về đúng Port nội bộ, tường lửa nhận diện đây là lưu lượng phản hồi hợp lệ (Established connection) và cho phép đi qua, mà không cần quản trị viên phải mở cổng Inbound cho cả thế giới.',
    tip: 'Stateful Firewall nhớ phiên bạn vừa yêu cầu nên mở cửa đón gói phản hồi về.'
  },
  {
    id: 'inter-firewall-008',
    level: 'intermediate',
    topic: 'firewall',
    question: 'Kỹ thuật lọc lưu lượng chiều ra (Egress Filtering) trên tường lửa doanh nghiệp mang lại lợi ích an ninh bảo mật nào sau đây?',
    options: {
      A: 'Ngăn chặn hiện tượng xung đột địa chỉ IP tự động phát sinh trong mạng LAN',
      B: 'Tăng gấp đôi tốc độ tải trang web của các máy trạm nội bộ',
      C: 'Tự động tạo ra khóa bí mật cho các mạng riêng ảo IPsec',
      D: 'Ngăn chặn mã độc trong mạng nội bộ kết nối về máy chủ điều khiển C2 (Command & Control) và ngăn dữ liệu nhạy cảm bị rò rỉ ra ngoài'
    },
    answer: 'D',
    explanation: 'Egress Filtering kiểm soát các luồng dữ liệu từ bên trong mạng nội bộ cố gắng đi ra bên ngoài Internet. Nếu một máy trạm bị nhiễm trojan hoặc botnet, nó thường cố kết nối ra ngoài tới server chỉ huy C2 (Command & Control) của hacker hoặc cố tuồn dữ liệu mật ra ngoài. Egress Filtering chặn các kết nối ra cổng bất thường, giúp ngăn chặn mã độc phát tán hoặc đánh cắp dữ liệu.'
  }
];

