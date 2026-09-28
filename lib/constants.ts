// =============================================================
//  Network Quest – Constants
// =============================================================

import type { Level, QuizMode } from "@/types";

// ------------------------------------------------------------------
//  Topics (chủ đề câu hỏi)
// ------------------------------------------------------------------

export const TOPICS_BASIC = [
  { id: "osi-model", label: "Mô hình OSI" },
  { id: "tcp-ip-model", label: "Mô hình TCP/IP" },
  { id: "network-devices", label: "Thiết bị mạng" },
  { id: "ip-addressing", label: "Địa chỉ IP & MAC" },
  { id: "protocols-basic", label: "Giao thức cơ bản" },
  { id: "topology", label: "Topology mạng" },
  { id: "lan-wan", label: "LAN / WAN" },
  { id: "firewall", label: "Tường lửa (Firewall)" },
] as const;

export const TOPICS_INTERMEDIATE = [
  { id: "subnetting", label: "Subnetting / CIDR / VLSM" },
  { id: "arp-icmp", label: "ARP & ICMP" },
  { id: "tcp-udp", label: "TCP vs UDP" },
  { id: "nat-pat", label: "NAT / PAT" },
  { id: "dhcp-dns", label: "DHCP & DNS chi tiết" },
  { id: "vlan-trunking", label: "VLAN & Trunking" },
  { id: "stp", label: "Spanning Tree Protocol" },
  { id: "static-routing", label: "Định tuyến tĩnh" },
  { id: "http-tls", label: "HTTP & TLS cơ bản" },
  { id: "firewall", label: "Tường lửa (Firewall)" },
] as const;

export const TOPICS_ADVANCED = [
  { id: "dynamic-routing", label: "Định tuyến động (OSPF/BGP/RIP)" },
  { id: "tcp-advanced", label: "TCP nâng cao" },
  { id: "ipv6", label: "IPv6" },
  { id: "vpn-ipsec", label: "VPN & IPsec" },
  { id: "firewall", label: "Tường lửa & ACL" },
  { id: "network-security", label: "Bảo mật mạng & tấn công" },
  { id: "http2-quic", label: "HTTP/2, HTTP/3 & QUIC" },
  { id: "qos-sdn", label: "QoS & SDN" },
  { id: "load-balancing", label: "Load Balancing" },
] as const;

const RAW_ALL_TOPICS = [
  ...TOPICS_BASIC,
  ...TOPICS_INTERMEDIATE,
  ...TOPICS_ADVANCED,
] as const;

// Deduplicated list for mixed level / global topic lookups
export const ALL_TOPICS: { id: string; label: string }[] = Array.from(
  new Map(RAW_ALL_TOPICS.map((t) => [t.id, t])).values()
);

export type TopicId = (typeof RAW_ALL_TOPICS)[number]["id"];

// ------------------------------------------------------------------
//  Levels
// ------------------------------------------------------------------

export const LEVELS: { id: Level | "mixed"; label: string; color: string }[] =
  [
    { id: "basic", label: "Cơ bản", color: "green" },
    { id: "intermediate", label: "Trung bình", color: "yellow" },
    { id: "advanced", label: "Nâng cao", color: "red" },
    { id: "mixed", label: "Tổng hợp (trộn)", color: "purple" },
  ];

// ------------------------------------------------------------------
//  Question count options
// ------------------------------------------------------------------

export const QUESTION_COUNT_OPTIONS: (10 | 20 | 30 | 50)[] = [10, 20, 30, 50];

// ------------------------------------------------------------------
//  Time limits (seconds) per mode × question count
// ------------------------------------------------------------------

/** Thời gian thi thử (giây) theo số câu */
export const EXAM_TIME_LIMITS: Record<number, number> = {
  10: 12 * 60,   // 12 phút
  20: 25 * 60,   // 25 phút
  30: 40 * 60,   // 40 phút
  50: 60 * 60,   // 60 phút
};

// ------------------------------------------------------------------
//  Modes
// ------------------------------------------------------------------

export const QUIZ_MODES: { id: QuizMode; label: string; description: string }[] =
  [
    {
      id: "practice",
      label: "Luyện tập",
      description:
        "Chọn đáp án → hiện đúng/sai + giải thích ngay. Không giới hạn thời gian.",
    },
    {
      id: "exam",
      label: "Thi thử",
      description:
        "Có đồng hồ đếm ngược, không hiện đáp án đến khi nộp bài. Có thể quay lại sửa.",
    },
  ];

// ------------------------------------------------------------------
//  Grading thresholds
// ------------------------------------------------------------------

export const GRADE_THRESHOLDS = {
  excellent: 85,
  good: 70,
  average: 50,
} as const;

// ------------------------------------------------------------------
//  localStorage keys
// ------------------------------------------------------------------

export const STORAGE_KEYS = {
  ATTEMPTS: "nq_attempts",
  ACTIVE_QUIZ: "nq_active_quiz",
  THEME: "nq_theme",
} as const;

// ------------------------------------------------------------------
//  Warning time (seconds) before exam ends
// ------------------------------------------------------------------

export const EXAM_WARNING_TIME = 60; // 1 phút
