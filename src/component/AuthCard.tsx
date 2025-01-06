import React from 'react';

type AuthCardProps = {
  children: React.ReactNode;
  title: string;
};

export function AuthCard({ children, title }: AuthCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" style={{
        backgroundImage: 'url("https://media.istockphoto.com/id/1371319562/fr/photo/bus-bleu-se-d%C3%A9pla%C3%A7ant-sur-la-route-en-ville-t%C3%B4t-le-matin.jpg?s=612x612&w=0&k=20&c=wg324Sky08zggsQGLKA4Qa-h_9MA7je4kOW__5iz_Ac=")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
      <div className="max-w-md space-y-8 bg-white bg-opacity-80 p-8 rounded-xl shadow-lg">
        <h2 className="text-center text-3xl font-bold text-gray-900">{title}</h2>
        {children}
      </div>
    </div>
  );
}