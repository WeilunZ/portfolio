export interface BlogItem {
  title: string;
  date: string;
  summary: string;
  slug: string;
  tags?: string[];
  content?: string;
}

export const blogs: BlogItem[] = [
  {
    title: 'How to Build a Kafka-based Queue System',
    date: '2024-06-01',
    summary: 'A deep dive into designing and implementing a distributed FIFO queue system using Kafka, with dead-letter queue and partition optimization.',
    slug: 'kafka-queue-system',
    tags: ['Kafka', 'Distributed Systems', 'Backend'],
    content: `## Introduction

This post explores how to build a distributed FIFO queue system using **Kafka**. We discuss partitioning, dead-letter queues, and more.

### Key Features
- Sharded MySQL-based distributed FIFO queue
- Dead-letter queue for failed messages
- Optimized Kafka partitioning

### Example Code
\`\`\`go
func processMessage(msg Message) error {
  // Process the message
  return nil
}
\`\`\`

### Conclusion
Kafka is a powerful tool for building scalable queue systems.`
  },
  {
    title: 'Observability Best Practices',
    date: '2024-05-15',
    summary: 'Key strategies and tools for building robust observability platforms for large-scale systems.',
    slug: 'observability-best-practices',
    tags: ['Observability', 'DevOps', 'Monitoring'],
    content: `## Observability Best Practices

- Use metrics, logs, and traces for full visibility
- Integrate with DataDog and PagerDuty
- Automate alerting and incident response

### Example Alert Rule
\`\`\`yaml
alert: HighErrorRate
expr: job:request_errors:rate5m > 0.05
for: 10m
labels:
  severity: critical
\`\`\`

Stay proactive with your monitoring!`
  },
  {
    title: 'Scaling Microservices with Envoy and Service Mesh',
    date: '2024-04-20',
    summary: 'Lessons learned from designing a service mesh control plane with Envoy and Golang.',
    slug: 'scaling-microservices-envoy',
    tags: ['Microservices', 'Envoy', 'Golang'],
    content: `## Scaling Microservices

Service mesh enables scalable, reliable microservices. Envoy is a great choice for traffic management.

### Key Takeaways
- Use Envoy for service discovery and load balancing
- Monitor traffic and latency
- Optimize partitioning for cost savings

### Example Envoy Config
\`\`\`json
{
  "listeners": [...],
  "clusters": [...]
}
\`\`\`

Build for scale from day one!`
  }
];
