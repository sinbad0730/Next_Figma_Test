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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 bg-white border-b">
        <div className="flex items-center h-full">
          <div className="bg-gradient-to-br from-[#B4C0C8] to-[#233645] bg-clip-text text-transparent text-3xl font-bold text-gray-600">
            RAISE
          </div>
          <div className="text-sm text-rose-600 ml-1">
            <p className="text-sm text-black">by</p>
            <p className="text-lg text-red">Matrix Consulting</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <Bell size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
              <Image
                src="/carlos.png?height=32&width=32"
                width={32}
                height={32}
                alt="Profile"
                className="object-cover"
              />
            </div>
            <div className="text-sm">
              <div className="font-medium text-[#415564]">Carlos Villalba</div>
              <div className="text-md font-bold text-black">Pricing</div>
            </div>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800">¡Hola Carlos!</h1>
          <p className="text-2xl text-gray-600">Mantén bajo control el precio y las promociones de tus productos</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-9 gap-4 mb-6">
          {/* Manage Prices Card */}
          <div className="col-span-2 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gestionar precios</h2>
            <div className="flex gap-2 text-black">
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-md hover:bg-gray-50 transition-colors">
                Lista
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-md hover:bg-gray-50 transition-colors">
                Promoción
              </button>
            </div>
          </div>

          {/* Search by Market Card */}
          <div className="col-span-4 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consultar por market</h2>
            <div className="flex flex-wrap gap-2 text-black">
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors">
                Jumbo
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors">
                Unimark
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors">
                Walmart
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors">
                TOTTUS
              </button>
            </div>
          </div>

          {/* Search by Product Card */}
          <div className="col-span-3 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Consultar por producto</h2>
            <div className="flex gap-2 text-black">
              <input
                type="text"
                placeholder="Buscar por SKU_ID"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 text-black"
              />
              <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors text-black">
                Buscar
              </button>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-15 gap-4 mb-6">
          {/* Sales Average Chart */}
          <div className="col-span-9 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Promedio de ventas</h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-rose-800"></div>
                  <span className="text-xs text-gray-600">Brutos</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <span className="text-xs text-gray-600">Netos</span>
                </div>
                <button className="flex items-center gap-1 text-xs text-gray-600 border border-gray-300 rounded px-2 py-1">
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

          {/* Profit Margin Chart */}
          <div className="col-span-6 bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Márgen total de ganancias</h2>
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

        {/* Key Value Items Section */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Key Value Items</h2>
            <button className="px-4 py-2 bg-rose-700 text-white rounded-[90px] w-30 text-sm hover:bg-rose-800 transition-colors">
              Ver Todos
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {Array(7)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex justify-center mb-2">
                    <div className="w-full h-full relative">
                      <Image
                        src="/bottle.png?height=128&width=64"
                        width={64}
                        height={128}
                        alt="Wine bottle"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="text-center text-black text-md font-bold">
                    <div className="font-medium">Dolores Reserva</div>
                    <div className="text-gray-600">Especial 70D082</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  )
}

