'use client';

import { X } from 'lucide-react';
import Image from 'next/image';

interface PriceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProductInfo {
  name: string;
  currentPrice: string;
  recommendedPrice: string;
}

interface RelatedProduct {
  image: string;
  name: string;
  currentPrice: string;
  recommendedPrice: string;
}

const PriceModal = ({ isOpen, onClose }: PriceModalProps) => {
  if (!isOpen) return null;

  const mainProduct: ProductInfo = {
    name: "Dolores Reserva Especial 70D082",
    currentPrice: "$5.190",
    recommendedPrice: "$5.090",
  };

  const relatedProducts: RelatedProduct[] = [
    {
      image: "/wine-bottle.png",
      name: "Casillero Del Diablo Reserva Privada PC7870",
      currentPrice: "$7.190",
      recommendedPrice: "$6.090",
    },
    {
      image: "/wine-bottle.png",
      name: "Casillero Del Diablo Reserva Especial B0750",
      currentPrice: "$5.090",
      recommendedPrice: "$5.190",
    },
    {
      image: "/wine-bottle.png",
      name: "Casillero Del Diablo Reserva Especial 7C754",
      currentPrice: "$5.000",
      recommendedPrice: "$5.190",
    },
    {
      image: "/wine-bottle.png",
      name: "Casillero Del Diablo Reserva Estándar F5632",
      currentPrice: "$4.190",
      recommendedPrice: "$4.090",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[75%] max-w-4xl p-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">{mainProduct.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <h3 className="text-base font-medium mb-4">Rango relaciones H-V</h3>

        {/* H-V Relationship Diagram */}
        <div className="relative mb-6">
          {/* Top Product */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ProductCard product={relatedProducts[0]} />
          </div>

          {/* Center Row */}
          <div className="flex justify-between items-center my-16">
            {/* Left Product */}
            <div className="relative">
              <ProductCard product={relatedProducts[1]} />
              <div className="absolute top-1/2 right-0 w-full h-0.5 bg-gray-300"></div>
              <div className="absolute top-1/2 right-0 transform translate-y-[-50%] translate-x-[10px] text-xs text-gray-600">
                H Brecha 25%
              </div>
            </div>

            {/* Center Product (Main) */}
            <div className="relative border-2 border-rose-500 rounded-lg p-3 bg-white z-10">
              <div className="flex items-center gap-3">
                <Image src="/wine-bottle.png" alt={mainProduct.name} width={50} height={100} className="object-contain" />
                <div>
                  <p className="font-medium text-sm">{mainProduct.name}</p>
                  <div className="mt-1 space-y-0.5">
                    <div className="text-xs">
                      <span className="text-gray-500">Precio Actual:</span>
                      <span className="ml-1 font-medium">{mainProduct.currentPrice}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-500">Precio Recomendado:</span>
                      <span className="ml-1 font-medium">{mainProduct.recommendedPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Product */}
            <div className="relative">
              <ProductCard product={relatedProducts[2]} />
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300"></div>
              <div className="absolute top-1/2 left-0 transform translate-y-[-50%] translate-x-[-100px] text-xs text-gray-600">
                H Brecha 25%
              </div>
            </div>
          </div>

          {/* Bottom Product */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <ProductCard product={relatedProducts[3]} />
          </div>

          {/* Vertical Lines */}
          <div className="absolute top-0 left-1/2 h-full w-0.5 bg-gray-300 -translate-x-1/2"></div>

          {/* V Labels */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-[50px] text-xs text-gray-600">
            V Brecha 25%
          </div>
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-[50px] text-xs text-gray-600">
            V Brecha 25%
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-6">
          <h4 className="font-medium mb-1 text-sm">Información útil</h4>
          <p className="text-xs text-gray-600">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
            Maecenas eget condimentum velit, sit amet feugiat lectus.
          </p>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }: { product: RelatedProduct }) => {
  return (
    <div className="bg-white rounded-lg p-3 shadow-md w-[250px]">
      <div className="flex items-center gap-3">
        <Image src={product.image} alt={product.name} width={50} height={100} className="object-contain" />
        <div>
          <p className="font-medium text-xs">{product.name}</p>
          <div className="mt-1 space-y-0.5">
            <div className="text-xs">
              <span className="text-gray-500">Precio Actual:</span>
              <span className="ml-1 font-medium">{product.currentPrice}</span>
            </div>
            <div className="text-xs">
              <span className="text-gray-500">Precio Recomendado:</span>
              <span className="ml-1 font-medium">{product.recommendedPrice}</span>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-1 text-xs text-blue-600 hover:text-blue-800">Ver Info</button>
    </div>
  );
};

export default PriceModal;