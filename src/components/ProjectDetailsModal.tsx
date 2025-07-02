
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Euro, 
  Mail, 
  Phone, 
  User, 
  FileText, 
  Smartphone, 
  Globe, 
  CheckCircle, 
  XCircle, 
  Clock,
  Copy
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusChange: (projectId: string, status: string) => void;
}

const ProjectDetailsModal = ({ project, isOpen, onClose, onStatusChange }: ProjectDetailsModalProps) => {
  const { toast } = useToast();

  if (!project) return null;

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
    return type === 'website' ? <Globe className="w-5 h-5" /> : <Smartphone className="w-5 h-5" />;
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copié !",
      description: `${label} copié dans le presse-papiers`,
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3 text-2xl font-bold text-royal-blue">
            {getTypeIcon(project.type)}
            <span>{project.title}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Statut et actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-600">Statut :</span>
              {getStatusBadge(project.status)}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onStatusChange(project.id, 'accepted')}
                className="border-green-500 text-green-700 hover:bg-green-50"
                disabled={project.status === 'accepted'}
              >
                <CheckCircle className="w-4 h-4 mr-1" />
                Accepter
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onStatusChange(project.id, 'rejected')}
                className="border-red-500 text-red-700 hover:bg-red-50"
                disabled={project.status === 'rejected'}
              >
                <XCircle className="w-4 h-4 mr-1" />
                Rejeter
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onStatusChange(project.id, 'pending')}
                className="border-yellow-500 text-yellow-700 hover:bg-yellow-50"
                disabled={project.status === 'pending'}
              >
                <Clock className="w-4 h-4 mr-1" />
                En attente
              </Button>
            </div>
          </div>

          {/* Informations du client */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-royal-blue flex items-center">
                <User className="w-5 h-5 mr-2" />
                Informations du client
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="font-medium">Nom complet :</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{project.full_name}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(project.full_name, 'Nom')}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="font-medium">Email :</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{project.email}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(project.email, 'Email')}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                {project.whatsapp && (
                  <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">WhatsApp :</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>{project.whatsapp}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(project.whatsapp!, 'WhatsApp')}
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-royal-blue flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Détails du projet
              </h3>
              
              <div className="space-y-3">
                <div className="p-3 bg-white border rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    {getTypeIcon(project.type)}
                    <span className="font-medium">Type :</span>
                    <span className="capitalize">{project.type === 'website' ? 'Site Web' : 'Application Mobile'}</span>
                  </div>
                </div>

                <div className="p-3 bg-white border rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Euro className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Budget :</span>
                    <span className="font-semibold text-green-600 text-lg">
                      ${project.budget.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-white border rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="font-medium">Soumis le :</span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {formatDate(project.submitted_at)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Description complète */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-royal-blue flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Description du projet
            </h3>
            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-royal-blue">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>
            </div>
          </div>

          {/* ID du projet pour référence */}
          <div className="text-xs text-gray-400 text-center">
            ID du projet : {project.id}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsModal;
