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
  }
];

