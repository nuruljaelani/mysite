export interface SkillItem {
	name: string;
	score: number;
}

export interface ToolItem {
	name: string;
	category: string;
}

export interface TimelineMilestone {
	year: number;
	role: string;
	city: string;
	hours: number;
	highlight: string;
}

export interface GlobePin {
	city: string;
	country: string;
	lat: number;
	lng: number;
	role: string;
	years: string;
	company: string;
	description: string;
}

export interface CaseStudy {
	id: string;
	title: string;
	category: string;
	metric: string;
	description: string;
	tags: string[];
}
