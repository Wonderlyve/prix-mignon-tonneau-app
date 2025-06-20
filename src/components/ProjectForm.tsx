import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Lightbulb, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import emailjs from '@emailjs/browser';

const ProjectForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    title: '',
    description: '',
    type: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      type: value
    }));
  };

  const sendEmailToAdmin = async (projectData: any) => {
    const serviceId = 'service_r4chhyg';
    const templateId = 'template_g9mv0gs';
    const publicKey = 'ggseZ2j1UKl779xUq';

    const templateParams = {
      to_name: 'Admin',
      to_email: 'c.batuemi@gmail.com',
      from_name: projectData.full_name,
      from_email: projectData.email,
      reply_to: projectData.email,
      whatsapp: projectData.whatsapp || 'Non renseigné',
      project_title: projectData.title,
      project_description: projectData.description,
      project_type: projectData.type === 'website' ? 'Site web' : 'Application mobile',
      budget: `${projectData.budget}$`,
      submission_date: new Date().toLocaleDateString('fr-FR'),
      message: `Nouveau projet soumis par ${projectData.full_name}\n\nTitre: ${projectData.title}\nType: ${projectData.type === 'website' ? 'Site web' : 'Application mobile'}\nBudget: ${projectData.budget}$\nWhatsApp: ${projectData.whatsapp || 'Non renseigné'}\n\nDescription:\n${projectData.description}`
    };

    try {
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email envoyé à l\'admin avec succès:', result);
      return result;
    } catch (error) {
      console.error('Erreur envoi email admin:', error);
      // Ne pas faire échouer la soumission si l'email échoue
    }
  };

  const sendConfirmationEmailToUser = async (projectData: any) => {
    const serviceId = 'service_r4chhyg';
    const templateId = 'template_g9mv0gs';
    const publicKey = 'ggseZ2j1UKl779xUq';

    const templateParams = {
      to_name: projectData.full_name,
      to_email: projectData.email,
      from_name: 'TonAppTonPrix',
      from_email: 'noreply@tonappton prix.com',
      reply_to: 'c.batuemi@gmail.com',
      project_title: projectData.title,
      message: `Bonjour ${projectData.full_name},\n\nNous avons bien reçu votre projet "${projectData.title}". Notre équipe l'examinera attentivement et vous contactera sous 5-7 jours ouvrés.\n\nMerci pour votre confiance !\n\nL'équipe TonAppTonPrix`
    };

    try {
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email de confirmation envoyé à l\'utilisateur:', result);
      return result;
    } catch (error) {
      console.error('Erreur envoi email utilisateur:', error);
      // Ne pas faire échouer toute la soumission si l'email de confirmation échoue
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validation simple
      if (!formData.fullName || !formData.email || !formData.title || !formData.description || !formData.type || !formData.budget) {
        throw new Error('Veuillez remplir tous les champs obligatoires');
      }

      // Validation du budget minimum
      const budgetNumber = parseFloat(formData.budget);
      if (budgetNumber < 400) {
        throw new Error('Le budget minimum est de 400$');
      }

      // Sauvegarder dans Supabase
      const { data: newProject, error } = await supabase
        .from('projects')
        .insert({
          title: formData.title,
          description: formData.description,
          type: formData.type,
          budget: budgetNumber,
          full_name: formData.fullName,
          email: formData.email,
          whatsapp: formData.whatsapp || null
        })
        .select()
        .single();

      if (error) {
        console.error('Erreur Supabase:', error);
        throw new Error('Erreur lors de la sauvegarde du projet');
      }

      console.log('Nouveau projet sauvegardé:', newProject);

      // Envoyer l'email à l'admin
      await sendEmailToAdmin(newProject);
      
      // Envoyer l'email de confirmation à l'utilisateur
      await sendConfirmationEmailToUser(newProject);

      toast({
        title: "Projet soumis avec succès !",
        description: "Nous avons reçu votre projet et vous contacterons bientôt. Un email de confirmation vous a été envoyé.",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        whatsapp: '',
        title: '',
        description: '',
        type: '',
        budget: ''
      });

    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      toast({
        title: "Erreur lors de la soumission",
        description: error instanceof Error ? error.message : "Une erreur est survenue",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-xl border-0 rounded-3xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-royal-blue to-purple-dark text-white p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl md:text-3xl font-bold font-inter mb-2">
                Soumettez votre projet
              </CardTitle>
              <p className="text-sky-blue/90 text-base md:text-lg">
                Partagez votre vision et donnons-lui vie ensemble
              </p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-royal-blue font-medium">
                  Nom complet *
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Votre nom et prénom"
                  className="border-2 border-gray-200 focus:border-royal-blue rounded-xl py-3 px-4"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-royal-blue font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="votre.email@exemple.com"
                  className="border-2 border-gray-200 focus:border-royal-blue rounded-xl py-3 px-4"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-royal-blue font-medium">
                WhatsApp (optionnel)
              </Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder="+33 6 12 34 56 78"
                className="border-2 border-gray-200 focus:border-royal-blue rounded-xl py-3 px-4"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title" className="text-royal-blue font-medium">
                Titre du projet *
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Ex: Application de livraison éco-responsable"
                className="border-2 border-gray-200 focus:border-royal-blue rounded-xl py-3 px-4"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-royal-blue font-medium">
                Description du projet *
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités principales, cible, etc."
                className="border-2 border-gray-200 focus:border-royal-blue rounded-xl py-3 px-4 min-h-[120px]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label className="text-royal-blue font-medium">
                  Type de projet *
                </Label>
                <Select onValueChange={handleSelectChange} required>
                  <SelectTrigger className="border-2 border-gray-200 focus:border-royal-blue rounded-xl py-3 px-4">
                    <SelectValue placeholder="Sélectionnez le type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-lg">
                    <SelectItem value="website">Site web</SelectItem>
                    <SelectItem value="mobile">Application mobile</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-royal-blue font-medium">
                  Budget proposé ($) *
                </Label>
                <Input
                  id="budget"
                  name="budget"
                  type="number"
                  min="400"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="Ex: 1500"
                  className="border-2 border-gray-200 focus:border-royal-blue rounded-xl py-3 px-4"
                  required
                />
              </div>
            </div>

            <div className="bg-light-gray rounded-2xl p-4 md:p-6">
              <h3 className="font-semibold text-royal-blue mb-3 font-inter text-sm md:text-base">
                📋 Informations importantes
              </h3>
              <ul className="text-gray-600 space-y-2 text-xs md:text-sm">
                <li>• Budget minimum : 400$ pour un projet viable</li>
                <li>• Délai d'évaluation : 5-7 jours ouvrés</li>
                <li>• Nous vous contacterons par email pour discuter des détails</li>
                <li>• Toutes les informations restent confidentielles</li>
              </ul>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-royal-blue to-purple-dark hover:from-royal-blue/90 hover:to-purple-dark/90 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl text-base md:text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Soumission en cours..."
              ) : (
                <>
                  <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Soumettre mon idée
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectForm;
