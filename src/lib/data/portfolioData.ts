import type { SkillItem, ToolItem, TimelineMilestone, GlobePin, CaseStudy } from '$lib/types/portfolio';

export const skillsCol1: SkillItem[] = [
	{ name: 'Golang & Microservices', score: 85 },
	{ name: 'Node.js & TypeScript', score: 90 },
	{ name: 'Laravel & PHP Core', score: 90 },
	{ name: 'PostgreSQL & MySQL', score: 90 },
	{ name: 'Apache Kafka Pipelines', score: 80 },
	{ name: 'RabbitMQ Task Queues', score: 80 },
	{ name: 'REST & gRPC Architecture', score: 80 },
	{ name: 'Database Optimization', score: 85 }
];

export const skillsCol2: SkillItem[] = [
	{ name: 'React.js & Next.js', score: 90 },
	{ name: 'TypeScript Fullstack', score: 85 },
	{ name: 'Docker & Containers', score: 90 },
	{ name: 'Observability & Metrics', score: 80 },
	{ name: 'State & API Caching', score: 85 },
	{ name: 'CI/CD & Deployments', score: 80 },
	{ name: 'Responsive Web UI', score: 85 }
];

export const toolsList: ToolItem[] = [
	{ name: 'Golang', category: 'Backend & Concurrency' },
	{ name: 'Node.js', category: 'Runtime & APIs' },
	{ name: 'Laravel', category: 'Backend Framework' },
	{ name: 'Next.js & React', category: 'Frontend Platform' },
	{ name: 'PostgreSQL / MySQL', category: 'Relational DB' },
	{ name: 'Apache Kafka', category: 'Event Streaming' },
	{ name: 'RabbitMQ', category: 'Message Broker' },
	{ name: 'Docker', category: 'Containerization' }
];

export const timelineMilestones: TimelineMilestone[] = [
	{ year: 2018, role: 'Junior Web Developer', city: 'Cirebon', hours: 2150, highlight: 'Building relational database systems with PHP, MySQL & responsive interfaces' },
	{ year: 2020, role: 'Fullstack Developer', city: 'Cirebon & Bandung', hours: 7200, highlight: 'Scaling Laravel REST APIs, component systems & modern React dashboards' },
	{ year: 2022, role: 'Senior Backend Engineer', city: 'Jakarta & Remote', hours: 12800, highlight: 'Architecting high-throughput Go microservices and high-concurrency PostgreSQL schemas' },
	{ year: 2024, role: 'Lead Fullstack Architect', city: 'Jakarta & Remote', hours: 19400, highlight: 'Pioneering event streaming with Kafka, RabbitMQ workers & Next.js client applications' },
	{ year: 2026, role: 'Staff Systems & Fullstack Engineer', city: 'Cirebon & Remote', hours: 25467, highlight: 'Orchestrating distributed fullstack architectures, Dockerized services & Grafana observability' }
];

export const globePins: GlobePin[] = [
	{
		city: 'Cirebon',
		country: 'Indonesia',
		lat: -6.7063,
		lng: 108.5570,
		role: 'Staff Systems & Fullstack Engineer',
		years: '2018 - Present',
		company: 'Primary Engineering Base',
		description: 'Designing distributed backend architectures, Golang microservices, and modern Next.js web applications.'
	},
	{
		city: 'Jakarta',
		country: 'Indonesia',
		lat: -6.2088,
		lng: 106.8456,
		role: 'Lead Backend & Fullstack Architect',
		years: '2021 - 2024',
		company: 'Enterprise Tech Solutions',
		description: 'Engineered high-throughput event processing with Kafka, RabbitMQ worker queues, and PostgreSQL optimization.'
	},
	{
		city: 'Bandung',
		country: 'Indonesia',
		lat: -6.9175,
		lng: 107.6191,
		role: 'Fullstack Engineer & Consultant',
		years: '2019 - 2021',
		company: 'Digital Innovation Labs',
		description: 'Shipped high-performance Laravel and React enterprise dashboards with automated Docker deployments.'
	},
	{
		city: 'Singapore',
		country: 'Singapore',
		lat: 1.3521,
		lng: 103.8198,
		role: 'Remote Systems Specialist',
		years: '2023 - 2025',
		company: 'Regional Scale-Up',
		description: 'Built containerized API gateways, Redis caching layers, and Prometheus/Grafana observability pipelines.'
	},
	{
		city: 'Tokyo',
		country: 'Japan',
		lat: 35.6762,
		lng: 139.6503,
		role: 'Open Source Systems Contributor',
		years: '2024 - Present',
		company: 'Distributed Systems Group',
		description: 'Contributing to open-source Go microservice tooling, telemetry exporters, and developer workflows.'
	}
];

export const caseStudies: CaseStudy[] = [
	{
		id: 'event-streaming-kafka',
		title: 'High-Throughput Event-Driven Microservices',
		category: 'Golang & Distributed Systems',
		metric: '18,500+ Req/sec Throughput',
		description: 'A distributed event-driven architecture using Golang and Apache Kafka for asynchronous transaction processing, idempotent consumers, and resilient database guarantees.',
		tags: ['Golang', 'Apache Kafka', 'PostgreSQL', 'Docker', 'Microservices']
	},
	{
		id: 'enterprise-saas-platform',
		title: 'Multi-Tenant Enterprise SaaS Management Platform',
		category: 'Fullstack & Database Design',
		metric: '99.98% Service Uptime',
		description: 'Scalable cloud platform built with Laravel and Next.js, featuring schema isolation per tenant, MySQL read-replica load balancing, and Redis caching.',
		tags: ['Laravel', 'Next.js', 'React', 'MySQL', 'Docker', 'Redis']
	},
	{
		id: 'observability-telemetry-pipeline',
		title: 'Real-Time Telemetry & Observability Infrastructure',
		category: 'DevOps & Reliability',
		metric: '<15ms Trace Latency',
		description: 'End-to-end telemetry system monitoring distributed Node.js services and RabbitMQ message queues with custom Prometheus metrics and real-time Grafana dashboards.',
		tags: ['Node.js', 'RabbitMQ', 'Docker', 'Prometheus', 'Grafana']
	}
];
