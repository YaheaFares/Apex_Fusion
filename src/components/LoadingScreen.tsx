import { Zap } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <Zap className="w-20 h-20 text-cyan-400 mx-auto mb-6 animate-pulse" />
          <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-50 animate-pulse"></div>
        </div>
        <h1 className="text-5xl font-bold text-white mb-4 tracking-wider animate-fade-in">
          APEX FUSION
        </h1>
        <div className="flex space-x-2 justify-center">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
