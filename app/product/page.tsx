"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Bell, ChevronDown, Info } from "lucide-react"
import PriceModal from "../components/PriceModal"

export default function WinePricingDashboard() {
  const [activeTab, setActiveTab] = useState("list")
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-500">RAISE</span>
          <span className="ml-1 text-sm font-medium text-rose-600">Matrix Consulting</span>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-500" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="User"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div className="text-xs">
              <div>Carlos Villalta</div>
              <div className="text-gray-500">Pricing</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-4">
        <div className="border border-blue-400 rounded-md p-4">
          {/* Back Button */}
          <div className="flex items-center mb-4 text-blue-600">
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span className="text-sm">Volver</span>
          </div>

          {/* Product Title */}
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Dolores Reserva Especial 70D082</h1>

          {/* Price Buttons */}
          <div className="flex gap-2 mb-4">
            <button
              className={`rounded-md px-4 py-2 ${activeTab === "list" ? "bg-[#6D2240] text-white" : "bg-white text-gray-700 border"}`}
              onClick={() => {
                setActiveTab("list");
                setIsModalOpen(true);
              }}
            >
              Precio Lista
            </button>
            <button
              className={`rounded-md px-4 py-2 ${activeTab === "offer" ? "bg-[#6D2240] text-white" : "bg-white text-gray-700 border"}`}
              onClick={() => setActiveTab("offer")}
            >
              Precio Oferta
            </button>
          </div>

          {/* Product Info */}
          <div className="flex gap-6 mb-6">
            <div className="w-32">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4_1-15ShzDapkjiVkBwXZYcy5sNcjJVWyv.png"
                alt="Dolores Reserva Especial"
                width={120}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Market</div>
                  <select className="w-full border rounded-md p-1 text-sm">
                    <option>Walmart</option>
                  </select>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Seg. Pricing</div>
                  <div className="font-medium">KVI</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Elasticidad</div>
                  <div className="font-medium">-2.65</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Costo U. Promedio</div>
                  <div className="font-medium">$1.547</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border text-left"></th>
                  <th className="p-2 border text-center">Precio Lista</th>
                  <th className="p-2 border text-center">Precio Oferta</th>
                  <th className="p-2 border text-center">% Descuento</th>
                  <th colSpan={2} className="p-2 border text-center">
                    Ventas Netas
                  </th>
                  <th colSpan={3} className="p-2 border text-center">
                    Margen Unitario
                  </th>
                  <th colSpan={3} className="p-2 border text-center">
                    Margen de Explotación
                  </th>
                </tr>
                <tr className="bg-gray-100 text-xs">
                  <th className="p-2 border"></th>
                  <th className="p-2 border"></th>
                  <th className="p-2 border"></th>
                  <th className="p-2 border"></th>
                  <th className="p-2 border text-center">Unidades</th>
                  <th className="p-2 border text-center">Var. Filtro %</th>
                  <th className="p-2 border text-center">Diferencia $</th>
                  <th className="p-2 border text-center">Var. Filtro %</th>
                  <th className="p-2 border text-center">Var. Abs.</th>
                  <th className="p-2 border text-center">%</th>
                  <th className="p-2 border text-center">Var. Filtro %</th>
                  <th className="p-2 border text-center">Var. Abs.</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="p-2 border font-medium">Actual</td>
                  <td className="p-2 border text-center">$7,490</td>
                  <td className="p-2 border text-center">$7,390</td>
                  <td className="p-2 border text-center">1%</td>
                  <td className="p-2 border text-center">300</td>
                  <td className="p-2 border text-center"></td>
                  <td className="p-2 border text-center">0.2</td>
                  <td className="p-2 border text-center"></td>
                  <td className="p-2 border text-center"></td>
                  <td className="p-2 border text-center">22.62%</td>
                  <td className="p-2 border text-center"></td>
                  <td className="p-2 border text-center"></td>
                </tr>
                <tr>
                  <td className="p-2 border font-medium">Recomendado</td>
                  <td className="p-2 border text-center">$7,290</td>
                  <td className="p-2 border text-center">$6,490</td>
                  <td className="p-2 border text-center">11%</td>
                  <td className="p-2 border text-center">433</td>
                  <td className="p-2 border text-center">128.53</td>
                  <td className="p-2 border text-center">0.18</td>
                  <td className="p-2 border text-center">0.01</td>
                  <td className="p-2 border text-center">-0.03</td>
                  <td className="p-2 border text-center">13.00%</td>
                  <td className="p-2 border text-center">-9.63p.p.</td>
                  <td className="p-2 border text-center"></td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border font-medium">Simulación</td>
                  <td className="p-2 border text-center">$8,000</td>
                  <td className="p-2 border text-center">No Aplica</td>
                  <td className="p-2 border text-center">No Aplica</td>
                  <td className="p-2 border text-center">273</td>
                  <td className="p-2 border text-center">42.17%</td>
                  <td className="p-2 border text-center">0.14</td>
                  <td className="p-2 border text-center">7.38%</td>
                  <td className="p-2 border text-center">-18.92%</td>
                  <td className="p-2 border text-center">20.72%</td>
                  <td className="p-2 border text-center">-1.90p.p.</td>
                  <td className="p-2 border text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pricing Ranges */}
          <div className="grid grid-cols-[1fr_3fr_1fr] gap-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-700">Lógica de recomendación</div>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-center text-sm font-medium text-gray-700">Precios y rangos</div>
            <div className="text-right text-sm font-medium text-gray-700">Regla</div>
          </div>

          {/* Price Range Sliders */}
          <div className="space-y-4">
            {/* Current Price */}
            <div className="grid grid-cols-[1fr_3fr_1fr] gap-4 items-center">
              <div className="text-sm font-medium text-rose-600">Precio actual</div>
              <div className="relative h-8">
                <div className="absolute inset-0 border rounded-md"></div>
                <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-rose-600"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">$7,000</span>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Minimum Margin */}
            <div className="grid grid-cols-[1fr_3fr_1fr] gap-4 items-center">
              <div className="text-sm font-medium text-gray-700">Márgen mínimo</div>
              <div className="relative h-8">
                <div className="absolute inset-0 border rounded-md"></div>
                <div className="absolute top-0 bottom-0 right-1/3 left-1/2 bg-gradient-to-r from-rose-200 to-rose-300 rounded-md"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">$7,000 - Inf.</span>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Competitive Range */}
            <div className="grid grid-cols-[1fr_3fr_1fr] gap-4 items-center">
              <div className="text-sm font-medium text-gray-700">Rango Competitivo</div>
              <div className="relative h-8">
                <div className="absolute inset-0 border rounded-md"></div>
                <div className="absolute top-0 bottom-0 left-[45%] right-[35%] bg-gradient-to-r from-rose-200 to-rose-300 rounded-md"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">$6,000 - $8,000</span>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* H-V Relations Range */}
            <div className="grid grid-cols-[1fr_3fr_1fr] gap-4 items-center">
              <div className="text-sm font-medium text-gray-700">Rango relaciones H-V</div>
              <div className="relative h-8">
                <div className="absolute inset-0 border rounded-md"></div>
                <div className="absolute top-0 bottom-0 left-[45%] right-[35%] bg-gradient-to-r from-rose-200 to-rose-300 rounded-md"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">$6,000 - $8,000</span>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Solution Range */}
            <div className="grid grid-cols-[1fr_3fr_1fr] gap-4 items-center">
              <div className="text-sm font-medium text-rose-600">Rango solución</div>
              <div className="relative h-8">
                <div className="absolute inset-0 border rounded-md"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Sin rango factible</span>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Recommended Price */}
            <div className="grid grid-cols-[1fr_3fr_1fr] gap-4 items-center">
              <div className="text-sm font-medium text-rose-600">Precio recomendado</div>
              <div className="relative h-8">
                <div className="absolute inset-0 border rounded-md"></div>
                <div className="absolute top-0 bottom-0 left-[45%] w-0.5 bg-rose-600"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">$6,000</span>
                <Info className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Price Scale */}
          <div className="mt-8">
            <div className="relative h-8 w-full">
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                <span>$0</span>
                <span>$1,000</span>
                <span>$2,000</span>
                <span>$3,000</span>
                <span>$4,000</span>
                <span>$5,000</span>
                <span>$6,000</span>
                <span>$7,000</span>
                <span>$8,000</span>
                <span>$9,000</span>
                <span>$10,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Modal */}
      <PriceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

