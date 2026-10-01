import type { Question } from '@/types';

export const basicQuestions: Question[] = [
  {
    id: 'basic-osi-model-001',
    level: 'basic',
    topic: 'osi-model',
    question: `Mô hình OSI bao gồm bao nhiêu tầng (layer)?`,
    options: {
      A: `7 tầng`,
      B: `4 tầng`,
      C: `5 tầng`,
      D: `6 tầng`
    },
    answer: 'A',
    explanation: `Mô hình OSI được phát triển bởi ISO và bao gồm 7 tầng riêng biệt. Các tầng này từ dưới lên là Physical, Data Link, Network, Transport, Session, Presentation, Application. Mô hình 4 tầng thuộc về TCP/IP. Các đáp án khác không phải là cấu trúc của OSI.`,
    tip: `Hãy nhớ câu: Please Do Not Throw Sausage Pizza Away.`
  },
  {
    id: 'basic-osi-model-002',
    level: 'basic',
    topic: 'osi-model',
    question: `Tầng nào trong mô hình OSI chịu trách nhiệm định tuyến các gói tin?`,
    options: {
      A: `Data Link (Tầng 2)`,
      B: `Network (Tầng 3)`,
      C: `Transport (Tầng 4)`,
      D: `Physical (Tầng 1)`
    },
    answer: 'B',
    explanation: `Tầng Network chịu trách nhiệm định tuyến gói tin (routing) giữa các mạng khác nhau. Thiết bị tiêu biểu ở tầng này là Router. Tầng Data Link chỉ xử lý chuyển mạch nội bộ (Switch), Transport lo truyền tải đầu cuối, còn Physical lo tín hiệu điện.`,
    tip: `Định tuyến = Routing = Router = Tầng 3 (Network).`
  },
  {
    id: 'basic-osi-model-003',
    level: 'basic',
    topic: 'osi-model',
    question: `Đơn vị dữ liệu (PDU) tại tầng Transport của mô hình OSI được gọi là gì?`,
    options: {
      A: `Frame`,
      B: `Packet`,
      C: `Segment (hoặc Datagram)`,
      D: `Bit`
    },
    answer: 'C',
    explanation: `PDU tại tầng Transport (Tầng 4) được gọi là Segment (nếu dùng TCP) hoặc Datagram (nếu dùng UDP). Ở tầng 2 là Frame, tầng 3 là Packet, và tầng 1 là Bit. Do đó các đáp án khác mô tả sai tầng của PDU.`
  },
  {
    id: 'basic-osi-model-004',
    level: 'basic',
    topic: 'osi-model',
    question: `Giao thức IP hoạt động ở tầng nào của mô hình OSI?`,
    options: {
      A: `Tầng Transport`,
      B: `Tầng Data Link`,
      C: `Tầng Application`,
      D: `Tầng Network`
    },
    answer: 'D',
    explanation: `Giao thức IP (Internet Protocol) là giao thức cốt lõi của tầng Network (Tầng 3), chịu trách nhiệm đánh địa chỉ logic và định tuyến. Tầng Transport dùng TCP/UDP, tầng Data Link dùng MAC, còn Application dùng HTTP/FTP. IP không thuộc các tầng đó.`
  },
  {
    id: 'basic-osi-model-005',
    level: 'basic',
    topic: 'osi-model',
    question: `Chức năng chính của tầng Physical (Tầng 1) là gì?`,
    options: {
      A: `Truyền bit nhị phân qua môi trường vật lý`,
      B: `Phát hiện và sửa lỗi địa chỉ MAC`,
      C: `Đảm bảo truyền tin cậy đầu cuối`,
      D: `Mã hóa và nén dữ liệu`
    },
    answer: 'A',
    explanation: `Tầng Physical chỉ chịu trách nhiệm biến đổi dữ liệu thành tín hiệu (điện, quang, vô tuyến) và truyền bit trên môi trường vật lý. Phát hiện lỗi MAC thuộc tầng 2, truyền tin cậy thuộc tầng 4, mã hóa thuộc tầng 6. Tầng 1 không xử lý logic phức tạp.`,
    tip: `Physical = Vật lý = Dây cáp, tín hiệu, bit nhị phân.`
  },
  {
    id: 'basic-osi-model-006',
    level: 'basic',
    topic: 'osi-model',
    question: `Tầng nào chịu trách nhiệm thiết lập, duy trì và kết thúc các phiên giao tiếp giữa hai ứng dụng?`,
    options: {
      A: `Transport (Tầng 4)`,
      B: `Session (Tầng 5)`,
      C: `Presentation (Tầng 6)`,
      D: `Application (Tầng 7)`
    },
    answer: 'B',
    explanation: `Tầng Session (Phiên) đảm nhiệm việc quản lý các phiên giao tiếp (session) giữa các ứng dụng, bao gồm thiết lập, duy trì và ngắt kết nối. Transport lo việc truyền, Presentation lo định dạng, Application là giao diện với người dùng.`
  },
  {
    id: 'basic-osi-model-007',
    level: 'basic',
    topic: 'osi-model',
    question: `Mã hóa và nén dữ liệu được thực hiện ở tầng nào của mô hình OSI?`,
    options: {
      A: `Session (Tầng 5)`,
      B: `Application (Tầng 7)`,
      C: `Presentation (Tầng 6)`,
      D: `Transport (Tầng 4)`
    },
    answer: 'C',
    explanation: `Tầng Presentation (Trình diễn) định dạng dữ liệu cho tầng Application, bao gồm cả mã hóa (encryption) và nén dữ liệu (compression). Các tầng khác không đảm nhận chức năng biến đổi cấu trúc dữ liệu theo cách này.`
  },
  {
    id: 'basic-osi-model-008',
    level: 'basic',
    topic: 'osi-model',
    question: `Switch (chuyển mạch) truyền thống hoạt động ở tầng nào trong mô hình OSI?`,
    options: {
      A: `Network (Tầng 3)`,
      B: `Physical (Tầng 1)`,
      C: `Transport (Tầng 4)`,
      D: `Data Link (Tầng 2)`
    },
    answer: 'D',
    explanation: `Switch truyền thống (Layer 2) hoạt động tại tầng Data Link, sử dụng địa chỉ MAC để chuyển tiếp Frame. Tầng 1 dùng Hub, tầng 3 dùng Router. Do vậy, đáp án Network, Physical hay Transport đều không đúng với Switch cơ bản.`,
    tip: `Switch L2 dùng MAC address, hoạt động ở tầng 2.`
  },
  {
    id: 'basic-osi-model-009',
    level: 'basic',
    topic: 'osi-model',
    question: `Quá trình dữ liệu đi từ tầng 7 xuống tầng 1 tại máy gửi được gọi là gì?`,
    options: {
      A: `Encapsulation (Đóng gói)`,
      B: `Decapsulation (Mở gói)`,
      C: `Routing (Định tuyến)`,
      D: `Switching (Chuyển mạch)`
    },
    answer: 'A',
    explanation: `Khi dữ liệu đi từ trên xuống dưới tại máy gửi, mỗi tầng sẽ thêm header (và có thể là trailer) của nó vào dữ liệu, quá trình này gọi là Encapsulation. Khi nhận, quá trình ngược lại là Decapsulation. Routing và Switching là các thao tác của thiết bị mạng.`
  },
  {
    id: 'basic-tcp-ip-model-010',
    level: 'basic',
    topic: 'tcp-ip-model',
    question: `Mô hình TCP/IP ban đầu có bao nhiêu tầng?`,
    options: {
      A: `5 tầng`,
      B: `4 tầng`,
      C: `6 tầng`,
      D: `7 tầng`
    },
    answer: 'B',
    explanation: `Mô hình TCP/IP gốc do Bộ Quốc phòng Mỹ (DoD) thiết kế gồm 4 tầng: Network Access, Internet, Transport, và Application. Các phiên bản 5 tầng là bản cập nhật sau này để đối chiếu với OSI. Mô hình 7 tầng là OSI, không phải TCP/IP.`,
    tip: `TCP/IP gốc có 4 tầng (N-I-T-A).`
  },
  {
    id: 'basic-tcp-ip-model-011',
    level: 'basic',
    topic: 'tcp-ip-model',
    question: `Tầng Application trong TCP/IP tương ứng với những tầng nào trong OSI?`,
    options: {
      A: `Tầng 6, 7 (Presentation, Application)`,
      B: `Tầng 7 (Application) duy nhất`,
      C: `Tầng 5, 6, 7 (Session, Presentation, Application)`,
      D: `Tầng 4, 5, 6, 7`
    },
    answer: 'C',
    explanation: `Tầng Application của TCP/IP gộp chức năng của cả 3 tầng trên cùng của OSI là Session (5), Presentation (6) và Application (7). TCP/IP không chia nhỏ các chức năng phiên và trình diễn ra thành các tầng riêng biệt như OSI.`
  },
  {
    id: 'basic-tcp-ip-model-012',
    level: 'basic',
    topic: 'tcp-ip-model',
    question: `Giao thức UDP hoạt động ở tầng nào trong mô hình TCP/IP?`,
    options: {
      A: `Tầng Internet`,
      B: `Tầng Application`,
      C: `Tầng Network Access`,
      D: `Tầng Transport`
    },
    answer: 'D',
    explanation: `UDP (User Datagram Protocol) hoạt động ở tầng Transport cùng với TCP. Nó cung cấp cơ chế truyền tải nhanh chóng nhưng không đảm bảo độ tin cậy. Tầng Internet dành cho IP, Application cho các ứng dụng, Network Access cho phần cứng.`
  },
  {
    id: 'basic-tcp-ip-model-013',
    level: 'basic',
    topic: 'tcp-ip-model',
    question: `Tầng Internet trong mô hình TCP/IP tương ứng với tầng nào trong OSI?`,
    options: {
      A: `Network (Tầng 3)`,
      B: `Data Link (Tầng 2)`,
      C: `Transport (Tầng 4)`,
      D: `Session (Tầng 5)`
    },
    answer: 'A',
    explanation: `Tầng Internet trong TCP/IP chịu trách nhiệm định tuyến, hoàn toàn tương đương với tầng Network (Tầng 3) của OSI. Transport và Session nằm phía trên, còn Data Link nằm ở tầng dưới (Network Access) của TCP/IP.`
  },
  {
    id: 'basic-tcp-ip-model-014',
    level: 'basic',
    topic: 'tcp-ip-model',
    question: `So với mô hình OSI, mô hình TCP/IP ra đời trước hay sau?`,
    options: {
      A: `TCP/IP ra đời sau`,
      B: `TCP/IP ra đời trước`,
      C: `Ra đời cùng một thời điểm`,
      D: `TCP/IP là phiên bản sao chép của OSI`
    },
    answer: 'B',
    explanation: `Mô hình TCP/IP (hay mô hình DoD) được phát triển vào thập niên 1970 và ra đời trước mô hình OSI (những năm 1980). Vì TCP/IP ra đời trước và được ứng dụng thực tế ngay nên nó trở thành tiêu chuẩn của Internet hiện đại, trong khi OSI chủ yếu làm lý thuyết.`
  },
  {
    id: 'basic-tcp-ip-model-015',
    level: 'basic',
    topic: 'tcp-ip-model',
    question: `ICMP (ping) là giao thức thuộc tầng nào trong mô hình TCP/IP?`,
    options: {
      A: `Tầng Transport`,
      B: `Tầng Application`,
      C: `Tầng Internet`,
      D: `Tầng Network Access`
    },
    answer: 'C',
    explanation: `ICMP (Internet Control Message Protocol) được sử dụng để chẩn đoán sự cố mạng và hoạt động cùng cấp với giao thức IP tại tầng Internet. Tầng Transport lo kết nối TCP/UDP, Application cho ứng dụng, Network Access lo phần cứng.`,
    tip: `Ping dùng ICMP, hoạt động ở tầng Internet (tương đương Network của OSI).`
  },
  {
    id: 'basic-tcp-ip-model-016',
    level: 'basic',
    topic: 'tcp-ip-model',
    question: `Đơn vị dữ liệu (PDU) tại tầng Internet của TCP/IP được gọi là gì?`,
    options: {
      A: `Frame`,
      B: `Segment`,
      C: `Bit`,
      D: `Packet`
    },
    answer: 'D',
    explanation: `PDU ở tầng Internet là Packet (Gói tin). Ở tầng dưới nó là Frame, ở tầng trên (Transport) là Segment/Datagram. Gọi sai PDU sẽ dẫn đến nhầm lẫn chức năng giữa các tầng.`
  },
  {
    id: 'basic-tcp-ip-model-017',
    level: 'basic',
    topic: 'tcp-ip-model',
    question: `Giao thức nào KHÔNG thuộc tầng Application của TCP/IP?`,
    options: {
      A: `IP`,
      B: `HTTP`,
      C: `FTP`,
      D: `DNS`
    },
    answer: 'A',
    explanation: `IP thuộc tầng Internet, không phải Application. Các giao thức HTTP, FTP, DNS đều là các giao thức mức ứng dụng, giúp người dùng lướt web, tải file, hay phân giải tên miền. Do đó IP là đáp án sai trong nhóm Application.`
  },
  {
    id: 'basic-tcp-ip-model-018',
    level: 'basic',
    topic: 'tcp-ip-model',
    question: `Tầng Network Access của mô hình TCP/IP bao gồm những tầng nào trong OSI?`,
    options: {
      A: `Chỉ tầng Data Link (Tầng 2)`,
      B: `Physical và Data Link (Tầng 1 và 2)`,
      C: `Data Link và Network (Tầng 2 và 3)`,
      D: `Chỉ tầng Physical (Tầng 1)`
    },
    answer: 'B',
    explanation: `Tầng Network Access (hoặc Link) của TCP/IP là tầng thấp nhất, gộp chung chức năng của 2 tầng Physical (vật lý) và Data Link (liên kết dữ liệu) trong mô hình OSI. Nó xử lý cả MAC address và tín hiệu đường truyền.`
  },
  {
    id: 'basic-network-devices-019',
    level: 'basic',
    topic: 'network-devices',
    question: `Sự khác biệt chính giữa Hub và Switch là gì?`,
    options: {
      A: `Hub hoạt động ở tầng 3, Switch ở tầng 2`,
      B: `Switch kết nối các mạng khác nhau, Hub kết nối thiết bị cục bộ`,
      C: `Switch chuyển tiếp dữ liệu dựa trên địa chỉ MAC, Hub gửi broadcast`,
      D: `Hub có khả năng bảo mật cao hơn Switch`
    },
    answer: 'C',
    explanation: `Hub là thiết bị tầng 1, chỉ sao chép tín hiệu nhận được ra tất cả các cổng (broadcast), gây xung đột (collision). Switch là thiết bị tầng 2, đọc địa chỉ MAC đích để gửi dữ liệu đến đúng cổng, giúp mạng hiệu quả hơn.`,
    tip: `Hub là đồ cổ, chia sẻ băng thông. Switch thông minh hơn, chia băng thông riêng biệt.`
  },
  {
    id: 'basic-network-devices-020',
    level: 'basic',
    topic: 'network-devices',
    question: `Thiết bị nào sau đây dùng để kết nối hai mạng có địa chỉ IP (Network ID) khác nhau?`,
    options: {
      A: `Switch`,
      B: `Hub`,
      C: `Access Point`,
      D: `Router`
    },
    answer: 'D',
    explanation: `Router (Bộ định tuyến) hoạt động ở tầng 3, dùng để kết nối các mạng LAN (các Network ID) khác nhau và định tuyến dữ liệu trên Internet. Switch và Hub chỉ kết nối các thiết bị trong cùng một mạng LAN nội bộ.`
  },
  {
    id: 'basic-network-devices-021',
    level: 'basic',
    topic: 'network-devices',
    question: `Firewall (Tường lửa) có chức năng chính là gì?`,
    options: {
      A: `Lọc và kiểm soát các luồng lưu lượng mạng ra vào`,
      B: `Khuếch đại tín hiệu mạng đi xa hơn`,
      C: `Chuyển đổi tín hiệu analog thành digital`,
      D: `Cung cấp địa chỉ IP động cho máy khách`
    },
    answer: 'A',
    explanation: `Firewall là hệ thống bảo mật mạng, giám sát và kiểm soát lưu lượng dựa trên các quy tắc bảo mật được thiết lập trước. Khuếch đại là Repeater, cấp IP là DHCP, chuyển đổi tín hiệu là Modem.`
  },
  {
    id: 'basic-network-devices-022',
    level: 'basic',
    topic: 'network-devices',
    question: `Repeater được sử dụng với mục đích gì trong mạng máy tính?`,
    options: {
      A: `Phân giải tên miền thành địa chỉ IP`,
      B: `Khuếch đại và tái tạo tín hiệu để mở rộng phạm vi mạng`,
      C: `Lọc các gói tin độc hại`,
      D: `Kết nối các mạng không dây và có dây`
    },
    answer: 'B',
    explanation: `Khi tín hiệu truyền qua cáp quá dài sẽ bị suy hao. Repeater (Bộ tiếp sóng) hoạt động ở tầng 1, nhận tín hiệu suy yếu, tái tạo lại và gửi tiếp để tăng khoảng cách truyền. Nó không có chức năng lọc hay định tuyến.`
  },
  {
    id: 'basic-network-devices-023',
    level: 'basic',
    topic: 'network-devices',
    question: `Thiết bị nào có vai trò tạo ra một mạng cục bộ không dây (WLAN)?`,
    options: {
      A: `Bridge`,
      B: `Hub`,
      C: `Access Point (AP)`,
      D: `Switch L2`
    },
    answer: 'C',
    explanation: `Access Point (AP) cung cấp điểm truy cập không dây, cho phép các thiết bị Wi-Fi kết nối vào mạng có dây. Hub, Switch và Bridge truyền thống là thiết bị mạng có dây, không phát sóng Wi-Fi.`
  },
  {
    id: 'basic-network-devices-024',
    level: 'basic',
    topic: 'network-devices',
    question: `Đặc điểm nào dưới đây mô tả đúng nhất về Router?`,
    options: {
      A: `Gửi gói tin ra tất cả các cổng (Broadcast) một cách vô tội vạ`,
      B: `Chỉ đọc địa chỉ MAC để chuyển tiếp dữ liệu`,
      C: `Không hỗ trợ giao thức IP`,
      D: `Hoạt động dựa trên bảng định tuyến (Routing table)`
    },
    answer: 'D',
    explanation: `Router đọc địa chỉ IP đích của gói tin và sử dụng Bảng định tuyến (Routing table) để quyết định cổng nào sẽ gửi gói tin ra. Nó hoạt động ở tầng 3, dùng IP (không chỉ MAC), và chặn các bản tin broadcast LAN thông thường.`,
    tip: `Router sử dụng IP và Bảng định tuyến.`
  },
  {
    id: 'basic-network-devices-025',
    level: 'basic',
    topic: 'network-devices',
    question: `Modem có chức năng cơ bản là gì?`,
    options: {
      A: `Điều chế và giải điều chế tín hiệu giữa kỹ thuật số và tương tự`,
      B: `Lưu trữ và chia sẻ file trong mạng nội bộ`,
      C: `Cấp phát IP động cho các thiết bị di động`,
      D: `Bảo vệ mạng khỏi các cuộc tấn công DDoS`
    },
    answer: 'A',
    explanation: `Modem (Modulator-Demodulator) chuyển đổi tín hiệu số (digital) của máy tính thành tín hiệu tương tự (analog) để truyền qua đường dây điện thoại/cáp quang, và ngược lại. Nó là cầu nối giữa mạng nội bộ và nhà cung cấp ISP.`
  },
  {
    id: 'basic-network-devices-026',
    level: 'basic',
    topic: 'network-devices',
    question: `Bridge (Cầu nối) thường được sử dụng để làm gì?`,
    options: {
      A: `Kết nối máy tính với Internet qua mạng điện thoại`,
      B: `Nối và chia một mạng LAN thành nhiều vùng va chạm nhỏ hơn`,
      C: `Ngăn chặn các cuộc tấn công mạng từ bên ngoài`,
      D: `Kết nối trực tiếp cáp quang với cáp đồng`
    },
    answer: 'B',
    explanation: `Bridge hoạt động ở tầng 2, có thể chia một mạng LAN lớn thành nhiều phân đoạn (segment) để giảm thiểu Collision Domain (vùng va chạm). Dù hiện nay Switch (Multiport Bridge) phổ biến hơn, Bridge vẫn là khái niệm căn bản chia mạng.`
  },
  {
    id: 'basic-network-devices-027',
    level: 'basic',
    topic: 'network-devices',
    question: `Khi nói về Collision Domain (Vùng va chạm tín hiệu), điều nào sau đây là đúng?`,
    options: {
      A: `Tất cả các cổng của Switch chung một vùng va chạm`,
      B: `Mỗi cổng của Hub là một vùng va chạm riêng biệt`,
      C: `Mỗi cổng của Switch là một vùng va chạm riêng biệt`,
      D: `Router không ngăn chặn được vùng va chạm`
    },
    answer: 'C',
    explanation: `Switch chia nhỏ vùng va chạm; mỗi cổng của nó kết nối với một thiết bị tạo thành một vùng va chạm (Collision Domain) độc lập. Hub thì gộp tất cả các cổng vào chung một vùng, dễ gây xung đột.`,
    tip: `Hub = 1 Collision Domain. Switch = N Collision Domain (tương ứng N cổng).`
  },
  {
    id: 'basic-ip-addressing-028',
    level: 'basic',
    topic: 'ip-addressing',
    question: `Địa chỉ IPv4 bao gồm bao nhiêu bit?`,
    options: {
      A: `64 bit`,
      B: `128 bit`,
      C: `48 bit`,
      D: `32 bit`
    },
    answer: 'D',
    explanation: `Địa chỉ IPv4 được cấu thành từ 32 bit nhị phân, thường được biểu diễn dưới dạng 4 số thập phân (ví dụ 192.168.1.1). IPv6 dùng 128 bit, MAC dùng 48 bit.`
  },
  {
    id: 'basic-ip-addressing-029',
    level: 'basic',
    topic: 'ip-addressing',
    question: `Đâu là dải địa chỉ Private (IP dùng riêng) của lớp C?`,
    options: {
      A: `192.168.0.0 - 192.168.255.255`,
      B: `10.0.0.0 - 10.255.255.255`,
      C: `172.16.0.0 - 172.31.255.255`,
      D: `169.254.0.0 - 169.254.255.255`
    },
    answer: 'A',
    explanation: `Dải 192.168.x.x là Private IP thuộc lớp C, phổ biến trong mạng gia đình. Dải 10.x.x.x thuộc lớp A, 172.16.x.x - 172.31.x.x thuộc lớp B. 169.254.x.x là APIPA (link-local).`,
    tip: `Nhà bạn dùng Wi-Fi thường thấy IP 192.168.1.x, đó chính là Private Lớp C.`
  },
  {
    id: 'basic-ip-addressing-030',
    level: 'basic',
    topic: 'ip-addressing',
    question: `Địa chỉ MAC có chiều dài bao nhiêu bit?`,
    options: {
      A: `32 bit`,
      B: `48 bit`,
      C: `64 bit`,
      D: `128 bit`
    },
    answer: 'B',
    explanation: `Địa chỉ MAC (Media Access Control) là địa chỉ vật lý, gồm 48 bit (6 byte), thường được viết dưới dạng thập lục phân (hex) như 00:1A:2B:3C:4D:5E. 32 bit là IPv4, 128 bit là IPv6.`
  },
  {
    id: 'basic-ip-addressing-031',
    level: 'basic',
    topic: 'ip-addressing',
    question: `Địa chỉ IP Loopback thường dùng để kiểm tra card mạng trên máy nội bộ (localhost) là?`,
    options: {
      A: `192.168.1.1`,
      B: `10.0.0.1`,
      C: `127.0.0.1`,
      D: `255.255.255.255`
    },
    answer: 'C',
    explanation: `Dải 127.x.x.x được quy ước là địa chỉ Loopback. Gửi gói tin tới 127.0.0.1 sẽ vòng ngược lại máy hiện tại để kiểm tra ngăn xếp TCP/IP có hoạt động hay không. Các IP khác không có chức năng này.`
  },
  {
    id: 'basic-ip-addressing-032',
    level: 'basic',
    topic: 'ip-addressing',
    question: `Trong IPv4, Subnet Mask mặc định của mạng lớp A (Class A) là gì?`,
    options: {
      A: `255.255.0.0`,
      B: `255.255.255.0`,
      C: `255.255.255.255`,
      D: `255.0.0.0`
    },
    answer: 'D',
    explanation: `Mạng lớp A sử dụng 8 bit đầu tiên (1 byte) cho Network ID, do đó Subnet Mask mặc định là 255.0.0.0 (/8). Lớp B là 255.255.0.0 và lớp C là 255.255.255.0.`
  },
  {
    id: 'basic-ip-addressing-033',
    level: 'basic',
    topic: 'ip-addressing',
    question: `Địa chỉ broadcast của mạng 192.168.1.0/24 là?`,
    options: {
      A: `192.168.1.255`,
      B: `192.168.1.1`,
      C: `192.168.1.254`,
      D: `192.168.255.255`
    },
    answer: 'A',
    explanation: `Mạng /24 có Subnet Mask là 255.255.255.0. Phần Host ID gồm 8 bit cuối. Địa chỉ Broadcast là địa chỉ có tất cả các bit Host ID bật lên 1, tức là đuôi .255. Do đó 192.168.1.255 là đúng.`
  },
  {
    id: 'basic-ip-addressing-034',
    level: 'basic',
    topic: 'ip-addressing',
    question: `Đâu là đặc điểm của địa chỉ IPv6 so với IPv4?`,
    options: {
      A: `Có số lượng địa chỉ ít hơn IPv4`,
      B: `Sử dụng 128 bit và viết bằng hệ thập lục phân (hexadecimal)`,
      C: `Không hỗ trợ tính năng bảo mật (IPsec)`,
      D: `Chỉ dùng để cấp phát IP trong mạng LAN`
    },
    answer: 'B',
    explanation: `IPv6 ra đời để giải quyết cạn kiệt không gian địa chỉ IPv4. Nó dài 128 bit (không gian cực lớn) và được viết bằng các cụm số Hex (VD: 2001:0db8::). Nó cũng tích hợp sẵn IPsec, hỗ trợ bảo mật tốt hơn.`
  },
  {
    id: 'basic-ip-addressing-035',
    level: 'basic',
    topic: 'ip-addressing',
    question: `Khái niệm NAT (Network Address Translation) dùng để làm gì?`,
    options: {
      A: `Định tuyến các gói tin giữa hai lớp mạng`,
      B: `Dịch tên miền thành IP`,
      C: `Chuyển đổi giữa Private IP và Public IP`,
      D: `Cấp phát địa chỉ IP tự động cho Client`
    },
    answer: 'C',
    explanation: `NAT giúp chuyển đổi địa chỉ IP Private (dùng nội bộ) thành IP Public (có thể định tuyến trên Internet) và ngược lại. Điều này giúp nhiều máy tính chung mạng LAN có thể ra Internet bằng 1 IP Public, tiết kiệm IPv4.`,
    tip: `NAT giống như lễ tân công ty, ẩn số nội bộ để giao tiếp với bên ngoài bằng số tổng đài.`
  },
  {
    id: 'basic-ip-addressing-036',
    level: 'basic',
    topic: 'ip-addressing',
    question: `Địa chỉ IPv4 nào sau đây thuộc Lớp B (Class B)?`,
    options: {
      A: `10.10.10.10`,
      B: `192.168.2.5`,
      C: `224.0.0.5`,
      D: `172.16.1.10`
    },
    answer: 'D',
    explanation: `Dải IP Lớp B nằm từ 128.0.0.0 đến 191.255.255.255. IP 172.16.1.10 nằm trong khoảng này. 10.x là Lớp A, 192.168.x là Lớp C, còn 224.x thuộc Lớp D (Multicast).`
  },
  {
    id: 'basic-protocols-basic-037',
    level: 'basic',
    topic: 'protocols-basic',
    question: `Giao thức nào chịu trách nhiệm phân giải tên miền (VD: google.com) thành địa chỉ IP?`,
    options: {
      A: `DNS`,
      B: `DHCP`,
      C: `FTP`,
      D: `HTTP`
    },
    answer: 'A',
    explanation: `DNS (Domain Name System) hoạt động như danh bạ điện thoại của Internet, biến các tên miền dễ nhớ thành địa chỉ IP để các máy tính có thể kết nối. DHCP cấp IP, FTP truyền file, HTTP dùng cho web.`
  },
  {
    id: 'basic-protocols-basic-038',
    level: 'basic',
    topic: 'protocols-basic',
    question: `Giao thức HTTP và HTTPS sử dụng các cổng (Port) mặc định nào?`,
    options: {
      A: `20 và 21`,
      B: `80 và 443`,
      C: `25 và 110`,
      D: `22 và 23`
    },
    answer: 'B',
    explanation: `HTTP sử dụng cổng mặc định là 80 (không mã hóa) và HTTPS sử dụng cổng 443 (được mã hóa TLS/SSL). 20/21 là FTP, 25/110 là Mail, 22/23 là SSH/Telnet.`,
    tip: `Gõ trang web không bảo mật là port 80, trang có ổ khóa (HTTPS) là port 443.`
  },
  {
    id: 'basic-protocols-basic-039',
    level: 'basic',
    topic: 'protocols-basic',
    question: `Giao thức DHCP có nhiệm vụ chính là gì?`,
    options: {
      A: `Đảm bảo truyền nhận file an toàn`,
      B: `Mã hóa nội dung thư điện tử`,
      C: `Cấp phát tự động địa chỉ IP và các thông số mạng cho thiết bị`,
      D: `Tìm đường đi ngắn nhất cho gói tin`
    },
    answer: 'C',
    explanation: `DHCP (Dynamic Host Configuration Protocol) tự động cấp IP, Subnet Mask, Default Gateway và DNS Server cho thiết bị (Client) khi nó kết nối vào mạng, giúp giảm công sức cấu hình thủ công.`
  },
  {
    id: 'basic-protocols-basic-040',
    level: 'basic',
    topic: 'protocols-basic',
    question: `Đâu là giao thức gửi email đi từ máy khách (Client) lên máy chủ (Server)?`,
    options: {
      A: `POP3`,
      B: `IMAP`,
      C: `SNMP`,
      D: `SMTP`
    },
    answer: 'D',
    explanation: `SMTP (Simple Mail Transfer Protocol) được dùng để gửi email đi. Trong khi đó, POP3 và IMAP dùng để nhận/kéo email từ Server về Client. SNMP là giao thức quản lý thiết bị mạng.`,
    tip: `Gửi (Push) = SMTP. Nhận (Pull) = POP3/IMAP.`
  },
  {
    id: 'basic-protocols-basic-041',
    level: 'basic',
    topic: 'protocols-basic',
    question: `Sự khác biệt chính giữa SSH và Telnet là gì?`,
    options: {
      A: `SSH mã hóa luồng dữ liệu, Telnet gửi dữ liệu dạng văn bản rõ (cleartext)`,
      B: `SSH dùng để truyền file, Telnet dùng để điều khiển từ xa`,
      C: `SSH hoạt động ở UDP, Telnet ở TCP`,
      D: `Telnet bảo mật tốt hơn SSH`
    },
    answer: 'A',
    explanation: `Cả SSH (Port 22) và Telnet (Port 23) đều dùng để điều khiển thiết bị từ xa qua giao diện dòng lệnh. Nhưng SSH mã hóa dữ liệu (bao gồm cả mật khẩu), an toàn hơn nhiều so với Telnet (gửi cleartext).`
  },
  {
    id: 'basic-protocols-basic-042',
    level: 'basic',
    topic: 'protocols-basic',
    question: `Giao thức nào cung cấp chức năng truyền tải file và dùng cổng 20, 21?`,
    options: {
      A: `TFTP`,
      B: `FTP`,
      C: `SMTP`,
      D: `HTTP`
    },
    answer: 'B',
    explanation: `FTP (File Transfer Protocol) dùng port 21 để kết nối và kiểm soát, port 20 để truyền tải dữ liệu. TFTP cũng truyền file nhưng dùng UDP cổng 69. HTTP truyền web, SMTP truyền mail.`
  },
  {
    id: 'basic-protocols-basic-043',
    level: 'basic',
    topic: 'protocols-basic',
    question: `Giao thức nào cho phép đồng bộ hóa dữ liệu email trên nhiều thiết bị (Server và Client luôn nhất quán)?`,
    options: {
      A: `POP3`,
      B: `SMTP`,
      C: `IMAP`,
      D: `ICMP`
    },
    answer: 'C',
    explanation: `IMAP (Internet Message Access Protocol) cho phép người dùng đọc mail trên server mà không xóa nó, giúp đồng bộ hóa trên nhiều thiết bị (điện thoại, máy tính). POP3 thường tải về rồi xóa trên Server.`
  },
  {
    id: 'basic-protocols-basic-044',
    level: 'basic',
    topic: 'protocols-basic',
    question: `Giao thức Transport nào cung cấp kết nối tin cậy (có xác nhận, truyền lại khi mất)?`,
    options: {
      A: `UDP`,
      B: `IP`,
      C: `ARP`,
      D: `TCP`
    },
    answer: 'D',
    explanation: `TCP (Transmission Control Protocol) là giao thức hướng kết nối (connection-oriented), đảm bảo dữ liệu đến nơi an toàn, đúng thứ tự thông qua cơ chế báo nhận (ACK) và truyền lại. UDP không có các cơ chế này.`
  },
  {
    id: 'basic-topology-045',
    level: 'basic',
    topic: 'topology',
    question: `Đặc điểm của cấu trúc mạng hình sao (Star Topology) là gì?`,
    options: {
      A: `Các thiết bị kết nối với một thiết bị trung tâm (Hub/Switch)`,
      B: `Tất cả các máy tính nối thành một vòng tròn khép kín`,
      C: `Tất cả các máy tính dùng chung một đường cáp chính`,
      D: `Mỗi máy tính nối trực tiếp với tất cả máy tính còn lại`
    },
    answer: 'A',
    explanation: `Trong Star Topology, một thiết bị trung tâm (như Switch) kết nối các node lại với nhau. Nếu một cáp nhánh hỏng, chỉ máy đó mất mạng; nhưng nếu Switch hỏng, toàn mạng sập. Các đáp án khác mô tả Ring, Bus và Mesh.`,
    tip: `Star = Ngôi sao. Thiết bị trung tâm là nhân, các dây cắm ra ngoài là các tia sáng.`
  },
  {
    id: 'basic-topology-046',
    level: 'basic',
    topic: 'topology',
    question: `Mô hình mạng mà tất cả các thiết bị kết nối chung vào một đường cáp chính gọi là gì?`,
    options: {
      A: `Ring Topology`,
      B: `Bus Topology`,
      C: `Mesh Topology`,
      D: `Tree Topology`
    },
    answer: 'B',
    explanation: `Bus Topology sử dụng một trục cáp chính duy nhất (backbone). Tất cả các tín hiệu đi qua cáp này, hai đầu có điện trở (Terminator) chặn dội tín hiệu. Nếu đứt cáp chính, toàn mạng sẽ bị lỗi.`
  },
  {
    id: 'basic-topology-047',
    level: 'basic',
    topic: 'topology',
    question: `Trong Mesh Topology (Mạng lưới) dạng Full-Mesh, ưu điểm lớn nhất là gì?`,
    options: {
      A: `Dễ dàng cài đặt và tốn ít dây cáp nhất`,
      B: `Chi phí triển khai cực kỳ rẻ`,
      C: `Tính dự phòng (Redundancy) rất cao, khó bị sập toàn mạng`,
      D: `Không yêu cầu bất kỳ thiết bị định tuyến nào`
    },
    answer: 'C',
    explanation: `Trong Full-Mesh, mỗi thiết bị đều kết nối trực tiếp đến tất cả các thiết bị khác, tạo ra nhiều đường đi thay thế. Ưu điểm là độ tin cậy và khả năng chịu lỗi tối đa, nhưng nhược điểm là rất tốn cáp và tốn kém.`
  },
  {
    id: 'basic-topology-048',
    level: 'basic',
    topic: 'topology',
    question: `Nhược điểm lớn nhất của Ring Topology (Hình vòng) cơ bản là gì?`,
    options: {
      A: `Tốc độ truyền cực kỳ chậm do xung đột liên tục`,
      B: `Không có khả năng mở rộng thêm thiết bị`,
      C: `Mỗi thiết bị cần quá nhiều cổng kết nối`,
      D: `Đứt cáp ở một điểm có thể làm ngưng trệ toàn bộ mạng`
    },
    answer: 'D',
    explanation: `Ở mạng Ring, dữ liệu truyền theo một chiều vòng quanh. Nếu một node bị hỏng hoặc dây bị đứt một điểm, vòng lặp bị phá vỡ và toàn bộ mạng có thể ngưng trệ (nếu không có cáp dự phòng Dual Ring).`
  },
  {
    id: 'basic-topology-049',
    level: 'basic',
    topic: 'topology',
    question: `Kiến trúc mạng Hybrid (Hỗn hợp) là gì?`,
    options: {
      A: `Sự kết hợp của 2 hoặc nhiều dạng Topology khác nhau`,
      B: `Một mạng chỉ dùng cáp quang trộn với Wi-Fi`,
      C: `Mạng máy tính có trộn lẫn Windows và Linux`,
      D: `Mạng sử dụng cùng lúc địa chỉ IPv4 và IPv6`
    },
    answer: 'A',
    explanation: `Hybrid Topology ghép nhiều mô hình cơ bản (ví dụ kết nối các mạng hình Star lại với nhau bằng một đường cáp Bus tạo thành Star-Bus). Các đáp án khác nói về hệ điều hành hoặc môi trường vật lý, không phải Topology logic/vật lý.`
  },
  {
    id: 'basic-topology-050',
    level: 'basic',
    topic: 'topology',
    question: `Tree Topology (Hình cây) là sự mở rộng và kết hợp chủ yếu của 2 loại topology nào?`,
    options: {
      A: `Ring và Mesh`,
      B: `Star và Bus`,
      C: `Bus và Ring`,
      D: `Star và Mesh`
    },
    answer: 'B',
    explanation: `Tree Topology tổ chức mạng theo phân cấp (hierarchical). Nó giống như nhiều mạng Star được liên kết vào chung một trục dây (Bus), phù hợp cho việc mở rộng mạng LAN tại các công ty lớn (có tầng Core, Distribution, Access).`
  },
  {
    id: 'basic-topology-051',
    level: 'basic',
    topic: 'topology',
    question: `Nếu có 5 máy tính kết nối theo dạng Full-Mesh, số lượng cáp mạng cần thiết là bao nhiêu?`,
    options: {
      A: `5 sợi cáp`,
      B: `20 sợi cáp`,
      C: `10 sợi cáp`,
      D: `25 sợi cáp`
    },
    answer: 'C',
    explanation: `Công thức tính số kết nối trong Full-Mesh là n(n-1)/2, với n là số thiết bị. Áp dụng: 5*(5-1)/2 = 5*4/2 = 10 sợi cáp. Điều này cho thấy Full-Mesh tốn rất nhiều cáp khi số máy tăng lên.`,
    tip: `Công thức: n(n-1)/2`
  },
  {
    id: 'basic-topology-052',
    level: 'basic',
    topic: 'topology',
    question: `Mạng Internet hiện nay phần lớn mang cấu trúc Topology nào trên diện rộng?`,
    options: {
      A: `Star (Ngôi sao)`,
      B: `Bus (Đường trục đơn)`,
      C: `Ring (Vòng đơn)`,
      D: `Mesh (Mạng lưới / Hỗn hợp lưới)`
    },
    answer: 'D',
    explanation: `Internet là mạng kết nối khổng lồ của vô số Router. Đường đi giữa các trạm có rất nhiều hướng khác nhau, cung cấp khả năng dự phòng khi đứt cáp. Đây là đặc thù của cấu trúc lưới (Mesh/Partial-Mesh).`
  },
  {
    id: 'basic-lan-wan-053',
    level: 'basic',
    topic: 'lan-wan',
    question: `LAN (Local Area Network) là gì?`,
    options: {
      A: `Mạng kết nối cục bộ trong phạm vi nhỏ (nhà, văn phòng)`,
      B: `Mạng kết nối toàn cầu qua vệ tinh`,
      C: `Mạng di động 5G`,
      D: `Mạng chuyên dành cho khu vực thành phố lớn`
    },
    answer: 'A',
    explanation: `LAN là mạng cục bộ, kết nối các thiết bị trong phạm vi nhỏ lẻ (vài mét đến vài km) như gia đình, trường học, công ty. Truyền thông trong LAN thường có tốc độ rất cao và chi phí thấp.`
  },
  {
    id: 'basic-lan-wan-054',
    level: 'basic',
    topic: 'lan-wan',
    question: `Mạng WAN (Wide Area Network) có đặc điểm nổi bật nào?`,
    options: {
      A: `Chỉ sử dụng sóng Wi-Fi để truyền tải`,
      B: `Bao phủ khu vực địa lý rộng lớn (quốc gia, lục địa)`,
      C: `Băng thông luôn cao hơn và chi phí thấp hơn mạng LAN`,
      D: `Hoàn toàn do một công ty tư nhân sở hữu tất cả đường dây`
    },
    answer: 'B',
    explanation: `WAN kết nối các LAN lại với nhau trên phạm vi rộng (ví dụ kết nối chi nhánh công ty ở Hà Nội và TP.HCM, hoặc chính mạng Internet). Nó dựa vào hạ tầng viễn thông và có thể có tốc độ chậm hơn LAN.`
  },
  {
    id: 'basic-lan-wan-055',
    level: 'basic',
    topic: 'lan-wan',
    question: `Cụm từ MAN (Metropolitan Area Network) ám chỉ mạng quy mô cỡ nào?`,
    options: {
      A: `Cỡ toàn cầu`,
      B: `Cỡ một căn phòng nhỏ`,
      C: `Cỡ một thành phố hoặc khu đô thị lớn`,
      D: `Cỡ một toà nhà văn phòng`
    },
    answer: 'C',
    explanation: `MAN lớn hơn LAN nhưng nhỏ hơn WAN, chuyên cung cấp kết nối trong phạm vi một thành phố (khoảng vài chục kilomet). Mạng cáp quang truyền hình cáp của thành phố là một ví dụ.`
  },
  {
    id: 'basic-lan-wan-056',
    level: 'basic',
    topic: 'lan-wan',
    question: `Phương thức truyền Unicast nghĩa là gì?`,
    options: {
      A: `Gửi dữ liệu tới tất cả các thiết bị trong mạng (1 to All)`,
      B: `Gửi dữ liệu tới một nhóm thiết bị nhất định (1 to Many)`,
      C: `Không gửi dữ liệu nào`,
      D: `Gửi dữ liệu từ một nguồn tới chính xác một đích (1 to 1)`
    },
    answer: 'D',
    explanation: `Unicast là kiểu truyền phổ biến nhất, từ 1 máy nguồn đến 1 máy đích (Ví dụ lướt web, tải file). Broadcast là gửi cho tất cả, Multicast là gửi cho 1 nhóm máy tính có đăng ký nhận.`
  },
  {
    id: 'basic-lan-wan-057',
    level: 'basic',
    topic: 'lan-wan',
    question: `Phát biểu nào đúng về băng thông (Bandwidth) và Thông lượng (Throughput)?`,
    options: {
      A: `Bandwidth là lý thuyết, Throughput là tốc độ thực tế đo được`,
      B: `Bandwidth luôn bằng Throughput`,
      C: `Throughput chỉ tồn tại trên mạng LAN`,
      D: `Bandwidth không ảnh hưởng đến thời gian tải file`
    },
    answer: 'A',
    explanation: `Bandwidth (băng thông) là tốc độ truyền dẫn tối đa theo thiết kế (ví dụ gói cước 100Mbps). Throughput (thông lượng) là tốc độ truyền dữ liệu thực tế tại một thời điểm, thường thấp hơn băng thông do nhiễu, overhead, độ trễ.`,
    tip: `Mua mạng 100Mbps (Bandwidth) nhưng down file chỉ được 80Mbps (Throughput).`
  },
  {
    id: 'basic-lan-wan-058',
    level: 'basic',
    topic: 'lan-wan',
    question: `Kiểu truyền Broadcast (Phát sóng) KHÔNG nên bị lạm dụng trong LAN vì lý do gì?`,
    options: {
      A: `Nó yêu cầu phải mua Router đắt tiền`,
      B: `Gây nghẽn mạng do tạo ra quá nhiều bản tin vô ích (Broadcast Storm)`,
      C: `Nó sẽ xóa dữ liệu trên các máy đích`,
      D: `Làm cho địa chỉ MAC bị trùng lặp`
    },
    answer: 'B',
    explanation: `Mọi thiết bị nhận Broadcast đều phải xử lý gói tin để xem có thông tin mình cần không. Lạm dụng Broadcast hoặc có vòng lặp mạng sẽ tạo 'bão broadcast', làm cạn kiệt tài nguyên mạng LAN.`
  },
  {
    id: 'basic-lan-wan-059',
    level: 'basic',
    topic: 'lan-wan',
    question: `Trong phương thức truyền thông Half-Duplex, quá trình truyền và nhận diễn ra thế nào?`,
    options: {
      A: `Cả hai bên truyền và nhận cùng một lúc`,
      B: `Chỉ một bên truyền, bên kia chỉ được nhận (mãi mãi)`,
      C: `Cả hai bên có thể truyền và nhận, nhưng không cùng lúc`,
      D: `Phải có 3 thiết bị mới truyền được`
    },
    answer: 'C',
    explanation: `Half-Duplex giống như máy bộ đàm (Walkie-talkie). Mỗi bên đều có thể nói hoặc nghe, nhưng tại một thời điểm chỉ một người nói, người kia phải nghe. Để nói cùng lúc phải dùng Full-Duplex.`,
    tip: `Bộ đàm = Half-Duplex. Điện thoại di động = Full-Duplex.`
  },
  {
    id: 'basic-lan-wan-060',
    level: 'basic',
    topic: 'lan-wan',
    question: `Giao tiếp Multicast đặc biệt hữu ích trong trường hợp nào?`,
    options: {
      A: `Gửi email cho một người bạn`,
      B: `Ping để kiểm tra xem một máy tính có hoạt động không`,
      C: `Tìm kiếm địa chỉ MAC bằng giao thức ARP`,
      D: `Truyền hình trực tuyến (IPTV) hoặc hội nghị video nhiều điểm`
    },
    answer: 'D',
    explanation: `Multicast (1-to-many) tiết kiệm băng thông khi một nguồn phát video cho hàng nghìn người xem cùng lúc. Thay vì nhân bản video ra hàng nghìn luồng (Unicast), router sẽ tối ưu gửi 1 luồng và rẽ nhánh khi cần.`
  },
  {
    id: 'basic-firewall-061',
    level: 'basic',
    topic: 'firewall',
    question: `Chức năng cơ bản và quan trọng nhất của Tường lửa (Firewall) trong mạng máy tính là gì?`,
    options: {
      A: `Kiểm soát, lọc lưu lượng mạng vào/ra và ngăn chặn truy cập trái phép`,
      B: `Tăng tốc độ kết nối Internet và giảm độ trễ (latency)`,
      C: `Cấp phát địa chỉ IP động cho các thiết bị trong mạng LAN`,
      D: `Khuếch đại tín hiệu Wi-Fi và mở rộng phạm vi phủ sóng`
    },
    answer: 'A',
    explanation: `Tường lửa (Firewall) là một hệ thống bảo mật mạng hoạt động như một rào chắn giữa mạng nội bộ tin cậy (LAN) và mạng bên ngoài không tin cậy (Internet). Nhiệm vụ cốt lõi của nó là theo dõi, kiểm soát và lọc các luồng dữ liệu (traffic) ra vào dựa trên các quy tắc bảo mật được thiết lập trước.`,
    tip: `Firewall = Bức tường lửa ngăn chặn kẻ lạ đột nhập vào mạng của bạn.`
  },
  {
    id: 'basic-firewall-062',
    level: 'basic',
    topic: 'firewall',
    question: `Trong mô hình mạng doanh nghiệp cơ bản, Network Firewall (Tường lửa mạng) thường được triển khai ở vị trí nào?`,
    options: {
      A: `Cài đặt trực tiếp trên từng máy in hoặc điện thoại thông minh`,
      B: `Đặt tại ranh giới kết nối giữa mạng nội bộ (LAN) và mạng ngoài (Internet)`,
      C: `Đặt bên trong bộ vi xử lý (CPU) của máy chủ cơ sở dữ liệu`,
      D: `Đặt tại các ổ cắm điện âm tường của văn phòng`
    },
    answer: 'B',
    explanation: `Network Firewall (Tường lửa mạng) là thiết bị phần cứng chuyên dụng hoặc thiết bị biên được đặt ở vị trí cổng ngõ (Gateway/Perimeter), nơi giao thoa giữa mạng nội bộ tin cậy và Internet. Nhờ đặt tại vị trí cửa ngõ này, tường lửa có thể giám sát và bảo vệ toàn bộ các thiết bị bên trong mạng.`,
    tip: `Tường lửa mạng giống như cổng bảo vệ của một tòa nhà chung cư.`
  },
  {
    id: 'basic-firewall-063',
    level: 'basic',
    topic: 'firewall',
    question: `Sự khác biệt chính giữa Hardware Firewall (phần cứng) và Software Firewall (phần mềm) là gì?`,
    options: {
      A: `Hardware Firewall chỉ chặn virus, còn Software Firewall chỉ lọc địa chỉ MAC`,
      B: `Software Firewall không cần hệ điều hành để hoạt động`,
      C: `Hardware Firewall là thiết bị vật lý độc lập bảo vệ cả mạng, còn Software Firewall cài trực tiếp trên từng máy tính`,
      D: `Hardware Firewall miễn phí hoàn toàn, còn Software Firewall luôn có giá thành rất cao`
    },
    answer: 'C',
    explanation: `Hardware Firewall (tường lửa phần cứng) là thiết bị độc lập chuyên biệt (như Cisco ASA, Fortinet FortiGate) bảo vệ toàn bộ mạng nội bộ từ cửa ngõ. Trong khi đó, Software Firewall (tường lửa phần mềm, ví dụ Windows Defender Firewall) được cài đặt và chạy trên từng hệ điều hành máy khách để bảo vệ cục bộ máy tính đó (Host-based Firewall).`
  },
  {
    id: 'basic-firewall-064',
    level: 'basic',
    topic: 'firewall',
    question: `Trong quản trị tường lửa, chính sách bảo mật "Default Deny" (ngầm định từ chối) có ý nghĩa như thế nào?`,
    options: {
      A: `Cho phép tất cả mọi lưu lượng đi qua trừ những lưu lượng được khai báo chặn`,
      B: `Tắt tường lửa mỗi khi có lưu lượng truy cập cao để tránh quá tải`,
      C: `Tự động xóa vĩnh viễn mọi gói tin có kích thước lớn hơn 1500 byte`,
      D: `Chặn tất cả các lưu lượng truy cập, chỉ cho phép những lưu lượng được chỉ định rõ ràng`
    },
    answer: 'D',
    explanation: `Chính sách "Default Deny" (hay Whitelist-based security) là nguyên tắc vàng trong bảo mật mạng: Mọi luồng dữ liệu đều bị từ chối/chặn theo mặc định. Chỉ những luồng dữ liệu nào khớp với các quy tắc cho phép (Permit/Allow) được cấu hình rõ ràng mới được đi qua tường lửa. Nguyên tắc này an toàn hơn rất nhiều so với "Default Allow".`,
    tip: `Default Deny: Ai không có vé mời thì tuyệt đối không được vào cửa.`
  },
  {
    id: 'basic-firewall-065',
    level: 'basic',
    topic: 'firewall',
    question: `Windows Defender Firewall trên hệ điều hành Microsoft Windows thuộc loại tường lửa nào?`,
    options: {
      A: `Host-based / Personal Firewall (Tường lửa cá nhân trên máy trạm)`,
      B: `Network Perimeter Firewall (Tường lửa phần cứng biên)`,
      C: `Cloud Proxy Load Balancer`,
      D: `Hardware ASIC Core Switch`
    },
    answer: 'A',
    explanation: `Windows Defender Firewall là một Host-based Firewall (tường lửa trên máy chủ/máy trạm cá nhân). Nó kiểm soát lưu lượng mạng vào và ra của chính chiếc máy tính đó, ngăn ngừa các phần mềm độc hại mở cổng trái phép hoặc máy tính bị tấn công từ các máy khác trong cùng mạng nội bộ.`,
    tip: `Host-based = cài và bảo vệ trên từng máy tính cá nhân.`
  },
  {
    id: 'basic-firewall-066',
    level: 'basic',
    topic: 'firewall',
    question: `Phát biểu nào sau đây phân biệt ĐÚNG nhất giữa Firewall (Tường lửa) và Antivirus (Phần mềm diệt virus)?`,
    options: {
      A: `Firewall và Antivirus là hai tên gọi khác nhau của cùng một phần mềm`,
      B: `Firewall giám sát và lọc luồng dữ liệu mạng, còn Antivirus phát hiện và tiêu diệt mã độc trong tệp tin và bộ nhớ`,
      C: `Firewall chỉ chạy trên điện thoại di động, Antivirus chỉ chạy trên máy chủ Linux`,
      D: `Antivirus ngăn chặn tấn công mạng ở cổng vào, còn Firewall chỉ quét các file tải về`
    },
    answer: 'B',
    explanation: `Firewall và Antivirus bổ trợ cho nhau chứ không thay thế nhau. Firewall đóng vai trò "người gác cổng" kiểm soát luồng giao thông mạng vào/ra (IP, Port, Protocol). Antivirus là "thanh tra" quét tìm, cách ly và tiêu diệt virus, mã độc, trojan đã hoặc đang xâm nhập vào các file hoặc bộ nhớ của hệ thống.`
  },
  {
    id: 'basic-firewall-067',
    level: 'basic',
    topic: 'firewall',
    question: `Một Packet Filtering Firewall (Tường lửa lọc gói tin cơ bản) thường kiểm tra thông tin nào trong gói tin để đưa ra quyết định cho phép hoặc chặn?`,
    options: {
      A: `Tên người dùng đã đăng nhập vào hệ thống mạng xã hội`,
      B: `Nhiệt độ hiện tại của bo mạch chủ và tốc độ quay quạt tản nhiệt`,
      C: `Địa chỉ IP nguồn/đích, Cổng (Port) nguồn/đích và Giao thức mạng (TCP/UDP/ICMP)`,
      D: `Chữ ký số hợp đồng thương mại điện tử`
    },
    answer: 'C',
    explanation: `Tường lửa lọc gói cơ bản (Packet Filtering) hoạt động tại Tầng 3 (Network) và Tầng 4 (Transport). Nó kiểm tra bộ thông tin 5-tuple: Địa chỉ IP nguồn, Địa chỉ IP đích, Port nguồn, Port đích và Giao thức (Protocol như TCP, UDP, ICMP) trong header gói tin để so khớp với tập luật (rule set).`,
    tip: `Bộ lọc gói tin cơ bản chỉ đọc header IP và Port (Layer 3 & 4), không đọc nhiệt độ máy hay tên người dùng.`
  },
  {
    id: 'basic-firewall-068',
    level: 'basic',
    topic: 'firewall',
    question: `Trong cấu hình tường lửa, thuật ngữ "Inbound Traffic" dùng để chỉ loại lưu lượng nào?`,
    options: {
      A: `Lưu lượng truyền giữa các tiến trình bên trong CPU máy chủ`,
      B: `Lưu lượng được gửi từ một máy trong mạng LAN đi ra ngoài Internet`,
      C: `Lưu lượng sao lưu dự phòng giữa 2 ổ cứng gắn ngoài`,
      D: `Lưu lượng từ mạng ngoài (Internet) tìm cách đi vào mạng nội bộ (LAN)`
    },
    answer: 'D',
    explanation: `Inbound Traffic (lưu lượng chiều vào) là các gói tin có nguồn gốc từ bên ngoài (Internet hoặc các mạng khác) gửi tới hệ thống hoặc mạng nội bộ của bạn. Ngược lại, Outbound Traffic (lưu lượng chiều ra) là lưu lượng do thiết bị nội bộ khởi tạo gửi ra thế giới bên ngoài. Tường lửa thường kiểm soát rất chặt chẽ chiều Inbound để ngăn kẻ xâm nhập.`
  },
  {
    id: 'basic-osi-model-069',
    level: 'basic',
    topic: 'osi-model',
    question: `Tại mô hình OSI, tầng nào chịu trách nhiệm kiểm soát lỗi phần cứng, đóng gói dữ liệu thành các khung (frame) và sử dụng địa chỉ MAC?`,
    options: {
      A: `Tầng Data Link (Liên kết dữ liệu)`,
      B: `Tầng Network (Mạng)`,
      C: `Tầng Transport (Giao vận)`,
      D: `Tầng Physical (Vật lý)`
    },
    answer: 'A',
    explanation: `Tầng Data Link (Tầng 2) đóng gói dữ liệu thành các Frame và sử dụng địa chỉ MAC để giao tiếp trong cùng một mạng LAN. Tầng này cũng đảm nhiệm việc kiểm tra lỗi thông qua cơ chế FCS (Frame Check Sequence). Các tầng khác có chức năng định tuyến, giao vận hoặc truyền tín hiệu vật lý.`,
    tip: `MAC và Frame luôn gắn liền với Tầng 2 - Data Link.`
  },
  {
    id: 'basic-osi-model-070',
    level: 'basic',
    topic: 'osi-model',
    question: `Trong mô hình OSI, thuật ngữ PDU (Protocol Data Unit) ở tầng Transport được gọi là gì?`,
    options: {
      A: `Frame`,
      B: `Segment`,
      C: `Packet`,
      D: `Bit`
    },
    answer: 'B',
    explanation: `Ở tầng Transport, dữ liệu được chia nhỏ thành các đơn vị gọi là Segment (nếu dùng TCP) hoặc Datagram (nếu dùng UDP). Frame thuộc về tầng Data Link, Packet thuộc về tầng Network, và Bit thuộc về tầng Physical.`
  },
  {
    id: 'basic-osi-model-071',
    level: 'basic',
    topic: 'osi-model',
    question: `Các giao thức như HTTP, FTP, và SMTP hoạt động tại tầng nào của mô hình OSI?`,
    options: {
      A: `Tầng Session (Phiên)`,
      B: `Tầng Presentation (Trình diễn)`,
      C: `Tầng Application (Ứng dụng)`,
      D: `Tầng Network (Mạng)`
    },
    answer: 'C',
    explanation: `Tầng Application (Tầng 7) là nơi cung cấp các giao thức mạng trực tiếp phục vụ cho ứng dụng của người dùng, như duyệt web (HTTP), truyền file (FTP), và gửi email (SMTP). Các tầng dưới tập trung vào việc thiết lập phiên, mã hóa dữ liệu hoặc định tuyến.`,
    tip: `Application là ứng dụng, nơi người dùng tương tác trực tiếp với dịch vụ mạng.`
  },
  {
    id: 'basic-osi-model-072',
    level: 'basic',
    topic: 'osi-model',
    question: `Cơ chế Flow Control (kiểm soát luồng) ở tầng Transport trong mô hình OSI nhằm mục đích gì?`,
    options: {
      A: `Mã hóa dữ liệu trước khi truyền lên mạng`,
      B: `Xác định đường đi ngắn nhất cho gói tin`,
      C: `Phân giải tên miền thành địa chỉ IP`,
      D: `Ngăn chặn việc bên gửi truyền dữ liệu quá nhanh làm tràn bộ đệm của bên nhận`
    },
    answer: 'D',
    explanation: `Flow Control (kiểm soát luồng) là cơ chế điều tiết tốc độ truyền dữ liệu giữa hai thiết bị. Điều này đảm bảo bên gửi không gửi dữ liệu với tốc độ vượt quá khả năng xử lý của bên nhận, ngăn ngừa mất mát dữ liệu do tràn bộ đệm.`
  },
  {
    id: 'basic-tcp-ip-model-073',
    level: 'basic',
    topic: 'tcp-ip-model',
    question: `Khi so sánh mô hình OSI và TCP/IP, tầng Application của mô hình TCP/IP tương ứng với những tầng nào của mô hình OSI?`,
    options: {
      A: `Tầng Network, Transport và Session`,
      B: `Tầng Session, Presentation và Application`,
      C: `Chỉ tương ứng với tầng Application`,
      D: `Tầng Data Link và Network`
    },
    answer: 'B',
    explanation: `Tầng Application của mô hình TCP/IP gộp chức năng của ba tầng trên cùng trong mô hình OSI, bao gồm: Session (thiết lập phiên), Presentation (định dạng dữ liệu) và Application (giao tiếp ứng dụng). Điều này giúp mô hình TCP/IP tinh gọn và thực tế hơn.`
  },
  {
    id: 'basic-tcp-ip-model-074',
    level: 'basic',
    topic: 'tcp-ip-model',
    question: `Trong mô hình TCP/IP, giao thức ARP (Address Resolution Protocol) thường được xếp vào tầng nào?`,
    options: {
      A: `Tầng Application`,
      B: `Tầng Transport`,
      C: `Tầng Internet (hoặc Network Access tùy cách phân loại, nhưng chủ yếu hoạt động giữa lớp 2 và 3)`,
      D: `Tầng Transport và Application`
    },
    answer: 'C',
    explanation: `ARP hoạt động như một giao thức trung gian giúp ánh xạ địa chỉ IP (tầng Internet) sang địa chỉ MAC (tầng Network Access). Do đó, nó thường được xếp ở tầng Internet hoặc nằm giữa hai tầng này. Các đáp án khác sai hoàn toàn chức năng của ARP.`,
    tip: `ARP dịch IP (L3) sang MAC (L2), nên nó nằm ở biên giới giữa hai tầng này.`
  },
  {
    id: 'basic-tcp-ip-model-075',
    level: 'basic',
    topic: 'tcp-ip-model',
    question: `Vai trò của số hiệu cổng (Port Number) tại tầng Transport trong mô hình TCP/IP là gì?`,
    options: {
      A: `Xác định địa chỉ vật lý của thiết bị trên mạng`,
      B: `Định tuyến gói tin đi qua các mạng khác nhau`,
      C: `Kiểm tra tính toàn vẹn của địa chỉ IP`,
      D: `Phân biệt và định tuyến dữ liệu đến đúng ứng dụng hoặc tiến trình (Multiplexing)`
    },
    answer: 'D',
    explanation: `Tại tầng Transport, số Port kết hợp với địa chỉ IP (tạo thành Socket) giúp phân biệt các luồng dữ liệu của nhiều ứng dụng khác nhau chạy trên cùng một máy tính. Nhờ đó, dữ liệu web (Port 80) không bị lẫn với dữ liệu email (Port 25).`
  },
  {
    id: 'basic-tcp-ip-model-076',
    level: 'basic',
    topic: 'tcp-ip-model',
    question: `Một trong những ưu điểm chính của mô hình TCP/IP so với mô hình OSI trong thực tế là gì?`,
    options: {
      A: `TCP/IP mang tính thực tiễn cao hơn và là nền tảng của mạng Internet hiện nay`,
      B: `TCP/IP phân chia chi tiết làm 7 tầng rõ ràng hơn OSI`,
      C: `TCP/IP không hỗ trợ định tuyến gói tin nên truyền dữ liệu nhanh hơn`,
      D: `TCP/IP chỉ được sử dụng cho các mạng LAN nội bộ`
    },
    answer: 'A',
    explanation: `Mô hình TCP/IP ra đời trước, được xây dựng dựa trên các giao thức thực tế đang hoạt động, do đó nó trở thành tiêu chuẩn cốt lõi của Internet. OSI mang tính lý thuyết, chuẩn hóa cao hơn với 7 tầng nhưng phức tạp hơn so với 4 tầng của TCP/IP.`
  },
  {
    id: 'basic-network-devices-077',
    level: 'basic',
    topic: 'network-devices',
    question: `Trong mạng máy tính, thiết bị Gateway có chức năng chính yếu là gì?`,
    options: {
      A: `Khuếch đại tín hiệu điện trên đường cáp mạng`,
      B: `Cấp phát địa chỉ IP tự động cho máy tính`,
      C: `Kết nối và chuyển đổi giao thức giữa hai mạng có kiến trúc khác nhau`,
      D: `Chặn mọi truy cập từ Internet vào mạng nội bộ`
    },
    answer: 'C',
    explanation: `Gateway (cổng nối) là thiết bị hoặc phần mềm hoạt động ở các tầng cao hơn của mô hình OSI, làm nhiệm vụ phiên dịch giao thức và kết nối các mạng không tương thích với nhau. Khuếch đại là của Repeater, cấp IP là DHCP, chặn truy cập là Firewall.`,
    tip: `Gateway = Cửa ngõ, giúp các mạng "nói" ngôn ngữ khác nhau có thể giao tiếp.`
  },
  {
    id: 'basic-network-devices-078',
    level: 'basic',
    topic: 'network-devices',
    question: `Điểm khác biệt cơ bản giữa Layer 3 Switch và Switch thông thường (Layer 2) là gì?`,
    options: {
      A: `Layer 3 Switch chỉ xử lý địa chỉ MAC, không biết đến địa chỉ IP`,
      B: `Layer 3 Switch là thiết bị phần mềm không có phần cứng`,
      C: `Layer 3 Switch không có khả năng chia VLAN`,
      D: `Layer 3 Switch có thêm khả năng định tuyến (routing) dựa trên địa chỉ IP giống như Router`
    },
    answer: 'D',
    explanation: `Switch thông thường chỉ hoạt động ở Tầng 2, chuyển tiếp dữ liệu dựa vào MAC address. Layer 3 Switch tích hợp thêm phần cứng để thực hiện định tuyến IP (Layer 3) giữa các VLAN với tốc độ rất nhanh, kết hợp ưu điểm của cả Switch và Router.`
  },
  {
    id: 'basic-network-devices-079',
    level: 'basic',
    topic: 'network-devices',
    question: `Card mạng (Network Interface Card - NIC) đóng vai trò gì trong máy tính?`,
    options: {
      A: `Là phần cứng cung cấp kết nối vật lý và chứa địa chỉ MAC để giao tiếp trên mạng`,
      B: `Định tuyến gói tin giữa các mạng quốc gia`,
      C: `Tăng tốc độ xử lý đồ họa cho máy tính`,
      D: `Thay thế hoàn toàn chức năng của một Router`
    },
    answer: 'A',
    explanation: `NIC là giao tiếp phần cứng giúp máy tính kết nối vào môi trường truyền dẫn (cáp hoặc không dây). Mỗi NIC được nhà sản xuất gán một địa chỉ vật lý (MAC) duy nhất để thiết bị có thể nhận và gửi khung dữ liệu trên mạng LAN.`
  },
  {
    id: 'basic-network-devices-080',
    level: 'basic',
    topic: 'network-devices',
    question: `Công nghệ PoE (Power over Ethernet) được sử dụng phổ biến với mục đích gì?`,
    options: {
      A: `Tăng gấp đôi tốc độ truyền dữ liệu của cáp quang`,
      B: `Truyền đồng thời cả dữ liệu và nguồn điện trên cùng một sợi cáp mạng Ethernet`,
      C: `Chuyển đổi tín hiệu analog sang digital`,
      D: `Lọc các gói tin độc hại bằng nguồn điện cao thế`
    },
    answer: 'B',
    explanation: `PoE cho phép cáp mạng Ethernet mang theo dòng điện để cấp nguồn cho các thiết bị như IP Camera, Access Point, hay điện thoại VoIP. Việc này giúp giảm chi phí đi dây điện riêng lẻ đến từng thiết bị.`
  },
  {
    id: 'basic-ip-addressing-081',
    level: 'basic',
    topic: 'ip-addressing',
    question: `Khi một máy tính Windows không thể liên lạc với máy chủ DHCP, nó sẽ tự động gán một địa chỉ IP thuộc dải 169.254.x.x. Tính năng này gọi là gì?`,
    options: {
      A: `NAT (Network Address Translation)`,
      B: `MAC Filtering`,
      C: `Loopback Testing`,
      D: `APIPA (Automatic Private IP Addressing)`
    },
    answer: 'D',
    explanation: `APIPA là tính năng tự động của hệ điều hành. Khi thiết bị cấu hình nhận IP động nhưng không tìm thấy máy chủ DHCP, nó tự gán IP 169.254.x.x để có thể tạm thời giao tiếp với các máy khác trong cùng mạng LAN đang gặp tình trạng tương tự.`,
    tip: `Thấy IP 169.254.x.x tức là mạng đang lỗi DHCP.`
  },
  {
    id: 'basic-ip-addressing-082',
    level: 'basic',
    topic: 'ip-addressing',
    question: `Sự khác biệt chính giữa Static IP (IP tĩnh) và Dynamic IP (IP động) là gì?`,
    options: {
      A: `Static IP được cấu hình thủ công và không đổi, còn Dynamic IP được máy chủ tự động cấp phát và có thể thay đổi`,
      B: `Static IP dùng cho Internet, Dynamic IP chỉ dùng cho mạng LAN`,
      C: `Static IP luôn sử dụng IPv6, trong khi Dynamic IP sử dụng IPv4`,
      D: `Static IP không thể bị tấn công, còn Dynamic IP rất dễ bị hack`
    },
    answer: 'A',
    explanation: `IP tĩnh do quản trị viên thiết lập thủ công và cố định, thường dùng cho các máy chủ dịch vụ (Web, Mail, Printer). IP động được cấp phát thông qua DHCP server, tiện lợi cho người dùng thông thường và có thể thay đổi sau một thời gian (Lease time).`
  },
  {
    id: 'basic-ip-addressing-083',
    level: 'basic',
    topic: 'ip-addressing',
    question: `Dải địa chỉ IP từ 224.0.0.0 đến 239.255.255.255 trong IPv4 (Lớp D) được sử dụng cho mục đích gì?`,
    options: {
      A: `Truyền thông dạng Unicast (1-nhắn-1)`,
      B: `Truyền thông dạng Multicast (1-nhắn-nhiều)`,
      C: `Phát sóng diện rộng Broadcast (1-nhắn-tất cả)`,
      D: `Kiểm tra vòng lặp Loopback`
    },
    answer: 'B',
    explanation: `Lớp D (Class D) không được gán cho từng máy chủ riêng biệt mà được dành riêng cho các luồng Multicast, như truyền hình qua mạng (IPTV) hay các giao thức định tuyến (OSPF, RIPv2), cho phép gửi dữ liệu tới một nhóm thiết bị nhận cụ thể.`
  },
  {
    id: 'basic-ip-addressing-084',
    level: 'basic',
    topic: 'ip-addressing',
    question: `Vai trò của Default Gateway (Cổng mặc định) trong cấu hình IP của một máy tính là gì?`,
    options: {
      A: `Đóng vai trò là phần mềm chống virus bảo vệ máy tính`,
      B: `Chuyển đổi tên miền thành địa chỉ IP`,
      C: `Là địa chỉ IP của Router giúp máy tính gửi gói tin ra bên ngoài mạng LAN nội bộ`,
      D: `Cung cấp nguồn điện cho card mạng hoạt động`
    },
    answer: 'C',
    explanation: `Default Gateway là điểm thoát (thường là cổng của Router kết nối với LAN) mà máy tính sẽ gửi các gói tin tới khi địa chỉ đích không nằm trong cùng mạng cục bộ (ví dụ khi truy cập Internet). Nếu thiếu Default Gateway, máy tính chỉ kết nối được trong mạng LAN.`
  },
  {
    id: 'basic-protocols-basic-085',
    level: 'basic',
    topic: 'protocols-basic',
    question: `Giao thức ARP (Address Resolution Protocol) giải quyết bài toán nào trong mạng máy tính?`,
    options: {
      A: `Tìm địa chỉ MAC của một thiết bị khi chỉ biết địa chỉ IP của nó`,
      B: `Cấp phát địa chỉ IP động cho máy khách`,
      C: `Kiểm tra xem một máy tính có đang trực tuyến hay không`,
      D: `Mã hóa dữ liệu truyền tải trên web`
    },
    answer: 'A',
    explanation: `ARP hoạt động bằng cách phát tín hiệu broadcast vào mạng LAN hỏi "Ai có IP này?", thiết bị có IP tương ứng sẽ trả lời bằng địa chỉ MAC của nó. Việc này rất cần thiết để thiết bị đóng gói Frame ở tầng 2 trước khi gửi đi.`
  },
  {
    id: 'basic-protocols-basic-086',
    level: 'basic',
    topic: 'protocols-basic',
    question: `Giao thức SNMP (Simple Network Management Protocol) được sử dụng chủ yếu để làm gì?`,
    options: {
      A: `Tự động thiết lập kết nối Wi-Fi an toàn`,
      B: `Giám sát, quản lý cấu hình và trạng thái của các thiết bị mạng như Router, Switch`,
      C: `Chia sẻ tệp tin giữa các máy tính Windows`,
      D: `Gửi email tốc độ cao`
    },
    answer: 'B',
    explanation: `SNMP là giao thức tiêu chuẩn để quản lý mạng. Nó cho phép các phần mềm giám sát (NMS) thu thập dữ liệu về hiệu suất, trạng thái lỗi từ các thiết bị mạng (Router, Switch, Server) thông qua các Agent cài đặt trên thiết bị đó.`,
    tip: `M là Management, giao thức dùng để quản lý thiết bị.`
  },
  {
    id: 'basic-protocols-basic-087',
    level: 'basic',
    topic: 'protocols-basic',
    question: `Giao thức NTP (Network Time Protocol) có nhiệm vụ gì trong hệ thống mạng?`,
    options: {
      A: `Chống tấn công từ chối dịch vụ (DDoS)`,
      B: `Định tuyến dữ liệu theo thời gian thực (Real-time)`,
      C: `Đồng bộ hóa đồng hồ thời gian giữa các thiết bị trên mạng`,
      D: `Phát hiện cáp mạng bị đứt`
    },
    answer: 'C',
    explanation: `NTP duy trì sự chính xác về thời gian trên các thiết bị mạng. Điều này cực kỳ quan trọng cho việc ghi nhận log sự kiện, các giao dịch tài chính, hoặc các giao thức xác thực cần kiểm tra thời gian tồn tại của mã thông báo (token).`
  },
  {
    id: 'basic-protocols-basic-088',
    level: 'basic',
    topic: 'protocols-basic',
    question: `Điểm khác biệt chính giữa hai giao thức nhận email POP3 và IMAP là gì?`,
    options: {
      A: `POP3 là giao thức mã hóa, còn IMAP thì không mã hóa văn bản`,
      B: `POP3 hỗ trợ gửi mail, còn IMAP dùng để nhận mail`,
      C: `POP3 hoạt động qua cổng 80, IMAP qua cổng 443`,
      D: `POP3 thường tải email về và xóa trên server, còn IMAP đồng bộ email giữa server và nhiều thiết bị`
    },
    answer: 'D',
    explanation: `POP3 (Post Office Protocol v3) thiết kế đơn giản: tải mail xuống máy cục bộ và thường xóa bản gốc. IMAP (Internet Message Access Protocol) giữ email trên server và đồng bộ trạng thái đọc/xóa lên tất cả các thiết bị đăng nhập, phù hợp cho người dùng đa thiết bị.`
  },
  {
    id: 'basic-topology-089',
    level: 'basic',
    topic: 'topology',
    question: `Đặc điểm của kết nối theo dạng Point-to-Point topology là gì?`,
    options: {
      A: `Một thiết bị trung tâm quản lý tất cả các thiết bị khác`,
      B: `Một đường truyền chuyên dụng nối trực tiếp hai thiết bị duy nhất với nhau`,
      C: `Tất cả thiết bị kết nối vào một trục cáp chung duy nhất`,
      D: `Thiết bị cuối gửi dữ liệu quay vòng liên tục cho đến khi gặp đích`
    },
    answer: 'B',
    explanation: `Point-to-Point là cấu trúc đơn giản nhất, thường thấy trong các liên kết diện rộng (WAN) hoặc kết nối giữa 2 Router. Nó cung cấp toàn bộ băng thông của đường truyền cho giao tiếp giữa đúng hai thiết bị (node) đó.`,
    tip: `Point-to-Point là điểm-nối-điểm, kết nối trực tiếp 1-1.`
  },
  {
    id: 'basic-topology-090',
    level: 'basic',
    topic: 'topology',
    question: `Khác biệt cơ bản giữa cấu trúc Partial Mesh và Full Mesh là gì?`,
    options: {
      A: `Partial Mesh chỉ dùng cáp quang, Full Mesh dùng cáp đồng`,
      B: `Partial Mesh nhanh hơn Full Mesh do ít dây cáp hơn`,
      C: `Trong Partial Mesh, không phải tất cả mọi thiết bị đều có kết nối trực tiếp với nhau như Full Mesh`,
      D: `Full Mesh không có khả năng chịu lỗi, Partial Mesh chịu lỗi tốt hơn`
    },
    answer: 'C',
    explanation: `Full Mesh là mô hình mỗi thiết bị kết nối với TẤT CẢ thiết bị còn lại, độ dự phòng tuyệt đối nhưng cực kì tốn kém. Partial Mesh chỉ thiết lập kết nối trực tiếp giữa các thiết bị trọng yếu, tiết kiệm chi phí hơn nhưng vẫn giữ được mức độ dự phòng cao.`
  },
  {
    id: 'basic-topology-091',
    level: 'basic',
    topic: 'topology',
    question: `Mô hình Star Topology (Hình sao) có nhược điểm lớn nhất là gì?`,
    options: {
      A: `Khó khăn trong việc mở rộng mạng hoặc thêm máy mới`,
      B: `Xung đột dữ liệu xảy ra thường xuyên do chia sẻ cáp dùng chung`,
      C: `Chỉ hỗ trợ tối đa 10 máy tính`,
      D: `Sự cố ở thiết bị trung tâm (Hub/Switch) sẽ làm sập toàn bộ hệ thống mạng`
    },
    answer: 'D',
    explanation: `Trong Star Topology, mọi luồng dữ liệu đều phải đi qua Hub hoặc Switch trung tâm. Mặc dù dễ quản lý và dễ khắc phục sự cố cáp lẻ, nhưng nếu thiết bị trung tâm này hỏng (Single point of failure), toàn bộ các thiết bị sẽ mất kết nối với nhau.`
  },
  {
    id: 'basic-topology-092',
    level: 'basic',
    topic: 'topology',
    question: `Công nghệ Token Ring hoạt động trên cơ chế nào để kiểm soát việc truyền dữ liệu?`,
    options: {
      A: `Một thẻ bài (Token) truyền vòng quanh mạng, thiết bị nào giữ Token mới được phép gửi dữ liệu`,
      B: `CSMA/CD phát hiện xung đột ngẫu nhiên trên cáp`,
      C: `Thiết bị trung tâm quyết định ai được phép truyền qua cơ chế Polling`,
      D: `Gửi dữ liệu qua một tần số vô tuyến đặc biệt`
    },
    answer: 'A',
    explanation: `Token Ring (do IBM phát triển) cấu hình cáp logic thành một vòng khép kín. Một gói tin nhỏ gọi là Token xoay vòng liên tục. Trạm nào muốn truyền dữ liệu phải bắt được Token rỗng, gắn dữ liệu vào. Cơ chế này loại bỏ hoàn toàn sự xung đột dữ liệu (collision).`
  },
  {
    id: 'basic-lan-wan-093',
    level: 'basic',
    topic: 'lan-wan',
    question: `Tiêu chuẩn IEEE 802.3 thường được biết đến với tên gọi phổ biến nào trong mạng LAN?`,
    options: {
      A: `Wi-Fi`,
      B: `Bluetooth`,
      C: `Ethernet`,
      D: `Token Ring`
    },
    answer: 'C',
    explanation: `IEEE 802.3 là chuẩn công nghiệp định nghĩa giao thức điều khiển truy cập môi trường (CSMA/CD) và các yêu cầu vật lý cho mạng Ethernet có dây. Wi-Fi là 802.11, Bluetooth là 802.15.1.`,
    tip: `802.3 là cáp mạng (Ethernet), 802.11 là không dây (Wi-Fi).`
  },
  {
    id: 'basic-lan-wan-094',
    level: 'basic',
    topic: 'lan-wan',
    question: `Thuật ngữ Full-Duplex (Song công toàn phần) có nghĩa là gì trong truyền dữ liệu?`,
    options: {
      A: `Chỉ một bên được gửi dữ liệu trong suốt quá trình kết nối`,
      B: `Bên A gửi thì bên B phải chờ nhận xong mới được gửi lại`,
      C: `Dữ liệu truyền bằng cáp quang với tốc độ ánh sáng`,
      D: `Hai bên có thể gửi và nhận dữ liệu đồng thời cùng một lúc`
    },
    answer: 'D',
    explanation: `Full-Duplex cho phép truyền và nhận tín hiệu song song (như gọi điện thoại). Half-Duplex chỉ cho phép luân phiên (như bộ đàm). Simplex chỉ cho truyền một chiều (như phát thanh TV, Radio).`
  },
  {
    id: 'basic-lan-wan-095',
    level: 'basic',
    topic: 'lan-wan',
    question: `Trong thuật ngữ mạng, ISP viết tắt của Internet Service Provider có vai trò gì?`,
    options: {
      A: `Là nhà cung cấp dịch vụ Internet, cấp đường truyền cho các cá nhân hoặc tổ chức`,
      B: `Là một loại giao thức mã hóa dữ liệu trên mạng LAN`,
      C: `Là nhà sản xuất cáp quang lớn nhất thế giới`,
      D: `Là thiết bị bảo mật chuyên dụng trong Datacenter`
    },
    answer: 'A',
    explanation: `ISP (ví dụ VNPT, Viettel, FPT) sở hữu cơ sở hạ tầng mạng lưới rộng lớn và bán quyền truy cập Internet cho người dùng cuối hoặc các doanh nghiệp. ISP đóng vai trò kết nối mạng LAN của người dùng ra mạng WAN toàn cầu.`
  },
  {
    id: 'basic-lan-wan-096',
    level: 'basic',
    topic: 'lan-wan',
    question: `Mạng WLAN (Wireless LAN) thường tuân theo nhóm tiêu chuẩn nào của IEEE?`,
    options: {
      A: `IEEE 802.1Q`,
      B: `IEEE 802.11`,
      C: `IEEE 802.3`,
      D: `IEEE 802.1X`
    },
    answer: 'B',
    explanation: `Nhóm tiêu chuẩn 802.11 quy định công nghệ cho mạng cục bộ không dây (Wi-Fi), định nghĩa các phương thức kết nối qua sóng radio thay vì cáp. Ví dụ 802.11n, 802.11ac, 802.11ax.`
  },
  {
    id: 'basic-firewall-097',
    level: 'basic',
    topic: 'firewall',
    question: `Trong kiến trúc tường lửa, vùng DMZ (Demilitarized Zone) được sử dụng để làm gì?`,
    options: {
      A: `Bảo vệ tuyệt đối các dữ liệu tài chính kế toán quan trọng nhất`,
      B: `Chặn tất cả các kết nối từ cả trong và ngoài mạng`,
      C: `Tăng tốc độ truy cập Internet cho mạng LAN`,
      D: `Đặt các máy chủ cung cấp dịch vụ công khai (Web, Mail) để tách biệt rủi ro khỏi mạng nội bộ`
    },
    answer: 'D',
    explanation: `DMZ là một vùng đệm không hoàn toàn an toàn (Untrust) nhưng cũng không phải là mạng nội bộ cần bảo vệ nghiêm ngặt (Trust). Đặt các Server public ở đây giúp dù Server bị hack, kẻ tấn công cũng không dễ xâm nhập trực tiếp vào mạng LAN nội bộ.`
  },
  {
    id: 'basic-firewall-098',
    level: 'basic',
    topic: 'firewall',
    question: `Điểm vượt trội chính của Next-Generation Firewall (NGFW) so với tường lửa truyền thống là gì?`,
    options: {
      A: `Khả năng kiểm tra sâu gói tin (DPI), nhận diện ứng dụng và tích hợp chống xâm nhập (IPS)`,
      B: `Giá thành cực rẻ và không cần cấu hình bảo trì`,
      C: `Chỉ tiêu thụ một nửa lượng điện năng`,
      D: `Sử dụng chuẩn cáp quang thay vì cáp đồng`
    },
    answer: 'A',
    explanation: `NGFW không chỉ lọc địa chỉ IP và Port (tầng 3 và 4) như tường lửa cũ, mà còn tiến sâu vào tầng Application (Tầng 7) để hiểu lưu lượng đó là ứng dụng gì (Facebook, YouTube), đồng thời quét virus và ngăn chặn xâm nhập (IPS) trong thời gian thực.`
  },
  {
    id: 'basic-firewall-099',
    level: 'basic',
    topic: 'firewall',
    question: `Tường lửa chặn các kết nối đến "Port 23". Điều này có ý nghĩa bảo mật gì?`,
    options: {
      A: `Ngăn chặn người dùng lướt web (HTTP)`,
      B: `Ngăn chặn kết nối điều khiển từ xa không an toàn bằng giao thức Telnet`,
      C: `Ngăn chặn gửi email qua SMTP`,
      D: `Chặn việc tải file qua FTP`
    },
    answer: 'B',
    explanation: `Port 23 được sử dụng bởi Telnet, một giao thức điều khiển từ xa truyền dữ liệu bằng văn bản thuần (plaintext), dễ bị đánh cắp mật khẩu. Tường lửa chặn Port 23 nhằm bắt buộc quản trị viên chuyển sang dùng SSH (Port 22) an toàn hơn.`
  },
  {
    id: 'basic-firewall-100',
    level: 'basic',
    topic: 'firewall',
    question: `Tại sao việc giám sát và ghi nhật ký (Logging) trên tường lửa lại cực kỳ quan trọng?`,
    options: {
      A: `Để thu thập thông tin thẻ tín dụng của người dùng hợp pháp`,
      B: `Để tự động tăng băng thông cho các máy tính bị chậm`,
      C: `Để phát hiện các mô hình tấn công, truy vết sự cố và tuân thủ các quy định bảo mật`,
      D: `Để nén dữ liệu giúp tiết kiệm dung lượng ổ cứng`
    },
    answer: 'C',
    explanation: `Log trên tường lửa cung cấp hồ sơ chi tiết về mọi kết nối (được phép và bị chặn). Quản trị viên sử dụng thông tin này để kiểm toán bảo mật, tìm hiểu nguyên nhân khi mạng bị tấn công hoặc chẩn đoán các lỗi kết nối hợp lệ vô tình bị chặn.`
  }
];

