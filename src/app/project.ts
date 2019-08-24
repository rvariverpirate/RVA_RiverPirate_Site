import { ProjectType } from "./projectType"
export interface Project{
	id: number;
	projectType: ProjectType;
	title: string;
	description: string;
	gitHub: string;
	mainImage: string;
}