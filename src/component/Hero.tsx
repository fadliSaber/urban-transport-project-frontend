import { Clock, MapPin, CreditCard } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://media.istockphoto.com/id/1371319562/fr/photo/bus-bleu-se-d%C3%A9pla%C3%A7ant-sur-la-route-en-ville-t%C3%B4t-le-matin.jpg?s=612x612&w=0&k=20&c=wg324Sky08zggsQGLKA4Qa-h_9MA7je4kOW__5iz_Ac=")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Your City, Your Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Experience seamless urban mobility with our integrated transport network.
              Connect to every corner of the city with comfort and convenience.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Plan Your Journey
              </button>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Live Updates
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white flex flex-col items-center">
              <Clock className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-200 text-center">Round-the-clock transportation services to meet your needs anytime.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white flex flex-col items-center">
              <MapPin className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Extensive Network</h3>
              <p className="text-gray-200 text-center">Comprehensive coverage with interconnected routes across the city.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-white flex flex-col items-center">
              <CreditCard className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Smart Payments</h3>
              <p className="text-gray-200 text-center">Contactless payment options for a seamless travel experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}