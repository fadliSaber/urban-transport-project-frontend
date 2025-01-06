import React, { useState } from 'react';
import { PlanCard } from './PlanCard';
import { PaymentForm } from './PaymentForm';

const SUBSCRIPTION_PLANS = [
  {
    id: 'basic',
    name: 'Basic Pass',
    price: 49,
    duration: 'month',
    features: [
      { text: 'Unlimited bus rides', included: true },
      { text: 'Peak hours access', included: true },
      { text: 'Mobile ticket', included: true },
      { text: 'Express routes', included: false },
      { text: 'Airport transfers', included: false },
    ],
  },
  {
    id: 'student',
    name: 'Student Pass',
    price: 29,
    duration: 'month',
    features: [
      { text: 'Unlimited bus rides', included: true },
      { text: 'Peak hours access', included: true },
      { text: 'Mobile ticket', included: true },
      { text: 'Student ID required', included: true },
      { text: 'Express routes', included: false },
    ],
    recommended: true,
  },
  {
    id: 'premium',
    name: 'Premium Pass',
    price: 89,
    duration: 'month',
    features: [
      { text: 'Unlimited bus rides', included: true },
      { text: 'Peak hours access', included: true },
      { text: 'Mobile ticket', included: true },
      { text: 'Express routes', included: true },
      { text: 'Airport transfers', included: true },
    ],
  },
];

export function ServicePage() {
  const [selectedPlan, setSelectedPlan] = useState<typeof SUBSCRIPTION_PLANS[0] | null>(null);

  const handlePaymentSubmit = (formData: any) => {
    console.log('Processing payment:', formData);
    // handle payment processing
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Travel Plan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your commuting needs. All plans include unlimited rides within their respective zones.
          </p>
        </div>

        {!selectedPlan ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUBSCRIPTION_PLANS.map((plan) => (
              <PlanCard
                key={plan.id}
                {...plan}
                onSelect={() => setSelectedPlan(plan)}
              />
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedPlan(null)}
              className="mb-6 text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              ← Back to plans
            </button>
            <PaymentForm
              amount={selectedPlan.price}
              planName={selectedPlan.name}
              onSubmit={handlePaymentSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
}