
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Sparkles } from 'lucide-react';

interface ConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmationPopup = ({ isOpen, onClose }: ConfirmationPopupProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowContent(true), 100);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className={`w-full max-w-md transform transition-all duration-500 ${
        showContent ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
      }`}>
        <CardContent className="p-8 text-center">
          {/* Animation de félicitations */}
          <div className="relative mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-royal-blue to-sky-blue rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            {/* Particules animées */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute animate-ping">
                <Sparkles className="w-6 h-6 text-sky-blue opacity-75" style={{
                  animationDelay: '0s',
                  transform: 'translate(-20px, -20px)'
                }} />
              </div>
              <div className="absolute animate-ping">
                <Sparkles className="w-4 h-4 text-purple-dark opacity-75" style={{
                  animationDelay: '0.5s',
                  transform: 'translate(25px, -15px)'
                }} />
              </div>
              <div className="absolute animate-ping">
                <Sparkles className="w-5 h-5 text-royal-blue opacity-75" style={{
                  animationDelay: '1s',
                  transform: 'translate(-25px, 20px)'
                }} />
              </div>
              <div className="absolute animate-ping">
                <Sparkles className="w-3 h-3 text-sky-blue opacity-75" style={{
                  animationDelay: '1.5s',
                  transform: 'translate(20px, 25px)'
                }} />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-royal-blue mb-4 font-inter">
            🎉 Félicitations !
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Votre projet a été soumis avec succès ! Notre équipe l'examinera attentivement 
            et vous contactera sous <span className="font-semibold text-royal-blue">5-7 jours ouvrés</span>.
          </p>

          <div className="bg-gradient-to-r from-royal-blue/10 to-sky-blue/10 rounded-lg p-4 mb-6">
            <p className="text-sm text-royal-blue font-medium">
              💡 Conseil : Gardez un œil sur votre boîte mail (y compris les spams) pour notre réponse !
            </p>
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-royal-blue to-sky-blue hover:from-royal-blue/90 hover:to-sky-blue/90 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200"
          >
            Parfait, merci !
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfirmationPopup;
