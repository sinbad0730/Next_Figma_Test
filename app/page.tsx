"use client"

import { useState } from "react"
import { Bell, ChevronDown } from "lucide-react"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import Image from "next/image"

const salesData = [
  { name: "ENE", bruto: 30, netos: 40 },
  { name: "FEB", bruto: 60, netos: 45 },
  { name: "MAR", bruto: 40, netos: 65 },
  { name: "ABR", bruto: 70, netos: 35 },
  { name: "MAY", bruto: 30, netos: 60 },
  { name: "JUN", bruto: 50, netos: 45 },
]

const marginData = [
  { name: "Ene", value: 150 },
  { name: "Feb", value: 200 },
  { name: "Mar", value: 180 },
  { name: "Abr", value: 220 },
  { name: "May", value: 150 },
  { name: "Jun", value: 100 },
  { name: "Jul", value: 120 },
  { name: "Ago", value: 180 },
  { name: "Sep", value: 160 },
  { name: "Oct", value: 170 },
  { name: "Nov", value: 190 },
  { name: "Dic", value: 230 },
]

export default function PricingDashboard() {
  const [timeframe, setTimeframe] = useState("6 meses")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white border-b shadow-sm backdrop-blur-sm bg-white/80">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 bg-clip-text text-transparent text-3xl font-bold">
            RAISE
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-slate-600">by</p>
            <p className="text-lg font-semibold text-indigo-600">Matrix Consulting</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="p-2.5 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
            <Bell size={20} />
          </button>
          <div className="flex items-center space-x-3 group">
            <div className="h-10 w-10 rounded-full ring-2 ring-slate-100 overflow-hidden">
              <Image
                src="/carlos.png?height=32&width=32"
                width={32}
                height={32}
                alt="Profile"
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-slate-700">Carlos Villalba</div>
              <div className="text-sm font-semibold text-slate-900">Pricing</div>
            </div>
            <ChevronDown size={16} className="text-slate-400 group-hover:text-slate-600" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">¡Hola Carlos!</h1>
          <p className="text-xl text-slate-600">Mantén bajo control el precio y las promociones de tus productos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-9 gap-6 mb-8">
          <div className="md:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Gestionar precios</h2>
            <div className="flex flex-col space-y-3">
              <button className="px-4 py-2.5 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors">
                Lista
              </button>
              <button className="px-4 py-2.5 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors">
                Promoción
              </button>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-slate-800">Promedio de ventas</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                    <span className="text-sm text-slate-600">Brutos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-slate-600">Netos</span>
                  </div>
                  <button className="flex items-center space-x-1 text-sm text-slate-600 border border-slate-200 rounded-lg px-3 py-1.5 hover:bg-slate-50">
                    {timeframe}
                    <ChevronDown size={14} />
                  </button>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{fontSize: 12, fill: '#666'}}
                      textAnchor="middle"
                      interval={0}
                      height={30}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false} 
                      ticks={[10, 50, 100]}
                      domain={[0, 100]}
                      tickFormatter={(value) => (value === 10 ? "10M" : value === 50 ? "50M" : value === 100 ? "100M" : "")}
                      tick={{fontSize: 12, fill: '#666'}}
                    />
                    <Line
                      type="monotone"
                      dataKey="bruto"
                      stroke="#881337"
                      strokeWidth={2.5}
                      dot={false}
                      activeDot={{ r: 6, fill: '#881337' }}
                    />
                    <Line
                      type="monotone" 
                      dataKey="netos"
                      stroke="#e11d48"
                      strokeWidth={2.5}
                      dot={false}
                      activeDot={{ r: 6, fill: '#e11d48' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                      }}
                      labelStyle={{fontSize: 12}}
                      itemStyle={{fontSize: 12}}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800 mb-6">Márgen total de ganancias</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={marginData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} ticks={[0, 100, 200, 300]} domain={[0, 300]} />
                    <Bar dataKey="value" fill="#e11d48" radius={[20, 20, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-slate-800">Key Value Items</h2>
            <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
              Ver Todos
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {Array(7).fill(0).map((_, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-center mb-3">
                  <div className="w-20 h-36 relative">
                    <Image
                      src="/placeholder.svg?height=128&width=64"
                      width={64}
                      height={128}
                      alt="Wine bottle"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-slate-800">Dolores Reserva</div>
                  <div className="text-sm text-slate-500">Especial 70D082</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

