import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { AuthCard } from './AuthCard';
import { InputField } from './InputField';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function register(name: string, email: string, password: string) {

  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(name, email, password);
  };

  return (
    <AuthCard title="Create your account">
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex items-center">
            <User className="mt-5 h-5 w-5 text-gray-400 mr-2" />
            <InputField
              label="Full name"
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <Mail className="mt-5 h-5 w-5 text-gray-400 mr-2" />
            <InputField
              label="Email address"
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center">
            <Lock className="mt-5 h-5 w-5 text-gray-400 mr-2" />
            <InputField
              label="Password"
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I agree to the{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Privacy Policy
            </a>
          </label>
        </div>


        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border-transparent text-white bg-blue-600 hover:bg-blue-700"
        >
          Create account
        </button>

        <div className="text-center">
          <span className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </a>
          </span>
        </div>
      </form>
    </AuthCard>
  );
}