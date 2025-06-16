export interface ProjectItem {
  title: string;
  description: string;
  techStacks: string[];
  links: { label: string; url: string }[];
  image?: string;
}

export const projects: ProjectItem[] = [
  {
    title: 'Merchant Observability Platform',
    description: 'A real-time monitoring platform for 1000+ top merchants, built with React, SpringBoot, and Kafka. Enables realtime metrics and incident detection across PayPal and Braintree.',
    techStacks: ['React', 'SpringBoot', 'Kafka', 'DataDog', 'PagerDuty'],
    links: [
      { label: 'PayPal', url: 'https://www.paypal.com/' }
    ],
  },
  {
    title: 'Service Mesh Control Plane',
    description: 'Envoy-based service mesh control plane for Shopee, with sharded MySQL FIFO queue and optimized Kafka partitioning.',
    techStacks: ['Golang', 'Envoy', 'MySQL', 'Kafka'],
    links: [
      { label: 'Shopee', url: 'https://shopee.sg/' }
    ],
  },
  {
    title: 'AI Tutoring System',
    description: 'Intelligent conversation and SOPs for preK education, with real-time Flink aggregation and RocketMQ integration.',
    techStacks: ['Flink', 'RocketMQ', 'Redis', 'MySQL', 'Elasticsearch'],
    links: [
      { label: 'ByteDance', url: 'https://www.bytedance.com/' }
    ],
  },
  {
    title: 'Hickwall Monitoring System',
    description: 'Distributed monitoring system for Trip.com, with black-box monitoring and VictoriaMetrics TSDB.',
    techStacks: ['Golang', 'VictoriaMetrics', 'AWS', 'ELB'],
    links: [
      { label: 'Trip.com', url: 'https://www.trip.com/' }
    ],
  },
  {
    title: 'RPC Framework',
    description: 'RPC framework with Consul service discovery, Jaeger tracing, and protocol buffer support.',
    techStacks: ['Golang', 'Consul', 'Jaeger', 'Protobuf', 'JSON'],
    links: [],
  },
];
