
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import ConfirmationPopup from './ConfirmationPopup';
import { Send, User, Mail, Phone, DollarSign, FileText, Smartphone, Globe } from 'lucide-react';

const formSchema = z.object({
  title: z.string().min(5, 'Le titre doit contenir au moins 5 caractères'),
  description: z.string().min(20, 'La description doit contenir au moins 20 caractères'),
  type: z.enum(['website', 'mobile'], {
    required_error: 'Veuillez sélectionner le type de projet',
  }),
  budget: z.number().min(1, 'Veuillez entrer un budget'),
  fullName: z.string().min(2, 'Le nom complet est requis'),
  email: z.string().email('Email invalide'),
  whatsapp: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ProjectFormWithPopup = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      type: 'website',
      budget: 100,
      fullName: '',
      email: '',
      whatsapp: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('projects')
        .insert([
          {
            title: data.title,
            description: data.description,
            type: data.type,
            budget: data.budget,
            full_name: data.fullName,
            email: data.email,
            whatsapp: data.whatsapp || null,
          }
        ]);

      if (error) {
        throw error;
      }

      // Afficher la popup de confirmation
      setShowConfirmation(true);
      
      // Réinitialiser le formulaire
      form.reset();
      
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la soumission. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-royal-blue text-center font-inter">
            Détails de votre projet
          </CardTitle>
          <p className="text-gray-600 text-center">
            Partagez votre vision et obtenez un devis personnalisé
          </p>
        </CardHeader>
        
        <CardContent className="p-8">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Type de projet */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-royal-blue">
                Type de projet *
              </Label>
              <RadioGroup
                value={form.watch('type')}
                onValueChange={(value) => form.setValue('type', value as 'website' | 'mobile')}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:border-royal-blue/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="website" id="website" />
                  <Label htmlFor="website" className="flex items-center space-x-2 cursor-pointer">
                    <Globe className="w-5 h-5 text-royal-blue" />
                    <span>Site Web</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:border-royal-blue/50 transition-colors cursor-pointer">
                  <RadioGroupItem value="mobile" id="mobile" />
                  <Label htmlFor="mobile" className="flex items-center space-x-2 cursor-pointer">
                    <Smartphone className="w-5 h-5 text-royal-blue" />
                    <span>Application Mobile</span>
                  </Label>
                </div>
              </RadioGroup>
              {form.formState.errors.type && (
                <p className="text-red-500 text-sm">{form.formState.errors.type.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Informations du projet */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-royal-blue flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Informations du projet</span>
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-gray-700 font-medium">
                    Titre du projet *
                  </Label>
                  <Input
                    id="title"
                    {...form.register('title')}
                    placeholder="Ex: Site e-commerce pour ma boutique"
                    className="border-gray-300 focus:border-royal-blue focus:ring-royal-blue"
                  />
                  {form.formState.errors.title && (
                    <p className="text-red-500 text-sm">{form.formState.errors.title.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-gray-700 font-medium">
                    Description détaillée *
                  </Label>
                  <Textarea
                    id="description"
                    {...form.register('description')}
                    placeholder="Décrivez votre projet, vos objectifs, les fonctionnalités souhaitées..."
                    rows={6}
                    className="border-gray-300 focus:border-royal-blue focus:ring-royal-blue resize-none"
                  />
                  {form.formState.errors.description && (
                    <p className="text-red-500 text-sm">{form.formState.errors.description.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-gray-700 font-medium flex items-center space-x-1">
                    <DollarSign className="w-4 h-4" />
                    <span>Budget estimé ($) *</span>
                  </Label>
                  <Input
                    id="budget"
                    type="number"
                    min="1"
                    step="50"
                    {...form.register('budget', { valueAsNumber: true })}
                    className="border-gray-300 focus:border-royal-blue focus:ring-royal-blue"
                  />
                  {form.formState.errors.budget && (
                    <p className="text-red-500 text-sm">{form.formState.errors.budget.message}</p>
                  )}
                  <p className="text-sm text-gray-500">Aucun budget minimum requis</p>
                </div>
              </div>

              {/* Informations de contact */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-royal-blue flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Vos informations</span>
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-700 font-medium">
                    Nom complet *
                  </Label>
                  <Input
                    id="fullName"
                    {...form.register('fullName')}
                    placeholder="Votre nom et prénom"
                    className="border-gray-300 focus:border-royal-blue focus:ring-royal-blue"
                  />
                  {form.formState.errors.fullName && (
                    <p className="text-red-500 text-sm">{form.formState.errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium flex items-center space-x-1">
                    <Mail className="w-4 h-4" />
                    <span>Email *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register('email')}
                    placeholder="votre@email.com"
                    className="border-gray-300 focus:border-royal-blue focus:ring-royal-blue"
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-gray-700 font-medium flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>WhatsApp (optionnel)</span>
                  </Label>
                  <Input
                    id="whatsapp"
                    {...form.register('whatsapp')}
                    placeholder="+33 6 12 34 56 78"
                    className="border-gray-300 focus:border-royal-blue focus:ring-royal-blue"
                  />
                  <p className="text-sm text-gray-500">
                    Pour un contact plus rapide (optionnel)
                  </p>
                </div>

                <div className="bg-gradient-to-r from-royal-blue/10 to-sky-blue/10 rounded-lg p-4">
                  <p className="text-sm text-royal-blue">
                    <strong>Confidentialité garantie :</strong> Vos informations sont protégées et ne seront jamais partagées avec des tiers.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-semibold py-3 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-w-48"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Soumettre mon projet</span>
                  </div>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <ConfirmationPopup 
        isOpen={showConfirmation} 
        onClose={handleCloseConfirmation} 
      />
    </>
  );
};

export default ProjectFormWithPopup;
