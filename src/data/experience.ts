export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  logo?: string; // URL to logo image
  emoji?: string; // Emoji for company
}

export const experience: ExperienceItem[] = [
  {
    company: 'PayPal',
    role: 'Senior Software Engineer',
    location: 'Shanghai',
    startDate: 'Jan 2023',
    endDate: 'Present',
    achievements: [
      'Architected Merchant Observability Platform from scratch, enabling real-time monitoring for 1000+ top merchants',
      'Full stack development on React-based frontier and SpringBoot based midtier app, as well as a Kafka based message daemon to derive realtime metrics from analytical tracking events across PayPal and Braintree',
      'MCP tool development to simplify developer\'s interaction with complex observability systems',
      'Reduced incident detection and resolution time by 60% through various data and alerting pipelines integrated with DataDog and PagerDuty',
      'Lead a scrum team with 7 engineers, mentored junior engineers on best practices of development and code review',
    ],
    emoji: '💸',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg', // Uncomment if you want to use a logo
  },
  {
    company: 'Shopee',
    role: 'Backend Software Engineer',
    location: 'Singapore',
    startDate: 'Aug 2021',
    endDate: 'Dec 2022',
    achievements: [
      'Design and develop an Envoy based service mesh control plane',
      'Implemented sharded MySQL-based distributed FIFO queue system processing 500k+ tasks/day',
      'Reduced message loss rate to less than 0.01% via custom dead-letter queue mechanism',
      'Achieved 30% cost savings by optimizing Kafka partition distribution strategy',
      'Develop and maintain a microservice platform offering features like RPC framework, service governance and traffic management',
    ],
    emoji: '🛒',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg',
  },
  {
    company: 'ByteDance',
    role: 'Backend Software Engineer',
    location: 'Beijing',
    startDate: 'Jul 2020',
    endDate: 'Jul 2021',
    achievements: [
      'Develop REST/RPC API for CRM system',
      'Develop an AI tutoring system which implements intelligent conversation and SOPs for a preK education product',
      'Use Flink to implement real-time window aggregation of chat messages',
      'Created custom AggregateFunction for multi-dimensional metrics aggregation',
      'Redis based student state management for different stages of course',
      'Denormalized MySQL wide table and Elasticsearch index which improve the query performance on student and class data',
      'Integrated RocketMQ for collecting chat messages and delivering sequential ai tasks',
    ],
    emoji: '🎵',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/07/ByteDance_logo_English.svg',
  },
  {
    company: 'Trip.com',
    role: 'Backend Software Engineer',
    location: 'Shanghai',
    startDate: 'Feb 2019',
    endDate: 'Jul 2020',
    achievements: [
      'Develop and maintain the monitoring system Hickwall in Trip.com',
      'Participate in the landing of new generation of tsdb VictoriaMetrics',
      'Optimize query performance in high cardinality scenarios',
      'Reduced monitoring blindspots by 70% through black-box monitoring implementation',
      'Develop distributed metric collectors for network devices and AWS ELB',
    ],
    emoji: '✈️',
    logo:'https://upload.wikimedia.org/wikipedia/commons/1/1a/Trip.com_Icon_2022.png'
  },
];
