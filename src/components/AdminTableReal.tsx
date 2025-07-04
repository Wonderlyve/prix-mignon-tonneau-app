
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import ProjectDetailsModal from './ProjectDetailsModal';
import { Eye, Mail, Phone, Calendar, Euro, Smartphone, Globe, CheckCircle, XCircle, Clock, User, FileText } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  budget: number;
  full_name: string;
  email: string;
  whatsapp: string | null;
  submitted_at: string;
  status: string;
}

const AdminTableReal = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('date');
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) {
        throw error;
      }

      setProjects(data || []);
    } catch (error) {
      console.error('Erreur lors du chargement des projets:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les projets",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (projectId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('projects')
        .update({ status: newStatus })
        .eq('id', projectId);

      if (error) {
        throw error;
      }

      setProjects(prev => 
        prev.map(project => 
          project.id === projectId 
            ? { ...project, status: newStatus }
            : project
        )
      );

      toast({
        title: "Statut mis à jour",
        description: `Le projet a été marqué comme ${newStatus === 'accepted' ? 'accepté' : newStatus === 'rejected' ? 'rejeté' : 'en attente'}`,
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le statut",
        variant: "destructive",
      });
    }
  };

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="border-yellow-500 text-yellow-700 bg-yellow-50"><Clock className="w-3 h-3 mr-1" />En attente</Badge>;
      case 'accepted':
        return <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50"><CheckCircle className="w-3 h-3 mr-1" />Accepté</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="border-red-500 text-red-700 bg-red-50"><XCircle className="w-3 h-3 mr-1" />Rejeté</Badge>;
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'website' ? <Globe className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />;
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.status === filter;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime();
      case 'budget':
        return b.budget - a.budget;
      case 'name':
        return a.full_name.localeCompare(b.full_name);
      default:
        return 0;
    }
  });

  const stats = {
    total: projects.length,
    pending: projects.filter(p => p.status === 'pending').length,
    accepted: projects.filter(p => p.status === 'accepted').length,
    rejected: projects.filter(p => p.status === 'rejected').length,
    totalBudget: projects.reduce((sum, p) => sum + p.budget, 0)
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des projets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card className="border-2 border-royal-blue/20">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-royal-blue">{stats.total}</div>
            <div className="text-gray-600">Total projets</div>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-yellow-200">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600">{stats.pending}</div>
            <div className="text-gray-600">En attente</div>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-green-200">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600">{stats.accepted}</div>
            <div className="text-gray-600">Acceptés</div>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-red-200">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-red-600">{stats.rejected}</div>
            <div className="text-gray-600">Rejetés</div>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-sky-blue/30">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-sky-blue">${(stats.totalBudget / 1000).toFixed(0)}k</div>
            <div className="text-gray-600">Budget total</div>
          </CardContent>
        </Card>
      </div>

      {/* Gestion des projets */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-royal-blue font-inter">
            Gestion des projets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filtrer par statut
              </label>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg">
                  <SelectItem value="all">Tous les projets</SelectItem>
                  <SelectItem value="pending">En attente</SelectItem>
                  <SelectItem value="accepted">Acceptés</SelectItem>
                  <SelectItem value="rejected">Rejetés</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trier par
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg">
                  <SelectItem value="date">Date de soumission</SelectItem>
                  <SelectItem value="budget">Budget</SelectItem>
                  <SelectItem value="name">Nom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Liste des projets */}
          <div className="space-y-4">
            {sortedProjects.map((project) => (
              <Card 
                key={project.id} 
                className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:border-royal-blue/50"
                onClick={() => handleViewDetails(project)}
              >
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                    {/* Projet info */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center space-x-2 mb-3">
                        {getTypeIcon(project.type)}
                        <h3 className="font-semibold text-royal-blue text-lg font-inter">
                          {project.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {project.type === 'website' ? 'Site Web' : 'App Mobile'}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {truncateText(project.description, 120)}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span className="font-medium">{project.full_name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(project.submitted_at).toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Contact détaillé */}
                    <div className="lg:col-span-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                          <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="text-gray-600 truncate">{project.email}</span>
                        </div>
                        {project.whatsapp && (
                          <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                            <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            <span className="text-gray-600">{project.whatsapp}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Budget et statut */}
                    <div className="lg:col-span-2">
                      <div className="space-y-3">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1 mb-1">
                            <Euro className="w-4 h-4 text-green-600" />
                            <span className="font-bold text-green-600 text-xl">
                              ${project.budget.toLocaleString()}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500">Budget proposé</div>
                        </div>
                        <div className="text-center">
                          {getStatusBadge(project.status)}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="lg:col-span-2">
                      <div className="space-y-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewDetails(project);
                          }}
                          className="w-full border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Voir détails
                        </Button>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusChange(project.id, 'accepted');
                            }}
                            className="flex-1 border-green-500 text-green-700 hover:bg-green-50"
                            disabled={project.status === 'accepted'}
                          >
                            <CheckCircle className="w-3 h-3" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleStatusChange(project.id, 'rejected');
                            }}
                            className="flex-1 border-red-500 text-red-700 hover:bg-red-50"
                            disabled={project.status === 'rejected'}
                          >
                            <XCircle className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedProjects.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Aucun projet trouvé avec ces filtres</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Modal des détails */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default AdminTableReal;
