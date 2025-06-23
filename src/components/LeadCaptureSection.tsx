'use client';

import React, { useState } from 'react';
import { COLORS } from '@/constants/colors';

const LeadCaptureSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    monthlyRevenue: '',
    segment: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você implementaria o envio dos dados
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          
          {/* Coluna da Esquerda - Informações */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Precisa de uma Agência de Tráfego Pago?
            </h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12">
              Conheça uma solução mais completa com o <span className="text-primary">Weelo</span>
            </h3>

            {/* Processo Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    1. Preencha o formulário
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Envie suas informações de contato. Todos os seus dados estarão seguros, vamos cuidar bem deles.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    2. Receba uma ligação
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Em até 12 horas, um dos nossos especialistas fará uma ligação para agendar a reunião mais importante com você.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita - Formulário */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Qual é o seu nome e sobrenome?"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Qual seu e-mail corporativo?"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>

              {/* Empresa */}
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Qual o nome da sua empresa?"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>

              {/* Telefone */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMiIgZmlsbD0iIzAwOTczOSIvPgo8cGF0aCBkPSJNMTEuNSA5VjE1SDE0LjVWMTNIMTNWMTFIMTQuNVY5SDExLjVaIiBmaWxsPSIjRkZERjAwIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiIGZpbGw9IiMwMDJGNjAiLz4KPC9zdmc+" alt="BR" className="w-6 h-4" />
                  <span className="text-gray-500">+55</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Qual seu telefone?"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                  required
                />
              </div>

              {/* Faturamento Mensal */}
              <div>
                <select
                  name="monthlyRevenue"
                  value={formData.monthlyRevenue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors text-gray-700"
                  required
                >
                  <option value="">Qual o faturamento mensal da sua empresa?</option>
                  <option value="0-50k">Até R$ 50 mil</option>
                  <option value="50k-100k">R$ 50 mil - R$ 100 mil</option>
                  <option value="100k-500k">R$ 100 mil - R$ 500 mil</option>
                  <option value="500k-1M">R$ 500 mil - R$ 1 milhão</option>
                  <option value="1M+">Acima de R$ 1 milhão</option>
                </select>
              </div>

              {/* Segmento */}
              <div>
                <select
                  name="segment"
                  value={formData.segment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors text-gray-700"
                  required
                >
                  <option value="">Qual o seu segmento?</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="saude">Saúde e Bem-estar</option>
                  <option value="educacao">Educação</option>
                  <option value="servicos">Serviços</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="imobiliario">Imobiliário</option>
                  <option value="financeiro">Financeiro</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-lg text-lg uppercase transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                RECEBER MAIS INFORMAÇÕES
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;