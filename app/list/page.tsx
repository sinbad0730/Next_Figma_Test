"use client"

import { useState } from "react"
import { BellOutlined, DownOutlined, CloseOutlined, CaretUpOutlined } from "@ant-design/icons"
import { Bell, ChevronDown, ChevronRight, X } from "lucide-react"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import Image from "next/image"
interface ScenarioData {
  key: string;
  sku_id: string;
  market: string;
  categoria: string;
  marca: string;
  segPricing: string;
  precioLista: string;
  precioOferta: string;
  costoUnitario: string;
  cantPrecioLista: string;
  cantPrecioOferta: string;
  ventasSell: string;
}

export default function PricingDashboard() {
  const [activeTab, setActiveTab] = useState("1")

  // Comparison table data
  const comparisonData = [
    {
      key: "1",
      type: "Actual",
      ventasNetas: "300",
      diferencia: "",
      filtroPct: "",
      volumen: "0.2",
      diferenciaVol: "",
      filtroPctVol: "-0.03",
      margenExplotacion: "22.52%",
      margenDif: "(0 p.p.)",
      margenExplotacionAbs: "60",
      margenAbsDif: "",
      margenAbsFiltro: "",
    },
    {
      key: "2", 
      type: "Recomendado",
      ventasNetas: "433",
      diferencia: "133.53",
      filtroPct: "-31.37",
      volumen: "0.19",
      diferenciaVol: "0.01",
      filtroPctVol: "-0.03",
      margenExplotacion: "13.05%",
      margenDif: "-9.60p.p.",
      margenExplotacionAbs: "56",
      margenAbsDif: "-13",
      margenAbsFiltro: "-12",
    },
    {
      key: "3",
      type: "Simulación",
      ventasNetas: "273",
      diferencia: "42.17%",
      filtroPct: "-10.29%",
      volumen: "0.14",
      diferenciaVol: "7.39%",
      filtroPctVol: "-16.00%",
      margenExplotacion: "20.72%",
      margenDif: "-1.80p.p.",
      margenExplotacionAbs: "57",
      margenAbsDif: "-18.32%",
      margenAbsFiltro: "-17.64%",
    },
  ]

  // Product table data
  const productData = [
    {
      key: "1",
      selected: false,
      sku_id: "Dalmata Reserva Especial 750082",
      market: "Walmart",
      categoria: "Piscoandor",
      marca: "Piscoandor", 
      segPricing: "Piscoandor",
      precioActual: "$2,965",
      cantidadActual: "$2,800",
      precioRecomendado: "$2,965",
      cantidadRecomendada: "$2,800",
      precioSimulacion: "12,590",
      cantidadSimulacion: "",
    },
    // ... rest of product data
  ]

  // Scenario data
  const scenarioData = [
    {
      key: "1",
      sku_id: "Dalmata Reserva Especial 750082",
      market: "Walmart",
      categoria: "Piscoandor",
      marca: "Piscoandor",
      segPricing: "Piscoandor",
      precioLista: "$2,965",
      precioOferta: "$2,500",
      costoUnitario: "$1,400",
      cantPrecioLista: "125,500",
      cantPrecioOferta: "160,800",
      ventasSell: "$3,585",
    },
    // ... rest of scenario data
  ]

  return (
    <div className="min-h-screen bg-white">
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

      <main className="p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Gestión de precios</h1>
          <p className="text-sm text-gray-600">La selección realizada impactará en los resultados de la simulación</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-[#8B1E3F] text-white rounded-md">Precio Lista</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md">Precio Oferta</button>
        </div>

        {/* Simulator Section */}
        <div className="border rounded-md mb-6">
          <div className="p-4 border-b">
            <h2 className="text-lg font-bold text-gray-800">Simulador de Impacto</h2>
            <p className="text-xs text-gray-600">Horizonte de tiempo para cálculo/ simulación de métricas: 1 Año</p>
          </div>

          {/* Metrics Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-xs">
                  <th className="p-2 border-r border-b"></th>
                  <th className="p-2 border-r border-b text-center" colSpan={3}>
                    Ventas Netas
                    <br />
                    <span className="text-xs font-normal">Millones CLP</span>
                  </th>
                  <th className="p-2 border-r border-b text-center" colSpan={3}>
                    Volumen
                    <br />
                    <span className="text-xs font-normal">Millones Unidades</span>
                  </th>
                  <th className="p-2 border-r border-b text-center" colSpan={3}>
                    Margen de Explotación
                    <br />
                    <span className="text-xs font-normal">Promedio</span>
                  </th>
                  <th className="p-2 border-b text-center" colSpan={3}>
                    Margen de Explotación
                    <br />
                    <span className="text-xs font-normal">Absoluto $</span>
                  </th>
                </tr>
                <tr className="bg-gray-50 text-gray-600 text-xs">
                  <th className="p-2 border-r"></th>
                  <th className="p-2 border-r">Valor $</th>
                  <th className="p-2 border-r">Diferencia $</th>
                  <th className="p-2 border-r">Var. Filtro %</th>
                  <th className="p-2 border-r">Valor</th>
                  <th className="p-2 border-r">Diferencia</th>
                  <th className="p-2 border-r">Var. Filtro %</th>
                  <th className="p-2 border-r">Valor %</th>
                  <th className="p-2 border-r">Dif. (p.p.)</th>
                  <th className="p-2 border-r">Valor $</th>
                  <th className="p-2 border-r">Diferencia $</th>
                  <th className="p-2">Var. Filtro %</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b">
                  <td className="p-2 border-r font-medium">Actual</td>
                  <td className="p-2 border-r text-right">300</td>
                  <td className="p-2 border-r text-right">-</td>
                  <td className="p-2 border-r text-right">-</td>
                  <td className="p-2 border-r text-right">0.2</td>
                  <td className="p-2 border-r text-right">-</td>
                  <td className="p-2 border-r text-right">-</td>
                  <td className="p-2 border-r text-right">22.62%</td>
                  <td className="p-2 border-r text-right">-</td>
                  <td className="p-2 border-r text-right">69</td>
                  <td className="p-2 border-r text-right">-</td>
                  <td className="p-2 text-right">-</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 border-r font-medium">Recomendado</td>
                  <td className="p-2 border-r text-right">433</td>
                  <td className="p-2 border-r text-right">133.53</td>
                  <td className="p-2 border-r text-right">+31.37</td>
                  <td className="p-2 border-r text-right">0.19</td>
                  <td className="p-2 border-r text-right">0.01</td>
                  <td className="p-2 border-r text-right">-0.03</td>
                  <td className="p-2 border-r text-right">13.05%</td>
                  <td className="p-2 border-r text-right">-9.6(p.p.)</td>
                  <td className="p-2 border-r text-right">56</td>
                  <td className="p-2 border-r text-right">-13</td>
                  <td className="p-2 text-right">-12</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 border-r font-medium">Simulación</td>
                  <td className="p-2 border-r text-right">273</td>
                  <td className="p-2 border-r text-right">-42.17%</td>
                  <td className="p-2 border-r text-right">-10.29%</td>
                  <td className="p-2 border-r text-right">0.14</td>
                  <td className="p-2 border-r text-right">7.39%</td>
                  <td className="p-2 border-r text-right">-16.02%</td>
                  <td className="p-2 border-r text-right">20.72%</td>
                  <td className="p-2 border-r text-right">-1.9(p.p.)</td>
                  <td className="p-2 border-r text-right">57</td>
                  <td className="p-2 border-r text-right">-18.32%</td>
                  <td className="p-2 text-right">-17.64%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Filters */}
          <div className="p-4 flex flex-wrap gap-3">
            <div className="relative">
              <select className="appearance-none border rounded-md px-3 py-1.5 pr-8 text-sm">
                <option>Market</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <div className="relative">
              <select className="appearance-none border rounded-md px-3 py-1.5 pr-8 text-sm">
                <option>Categoría</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <div className="relative">
              <select className="appearance-none border rounded-md px-3 py-1.5 pr-8 text-sm">
                <option>Marca</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <div className="relative">
              <select className="appearance-none border rounded-md px-3 py-1.5 pr-8 text-sm">
                <option>Segmento</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <div className="relative">
              <select className="appearance-none border rounded-md px-3 py-1.5 pr-8 text-sm">
                <option>SKU_ID</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <div className="relative">
              <select className="appearance-none border rounded-md px-3 py-1.5 pr-8 text-sm">
                <option>Estado</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <button className="border rounded-md px-3 py-1.5 text-sm">Eliminar filtros</button>
          </div>

          {/* Applied Filters */}
          <div className="px-4 pb-4 flex flex-wrap gap-2">
            <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 text-xs">
              <span>Market</span>
              <X className="ml-1 w-3 h-3 text-gray-500" />
            </div>
            <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 text-xs">
              <span>Categoría</span>
              <X className="ml-1 w-3 h-3 text-gray-500" />
            </div>
            <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 text-xs">
              <span>Marca</span>
              <X className="ml-1 w-3 h-3 text-gray-500" />
            </div>
            <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 text-xs">
              <span>Segmento</span>
              <X className="ml-1 w-3 h-3 text-gray-500" />
            </div>
            <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 text-xs">
              <span>SKU_ID</span>
              <X className="ml-1 w-3 h-3 text-gray-500" />
            </div>
            <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 text-xs">
              <span>Estado</span>
              <X className="ml-1 w-3 h-3 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-xs">
                <th className="p-2 border-r border-b w-8"></th>
                <th className="p-2 border-r border-b text-left">SKU_ID</th>
                <th className="p-2 border-r border-b text-left">Market</th>
                <th className="p-2 border-r border-b text-left">Categoría</th>
                <th className="p-2 border-r border-b text-left">Marca</th>
                <th className="p-2 border-r border-b text-left">Seg. Pricing</th>
                <th className="p-2 border-r border-b text-right">Precio</th>
                <th className="p-2 border-r border-b text-right">Cantidad</th>
                <th className="p-2 border-r border-b text-right">Precio</th>
                <th className="p-2 border-r border-b text-right">Cantidad</th>
                <th className="p-2 border-r border-b text-right">Precio</th>
                <th className="p-2 border-b text-right">Cantidad</th>
              </tr>
              <tr className="bg-gray-50 text-gray-600 text-xs">
                <th className="p-2 border-r"></th>
                <th className="p-2 border-r"></th>
                <th className="p-2 border-r"></th>
                <th className="p-2 border-r"></th>
                <th className="p-2 border-r"></th>
                <th className="p-2 border-r"></th>
                <th className="p-2 border-r text-center">Actual</th>
                <th className="p-2 border-r text-center"></th>
                <th className="p-2 border-r text-center">Recomendado</th>
                <th className="p-2 border-r text-center"></th>
                <th className="p-2 border-r text-center">Simulación</th>
                <th className="p-2 text-center"></th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {[
                {
                  id: "700082",
                  name: "Dolores Reserva Especial",
                  market: "Walmart",
                  category: "Piscowhisky",
                  brand: "Piscowhisky",
                  segment: "Piscowhisky",
                  price1: "$2,965",
                  qty1: "$2,800",
                  price2: "$2,965",
                  qty2: "$2,800",
                  price3: "12,590",
                  qty3: "",
                },
                {
                  id: "500059",
                  name: "Cielo Gold Label",
                  market: "Target",
                  category: "Piscowhisky",
                  brand: "Piscowhisky",
                  segment: "Piscowhisky",
                  price1: "$2,990",
                  qty1: "$2,800",
                  price2: "$2,990",
                  qty2: "$2,800",
                  price3: "12,590",
                  qty3: "",
                },
                {
                  id: "600012",
                  name: "Montes Alpha",
                  market: "Costco",
                  category: "Piscowhisky",
                  brand: "Piscowhisky",
                  segment: "Piscowhisky",
                  price1: "$3,120",
                  qty1: "$3,000",
                  price2: "$3,120",
                  qty2: "$3,000",
                  price3: "12,590",
                  qty3: "",
                },
                {
                  id: "500025",
                  name: "Animas Reales",
                  market: "Kroger",
                  category: "Piscowhisky",
                  brand: "Piscowhisky",
                  segment: "Piscowhisky",
                  price1: "$1,590",
                  qty1: "$1,400",
                  price2: "$1,590",
                  qty2: "$1,400",
                  price3: "12,590",
                  qty3: "",
                },
                {
                  id: "400045",
                  name: "Casa Noble Anejo",
                  market: "Safeway",
                  category: "Piscowhisky",
                  brand: "Piscowhisky",
                  segment: "Piscowhisky",
                  price1: "$2,400",
                  qty1: "$2,300",
                  price2: "$2,400",
                  qty2: "$2,300",
                  price3: "12,590",
                  qty3: "",
                },
                {
                  id: "800086",
                  name: "Carmen Gran Reserva",
                  market: "Trader Joe's",
                  category: "Piscowhisky",
                  brand: "Piscowhisky",
                  segment: "Piscowhisky",
                  price1: "$4,200",
                  qty1: "$4,000",
                  price2: "$4,200",
                  qty2: "$4,000",
                  price3: "12,590",
                  qty3: "",
                },
                {
                  id: "700078",
                  name: "La Crema Sonoma Coast",
                  market: "Publix",
                  category: "Piscowhisky",
                  brand: "Piscowhisky",
                  segment: "Piscowhisky",
                  price1: "$3,600",
                  qty1: "$3,400",
                  price2: "$3,600",
                  qty2: "$3,400",
                  price3: "12,590",
                  qty3: "",
                },
                {
                  id: "400061",
                  name: "Bodega Norton Reserva",
                  market: "Albertsons",
                  category: "Piscowhisky",
                  brand: "Piscowhisky",
                  segment: "Piscowhisky",
                  price1: "$2,750",
                  qty1: "$2,600",
                  price2: "$2,750",
                  qty2: "$2,600",
                  price3: "12,590",
                  qty3: "",
                },
                {
                  id: "600098",
                  name: "Finca La Anita",
                  market: "Meijer",
                  category: "Piscowhisky",
                  brand: "Piscowhisky",
                  segment: "Piscowhisky",
                  price1: "$3,200",
                  qty1: "$3,000",
                  price2: "$3,200",
                  qty2: "$3,000",
                  price3: "12,590",
                  qty3: "",
                },
                {
                  id: "800111",
                  name: "Trapiche Medalla",
                  market: "Giant Eagle",
                  category: "Piscowhisky",
                  brand: "Piscowhisky",
                  segment: "Piscowhisky",
                  price1: "$3,750",
                  qty1: "$3,500",
                  price2: "$3,750",
                  qty2: "$3,500",
                  price3: "12,590",
                  qty3: "",
                },
              ].map((item, index) => (
                <tr key={index} className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <td className="p-2 border-r text-center">
                    <input type="checkbox" className="h-4 w-4" />
                  </td>
                  <td className="p-2 border-r flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-gray-500" />
                    <span>{item.id}</span>
                  </td>
                  <td className="p-2 border-r">{item.market}</td>
                  <td className="p-2 border-r">{item.category}</td>
                  <td className="p-2 border-r">{item.brand}</td>
                  <td className="p-2 border-r">{item.segment}</td>
                  <td className="p-2 border-r text-right">{item.price1}</td>
                  <td className="p-2 border-r text-right">{item.qty1}</td>
                  <td className="p-2 border-r text-right">{item.price2}</td>
                  <td className="p-2 border-r text-right">{item.qty2}</td>
                  <td className="p-2 border-r text-right">{item.price3}</td>
                  <td className="p-2 text-right">{item.qty3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Scenario Data */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">Datos por escenario</h2>

          {/* Tabs */}
          <div className="flex mb-4">
            <button
              className={`flex-1 py-2 text-center ${activeTab === "actual" ? "bg-[#8B1E3F] text-white" : "bg-white border border-gray-300 text-gray-700"}`}
              onClick={() => setActiveTab("actual")}
            >
              Escenario Actual
            </button>
            <button
              className={`flex-1 py-2 text-center ${activeTab === "recomendacion" ? "bg-[#8B1E3F] text-white" : "bg-white border border-gray-300 text-gray-700"}`}
              onClick={() => setActiveTab("recomendacion")}
            >
              Recomendación
            </button>
            <button
              className={`flex-1 py-2 text-center ${activeTab === "simulacion" ? "bg-[#8B1E3F] text-white" : "bg-white border border-gray-300 text-gray-700"}`}
              onClick={() => setActiveTab("simulacion")}
            >
              Simulación
            </button>
          </div>

          {/* Scenario Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-xs">
                  <th className="p-2 border-r border-b">SKU_ID</th>
                  <th className="p-2 border-r border-b text-left">Market</th>
                  <th className="p-2 border-r border-b text-left">Categoría</th>
                  <th className="p-2 border-r border-b text-left">Marca</th>
                  <th className="p-2 border-r border-b text-left">Seg. Pricing</th>
                  <th className="p-2 border-r border-b text-right">Precio Lista</th>
                  <th className="p-2 border-r border-b text-right">Precio Oferta</th>
                  <th className="p-2 border-r border-b text-right">Coste U. Promedio</th>
                  <th className="p-2 border-r border-b text-right">Cant. Precio Lista</th>
                  <th className="p-2 border-r border-b text-right">Cant. Precio Oferta</th>
                  <th className="p-2 border-b text-right">Ventas Sell</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {[
                  {
                    id: "700082",
                    name: "Dolores Reserva Especial",
                    market: "Walmart",
                    category: "Piscowhisky",
                    brand: "Piscowhisky",
                    segment: "Piscowhisky",
                    price1: "$2,965",
                    price2: "$2,500",
                    cost: "$1,600",
                    qty1: "35,500",
                    qty2: "96,000",
                    sales: "$3,985",
                  },
                  {
                    id: "500059",
                    name: "Cielo Gold Label",
                    market: "Target",
                    category: "Piscowhisky",
                    brand: "Piscowhisky",
                    segment: "Piscowhisky",
                    price1: "$2,990",
                    price2: "$2,800",
                    cost: "$1,600",
                    qty1: "60,000",
                    qty2: "50,000",
                    sales: "$3,200",
                  },
                  {
                    id: "400045",
                    name: "Sierra Select",
                    market: "Costco",
                    category: "Piscowhisky",
                    brand: "Piscowhisky",
                    segment: "Piscowhisky",
                    price1: "$2,700",
                    price2: "$1,600",
                    cost: "$1,200",
                    qty1: "75,000",
                    qty2: "75,000",
                    sales: "$1,750",
                  },
                  {
                    id: "500034",
                    name: "Gran Reserva",
                    market: "Kroger",
                    category: "Piscowhisky",
                    brand: "Piscowhisky",
                    segment: "Piscowhisky",
                    price1: "$2,600",
                    price2: "$2,000",
                    cost: "$1,300",
                    qty1: "60,000",
                    qty2: "60,000",
                    sales: "$2,200",
                  },
                  {
                    id: "200013",
                    name: "Nouveau Classic",
                    market: "Safeway",
                    category: "Piscowhisky",
                    brand: "Piscowhisky",
                    segment: "Piscowhisky",
                    price1: "$2,400",
                    price2: "$1,700",
                    cost: "$1,400",
                    qty1: "65,000",
                    qty2: "50,000",
                    sales: "$1,950",
                  },
                  {
                    id: "100219",
                    name: "Valentino Premium",
                    market: "Meijer",
                    category: "Piscowhisky",
                    brand: "Piscowhisky",
                    segment: "Piscowhisky",
                    price1: "$2,350",
                    price2: "$2,300",
                    cost: "$1,800",
                    qty1: "95,000",
                    qty2: "100,000",
                    sales: "$2,750",
                  },
                  {
                    id: "600022",
                    name: "Heritage Select",
                    market: "Aldi",
                    category: "Piscowhisky",
                    brand: "Piscowhisky",
                    segment: "Piscowhisky",
                    price1: "$2,200",
                    price2: "$2,000",
                    cost: "$1,700",
                    qty1: "50,000",
                    qty2: "55,000",
                    sales: "$2,400",
                  },
                  {
                    id: "600065",
                    name: "Epicurean Choice",
                    market: "Walgreens",
                    category: "Piscowhisky",
                    brand: "Piscowhisky",
                    segment: "Piscowhisky",
                    price1: "$2,100",
                    price2: "$2,000",
                    cost: "$2,000",
                    qty1: "40,000",
                    qty2: "45,000",
                    sales: "$3,600",
                  },
                  {
                    id: "900978",
                    name: "Artisan Selected",
                    market: "Sam's Club",
                    category: "Piscowhisky",
                    brand: "Piscowhisky",
                    segment: "Piscowhisky",
                    price1: "$1,900",
                    price2: "$2,400",
                    cost: "$1,900",
                    qty1: "65,000",
                    qty2: "70,000",
                    sales: "$2,800",
                  },
                  {
                    id: "100080",
                    name: "Grand Reserve",
                    market: "Publix",
                    category: "Piscowhisky",
                    brand: "Piscowhisky",
                    segment: "Piscowhisky",
                    price1: "$1,100",
                    price2: "$3,600",
                    cost: "$2,300",
                    qty1: "30,000",
                    qty2: "35,000",
                    sales: "$4,100",
                  },
                ].map((item, index) => (
                  <tr key={index} className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="p-2 border-r flex items-center gap-1">
                      <ChevronRight className="w-3 h-3 text-gray-500" />
                      <span>{item.id}</span>
                    </td>
                    <td className="p-2 border-r">{item.market}</td>
                    <td className="p-2 border-r">{item.category}</td>
                    <td className="p-2 border-r">{item.brand}</td>
                    <td className="p-2 border-r">{item.segment}</td>
                    <td className="p-2 border-r text-right">{item.price1}</td>
                    <td className="p-2 border-r text-right">{item.price2}</td>
                    <td className="p-2 border-r text-right">{item.cost}</td>
                    <td className="p-2 border-r text-right">{item.qty1}</td>
                    <td className="p-2 border-r text-right">{item.qty2}</td>
                    <td className="p-2 text-right">{item.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
        </div>
  )
}
