import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { AuthCard } from './AuthCard';
import { InputField } from './InputField';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function login(email: string, password: string) { };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <AuthCard title="Sign in to MetroConnect">
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
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

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="mt-0.5 w-4 h-4"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>


                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border-transparent text-white bg-blue-600 hover:bg-blue-700"
                >
                    Sign in
                </button>

                <div className="text-center">
                    <span className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                            Sign up
                        </a>
                    </span>
                </div>
            </form>
        </AuthCard>
    );
}