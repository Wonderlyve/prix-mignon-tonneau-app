
export interface Project {
  id: string;
  fullName: string;
  email: string;
  whatsapp?: string;
  title: string;
  description: string;
  type: 'website' | 'mobile-app';
  budget: number;
  status: 'pending' | 'accepted' | 'rejected';
  submittedAt: Date;
}

export const mockProjects: Project[] = [
  {
    id: '1',
    fullName: 'Marie Dubois',
    email: 'marie.dubois@email.com',
    whatsapp: '+33 6 12 34 56 78',
    title: 'Plateforme de covoiturage éco-responsable',
    description: 'Une application qui connecte les conducteurs et passagers avec un système de compensation carbone intégré. L\'objectif est de réduire l\'empreinte carbone des trajets quotidiens.',
    type: 'mobile-app',
    budget: 15000,
    status: 'pending',
    submittedAt: new Date('2024-06-15')
  },
  {
    id: '2',
    fullName: 'Thomas Martin',
    email: 'thomas.martin@startup.fr',
    whatsapp: '+33 7 98 76 54 32',
    title: 'Marketplace pour artisans locaux',
    description: 'Site web permettant aux artisans de présenter leurs créations et aux clients de commander des pièces uniques. Système de géolocalisation pour favoriser le local.',
    type: 'website',
    budget: 8500,
    status: 'accepted',
    submittedAt: new Date('2024-06-10')
  },
  {
    id: '3',
    fullName: 'Sophie Chen',
    email: 'sophie.chen@technogie.com',
    title: 'App de méditation personnalisée',
    description: 'Application mobile qui adapte les séances de méditation selon l\'humeur, le stress et les objectifs de l\'utilisateur grâce à l\'IA.',
    type: 'mobile-app',
    budget: 12000,
    status: 'rejected',
    submittedAt: new Date('2024-06-05')
  }
];

export const getProjects = (): Project[] => {
  return mockProjects;
};

export const addProject = (project: Omit<Project, 'id' | 'submittedAt' | 'status'>): Project => {
  const newProject: Project = {
    ...project,
    id: Math.random().toString(36).substr(2, 9),
    submittedAt: new Date(),
    status: 'pending'
  };
  mockProjects.push(newProject);
  return newProject;
};

export const updateProjectStatus = (id: string, status: Project['status']): void => {
  const projectIndex = mockProjects.findIndex(p => p.id === id);
  if (projectIndex !== -1) {
    mockProjects[projectIndex].status = status;
  }
};
